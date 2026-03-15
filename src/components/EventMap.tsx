import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { EventItem } from "@/lib/eventStore";

interface EventMapProps {
  events: EventItem[];
  selectedEventId: string | null;
}

const createIcon = (color: string) =>
  L.divIcon({
    className: "",
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -42],
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 24 36">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="${color}" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <circle cx="12" cy="12" r="5" fill="rgba(0,0,0,0.3)"/>
    </svg>`,
  });

const defaultIcon = createIcon("#b91c1c");
const selectedIcon = createIcon("#ffffff");

const EventMap = ({ events, selectedEventId }: EventMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  // Initialize map once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [45.5, 8.9],
      zoom: 8,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Sync markers with events
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current.clear();

    const eventsWithCoords = events.filter((e) => e.coords);

    eventsWithCoords.forEach((event) => {
      const marker = L.marker(event.coords!, { icon: defaultIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:sans-serif;color:#fff;background:#1a1a1a;padding:8px 12px;border-radius:4px;min-width:140px">
            <strong style="font-size:13px;letter-spacing:1px">${event.title}</strong><br/>
            <span style="font-size:11px;opacity:0.7">${event.date}</span>
            ${event.location ? `<br/><span style="font-size:11px;opacity:0.7">📍 ${event.location}</span>` : ""}
          </div>`,
          { className: "dark-popup", closeButton: false }
        );
      markersRef.current.set(event.id, marker);
    });

    // Fit bounds
    if (eventsWithCoords.length > 0) {
      const group = L.featureGroup(Array.from(markersRef.current.values()));
      map.fitBounds(group.getBounds().pad(0.3));
    }
  }, [events]);

  // Highlight selected
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((marker, id) => {
      if (id === selectedEventId) {
        marker.setIcon(selectedIcon);
        marker.openPopup();
        map.flyTo(marker.getLatLng(), 11, { duration: 0.8 });
      } else {
        marker.setIcon(defaultIcon);
        marker.closePopup();
      }
    });
  }, [selectedEventId]);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
};

export default EventMap;

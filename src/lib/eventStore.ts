import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

// ── Tag system ──
export const EVENT_TAGS = [
  "DDMotors Night",
  "DDMotors Raduni",
  "DDMotors Disco Night",
] as const;

export type EventTag = (typeof EVENT_TAGS)[number];

// ── Event type ──
export interface EventItem {
  id: string;
  img: string;
  title: string;
  desc: string;
  date: string;
  status: string;
  tag: EventTag;
  location?: string;
}

// ── Photo type ──
export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  eventId: string; // links to EventItem.id
  date: string;
}

// ── Default data ──
export const defaultEvents: EventItem[] = [
  { id: "ev1", img: event1, title: "Night Cars Summer", desc: "Il raduno estivo che ha illuminato le notti con oltre 200 auto e 500 appassionati.", date: "15 Luglio 2025", status: "Prossimo", tag: "DDMotors Night", location: "Milano, Piazzale Lotto" },
  { id: "ev2", img: event2, title: "Street Legends", desc: "Una serata dedicata alle leggende della strada e del motorsport italiano.", date: "22 Agosto 2025", status: "Prossimo", tag: "DDMotors Raduni", location: "Roma, EUR" },
  { id: "ev3", img: event3, title: "Urban Meet", desc: "Il più grande raduno urbano dell'anno, nel cuore della città.", date: "10 Settembre 2025", status: "Prossimo", tag: "DDMotors Raduni", location: "Torino, Lingotto" },
  { id: "ev4", img: gallery1, title: "Night Glow", desc: "Auto con underglow e luci LED in un'atmosfera unica tra fumo e musica.", date: "20 Marzo 2025", status: "Passato", tag: "DDMotors Night", location: "Bologna, Fiera" },
  { id: "ev5", img: gallery2, title: "Drift Night", desc: "Serata adrenalinica con esibizioni di drift e burnout controllati.", date: "5 Febbraio 2025", status: "Passato", tag: "DDMotors Disco Night", location: "Napoli, Mostra d'Oltremare" },
];

const defaultPhotos: PhotoItem[] = [
  { id: "ph1", src: event1, alt: "Night Cars raduno", eventId: "ev1", date: "15 Luglio 2025" },
  { id: "ph2", src: gallery1, alt: "Auto con underglow", eventId: "ev4", date: "20 Marzo 2025" },
  { id: "ph3", src: event2, alt: "Street Legends lineup", eventId: "ev2", date: "22 Agosto 2025" },
  { id: "ph4", src: gallery2, alt: "Drift notturno", eventId: "ev5", date: "5 Febbraio 2025" },
  { id: "ph5", src: event3, alt: "Urban Meet aereo", eventId: "ev3", date: "10 Settembre 2025" },
];

// ── Storage keys ──
const EVENTS_KEY = "ddmotors_events_v2";
const PHOTOS_KEY = "ddmotors_photos_v2";

// ── Helpers ──
let _uid = Date.now();
export const uid = () => `u${_uid++}`;

export const loadEvents = (): EventItem[] => {
  try {
    const stored = localStorage.getItem(EVENTS_KEY);
    if (stored) return [...defaultEvents, ...JSON.parse(stored)];
  } catch {}
  return [...defaultEvents];
};

export const saveCustomEvents = (all: EventItem[]) => {
  const custom = all.filter((e) => !defaultEvents.some((d) => d.id === e.id));
  localStorage.setItem(EVENTS_KEY, JSON.stringify(custom));
};

export const loadPhotos = (): PhotoItem[] => {
  try {
    const stored = localStorage.getItem(PHOTOS_KEY);
    if (stored) return [...defaultPhotos, ...JSON.parse(stored)];
  } catch {}
  return [...defaultPhotos];
};

export const saveCustomPhotos = (all: PhotoItem[]) => {
  const custom = all.filter((p) => !defaultPhotos.some((d) => d.id === p.id));
  localStorage.setItem(PHOTOS_KEY, JSON.stringify(custom));
};

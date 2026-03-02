import gallery1 from "@/assets/gallery-1.jpg";
import locandinaNight from "@/assets/locandina-ddmotors-night.jpeg";
import ddnight1 from "@/assets/ddnight-1.jpg";
import ddnight2 from "@/assets/ddnight-2.jpg";
import ddnight3 from "@/assets/ddnight-3.jpg";
import ddnight4 from "@/assets/ddnight-4.jpg";
import ddnight5 from "@/assets/ddnight-5.jpg";

// ── Tag system ──
export const EVENT_TAGS = [
  "DDMOTORS NIGHT",
  "DDMOTORS RADUNI",
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
  allPhotosLink?: string;
}

// ── Photo type ──
export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  eventId: string;
  date: string;
}

// ── Default data (ev5 first = more recent) ──
export const defaultEvents: EventItem[] = [
  { id: "ev5", img: locandinaNight, title: "1ST \"DDMOTORS NIGHT\"", desc: "Serata evento: un connubio tra auto e raffinatezza", date: "20th February 2026", status: "Passato", tag: "DDMOTORS NIGHT", location: "Napoli, Mostra d'Oltremare", allPhotosLink: "https://example.com/ddmotors-night-photos" },
  { id: "ev4", img: gallery1, title: "1ST \"CARS & BIKES MEETING\"", desc: "Imponente raduno di ogni genere di auto, una serata incredibile", date: "DECEMBER 12TH 2025", status: "Passato", tag: "DDMOTORS RADUNI", location: "Bologna, Fiera" },
];

const defaultPhotos: PhotoItem[] = [
  { id: "ph5", src: ddnight1, alt: "VW Golf GTI al raduno notturno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph6", src: ddnight2, alt: "Mercedes AMG al raduno notturno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph7", src: ddnight3, alt: "Lancia Delta rossa al raduno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph8", src: ddnight4, alt: "Porsche viola al raduno notturno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph9", src: ddnight5, alt: "Dettaglio JDM auto rossa al raduno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph2", src: gallery1, alt: "Auto con underglow", eventId: "ev4", date: "DECEMBER 12TH 2025" },
];

// ── Helpers ──
export const loadEvents = (): EventItem[] => [...defaultEvents];

export const loadPhotos = (): PhotoItem[] => [...defaultPhotos];

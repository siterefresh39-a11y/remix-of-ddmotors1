import gallery1 from "@/assets/gallery-1.jpg";
import locandinaNight from "@/assets/locandina-ddmotors-night.jpeg";

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
  { id: "ev5", img: locandinaNight, title: "1ST \"DDMOTORS NIGHT\"", desc: "Serata evento: un connubio tra auto e raffinatezza", date: "20th February 2026", status: "Passato", tag: "DDMOTORS NIGHT", location: "Napoli, Mostra d'Oltremare" },
  { id: "ev4", img: gallery1, title: "1ST \"CARS & BIKES MEETING\"", desc: "Imponente raduno di ogni genere di auto, una serata incredibile", date: "DECEMBER 12TH 2025", status: "Passato", tag: "DDMOTORS RADUNI", location: "Bologna, Fiera" },
];

const defaultPhotos: PhotoItem[] = [
  { id: "ph4", src: locandinaNight, alt: "Drift notturno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph2", src: gallery1, alt: "Auto con underglow", eventId: "ev4", date: "DECEMBER 12TH 2025" },
];

// ── Helpers ──
export const loadEvents = (): EventItem[] => [...defaultEvents];

export const loadPhotos = (): PhotoItem[] => [...defaultPhotos];

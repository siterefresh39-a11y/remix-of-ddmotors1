import carsBikesCover from "@/assets/cars-bikes-meeting-cover.jpg";
import locandinaNight from "@/assets/locandina-ddmotors-night.jpeg";
import mottaDriveCover from "@/assets/motta-drive-cover.jpg";
import ddnight1 from "@/assets/ddnight-1.jpg";
import ddnight2 from "@/assets/ddnight-2.jpg";
import ddnight3 from "@/assets/ddnight-3.jpg";
import ddnight4 from "@/assets/ddnight-4.jpg";
import ddnight5 from "@/assets/ddnight-5.jpg";
import cbm1 from "@/assets/cbm-1.jpg";
import cbm2 from "@/assets/cbm-2.jpg";
import cbm3 from "@/assets/cbm-3.jpg";
import cbm4 from "@/assets/cbm-4.jpg";
import cbm5 from "@/assets/cbm-5.jpg";
import cbm6 from "@/assets/cbm-6.jpg";
import motta1 from "@/assets/motta-1.jpg";
import motta2 from "@/assets/motta-2.jpg";
import motta3 from "@/assets/motta-3.jpg";

// ── Tag system ──
export const EVENT_TAGS = [
  "DDMOTORS NIGHT",
  "DDMOTORS RADUNI",
  "DDMOTORS DRIVE",
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
  { id: "ev6", img: mottaDriveCover, title: "MOTTA DRIVE", desc: "Un'esperienza di guida dinamica sul Passo del Mottarone", date: "15 Febbraio 2025", status: "Passato", tag: "DDMOTORS DRIVE", location: "Mottarone (1.492 m)" },
  { id: "ev5", img: locandinaNight, title: "1ST \"DDMOTORS NIGHT\"", desc: "Serata evento: un connubio tra auto e raffinatezza", date: "20th February 2026", status: "Passato", tag: "DDMOTORS NIGHT", location: "Napoli, Mostra d'Oltremare", allPhotosLink: "https://example.com/ddmotors-night-photos" },
  { id: "ev4", img: carsBikesCover, title: "1ST \"CARS & BIKES MEETING\"", desc: "Imponente raduno di ogni genere di auto, una serata incredibile", date: "DECEMBER 12TH 2025", status: "Passato", tag: "DDMOTORS RADUNI", location: "Bologna, Fiera", allPhotosLink: "" },
];

const defaultPhotos: PhotoItem[] = [
  { id: "ph5", src: ddnight1, alt: "VW Golf GTI al raduno notturno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph6", src: ddnight2, alt: "Mercedes AMG al raduno notturno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph7", src: ddnight3, alt: "Lancia Delta rossa al raduno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph8", src: ddnight4, alt: "Porsche viola al raduno notturno", eventId: "ev5", date: "20th February 2026" },
  { id: "ph10", src: cbm1, alt: "Nissan Skyline bianca al raduno", eventId: "ev4", date: "DECEMBER 12TH 2025" },
  { id: "ph11", src: cbm2, alt: "Lamborghini Huracan EVO arancione", eventId: "ev4", date: "DECEMBER 12TH 2025" },
  { id: "ph12", src: cbm3, alt: "Pontiac Trans Am blu notte", eventId: "ev4", date: "DECEMBER 12TH 2025" },
  { id: "ph13", src: cbm4, alt: "Mustang e Skyline al raduno notturno", eventId: "ev4", date: "DECEMBER 12TH 2025" },
  { id: "ph14", src: cbm5, alt: "Ford Mustang nera con underglow rosso", eventId: "ev4", date: "DECEMBER 12TH 2025" },
  { id: "ph15", src: cbm6, alt: "Motore RB26 turbo Skyline GT-R", eventId: "ev4", date: "DECEMBER 12TH 2025" },
];

// ── Helpers ──
export const loadEvents = (): EventItem[] => [...defaultEvents];

export const loadPhotos = (): PhotoItem[] => [...defaultPhotos];

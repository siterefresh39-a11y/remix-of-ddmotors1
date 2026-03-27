import carsBikesCover from "@/assets/cars-bikes-meeting-cover.webp";
import locandinaNight from "@/assets/locandina-ddmotors-night.webp";
import mottaDriveCover from "@/assets/motta-drive-cover.webp";
import ddnight1 from "@/assets/ddnight-1.jpg";
import ddnight2 from "@/assets/ddnight-2.jpg";
import ddnight3 from "@/assets/ddnight-3.jpg";
import ddnight4 from "@/assets/ddnight-4.jpg";

import cbm1 from "@/assets/cbm-1.jpg";
import cbm2 from "@/assets/cbm-2.jpg";
import cbm3 from "@/assets/cbm-3.jpg";
import cbm4 from "@/assets/cbm-4.jpg";
import cbm5 from "@/assets/cbm-5.jpg";
import cbm6 from "@/assets/cbm-6.jpg";
import motta1 from "@/assets/motta-1.jpg";
import motta2 from "@/assets/motta-2.jpg";
import motta3 from "@/assets/motta-3.jpg";

import sunsetCover from "@/assets/sunset-drive-cover.jpeg";
import sunset1 from "@/assets/sunset-1.jpeg";
import sunset2 from "@/assets/sunset-2.jpeg";
import sunset3 from "@/assets/sunset-3.jpeg";
import sunset4 from "@/assets/sunset-4.jpeg";

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
  coords?: [number, number];
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
  { id: "ev7", img: sunsetCover, title: "SUNSET DRIVE", desc: "Guida al tramonto con cena sul Lungolago di Laveno", date: "21 Marzo 2026", status: "Passato", tag: "DDMOTORS DRIVE", location: "Lungolago Laveno", coords: [45.9042, 8.6156] },
  { id: "ev6", img: mottaDriveCover, title: "MOTTA DRIVE", desc: "Un'esperienza di guida pensata per veri appassionati sul Passo del Mottarone", date: "15 Febbraio 2025", status: "Passato", tag: "DDMOTORS DRIVE", location: "Passo del Mottarone", coords: [45.8742, 8.4428] },
  { id: "ev5", img: locandinaNight, title: "1ST \"DDMOTORS NIGHT\"", desc: "Serata evento: un connubio tra auto e raffinatezza", date: "20th February 2026", status: "Passato", tag: "DDMOTORS NIGHT", location: "Bareggio (MI)", allPhotosLink: "https://example.com/ddmotors-night-photos", coords: [45.4215, 8.9935] },
  { id: "ev4", img: carsBikesCover, title: "1ST \"CARS & BIKES MEETING\"", desc: "Imponente raduno di ogni genere di auto, una serata incredibile", date: "DECEMBER 12TH 2025", status: "Passato", tag: "DDMOTORS RADUNI", location: "Trezzano sul Naviglio (MI)", allPhotosLink: "", coords: [45.4213, 9.0674] },
];

const defaultPhotos: PhotoItem[] = [
  { id: "ph19", src: sunset1, alt: "Auto al tramonto sul Lungolago di Laveno", eventId: "ev7", date: "21 Marzo 2026" },
  { id: "ph20", src: sunset2, alt: "Convoglio auto al tramonto Laveno", eventId: "ev7", date: "21 Marzo 2026" },
  { id: "ph21", src: sunset3, alt: "Vista panoramica Lungolago Laveno", eventId: "ev7", date: "21 Marzo 2026" },
  { id: "ph22", src: sunset4, alt: "Gruppo auto parcheggiate Laveno", eventId: "ev7", date: "21 Marzo 2026" },
  { id: "ph16", src: motta1, alt: "Audi e Abarth al tramonto sul Mottarone", eventId: "ev6", date: "15 Febbraio 2025" },
  { id: "ph17", src: motta2, alt: "Auto parcheggiate in cima al Mottarone", eventId: "ev6", date: "15 Febbraio 2025" },
  { id: "ph18", src: motta3, alt: "Mappa percorso Drive to Mottarone", eventId: "ev6", date: "15 Febbraio 2025" },
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

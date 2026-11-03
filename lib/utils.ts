import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export const formatHours = (h: number) => `${h} ч`;

export const siteConfig = {
  name: "Институт вокальной психологии",
  short: "ИВП",
  description: "Исследуем психологические аспекты вокального искусства, создаём образовательные программы и практические инструменты для тех, кто поёт и учит петь.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vocalpsy-institute.ru",
  email: "",
  phone: "",
  lmsUrl: "",
};

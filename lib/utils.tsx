import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate Tailwind breakpoint classes for responsive values
 */
export function responsiveClass(...classes: string[]) {
  return classes.join(" ");
}

/**
 * Overloaded function: supports optional default value
 */
export function getNestedValue<T>(obj: any, path: string): T | undefined;
export function getNestedValue<T>(obj: any, path: string, defaultValue: T): T;
export function getNestedValue<T>(
  obj: any,
  path: string,
  defaultValue?: T
): T | undefined {
  const value = path.split(".").reduce((current, prop) => current?.[prop], obj);
  return value !== undefined ? value : defaultValue;
}

/**
 * Generate color variant classes based on a color name
 */
export function getColorClasses(color: string) {
  const colorMap: Record<string, Record<string, string>> = {
    blue: {
      bg: "bg-blue-50",
      bgDark: "bg-blue-500",
      text: "text-blue-900",
      textLight: "text-blue-600",
      border: "border-blue-200",
      borderDark: "border-blue-500",
    },
    slate: {
      bg: "bg-slate-50",
      bgDark: "bg-slate-900",
      text: "text-slate-900",
      textLight: "text-slate-600",
      border: "border-slate-200",
      borderDark: "border-slate-400",
    },
    emerald: {
      bg: "bg-emerald-50",
      bgDark: "bg-emerald-500",
      text: "text-emerald-900",
      textLight: "text-emerald-600",
      border: "border-emerald-200",
      borderDark: "border-emerald-500",
    },
    amber: {
      bg: "bg-amber-50",
      bgDark: "bg-amber-500",
      text: "text-amber-900",
      textLight: "text-amber-600",
      border: "border-amber-200",
      borderDark: "border-amber-500",
    },
  };

  return colorMap[color] || colorMap.slate;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

/**
 * Format price as currency
 */
export function formatPrice(price: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price / 100);
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
) {
  let timeout: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

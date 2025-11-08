// src/types/values.ts
export interface Value {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode; // <-- updated from string
}

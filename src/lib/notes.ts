import { kinds, type Kind } from '../data/site';

export function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function sortNotes<T extends { data: { date: Date; updated?: Date } }>(notes: T[]): T[] {
  return [...notes].sort((a, b) => {
    const av = (a.data.updated ?? a.data.date).getTime();
    const bv = (b.data.updated ?? b.data.date).getTime();
    return bv - av;
  });
}

export function kindLabel(kind: Kind): string {
  return kinds[kind].label;
}

export function oldPathToParam(oldPath: string): string {
  return oldPath.replace(/^\/+|\/+$/g, '');
}

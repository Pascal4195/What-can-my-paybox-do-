import { type Capability, categories } from "../data/capabilities";

export function searchCapabilities(all: Capability[], rawQuery: string): Capability[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return all;

  return all.filter((cap) => {
    const categoryName = categories.find((c) => c.id === cap.category)?.name ?? "";
    const haystack = [
      cap.title,
      categoryName,
      cap.description,
      cap.tags.join(" "),
      cap.example?.join(" ") ?? "",
      cap.howItWorks.join(" "),
      cap.note ?? "",
    ]
      .join(" ")
      .toLowerCase();

    return query
      .split(/\s+/)
      .filter(Boolean)
      .every((word) => haystack.includes(word));
  });
}

export type Project = {
  slug: string;
  title: string;
  description: string;
  role: "frontend" | "backend" | "fullstack" | "Data Scientist / Backend Developer";
  tags: string[];
  image?: string;
  links?: { label: string; href: string }[];
  period?: { year: string; end?: string };
  highlights?: string[];
};



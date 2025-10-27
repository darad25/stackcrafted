import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, image, links, role } = project;

  return (
    <article
      className="group relative overflow-hidden rounded-xl bg-background neon-border border-3 hover-bounce"
      style={{ borderColor: "#08c0fc" }}
    > 
      {image ? (
        <div className="relative h-44 w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
      ) : (
        <div className="h-2" />
      )}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base sm:text-lg font-semibold tracking-tight">{title}</h3>
          {role ? (
            <span className="text-[10px] uppercase tracking-widest rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5 text-black/70 dark:text-white/70">
              {role}
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-black/70 dark:text-white/70 line-clamp-3">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-[11px] rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5 text-black/70 dark:text-white/70">
              {t}
            </span>
          ))}
        </div>
        {links && links.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} target="_blank" className="text-xs underline underline-offset-4 hover:opacity-80">
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}



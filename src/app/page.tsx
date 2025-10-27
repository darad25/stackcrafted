import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-0 sm:pt-0 pb-10 sm:pb-14 -mt-6 sm:-mt-10"> 
        <h2 className="text-3xl sm:text-3xl font-semibold tracking-tight" style={{ animation: "fade-in 500ms ease 1 both" }}>Skills</h2>
        <div className="-mt-1 sm:-mt-2 grid gap-0 sm:gap-0 grid-cols-3 sm:grid-cols-6 lg:grid-cols-7 justify-items-start -ml-5 sm:-ml-6">
          {[  
            "/NextJs.png",  
            "/Flutter.png", 
            "/Html.png", 
            "/AI.png",
            "/TS.png",
            "/React.png",
            "/css.png",
            "/Java.png",
            "/nodejs.png",
          ].map((src, i) => (
            <div key={src} className="flex items-start justify-start w-full m-0 p-0" style={{ animation: "fade-in-up 500ms ease 1 both", animationDelay: `${i*60}ms` }}>
              <Image src={src} alt="Skill" width={850} height={850} className="block w-full h-auto hover-bounce" />
            </div>
          ))}
        </div>  
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="mb-6 flex items-end justify-between" style={{ animation: "fade-in 500ms ease 1 both" }}>
          <div>
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight">Projects</h2>
            <p className="text-sm text-black/70 dark:text-white/70">Frontend, backend, and full‑stack highlights</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div key={p.title} style={{ animationDelay: `${Math.min(idx * 80, 400)}ms` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section> 

      <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-tight" style={{ animation: "fade-in 500ms ease 1 both" }}>Experience</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">

          <div className="card-surface p-5 neon-border rounded-xl" style={{ animation: "fade-in-up 500ms ease 1 both", borderColor: "#08c0fc", borderWidth: "3px", borderStyle: "solid" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-1 sm:gap-0 text-sm">
              <div className="font-medium">Steezely, Inc.  • Full-Stack Developer</div>
              <div className="text-black/60 dark:text-white/60">2025 — Present</div>
            </div>
            <ul className="mt-2 list-disc list-outside pl-6 sm:pl-8 text-sm text-black/80 dark:text-white/80">
              <li>Co-founded Steezely, an AI-powered virtual try-on app that helps users visualize how fashion items will look on them before purchasing.</li>
              <li>Collaborated with two team members to design, develop and launch the website and mobile app, currently available on the App store and Google play store.</li>
              <li>Built the Steezely website and blog using Next.js, featuring responsive layouts, SEO optimization and user-centered content strategy to drive traffic and engagement.</li>
            </ul>
          </div>

          <div className="card-surface p-5 neon-border rounded-xl" style={{ animation: "fade-in-up 500ms ease 1 both", borderColor: "#08c0fc", borderWidth: "3px", borderStyle: "solid" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-1 sm:gap-0 text-sm">
              <div className="font-medium">Freelance Mobile and Full-stack Developer</div>
              <div className="text-black/60 dark:text-white/60">January 2022 — December 2024</div>
            </div>
            <ul className="mt-2 list-disc list-outside pl-6 sm:pl-8 text-sm text-black/80 dark:text-white/80">
              <li>Collaborated as part of a dynamic team to build a comprehensive Flutter application tailored for both artificial intelligence and pharmaceutical companies.</li>
              <li>Designed and implemented intuitive, responsive user interfaces using Flutter’s widget system, ensuring a seamless user experience across devices.</li>
              <li> Engineered a scalable and secure database architecture to support real-time data management, catering to the diverse data requirements of AI analytics and pharmaceutical compliance.</li>
            </ul>
          </div>

          <div className="card-surface p-5 neon-border rounded-xl" style={{ animation: "fade-in-up 500ms ease 1 both", borderColor: "#08c0fc", borderWidth: "3px", borderStyle: "solid" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-1 sm:gap-0 text-sm">
              <div className="font-medium">Techno theory Technologies  • Software Engineer</div>
              <div className="text-black/60 dark:text-white/60">January 2020 — January 2022</div>
            </div>
            <ul className="mt-2 list-disc list-outside pl-6 sm:pl-8 text-sm text-black/80 dark:text-white/80">
              <li>Developed and maintained a backend infrastructure using React JS, Css, ensuring secure, interactive, reliable frontend processes for 55,000 customers.</li>
              <li>Developed the React Js front end for several payment integrations, ensuring seamless transaction processing with cloud optimization.</li>
              <li>Optimized database performance for mongodb databases, resulting in improved query response times and faster application performance, improving response time by 70%.</li>
            </ul>
          </div>

          <div className="card-surface p-5 neon-border rounded-xl" style={{ animation: "fade-in-up 500ms ease 1 both", animationDelay: "80ms", borderColor: "#08c0fc", borderWidth: "3px", borderStyle: "solid" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-1 sm:gap-0 text-sm">
              <div className="font-medium">The25 technologies • Fullstack Engineer</div>
              <div className="text-black/60 dark:text-white/60">July 2019 — December 2019</div>
            </div>
            <ul className="mt-2 list-disc list-outside pl-6 sm:pl-8 text-sm text-black/80 dark:text-white/80">
              <li>Integrated with payment providers to enable payment processing via various payment methods, such as credit cards, bank transfers, and digital wallets.</li>
              <li>Implemented automated testing and monitoring solutions to ensure the high availability and fault tolerance of the frontend infrastructure, reducing downtime and improving system reliability.</li>
              <li>Created and maintained automated testing, deployment pipelines improving the efficiency and reliability of software releases.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mr-auto max-w-3xl px-4 sm:px-1 lg:px-8 py-10 sm:py-14"> 
        <h2 className="text-xl sm:text-3xl font-semibold tracking-tight ">Contact</h2>
        <div className="mt-6 grid grid-cols-2 gap-2 items-start">
          <div className="card-surface p-3 text-sm neon-border rounded-xl w-full sm:w-[200px] hover-bounce" style={{ borderColor: "#08c0fc", borderWidth: "3px", borderStyle: "solid" }}>
            <div>Email</div>
            <a className="block max-w-full truncate text-[13px] underline underline-offset-4" href="mailto:kyle@example.com">oladokundara@gmail.com</a>
          </div>
          <div className="card-surface p-3 text-sm neon-border rounded-xl w-full sm:w-[200px] hover-bounce" style={{ borderColor: "#08c0fc", borderWidth: "3px", borderStyle: "solid" }}>
            <div>Social</div>
            <div className="mt-1 flex gap-6">
              <a className="underline underline-offset-4" href="https://github.com/darad25" target="_blank">GitHub</a>
              <a className="underline underline-offset-4" href="https://www.linkedin.com/in/dara-oladokun-2850b2239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

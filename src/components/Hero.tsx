import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.8] [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(0,0,0,.04) 0%, transparent 20%, rgba(0,0,0,.04) 40%, transparent 60%, rgba(0,0,0,.04) 80%), radial-gradient(800px 400px at 80% 0%, rgba(99,102,241,.08), transparent 40%), radial-gradient(800px 400px at 20% 0%, rgba(16,185,129,.08), transparent 40%)",
          backgroundSize: "200% 100%, auto, auto",
          animation: "shimmer 8s linear infinite",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-center" style={{ animation: "fade-in 600ms ease 1 both" }}>
          <div className="lg:col-span-7">
            <p className="text-6xl sm:text-6xl font-semibold tracking-[-0.02em] text-black/60 dark:text-white/60">Hi, I'm Oluwadara.</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em] bg-clip-text text-transparent bg-[linear-gradient(90deg,theme(colors.indigo.500),theme(colors.sky.500),theme(colors.emerald.500))] bg-[length:200%_100%]" style={{ animation: "gradient-x 8s ease-in-out infinite" }}>
              I'm a full‑stack engineer good at crafting delightful frontends and robust backends
            </h1>
            <p className="mt-5 text-2xl sm:text-2xl text-black/70 dark:text-white/70 max-w-2xl">
              I build product experiences end‑to‑end from design‑system driven UIs to scalable APIs, CI/CD, and cloud infra.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center" style={{ animation: "fade-in-up 700ms ease 1 both" }}>
            <div className="relative -mt-6 sm:-mt-30">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.25), transparent)" }}
              /> 
              <Image src="/Blueball.png" alt="Hero graphic" width={1500} height={1500} priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



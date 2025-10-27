import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 dark:border-white/10 py-10 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} D25. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:oladokundara@gmail.com" className="hover:underline underline-offset-4">Contact</a>
            <Link href="https://github.com/darad25" target="_blank" className="hover:underline underline-offset-4">GitHub</Link>
            <Link href="https://www.linkedin.com/in/dara-oladokun-2850b2239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="hover:underline underline-offset-4">LinkedIn</Link>
          </div> 
        </div>
      </div>
    </footer>
  );
}



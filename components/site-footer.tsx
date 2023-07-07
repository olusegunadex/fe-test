import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-2 border-t p-6 text-center text-xs uppercase">
      <Link href="https://moot.group/" target="_blank" className="inline-block px-1 font-bold underline">
        MOOT
      </Link>
    </footer>
  );
}

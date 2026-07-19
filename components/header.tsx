import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-6 sm:px-10">
        <Link href="/" className="text-sm font-medium tracking-tight">
          Guadalupe Miró
        </Link>
      </div>
    </header>
  );
}

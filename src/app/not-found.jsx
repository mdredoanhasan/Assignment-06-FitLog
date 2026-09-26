import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#0d0f13] px-6 text-white">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8ff00]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-gray-400">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-[#b8ff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#c8ff33]"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
}

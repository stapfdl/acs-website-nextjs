import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1829] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white font-[Barlow] mb-4">404</h1>
        <p className="text-slate-400 text-lg mb-8">Page not found</p>
        <Link href="/" className="bg-[#1e6fff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

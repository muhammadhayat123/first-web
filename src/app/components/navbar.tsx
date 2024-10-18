"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-center">
      <div className="inline-flex gap-4">
        <Link href="/" className="text-white">Home</Link>
        <Link href="/about" className="text-white">About</Link>
        <Link href="/jobs" className="text-white">Jobs</Link>
        <Link href="/services" className="text-white">Services</Link>
        <Link href="/contact" className="text-white">Contact</Link>
      </div>
    </nav>
  );
}

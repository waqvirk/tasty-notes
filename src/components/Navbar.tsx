'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex">
        <Link href="/" className="btn btn-ghost text-xl">
          TastyNotes
        </Link>
      </div>
      <div className="flex gap-2">
        <Link href="/recipes" className="btn btn-ghost">
          Recipes
        </Link>
        <Link href="/categories" className="btn btn-ghost">
          Categories
        </Link>
        <Link href="/my-recipes" className="btn btn-ghost">
          My Recipes
        </Link>
        <Link href="/sign-in" className="btn btn-ghost">
          Sign In
        </Link>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
         
          TastyNotes
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/recipes">Recipes</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/my-recipes">My Recipes</Link>
        <Link href="/sign-in">Sign In</Link>
      </div>
    </nav>
  );
}
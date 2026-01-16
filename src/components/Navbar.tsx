import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-600">
          LOGO
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="hover:text-orange-600">
              Recipes
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-orange-600">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/my-recipes" className="hover:text-orange-600">
              My Recipes
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-orange-600">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
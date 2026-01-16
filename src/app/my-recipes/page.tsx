import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="hero">
        <h1 className="text-5xl font-bold mb-4">Tasty Notes 🍳</h1>
        <p className="text-xl mb-6">Your digital cookbook for saving recipes and notes</p>
        <Link href="/recipes">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Explore Recipes
          </button>
        </Link>
      </section>
    </div>
  );
}
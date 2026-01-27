'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SearchResult {
  id: number;
  title: string;
  category: string;
  photo: string;
  description: string;
}

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Determine if search should be shown based on current page
  const shouldShowSearch = !pathname?.startsWith('/sign-in') && !pathname?.startsWith('/sign-up');

  // Handle search with debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length > 0) {
        setIsSearching(true);
        try {
          const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
          const data = await response.json();
          setSearchResults(data);
          setShowResults(true);
        } catch (error) {
          console.error('Search error:', error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (id: number) => {
    setShowResults(false);
    setSearchQuery('');
    router.push(`/recipes/${id}`);
  };

  return (
    <nav className="navbar">
      <div className="logo bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        <Link href="/">
          TastyNotes
        </Link>
      </div>

      {/* Search Bar - Only show on certain pages */}
      {shouldShowSearch && (
        <div className="search-container" ref={searchRef}>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="search-icon-right">🔍</span>
            {isSearching && <span className="search-loader">⏳</span>}
          </div>

          {/* Search Results Dropdown */}
          {showResults && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="search-result-item"
                    onClick={() => handleResultClick(recipe.id)}
                  >
                    <img src={recipe.photo} alt={recipe.title} />
                    <div className="search-result-info">
                      <h4>{recipe.title}</h4>
                      <span className="search-result-category">{recipe.category}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">No recipes found</div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="nav-links">
        <Link href="/recipes">Recipes</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/my-recipes">Cookbook</Link>
      </div>
    </nav>
  );
}
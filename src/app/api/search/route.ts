import { NextResponse } from 'next/server';
import { searchRecipesByTitle } from '@/lib/recipes';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  try {
    const recipes = await searchRecipesByTitle(query);
    return NextResponse.json(recipes);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
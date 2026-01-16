export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Pasta',
    icon: '🍝',
    description: 'Delicious pasta dishes from around the world',
  },
  {
    id: '2',
    name: 'Salads',
    icon: '🥗',
    description: 'Fresh and healthy salad recipes',
  },
  {
    id: '3',
    name: 'Desserts',
    icon: '🍰',
    description: 'Sweet treats and desserts',
  },
  {
    id: '4',
    name: 'Meat',
    icon: '🍖',
    description: 'Hearty meat-based dishes',
  },
  {
    id: '5',
    name: 'Vegetarian',
    icon: '🥬',
    description: 'Plant-based vegetarian recipes',
  },
  {
    id: '6',
    name: 'Soups',
    icon: '🍜',
    description: 'Warm and comforting soup recipes',
  },
];
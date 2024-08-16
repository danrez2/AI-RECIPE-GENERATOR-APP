// app/page.tsx

"use client"; // Ensure this is a client component

import { useState } from 'react';
import { generateRecipe } from './recipeGenerator'; // Adjust path if needed

const Home = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const newRecipe = await generateRecipe(ingredients);
      setRecipe(newRecipe);
    } catch (err) {
      console.error("Error generating recipe:", err);
      setError('Failed to generate recipe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleIngredientsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIngredients = e.target.value
      .split(',')
      .map(i => i.trim())
      .filter(i => i.length > 0);

    setIngredients(newIngredients);
  };

  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}> {/* Debugging styles */}
      <h1>AI Recipe Generator</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={ingredients.join(', ')} 
          onChange={handleIngredientsChange}
          placeholder="Enter ingredients separated by commas"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Recipe'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {recipe && (
        <div>
          <h2>Generated Recipe:</h2>
          <p>{recipe}</p>
        </div>
      )}
    </div>
  );
};

export default Home;


// app/recipeGenerator.ts
import model from './langchain';

export async function generateRecipe(ingredients: string[]): Promise<string> {
  const prompt = `Generate a recipe using the following ingredients: ${ingredients.join(', ')}. Please include the steps for preparation.`;
  const response = await model.call(prompt);
  return response;
}

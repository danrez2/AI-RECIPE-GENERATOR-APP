// pp/langchain.ts

import { OpenAI } from '@langchain/openai'
import  dotenv  from 'dotenv';

dotenv.config();

const model = new OpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  temperature: 0.7, // Adjust for creativity vs. accuracy
});

export default model;
import axios from 'axios'

const API_KEY = 'your-openai-api-key'

export async function askAgent(prompt: string): Promise<string> {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  )

  return response.data.choices[0].message.content
}
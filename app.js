import * as dotenv from 'dotenv';
dotenv.config()

import { OpenAI } from 'openai';

const openai = new OpenAI();

response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        {
            role: 'user',
            content: [
                {
                    type: 'text',
                    text: 'Describe this image'
                },
                {
                    type: 'image_url',
                    image_url: {
                        url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*r1PawBH3aXCavicd.jpeg",
                        detail: 'low'
                    }
                }
            ]
        }
    ]
})

console.log(response.choices[0])
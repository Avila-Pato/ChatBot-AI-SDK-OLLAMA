import { streamText } from 'ai';
import { createOllama } from 'ollama-ai-provider';
import { NextResponse } from 'next/server';

const ollama = createOllama({
  baseURL: 'http://localhost:11436',
  fetch: (input, init) => fetch(input, { 
    ...init,
    cache: 'no-store'
  })
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Validación básica
    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Formato de mensajes inválido' },
        { status: 400 }
      );
    }

    const result = await streamText({
      model: ollama('phi3:mini'),
      messages,
      system: "Eres un asistente de programación especializado en el lenguaje de programación .",
    });

    // Usando toDataStreamResponse como solicitaste
    return result.toDataStreamResponse({
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    });

  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json(
      { 
        error: 'Error al procesar tu mensaje',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}
**Documentacion  Proyecto OllamaChat**
- 📝 *Descripcion:c *Esto es una chat con IA local usando Ollama como backend y Next.js como frontend. Soporta streaming de respuestas y modelos ajustables.*


---

- 🖥️ Configuración de Ollama
1. Descargar un modelo de ejemplo  desde el terminal como ADMIN
    - ollama pull phi3:mini

# Iniciar servidor Ollama desde la terminal(Recomendado)
1. set OLLAMA_HOST=0.0.0.0:11435
2. set OLLAMA_NUM_GPU=0  # Desactivar GPU si hay poca VRAM
3. ollama serve



--- 
- 🚀 Estructura del Proyecto

```bash
/tuRuta
  /app
    /api
      /chat
        route.ts      
    page.tsx           
  /public
    ...               
```

- Inicia luego el proyecto con 'npm run dev'


> [!IMPORTANT]
> Modelo debe coincidir con el de la API  'Ollama-Model': 'phi3:mini'  en mi caso,  Puedes verlo en la API  /api/chat/route.ts
> Debe ser igual al que declaras en el frontend /app/page.tsx


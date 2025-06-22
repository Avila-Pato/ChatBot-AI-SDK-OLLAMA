**Documentacion  Proyecto OllamaChat**
- 📝 *Descripcion:c *Esto es una chat con IA local usando Ollama como backend y Next.js como frontend. Soporta streaming de respuestas y modelos ajustables.*


---

- 🖥️ Configuración de Ollama
1. Descargar un modelo de ejemplo  
    - ollama pull phi3:mini

# Iniciar servidor con configuración optimizada
set OLLAMA_HOST=0.0.0.0:11435
set OLLAMA_NUM_GPU=0  # Desactivar GPU si hay poca VRAM
ollama serve

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


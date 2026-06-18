# Pasapalabra de Historia · 2.º ESO

Aplicación web estática para jugar a un rosco tipo Pasapalabra con dos equipos.

## Cómo usarla

1. Abre `index.html` en el navegador.
2. Pulsa **Empezar**.
3. Usa:
   - **Acierto**: suma punto y marca la letra en verde.
   - **Fallo**: marca la letra en rojo.
   - **Pasapalabra**: deja la letra pendiente.
   - **Cambiar equipo**: cambia al otro rosco/marcador.

Atajos de teclado:

- `1`: acierto
- `2`: fallo
- `3` o espacio: pasapalabra
- `C`: cambiar equipo

## Cómo cambiar preguntas

Edita `app.js`, dentro de `QUESTION_BANK`.

Cada letra tiene este formato. La primera pregunta es para el Equipo A y la segunda para el Equipo B:

```js
A: [
  { prompt: 'Pregunta del Equipo A', answer: 'Respuesta A' },
  { prompt: 'Pregunta del Equipo B', answer: 'Respuesta B' }
]
```

## Subir a GitHub Pages

1. Crea un repositorio.
2. Sube `index.html`, `styles.css`, `app.js` y `README.md`.
3. En GitHub: Settings → Pages → Deploy from branch → main → root.
4. Copia la URL pública y enlázala o insértala en tu blog.

No necesita servidor ni instalación.

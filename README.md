# AlfarerIA NLP Web

Web estática bilingüe para AlfarerIA NLP, publicada en GitHub Pages.

## Contenido

- `index.html`: página principal
- `proceso.html`: etapas del proceso
- `coleccion.html`: catálogo conceptual
- `plataforma.html`: estudio de autoservicio
- `styles.css`: estilos visuales
- `script.js`: traducciones, galería y cálculo dimensional
- `studio.js`: laboratorio de capas, boceto local y exportación de fichas
- `assets/`: imágenes de la colección

## Uso

Abrir `index.html` en un navegador moderno.

## Qué funciona

El estudio permite ordenar dos esmaltes (PC-17 Honey Flux y C-20 Cobalt),
seleccionar manos, cono y pasta, y exportar una ficha JSON de prueba.
El dibujo Canvas es decorativo, determinista y no representa una simulación química.
Cono y pasta se registran; no alteran la imagen porque no existe un modelo validado.
La calculadora usa `final = inicial * (1 - contracción / 100)` y permite invertir
la operación. El boceto de diseño se descarga como PNG y no interpreta texto mediante IA.
La guía contiene respuestas escritas previamente. No hay API, pagos ni envíos de datos.

## Evolución hacia una estimación con datos

Un LLM puede interpretar la consulta y explicar referencias, pero no debe inventar
una fotografía de resultado ni un porcentaje de confianza. Hace falta una base de
ensayos con producto exacto, orden de capas, espesor/manos, pasta, cono, atmósfera,
curvas de cocción/enfriamiento, textura y fotografía con iluminación controlada.
La búsqueda debe distinguir coincidencia exacta, prueba similar y ausencia de datos.
Las fichas del fabricante sobre cada producto no validan por sí solas una combinación.

Para generación por IA, conectar un backend independiente: GitHub Pages solo sirve
archivos estáticos. El backend debe guardar la clave del proveedor, validar solicitudes,
limitar uso y costes, recuperar ensayos y devolver fuentes junto a la explicación.
Un modelo de imagen puede producir una visualización conceptual claramente etiquetada;
una predicción de comportamiento requiere entrenamiento y evaluación con pruebas reales.
No guardar claves en JavaScript público. Esta versión no incluye una integración activa.

Referencias consultadas el 1 de octubre de 2026:
- https://shop.amaco.com/pc-17-honey-flux/
- https://shop.amaco.com/c-20-cobalt/

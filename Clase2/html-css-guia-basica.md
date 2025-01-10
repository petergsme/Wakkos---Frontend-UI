# Guía de Referencia HTML y CSS

## Elementos HTML Básicos

### Elementos de Bloque
Los elementos de bloque ocupan todo el ancho disponible y crean una nueva línea antes y después.

- `<div>`: Contenedor genérico para agrupar elementos
- `<p>`: Párrafo de texto
- `<h1>` a `<h6>`: Encabezados, donde h1 es el más importante
- `<header>`: Encabezado de una sección o página
- `<section>`: Define una sección en el documento
- `<article>`: Contenido independiente y autocontenido
- `<footer>`: Pie de página o sección
- `<aside>`: Contenido relacionado pero separado del contenido principal

### Elementos en Línea
Los elementos en línea solo ocupan el espacio necesario y no crean nuevas líneas.

- `<span>`: Contenedor genérico en línea
- `<a>`: Enlaces
- `<img>`: Imágenes
- `<b>`: Texto en negrita (uso presentacional)
- `<strong>`: Texto importante (uso semántico)

## Organización del CSS

### 1. Selectores de Elemento
Estos van primero y definen estilos base para elementos HTML:

```css
p {
    margin-bottom: 1rem;
}

h1 {
    font-size: 2rem;
}
```

### 2. Clases de Componentes/Layout
Después van las clases que definen la estructura y componentes principales:

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    border: 1px solid #ccc;
    padding: 1rem;
}
```

### 3. Clases de Utilidad
Por último, las clases para ajustes específicos:

```css
.mt-1 {
    margin-top: 1rem;
}

.text-center {
    text-align: center;
}
```

## Especificidad en CSS

La especificidad determina qué estilos se aplican cuando hay conflictos. De menor a mayor especificidad:

1. Selectores de elemento: `p`, `div`, `span`
2. Clases: `.mi-clase`
3. IDs: `#mi-id` (evitar su uso)

### Ejemplos de Especificidad

```css
/* Especificidad baja */
p {
    color: blue;
}

/* Especificidad media */
.texto {
    color: red;    /* Este ganará sobre el selector de elemento */
}

/* Selector de lista */
h1, h2, h3 {
    font-family: Arial;    /* Se aplica a todos los elementos listados */
}
```

## Uso del Inspector de Elementos

El inspector de elementos es una herramienta fundamental para:
- Ver la estructura HTML de la página
- Inspeccionar y modificar estilos CSS en tiempo real
- Depurar problemas de diseño
- Ver la especificidad de los selectores
- Experimentar con cambios antes de implementarlos en el código

### Atajos de Teclado por Navegador

**Google Chrome**
- Windows/Linux: F12 o Ctrl + Shift + I
- Mac: Cmd + Option + I

**Mozilla Firefox**
- Windows/Linux: F12 o Ctrl + Shift + I
- Mac: Cmd + Option + I

**Microsoft Edge**
- Windows: F12 o Ctrl + Shift + I
- Mac: Cmd + Option + I

**Safari**
- Mac: Cmd + Option + I
  - Nota: Primero debes habilitar el menú de desarrollo en Safari:
    1. Ve a Safari > Preferencias
    2. Pestaña "Avanzado"
    3. Marca "Mostrar menú Desarrollo en la barra de menús"

Alternativa universal: Clic derecho sobre cualquier elemento > "Inspeccionar" o "Inspeccionar elemento"

## Comentarios en HTML y CSS

### Comentarios en HTML
Los comentarios en HTML se escriben así:
```html
<!-- Esto es un comentario en HTML -->

<!-- 
    Los comentarios pueden ocupar
    múltiples líneas
-->

<!-- Los comentarios son útiles para:
     - Explicar secciones complejas
     - Deshabilitar temporalmente código
     - Documentar el propósito de elementos
-->

<!-- Ejemplo de comentar código:
<div class="contenedor">
    <p>Este código no se mostrará</p>
</div>
-->
```

### Comentarios en CSS
Los comentarios en CSS se escriben de forma diferente:
```css
/* Esto es un comentario en CSS */

/*
   Los comentarios CSS también
   pueden ocupar múltiples líneas
*/

.container {
    /* Centrar el contenedor */
    margin: 0 auto;
    
    /* Ancho máximo para pantallas grandes */
    max-width: 1200px;
}

/*
.clase-antigua {
    Este código CSS está deshabilitado
    temporalmente
    background: red;
}
*/
```

### Buenas Prácticas para Comentarios
1. Usar comentarios para explicar el "por qué", no el "qué"
2. Mantener los comentarios actualizados
3. Usar comentarios para separar secciones grandes de código
4. No abusar de los comentarios - el código debe ser autoexplicativo
5. En producción, considerar eliminar comentarios innecesarios

## Buenas Prácticas Generales

1. Organizar el CSS en orden de especificidad
2. Evitar el uso de IDs para estilos
3. Preferir clases para estilos reutilizables
4. Usar nombres de clase descriptivos
5. Mantener la especificidad lo más baja posible
6. Documentar secciones importantes del código
7. Usar el inspector de elementos para depuración

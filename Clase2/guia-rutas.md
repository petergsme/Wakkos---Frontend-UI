# Guía de Rutas sistemas informáticos

## 1. Estructura de Nuestro Proyecto

Vamos a trabajar con esta estructura como ejemplo

```
📁 mi-proyecto-web/
├── 📁 css/
│   ├── estilos.css
│   └── animaciones.css
├── 📁 imagenes/
│   ├── 📁 personajes/
│   │   ├── totoro.jpg
│   │   └── chihiro.jpg
│   └── logo.png
├── 📁 paginas/
│   ├── 📁 blog/
│   │   ├── entrada1.html
│   │   └── entrada2.html
│   ├── contacto.html
│   └── about.html
└── index.html
```

### 1.1. Conceptos Básicos de Rutas

#### 1.1.1 Símbolos Importantes

-   `.` → "estoy aquí" (directorio actual)
-   `..` → "sube un nivel" (directorio padre)
-   `/` → separador de carpetas (siempre usa forward slash en web)

### 1.1.2 Tipos de Rutas

#### Rutas Absolutas

Son rutas completas desde la raíz:

```
https://www.mipaginaweb.com/imagenes/logo.png
/imagenes/logo.png (desde la raíz del proyecto)
```

#### Rutas Relativas

Son rutas desde donde estás ubicado:

```
./imagen.jpg (en la misma carpeta)
../imagen.jpg (sube un nivel)
../../imagen.jpg (sube dos niveles)
```

## 2. Rutas en Diferentes Contextos

### 2.1 Rutas en Desarrollo Local

Cuando trabajas en tu computadora local, las rutas pueden funcionar de dos maneras:

#### A. Usando el Sistema de Archivos Directamente

```html
<!-- En index.html -->
<img src="file:///C:/Users/TuUsuario/Proyectos/mi-proyecto-web/imagenes/personajes/totoro.jpg" />
```

⚠️ No recomendado para desarrollo web, pero útil para entender el concepto.

#### B. Usando un Servidor Local de Desarrollo

```html
<!-- En index.html -->
<img src="/imagenes/personajes/totoro.jpg" />
<!-- La ruta comienza desde la raíz del proyecto -->
```

### 2.2 Rutas en un Servidor Web

Cuando tu sitio está en producción, las rutas funcionan relativas al dominio:

```html
<!-- Ruta absoluta completa -->
<img src="https://www.tusitio.com/imagenes/personajes/totoro.jpg" />

<!-- Ruta absoluta desde la raíz del dominio -->
<img src="/imagenes/personajes/totoro.jpg" />
```

### 2.3 Rutas en React/aplicaciones SPA

En React, las rutas funcionan de manera diferente:

```jsx
// Importando recursos en React
import ghibliLogo from "./imagenes/logo.png";
import totoroPic from "./imagenes/personajes/totoro.jpg";

// Uso en el componente
function MiComponente() {
    return (
        <div>
            <img src={ghibliLogo} alt="Logo dele studio Ghibli" />
            <img src={totoroPic} alt="una imagen de Totoro bostezando" />
        </div>
    );
}
```

## 3. Ejemplos Prácticos con Nuestra Estructura

### 3.1 Desde index.html

```html
<!-- CSS -->
<link rel="stylesheet" href="css/estilos.css" />
<link rel="stylesheet" href="css/animaciones.css" />

<!-- Imágenes -->
<img src="imagenes/logo.png" alt="Logo" />
<img src="imagenes/personajes/totoro.jpg" alt="Totoro" />
<img src="imagenes/personajes/chihiro.jpg" alt="Chihiro" />

<!-- Enlaces -->
<a href="paginas/blog/entrada1.html">Blog Post 1</a>
<a href="paginas/contacto.html">Contacto</a>
```

### 3.2 Desde paginas/blog/entrada1.html

```html
<!-- CSS -->
<link rel="stylesheet" href="../../css/estilos.css" />

<!-- Imágenes -->
<img src="../../imagenes/personajes/chihiro.jpg" alt="Chihiro" />
<img src="../../imagenes/logo.png" alt="Logo" />

<!-- Enlaces -->
<a href="../../index.html">Inicio</a>
<a href="../contacto.html">Contacto</a>
<a href="entrada2.html">Siguiente entrada</a>
```

### 3.3 Desde paginas/contacto.html

```html
<!-- CSS -->
<link rel="stylesheet" href="../css/estilos.css" />

<!-- Imágenes -->
<img src="../imagenes/personajes/totoro.jpg" alt="Totoro" />
<img src="../imagenes/logo.png" alt="Logo" />

<!-- Enlaces -->
<a href="../index.html">Inicio</a>
<a href="blog/entrada1.html">Blog</a>
```

## 4. Casos Especiales y Consejos

### 4.1 Rutas Base en HTML

Puedes definir una ruta base para todo tu documento HTML:

```html
<head>
    <base href="https://www.tusitio.com/" />
    <!-- Ahora todas las rutas relativas partirán de esta URL -->
</head>
```

### 4.2 Rutas en Desarrollo vs Producción

```html
<!-- Desarrollo local -->
<img src="/imagenes/logo.png" />
<!-- Se convierte en http://localhost:3000/imagenes/logo.png -->

<!-- Producción -->
<img src="/imagenes/logo.png" />
<!-- Se convierte en https://www.tusitio.com/imagenes/logo.png -->
```

### 4.3 Variables de Entorno en Proyectos Modernos

```javascript
// En React o aplicaciones modernas
const imageUrl = process.env.PUBLIC_URL + "/imagenes/logo.png";
// o
const apiUrl = process.env.REACT_APP_API_URL + "/endpoint";
```

## 5. Ejercicios con Nuestra Estructura

1. Desde `index.html`, crea enlaces a:

    - La imagen de Chihiro
    - La página about.html
    - La hoja de animaciones

2. Desde `paginas/blog/entrada2.html`, enlaza:

    - La imagen de Totoro
    - La página anterior (entrada1.html)
    - El archivo de estilos principal

3. Desde `paginas/about.html`, conecta:
    - Todas las imágenes de personajes
    - El archivo CSS de animaciones
    - Un enlace al blog

## 6. Comprobación de Rutas

Para verificar si tus rutas están correctas:

1. Abre la consola del navegador (F12)
2. Mira en la pestaña "Network"
3. Los recursos que no se encuentren mostrarán error 404
4. Verifica que la ruta en el error coincida con la ubicación esperada del archivo

¡Recuerda! En desarrollo web moderno, es común usar herramientas como Webpack o Vite que pueden manejar las rutas de manera diferente. Siempre consulta la documentación de tu herramienta de desarrollo.

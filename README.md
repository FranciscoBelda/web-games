

# Games App - Frontend Angular

Este proyecto es una aplicación web desarrollada con **Angular** que permite gestionar una lista de videojuegos conectándose a una **API REST**. La aplicación permite visualizar, añadir, editar y eliminar juegos, además de gestionar una lista de favoritos.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

* 
**Node.js**: Versión LTS (Long Term Support).


* 
**NPM**: Gestor de paquetes de Node.


* 
**TypeScript**: Instalación global mediante `npm install -g typescript`.


* 
**Angular CLI**: Instalación global mediante `npm install -g @angular/cli`.



## 🚀 Instalación y Configuración

1. **Crear el proyecto**:
```bash
ng new frontend
[cite_start]``` [cite: 9]


```


2. **Instalar dependencias de estilo**:
* 
**Bootstrap**: `ng add @ng-bootstrap/ng-bootstrap`.


* 
**Font Awesome**: `ng add @fortawesome/angular-fontawesome@0.15.0` (seleccionar las 3 librerías Free).




3. **Configurar variables de entorno**:
Crea la carpeta `src/app/environments/` y define la URL de la API en los archivos `environment.ts` y `environment.prod.ts`:
```typescript
urlBase: 'http://localhost:3000/api/v1/games'
[cite_start]``` [cite: 28, 29]


```



## 🏗️ Estructura del Proyecto

El proyecto se organiza en los siguientes módulos y componentes principales:

* **Components**:
* 
`game-list`: Visualización de la lista de juegos y buscador.


* 
`game-edit`: Formulario reactivo para añadir o editar juegos.


* 
`navbar` y `footer`: Elementos de navegación y pie de página.




* 
**Common**: Interfaces de datos (`Game`, `ApiResponse`).


* 
**Services**: `GameService` para la comunicación con la API mediante `HttpClient`.


* 
**Validators**: Validaciones personalizadas para formularios.



## 🛣️ Rutas de la Aplicación

Las rutas principales definidas en `app.routes.ts` son:

* `/games/list`: Vista principal con el listado de juegos.
* `/games/add`: Formulario para crear un nuevo juego.
* `/games/edit/:id`: Formulario para editar un juego existente.

## 🛠️ Funcionalidades Principales

### Gestión de Juegos

* 
**Listado**: Carga automática de juegos desde la API al iniciar el componente.


* 
**Búsqueda**: Filtrado en tiempo real por título, subtítulo o descripción.


* 
**Favoritos**: Posibilidad de marcar juegos como favoritos y filtrar la lista.


* 
**Eliminación**: Borrado de registros con confirmación mediante modal.



### Formularios y Validaciones

La aplicación utiliza **formularios reactivos** con las siguientes validaciones:

* Campos obligatorios (`required`).


* Longitud mínima y máxima.


* **Validadores personalizados**:
* 
`notOnlyWhiteSpace`: Evita campos que solo contengan espacios.


* 
`forbiddenName`: Prohíbe el uso de palabras específicas (ej. "sexo", "droga") mediante expresiones regulares.





## 💻 Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
ng serve

```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

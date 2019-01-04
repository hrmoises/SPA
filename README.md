# SPA (Single Page Application)

Este proyecto ha sido creado con [Angular CLI](https://github.com/angular/angular-cli) versión 7.1.2.

Esta aplicación es el resultado del primer tema del curso del curso: [Angular: De cero a experto creando aplicaciones (Angular 7+)](https://www.udemy.com/angular-2-fernando-herrera/), en el que se han trabajado en los siguientes puntos:

    * Crear una aplicación de una sola página (SPA).
        * Creación de proyectos de Angular usando el CLI (Command Line Interface).
        * Creación de componentes de forma manual y através de CLI (`ng generate component NombreComponent` o `ng g c NombreComponent`).
        * Creación de servicios de forma manual.

    * Instalación y uso de Boostrap o librerías de teceros usando el Angular-CLI.

    * Creación de rutas de nuestra aplicación.
        * Uso de RouterLink y RouterLinkActive para movernos de página y colocar clases a los elementos activos.
        * Uso del modulo Router, que nos permite movernos de página mediante código.
        * Obtención de parámetros vía URL.

    * Configuración de un servicio en Angular para el manejo de la data.

    * Uso de directivas:
        * **ngIf**
        * **ngFor**
    
    * Cración de un website para visualizar distintas páginas con una barra de navegación superior

    * Uso de Pipes ([UpperCasePipe](https://angular.io/api/common/UpperCasePipe) y [DatePipe](https://angular.io/api/common/DatePipe))
    
    * Uso del buscador del navbar para realizar una consulta a nuestro arreglo de héroes.
    
    * Uso de Input y Output entre componentes padres e hijos.

## Servidor de desarrollo

Ejecutar a través de un terminal, desde el directorio del proyecto, el comando: `npm install`. Luego ejecutar: `ng serve -o` para ejecutar el servidor de desarrollo. Se debería de abrir automáticamente el navegador con la dirección: `http://localhost:4200/`. (La aplicación se recargará automáticamente si se realizan cambios en el código fuente).

## Build

Ejecutar a través de un terminal, desde el directorio del proyecto, el comando: `ng build` para construir el proyecto. El proyecto se almacenará en el directorio `dist/`. Use the `--prod` flag for a production build.
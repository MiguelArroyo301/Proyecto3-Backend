# Medidas Miguel Proyecto 3º

Este proyecto es una aplicación web que permite gestionar y almacenar mediciones de temperatura y ozono obtenidas de un sensor. La aplicación utiliza una arquitectura de servidor con Node.js y una base de datos PostgreSQL para registrar y consultar los datos de las mediciones.

## Requisitos

- Node.js
- Docker
- PostgreSQL

## Estructura del Proyecto

El proyecto se divide en las siguientes carpetas y archivos principales:

- **controllers/measurementController.js**: Controlador que gestiona las solicitudes relacionadas con las mediciones (crear tabla, agregar, obtener y eliminar mediciones).
- **routes/measurementRoutes.js**: Define las rutas para las operaciones CRUD relacionadas con las mediciones.
- **services/measurementService.js**: Lógica de negocio que interactúa directamente con la base de datos PostgreSQL.
- **app.js**: Archivo principal del servidor. Configura el servidor Express y enlaza las rutas de las mediciones.
- **docker-compose.yml**: Archivo Docker Compose para levantar los servicios de la base de datos y la aplicación.

## Instalación y Ejecución

1. Clonar el repositorio en tu máquina local.
2. Asegurarse de tener Docker instalado.
3. En la raíz del proyecto, ejecutar el siguiente comando para levantar los contenedores:

    ```bash
    docker-compose up
    ```

El servidor estará disponible en `http://localhost:13000/api/medidasmike`.

## API Endpoints

- **GET /api/medidasmike/setup**: Crea la tabla de mediciones en la base de datos.
- **POST /api/medidasmike/**: Agrega una nueva medición. El body de la solicitud debe incluir los campos `sensor_type` (1 para ozono, 2 para temperatura) y `value` (valor de la medición).
- **GET /api/medidasmike/escribir**: Obtiene todas las mediciones almacenadas.
- **DELETE /api/medidasmike/**: Elimina todas las mediciones almacenadas.

## Base de Datos

La aplicación utiliza PostgreSQL para almacenar los datos de las mediciones. La tabla `measurements` tiene los siguientes campos:

- **sensor_type**: Tipo de sensor (1 para ozono, 2 para temperatura).
- **timestamp**: Marca de tiempo en la que se registró la medición.
- **value**: Valor de la medición (hasta 2 decimales).

## Servicios de Docker

El proyecto utiliza Docker para facilitar la gestión del servidor y la base de datos. Se definen dos servicios en el archivo `docker-compose.yml`:

- **db**: Servicio que levanta una instancia de PostgreSQL con las credenciales definidas.
- **app**: Servicio que levanta el servidor Node.js para manejar las solicitudes HTTP.

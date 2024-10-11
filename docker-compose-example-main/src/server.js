// Importamos la librería express para crear el servidor.
const express = require('express');

// Definimos el puerto en el que el servidor escuchará las solicitudes.
const port = 3000;

const cors = require('cors');
const app = express();
app.use(cors()); ///< @brief Habilita CORS para permitir solicitudes desde diferentes dominios.

app.use(express.json());

// Importamos las rutas
const measurementRoutes = require('./routes/measurementRoutes');

// Usamos las rutas
app.use('/api/medidasmike', measurementRoutes);

// Hacemos que el servidor escuche en el puerto definido y registramos un mensaje en la consola.
app.listen(port, () => console.log(`Server has started on port: ${port}`));

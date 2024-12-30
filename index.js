const express = require("express"); // Importar el módulo express
const app = express(); // Crear una instancia de la aplicación express
const main_endpoint = "/api" // Endpoint principal de la aplicación


// Routes
const HelloRoutes = require("./routes/HelloRoutes"); // Importar las rutas de hello
const UserRoutes = require("./routes/UserRoutes"); // Importar las rutas de usuarios

const port = 4043; // Establezca el número de puerto en 4040

app.use(express.json()) // Indicar a Express que se espera contenido JSON en la solicitud
app.use(main_endpoint, HelloRoutes); // Usar las rutas de helloRoutes en la ruta
app.use(main_endpoint, UserRoutes); // Usar las rutas de userRoutes en la ruta


app.listen(port, () => { // Escuchar en el puerto 4040
  console.log("Ejecutando en", port); // Imprimir un mensaje en la consola         

})









/* 
SE LLEVA A HelloRoutes

app.get("/hello", (req, res)=>{ // Definir una ruta GET para la ruta /hello
  res.status(200).json({ // Enviar una respuesta JSON con un código de estado 200
    estado: "Servidor ejecutando correctamente", // Mensaje de estado
  })
})
*/


/*
// app.use("/api", helloRoutes); // Agregar las rutas a la aplicación express
*/


/*
localhost:4040 = "http://190.236.164.7:4040/miApi/users" + port;  Establezca la URL de la aplicación en localhost :4040
console.log(`Servidor escuchando en el puerto ${port}`);
*/ 
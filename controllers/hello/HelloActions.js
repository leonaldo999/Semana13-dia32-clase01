export const helloActions = (req, res) => { // Definir la función 
  
  res.status(200).json({ // Enviar una respuesta JSON con un código de estado 200
    "estado": "Servidor ejecutado correctamente.", // Estado de la respuesta
  })
}
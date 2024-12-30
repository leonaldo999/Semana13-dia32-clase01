const mongoose = require("mongoose");
const { UserSchema } = require('./UserSchema');

const postUser = async (req, res) => {
  //desestructurar objectos
  const { name, age, married } = req.query;

  try {
    await mongoose.connect(
      "mongodb+srv://leonaldo999:TypcnilgLIXoLRea@api-final-proyec.lnao2.mongodb.net/"
    );

    const userModel = mongoose.model("users", UserSchema);

    const user = new userModel({
      name: name,
      age: age,
      married: married,
    });

    user.save();

    res.status(200).json({
      message: "Usuario creado correctamente.",
    });

  } catch (e) {
    console.log("No se pudo conectar:", e);
  }
};

module.exports = {
  postUser,
};
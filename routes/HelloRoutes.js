const express = require("express"); // impota express
const { HelloActions } = require("../controllers/hello/HelloActions"); // importa helloActions de controllers/helloActions.js
const router = express.Router(); // crea un router

router.get("/hello", HelloActions) // GET /hello

module.exports = router; // exporta el router 
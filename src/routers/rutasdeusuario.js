const express = require('express');
const ControladorUsuario = require('../controladores/controladoresUsuarios'); // Ruta relativa
const Autorizacion = require('../middleware/middlewareautorizacion'); // Ruta relativa
const router = express.Router();

router.post('/registrar', ControladorUsuario.registrar);
router.post('/login', ControladorUsuario.login);
router.post('/logout', Autorizacion, ControladorUsuario.logout);
router.get('/usuarios', Autorizacion, ControladorUsuario.getUsers);
router.put('/users/:id', Autorizacion, ControladorUsuario.updateUser);
router.delete('/users/:id', Autorizacion, ControladorUsuario.deleteUser);

module.exports = router;

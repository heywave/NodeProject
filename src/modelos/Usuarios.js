const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const esquemaUsuario = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

esquemaUsuario.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Usuario = mongoose.model('Usuario', esquemaUsuario);

module.exports = Usuario;
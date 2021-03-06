const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModal = require('../models/user');

const secret = 'test';

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: 'El usuario no existe.' });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Credenciales inválidas.' });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: '1h',
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Algo salió mal.' });
  }
};

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: 'El usuario ya existe.' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      secret,
      {
        expiresIn: '1h',
      }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Algo salió mal.' });

    console.log(error);
  }
};

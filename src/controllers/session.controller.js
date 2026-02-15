import jwt from "jsonwebtoken";
import env from "../config/env.config.js";
import { UserManager } from "../managers/user.manager.js";
import { createHash, isValidPassword } from "../utils/bcrypt.js";

const userManager = new UserManager();


// REGISTER
export const registerUser = async (req, res) => {
  try {

    const { first_name, last_name, email, password, age } = req.body;

    const existingUser = await userManager.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const hashedPassword = createHash(password);

    const newUser = await userManager.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      age
    });

    res.status(201).json({
      message: "Usuario registrado correctamente"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// LOGIN
export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await userManager.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const valid = isValidPassword(user, password);
    if (!valid) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // 🔐 JWT con sub
    const token = jwt.sign(
      {
        sub: user._id,
        role: user.role
      },
      env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login exitoso",
      token
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// CURRENT
export const currentUser = async (req, res) => {
  res.json({
    user: req.user
  });
};
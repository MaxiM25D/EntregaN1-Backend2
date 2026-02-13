import { UserManager } from "../managers/user.manager.js";
import { createHash } from "../utils/bcrypt.js";

const userManager = new UserManager();

export const registerUser = async (req, res) => {
  try {

    const { first_name, last_name, email, password, age } = req.body;

    if (!first_name || !last_name || !email || !password || !age) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const existingUser = await userManager.getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    const hashedPassword = createHash(password);

    const newUser = await userManager.createUser({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      age
    });

    res.status(201).json({
      message: "Usuario registrado correctamente",
      user: newUser
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
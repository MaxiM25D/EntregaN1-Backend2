import { CartManager } from "../managers/cart.manager.js";

const cartManager = new CartManager();

export const createCart = async (req, res) => {
  try {
    const newCart = await cartManager.create();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCartById = async (req, res) => {
  try {
    const cart = await cartManager.getById(req.params.id);

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;

    const updatedCart = await cartManager.addProduct(cid, pid);

    if (!updatedCart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
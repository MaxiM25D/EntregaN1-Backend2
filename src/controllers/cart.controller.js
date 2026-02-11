import { cartManager } from "../managers/cart-manager.js";

class CartControllers {
  constructor(manager) {
    this.manager = manager;
  }

  createCart = async (req, res) => {
    try {
      const response = await this.manager.createCart();
      res.json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getById = async (req, res) => {
    try {
      const { cid } = req.params;
      const response = await this.manager.getById(cid);
      if (!response) throw new Error("Carrito no encontrado");
      res.json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  addProductToCart = async (req, res) => {
    try {
      const { cid, pid } = req.params;
      const response = await this.manager.addProductToCart(cid, pid);
      if (!response) throw new Error("Carrito no encontrado");
      res.json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  removeProductFromCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const response = await this.manager.removeProductFromCart(cid, pid);
    if (!response) throw new Error("Carrito no encontrado");
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  };

  updateCart = async (req, res) => {
  try {
    const { cid } = req.params;
    const { products } = req.body;

    const response = await this.manager.updateCart(cid, products);
    if (!response) throw new Error("Carrito no encontrado");

    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  };

  updateProductQuantity = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;

    const response = await this.manager.updateProductQuantity(
      cid,
      pid,
      quantity
    );

    if (!response) throw new Error("Carrito o producto no encontrado");

    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  };

  clearCart = async (req, res) => {
  try {
    const { cid } = req.params;
    const response = await this.manager.clearCart(cid);
    if (!response) throw new Error("Carrito no encontrado");
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  };
}

export const cartControllers = new CartControllers(cartManager);
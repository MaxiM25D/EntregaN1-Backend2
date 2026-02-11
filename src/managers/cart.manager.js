import { CartModel } from "../models/cart-model.js";

class CartManager {
  constructor(model) {
    this.model = model;
  }

  createCart = async () => {
    try {
      return await this.model.create({});
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (cid) => {
    try {
      return await this.model.findById(cid).populate("products.product");
    } catch (error) {
      throw new Error(error);
    }
  };

  addProductToCart = async (cid, pid) => {
    try {
      const cart = await this.model.findById(cid);
      if (!cart) return null;

      const productIndex = cart.products.findIndex(
        (p) => p.product.toString() === pid
      );

      if (productIndex !== -1) {
        cart.products[productIndex].quantity++;
      } else {
        cart.products.push({ product: pid, quantity: 1 });
      }

      return await cart.save();
    } catch (error) {
      throw new Error(error);
    }
  };

  removeProductFromCart = async (cid, pid) => {
  try {
    const cart = await this.model.findById(cid);
    if (!cart) return null;

    cart.products = cart.products.filter(
      (p) => p.product.toString() !== pid
    );

    return await cart.save();
  } catch (error) {
    throw new Error(error);
  }
  };

  updateCart = async (cid, products) => {
  try {
    return await this.model.findByIdAndUpdate(
      cid,
      { products },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
  };

  updateProductQuantity = async (cid, pid, quantity) => {
  try {
    const cart = await this.model.findById(cid);
    if (!cart) return null;

    const product = cart.products.find(
      (p) => p.product.toString() === pid
    );

    if (!product) return null;

    product.quantity = quantity;
    return await cart.save();
  } catch (error) {
    throw new Error(error);
  }
  };

  clearCart = async (cid) => {
  try {
    return await this.model.findByIdAndUpdate(
      cid,
      { products: [] },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
  };
}

export const cartManager = new CartManager(CartModel);
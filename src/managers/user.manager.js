import { User } from "../models/user.model.js";
import { Cart } from "../models/cart.model.js";

export class UserManager {

  async createUser(userData) {

    // Crear carrito vacío automáticamente
    const newCart = await Cart.create({ products: [] });

    const newUser = await User.create({
      ...userData,
      cart: newCart._id
    });

    return newUser;
  }

  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async getUserById(id) {
    return await User.findById(id).populate("cart");
  }

}
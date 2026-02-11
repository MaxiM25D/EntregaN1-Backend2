import { ProductModel } from "../models/product-model.js";

class ProductManager {
  constructor(model) {
    this.model = model;
  }

  getAll = async (page = 1, limit = 10, query, sort) => {
    try {
      const filter = {};

      // filtro por categoría o disponibilidad
      if (query) {
        if (query === "available") {
          filter.stock = { $gt: 0 };
        } else {
          filter.category = query;
        }
      }

      const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        lean: true,
      };

      if (sort) {
        options.sort = { price: sort === "asc" ? 1 : -1 };
      }

      return await this.model.paginate(filter, options);
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      return await this.model.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (body) => {
    try {
      return await this.model.create(body);
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, body) => {
    try {
      return await this.model.findByIdAndUpdate(id, body, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const productManager = new ProductManager(ProductModel);
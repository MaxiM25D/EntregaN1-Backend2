import { productManager } from "../managers/product-manager.js";

class ProductControllers {
  constructor(manager) {
    this.manager = manager;
  }

  getAll = async (req, res) => {
    try {
      const { page, limit, query, sort } = req.query;

      const response = await this.manager.getAll(
        page,
        limit,
        query,
        sort
      );

      const nextPage = response.hasNextPage
        ? `http://localhost:8080/api/products?page=${response.nextPage}`
        : null;

      const prevPage = response.hasPrevPage
        ? `http://localhost:8080/api/products?page=${response.prevPage}`
        : null;

      res.json({
        status: "success",
        payload: response.docs,
        totalPages: response.totalPages,
        prevPage: response.prevPage,
        nextPage: response.nextPage,
        page: response.page,
        hasPrevPage: response.hasPrevPage,
        hasNextPage: response.hasNextPage,
        prevLink: prevPage,
        nextLink: nextPage,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await this.manager.getById(id);
      if (!response) throw new Error("Producto no encontrado");
      return res.json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const response = await this.manager.create(req.body);
      res.json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await this.manager.update(id, req.body);
      if (!response) throw new Error("Producto no encontrado");
      return res.json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await this.manager.delete(id);
      if (!response) throw new Error("Producto no encontrado");
      return res.json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}

export const productControllers = new ProductControllers(productManager);
import fs from "fs";
import crypto from "crypto";

class ProductsManager {
  constructor() {
    this.path = "./data/fs/files/products.json";
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("archivo creado");
    } else {
      console.log("archivo ya existe");
    }
  }
  async create(data) {
    try {
      if (!data.title) {
        // const error = new Error("ingrese un texto");
        throw new Error("ingrese titulo");
      } else {
        const product = {
          id: crypto.randomBytes(12).toString("hex"),
          title: data.title,
          category: data.category || "to do",
          date: data.date || new Date(),
        };
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        all.push(product);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        console.log({ created: product.id });
        return product;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async read(cat = "to do") {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      all = all.filter((each) => each.category === cat);
      if (all.length === 0) {
        //throw new Error(" no hay Productos");
        return null
      } else {
        console.log(all);
        return all;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async readOne(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let product = all.find((each) => each.id === id);
      if (!product) {
        throw new Error(" no encontrado");
      } else {
        console.log(product);
        return product;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async destroy(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let product = all.find((each) => each.id === id);
      if (!product) {
        throw new Error("no encontrado");
      } else {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
        console.log({ deleted: product.id });
        return product;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const productsManager = new ProductsManager();
export default productsManager;

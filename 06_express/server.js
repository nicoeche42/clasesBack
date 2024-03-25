//import
import express from "express";
import productsManager from "./data/fs/ProductsManager.js";

//server 
const server = express();
const port = 8080;
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready);

//middlewares
server.use(express.urlencoded({extended : true})) 

//router
server.get("/", async (requerimientos, respuesta) => {
  try {
    return respuesta.status(200).json({
      response: "CODER API",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return respuesta.status(500).json({
      response: "CODER API ERROR",
      success: false,
    });
  }
});

server.get("/api/products", async(req,res)=>{
  try {
    const { category } = req.query
    const all = await productsManager.read(category) 
    if(all) {
      return res.status(200).json({
        response: all,
        category,
        success: true
      })
    } else {
      const error = new Error("NOT FOUND")
      error.statusCode = 404
      throw error
    }
    
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
        response: error.message,
        success: false
    })
  }
})

//un parametro
server.get("/api/products/:nid", async(req,res)=>{
  try {
    const { nid } = req.params
    const one = await productsManager.readOne(nid)
    if (one) {
      return res.status(200).json({
        response: one,
        success: true
      })
    }else {
      const error = new Error("NOT FOUND")
      error.statusCode = 404
      throw error
    }
  } catch (error) {
    console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
  }
})

//dos parametros
server.get("/api/products/:title/:category",async(req,res)=>{
    try {
        const { title, category }= req.params
         const data = { title, category}
       const one = await productsManager.create(data) 
        return res.status(201).json({
            response: one,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            response: "ERROR",
            success: false
        })
    }
})

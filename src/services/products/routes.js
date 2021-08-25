import { Router } from "express";

import * as handlers from "./handlers.js";

import { uploadImg } from "./handlers.js";

import multer from "multer";

import { cloudinaryStorage } from "../../utils/index.js";

const route = Router();

route.get("/", handlers.list);

route.get("/:product_id", handlers.single);

route.put("/:product_id", handlers.update);

route.delete("/:product_id", handlers.deleteProduct);

route.post("/", handlers.create);

route.put(
    "/product/:product_id/upload", 
    multer({storage: cloudinaryStorage}).single("image_url"),
    uploadImg
);

export default route;
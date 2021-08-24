import { Router } from "express";

import * as handlers from "./handlers.js";

const route = Router();

route.get("/", handlers.list);

route.get("/:review_id", handlers.single);

route.put("/:review_id", handlers.update);

route.delete("/:review_id", handlers.deleteReview);

route.post("/", handlers.create);

export default route;
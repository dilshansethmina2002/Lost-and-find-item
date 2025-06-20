import express from 'express';
import { createFoundItems, deleteFoundItems, getFoundItems, updateFoundItems } from '../controller/foundItemController.js';

const foundItemsRouter = express.Router();

foundItemsRouter.post("/",createFoundItems);
foundItemsRouter.get("/",getFoundItems);
foundItemsRouter.put("/:id",updateFoundItems)
foundItemsRouter.delete("/:id",deleteFoundItems)

export default foundItemsRouter;
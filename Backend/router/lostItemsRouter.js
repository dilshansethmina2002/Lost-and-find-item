import express from 'express';
import {createLostItems, deleteLostItems, getLostItems, updateLostItems } from '../controller/lostItemController.js';

const lostItemsRouter = express.Router();

lostItemsRouter.post("/",createLostItems)
lostItemsRouter.get("/",getLostItems)
lostItemsRouter.put("/:id",updateLostItems)
lostItemsRouter.delete("/:id",deleteLostItems)

export default lostItemsRouter;
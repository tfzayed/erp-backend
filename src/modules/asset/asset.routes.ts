import { checkToken } from "@/middlewares/checkToken";
import express from "express";
import { assetController } from "./asset.controller";

const assetRouter = express.Router();

// get assets
assetRouter
  .route("/")
  .get(checkToken, assetController.getAllAsset)
  .post(checkToken, assetController.postAsset);

assetRouter
  .route("/:id")
  .patch(checkToken, assetController.updateAsset)
  .delete(checkToken, assetController.assetDelete);

export default assetRouter;

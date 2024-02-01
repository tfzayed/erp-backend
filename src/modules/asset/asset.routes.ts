import express from "express";
import { assetController } from "./asset.controller";

const assetRouter = express.Router();

// get assets
assetRouter
  .route("/")
  .get(assetController.getAllAsset)
  .post(assetController.postAsset);

assetRouter
  .route("/:id")
  .patch(assetController.updateAsset)
  .delete(assetController.assetDelete);

export default assetRouter;

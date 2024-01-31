import { User } from "../user/user.model";
import { Asset } from "./asset.model";
import { AssetType } from "./asset.type";

const getAllAsset = async (): Promise<AssetType[]> => {
  const assets = await Asset.find({});
  return assets;
};

const postAsset = async (assetData: any) => {
  const modifiedData = {
    name: assetData?.name,
    price: assetData?.price,
    user: assetData?.user[0].value,
    purchase_date: assetData?.purchase_date,
    logs: assetData?.logs,
  };

  const postData = new Asset(modifiedData);

  const newAsset = await postData.save();

  const addAssetToUser = await User.updateOne(
    { user_id: assetData?.user[0]?.value },
    {
      $push: {
        assets: newAsset._id,
      },
    }
  );

  return newAsset;
};

const updateAsset = async (id: string, updateData: { updateAsset: any }) => {
  const updatedAsset = await User.updateOne(
    {
      assets: id,
    },
    {
      $unset: {
        assets: "",
      },
    }
  );

  await Asset.updateOne(
    { _id: id },
    {
      $set: {
        name: updateData?.updateAsset?.name,
        price: updateData?.updateAsset?.price,
        user: updateData?.updateAsset?.user[0].value,
        purchase_date: updateData?.updateAsset?.purchase_date,
        logs: updateData?.updateAsset?.logs,
      },
    }
  ).clone();

  await User.updateOne(
    { user_id: updateData?.updateAsset?.user.value },
    {
      $set: {
        assets: id,
      },
    }
  );

  return updatedAsset;
};

const assetDelete = async (id: string) => {
  const deletedAsset = await Asset.findByIdAndDelete(id);

  await User.updateOne(
    {
      assets: id,
    },
    {
      $unset: {
        assets: "",
      },
    }
  );

  return deletedAsset;
};

export const assetService = {
  getAllAsset,
  postAsset,
  updateAsset,
  assetDelete,
};

import { Request, Response } from "express";
import { BigQuery } from "@google-cloud/bigquery";
const keyFilename = "./keyfile.json";

const getTableData = (tableName: string) => {
  return async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const client = new BigQuery({
        keyFilename,
      });

      const query = `
          SELECT *
          FROM lens-public-data.polygon.${tableName}
          WHERE profile_id = '${id}'
        `;

      const options = {
        query: query,
        location: "US",
      };

      const [rows] = await client.query(options);

      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
};

export const getProfileDispatcher = getTableData("public_profile_dispatcher");
export const getProfileFollowNft = getTableData("public_profile_follow_nft");
export const getProfileFollowModuleFollowRecord = getTableData(
  "public_profile_follow_module_follow_record"
);
export const getProfile = getTableData("public_profile");
export const getProfileRecommendedDismissed = getTableData(
  "public_profile_recommended_dismissed"
);
export const getProfileNftGallery = getTableData("public_profile_nft_gallery");
export const getProfileStats = getTableData("public_profile_stats");
export const getProfileCurated = getTableData("public_profile_curated");
export const getProfileFollowModuleDetails = getTableData(
  "public_profile_follow_module_details"
);
export const getProfileFollowModuleDetailsHistory = getTableData(
  "public_profile_follow_module_details_history"
);

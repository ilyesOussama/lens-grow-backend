import { Request, Response } from "express";
import { BigQuery } from "@google-cloud/bigquery";
const keyFilename = "./keyfile.json";

export const getTables = async (req: Request, res: Response) => {
  try {
    const client = new BigQuery({
      keyFilename,
    });

    const query = `
      SELECT table_name
      FROM lens-public-data.polygon.INFORMATION_SCHEMA.TABLES
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

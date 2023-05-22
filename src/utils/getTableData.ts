import { Request, Response } from "express";
import { BigQuery } from "@google-cloud/bigquery";
const keyFilename = "./keyfile.json";

export interface tableParams {
  tableName: string;
  tableQuery?: string;
  tableId?: string;
  column?: string;
}

const getTableData = ({
  tableName,
  tableId,
  tableQuery,
  column = "*",
}: tableParams) => {
  return async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const client = new BigQuery({
        keyFilename,
      });
      let query = ``;

      if (!column || column === "*") {
        query += `SELECT *`;
      } else {
        query += `SELECT ${column}`;
      }

      query += ` FROM lens-public-data.polygon.${tableName}`;

      if (tableQuery) {
        query += ` AND ${tableQuery}`;
      }

      if (tableId) {
        query += ` WHERE ${tableId} = '${id}'`;
      }

      const options = {
        query: query,
        location: "US",
      };

      console.log(query);

      const [rows] = await client.query(options);

      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
};

export default getTableData;

/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const { AIRTABLE_ID, AIRTABLE_KEY } = process.env;

axios.defaults.baseURL = `https://api.airtable.com/v0/${AIRTABLE_ID}/LandingEmail`;
axios.interceptors.request.use(async (config) => {
  if (!config.headers["Authorization"]) {
    config.headers["Authorization"] = `Bearer ${AIRTABLE_KEY}`;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const post = await axios.post("/", {
        records: [req.body],
      });
      res.status(200).json({ success: true, data: post.data });
    }
  } catch (e) {
    res.status(500).json({ error: true });
  }
};

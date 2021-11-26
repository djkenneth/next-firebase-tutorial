import { NextApiRequest, NextApiResponse } from "next";

export default function getPeople(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json([{ name: "Kenneth" }, { name: "Pineda" }]);
  } else {
    res.status(500).json({ message: "There is server error" });
  }
}

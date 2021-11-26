import { NextApiRequest, NextApiResponse } from "next";

export default function getVehicleById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json({ message: "getVehicleById", id: req.query.id });
  } else {
    res.status(500).json({ message: "There is server error" });
  }
}

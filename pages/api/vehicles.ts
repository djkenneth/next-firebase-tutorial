import { NextApiRequest, NextApiResponse } from "next";

export default function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json({ message: "getAllVehicles" });
  } else {
    res.status(500).json({ message: "There is server error" });
  }
}

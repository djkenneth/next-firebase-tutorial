import { NextApiRequest, NextApiResponse } from "next";

export default function getAllVehicleByPersonId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res
      .status(200)
      .json({ message: "getAllVehicleByPersonId", id: req.query.id });
  } else {
    res.status(500).json({ message: "There is server error" });
  }
}

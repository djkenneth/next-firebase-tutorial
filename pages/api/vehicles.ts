import { NextApiRequest, NextApiResponse } from "next";

export default function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res
      .status(200)
      .json([
        { name: "Bike" },
        { name: "Car" },
        { name: "Motor" },
        { name: "Truck" },
      ]);
  } else {
    res.status(500).json({ message: "There is server error" });
  }
}

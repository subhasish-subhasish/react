import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Form, { IForm } from "@/models/Form";

type ResponseData =
  | { success: true; data: IForm }
  | { success: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect(); // ensure DB connected

  if (req.method === "POST") {
    try {
      const formData = await Form.create(req.body); // save to DB
      res.status(200).json({ success: true, data: formData });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res
      .status(405)
      .json({ success: false, error: "Only POST requests are allowed" });
  }
}

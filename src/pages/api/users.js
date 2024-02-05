// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { RandomUser } from "@/utils/dummyData";

const handler = (req, res) => {
  res.status(200).json(RandomUser);
};
export default handler;

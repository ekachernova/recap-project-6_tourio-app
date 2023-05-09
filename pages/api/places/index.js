import dbConnect from "db/connect";
import Location from "db/models/Location";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const locations = await Location.find();
    return response.status(200).json(locations);
  }
}

// import { places } from '../../../lib/db';
// export default function handler(request, response) {
//   return response.status(200).json(places);
// }

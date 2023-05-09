import dbConnect from "db/connect";
import Place from "db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const place = await Place.findById(id);
    return response.status(200).json(place);
  }
}

// import { places } from '../../../../lib/db.js';

// export default function handler(request, response) {

//   if (!id) {
//     return;
//   }

//   const place = places.find((place) => place.id === id);

//   if (!place) {
//     return response.status(404).json({ status: 'Not found' });
//   }

//   response.status(200).json(place);
// }

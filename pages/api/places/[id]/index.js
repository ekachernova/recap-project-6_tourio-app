import dbConnect from "db/connect";
import Place from "db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const place = await Place.findById(id);
    return response.status(200).json(place);
  }
  if (request.method === "PUT") {
    const placeToUpdate = await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(placeToUpdate);
    // response.status(200).json({ status: "Successfully updated!" });
  }
  if (request.method === "DELETE") {
    const placeToDelete = await Place.findByIdAndDelete(id);
    response.status(200).json(placeToDelete);
    // response.status(200).json({ status: "Successfully deleted!" });
  }
}

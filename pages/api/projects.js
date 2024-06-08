import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("portfolioDB");
  switch (req.method) {
    // case "POST":
    //   let bodyObject = JSON.parse(req.body);
    //   await db
    //     .collection("projects")
    //     .insertOne({ message: `The ${bodyObject.name} page was viewed` });
    //   res.status(200).send("Success")
    //   break;
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let sort = bodyObject.sort;
      const projects = await db
        .collection("projects")
        .find({})
        .sort({ date: sort })
        .toArray();
      res.status(200).json(projects);
      break;
  }
}
// portfolioDB.projects

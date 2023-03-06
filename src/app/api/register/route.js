import { User } from "../../../models/User";
import mongoose from "mongoose";

export async function POST(req) {
    const body = await req.json();
    console.log(body);
    mongoose.connect(process.env.MONGO_URL);
    const createdUser = await User.create(body);
    console.log(createdUser);

    return Response.json(createdUser);
}

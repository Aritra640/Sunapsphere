import { Add, DeleteById } from "@/lib/test_queries";
import { NextResponse } from "next/server";

let id: string = "";

export async function GET() {
  try {
    const user = await Add("test_user");
    if (!user) {
      console.log("could not add data in database!");
      throw "Error: could not add user!";
    }

    id = user.id;
    return NextResponse.json({
      message: "data successfully added",
      id: user.id,
    });
  } catch (err) {
    console.log("error: ", err);

    return NextResponse.json({ message: "data could not be added!" });
  }
}

export async function DELETE() {
  try {
    const user = await DeleteById(id);
    if (!user) {
      console.log("could not delete data in the database!");
      throw "Error: could not delete data in the database";
    }

    return NextResponse.json({ message: "data has deleted successfully!" });
  } catch (err) {
    console.log("error: ", err);

    return NextResponse.json({ message: "data deletion failed!" });
  }
}


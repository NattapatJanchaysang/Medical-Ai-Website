import { currentUser } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    const user = await currentUser();

    //Check if User Already Exist

    //If not Create New User
}
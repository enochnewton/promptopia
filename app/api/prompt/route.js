import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async req => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return NextResponse.json(prompts, { status: 200 });
  } catch (error) {
    return NextResponse.error("failed to connect", { status: 500 });
  }
};

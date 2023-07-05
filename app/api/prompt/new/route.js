import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const POST = async req => {
  const { prompt, userId, tag } = await req.json();

  try {
    await connectToDB();

    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return NextResponse.json(newPrompt, { status: 201 });
  } catch (error) {
    return NextResponse.error(error, { status: 500 });
  }
};

import { NextResponse } from "next/server";
import { mockData } from "./mockdata";

export const GET = async (request) => {
  return new NextResponse(JSON.stringify(mockData[0]), { status: 200 });
};
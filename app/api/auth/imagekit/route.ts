import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!, privateKey:process.env.IMAGEKIT_PRIVATE_KEY!, urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL! });
export async function GET() {
  console.log("--->",urlEndpoint,privateKey,publicKey)
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
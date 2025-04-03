import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });
console.log(urlEndpoint,privateKey,publicKey)
export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
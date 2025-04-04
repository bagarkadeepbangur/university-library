import ImageKit from "imagekit";
import config from "@/lib/config";
// import { NextResponse } from "next/server";
const allowedOrigin = "https://university-library-eoiywvfdt-arkadeep-bags-projects.vercel.app";
const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

// console.log("--->",urlEndpoint,privateKey,publicKey,process.env.NEXT_PUBLIC_IMAGEKIT_URL!)
const imagekit = new ImageKit({ publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!, privateKey:process.env.IMAGEKIT_PRIVATE_KEY!, urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL! });
export async function GET() {

  // return NextResponse.json(imagekit.getAuthenticationParameters());

  const authParams =imagekit.getAuthenticationParameters()

  return new Response(JSON.stringify(authParams), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}

// Handle OPTIONS (preflight)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
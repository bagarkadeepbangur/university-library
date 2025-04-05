import ImageKit from "imagekit";
import config from "@/lib/config";
// import { NextResponse } from "next/server";
// const allowedOrigin = "https://university-library-eoiywvfdt-arkadeep-bags-projects.vercel.app";
const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

// console.log("--->",urlEndpoint,privateKey,publicKey,process.env.NEXT_PUBLIC_IMAGEKIT_URL!)
const imagekit = new ImageKit({ publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!, privateKey:process.env.IMAGEKIT_PRIVATE_KEY!, urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL! });

function getRequestOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return origin || "*";
}
export async function GET(request: Request) {

  // return NextResponse.json(imagekit.getAuthenticationParameters());
  const origin = getRequestOrigin(request);
  const authParams =imagekit.getAuthenticationParameters()
  console.log("oririn--->",origin)
  return new Response(JSON.stringify(authParams), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}

// Handle OPTIONS (preflight)
export async function OPTIONS(request: Request) {
  const origin = getRequestOrigin(request);
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
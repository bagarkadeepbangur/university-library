import ImageKit from "imagekit";
import config from "@/lib/config";
// import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'
// const allowedOrigin = "https://university-library-eoiywvfdt-arkadeep-bags-projects.vercel.app";
const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

// console.log("--->",urlEndpoint,privateKey,publicKey,process.env.NEXT_PUBLIC_IMAGEKIT_URL!)
// const imagekit = new ImageKit({ publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!, privateKey:process.env.IMAGEKIT_PRIVATE_KEY!, urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL! });

// function getRequestOrigin(request: Request) {
//   const origin = request.headers.get("origin");
//   return origin || "*";
// }
// export async function GET(request: Request) {

//   // return NextResponse.json(imagekit.getAuthenticationParameters());
//   const origin = getRequestOrigin(request);
//   const authParams =imagekit.getAuthenticationParameters()
//   console.log("oririn--->",origin)
//   return NextResponse.json(authParams, {
//     status: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Content-Type": "application/json",
//     },
//   });
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('ImageKit API Hit:', req.method)
  res.setHeader('Access-Control-Allow-Origin', '*') // or your domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  const imagekit = new ImageKit({ publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!, privateKey:process.env.IMAGEKIT_PRIVATE_KEY!, urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL! });
  const authParams = imagekit.getAuthenticationParameters()
  return res.status(200).json(authParams)
}
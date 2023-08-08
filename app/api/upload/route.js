// import { writeFile } from 'fs/promises'
// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(request: NextRequest) {
//   const data = await request.formData()
//   const file: File | null = data.get('file') as unknown as File

//   if (!file) {
//     return NextResponse.json({ success: false })
//   }

//   const bytes = await file.arrayBuffer()
//   const buffer = Buffer.from(bytes)

//   const path = `public/uploads/${file.name}`
//   await writeFile(path, buffer)
//   console.log(`open ${path} to see the uploaded file`)

//   return NextResponse.json({ success: true })
// }

import fs from 'fs/promises'; // Make sure to import fs

export const POST = async (request) => {
  const data = await request.formData();
  const file = data.get('file');

  if (!file) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `public/uploads/${file.name}`;
  await fs.mkdir('public/uploads', { recursive: true }); // Ensure directory exists

  try {
    await fs.writeFile(path, buffer);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error writing file:', error);

    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

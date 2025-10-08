import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

export async function POST(request: NextRequest) {
  console.log('Received upload request');
  try {
    const data = await request.formData();
    console.log('Form data:', data);
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      console.log('No file found in form data');
      return NextResponse.json({ success: false, error: 'No file found' });
    }

    console.log('File found:', file.name);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), 'public', 'uploads', file.name);
    console.log('Writing file to:', path);

    await writeFile(path, buffer);
    console.log(`File written successfully: ${path}`);

    return NextResponse.json({ success: true, path: `/uploads/${file.name}` });
  } catch (error) {
    console.error('Error in upload route:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' });
  }
}

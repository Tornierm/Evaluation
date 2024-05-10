import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../drizzle/db'
import { Submissions } from '../drizzle/schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    
    try {

        // Parse incoming request JSON
        const body = await request.json()
        console.log("body")

        console.log(body)

        // Insert data into the database using Drizzle
        const result = await db.insert(Submissions).values(
            body
        ).returning();
        console.log("result")

        console.log(result)

    
        // Respond with the newly created record
        return NextResponse.json({ data: result[0] });
    } catch (error) {
        // Handle any errors that occur
        let errorMessage = 'An unknown error occurred';
    
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log("error")

        console.log(error)


        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
    
}

export async function GET() {
    try {
      // Fetch all records from the UserTable
      const result = await db.select().from(Submissions);

      // Return the data as JSON
      return NextResponse.json({ data: result });
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Error:', error);
  
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
  
      // Return a JSON response with the error message
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  }
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest, res: NextResponse) {
	// Your middleware logic goes here

	// Return the response or call the next middleware
	return NextResponse.next();
}

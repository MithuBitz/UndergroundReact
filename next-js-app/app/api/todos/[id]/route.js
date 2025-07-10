import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/mongodb";
import Todo from "@/models/Todo";

export async function GET(request, context) {
    try {
        // It can be updated by next js so always check the documentaion 
        const {id} = await context.params
        await connectToDatabase()

        

    } catch (error) {
        
    }
}
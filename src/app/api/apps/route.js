import dbConnect from "@/db/dbConnect"
import { NextResponse } from 'next/server'
import App from '@/models/app'


export async function GET(req, res){
    await dbConnect()

    try {
        const apps = await App.find({})
        return NextResponse.json(apps)
    } catch (e) {
        console.log(e);
        return NextResponse.json({error: 'returning projects'}, {status: 500})
    }
}
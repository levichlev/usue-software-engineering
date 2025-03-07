import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    const {lastname, experience} = await request.json()
    const applicant = await prisma.applicant.create({
        data: { lastname, experience }
    });
    return NextResponse.json(applicant)
}

export async function GET() {
    const applicants = await prisma.applicant.findMany()
    return NextResponse.json(applicants)
}
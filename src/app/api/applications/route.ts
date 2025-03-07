import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    const {applicant_id, vacancy_id, status} = await request.json()
    const application = await prisma.application.create({
        data: {
            applicant_id, vacancy_id, status,
        },
    })
    return NextResponse.json(application)
}

export async function GET() {
    const applications = await prisma.application.findMany({
        include: {
            applicant: true,
            vacancy: true,
        },
    })
    return NextResponse.json(applications)
}
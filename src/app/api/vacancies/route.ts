import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    const {title, requirements} = await request.json()
    const vacancy = await prisma.vacancy.create({
        data: {title, requirements},
    })
    return NextResponse.json(vacancy)
}

export async function GET() {
    const vacancies = await prisma.vacancy.findMany()
    return NextResponse.json(vacancies)
}
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { vacancyReport } from '@prisma/client/sql'

const prisma = new PrismaClient()

export async function GET() {
    const report = await prisma.$queryRawTyped(vacancyReport())

    return NextResponse.json(report)
}
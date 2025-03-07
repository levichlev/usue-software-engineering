import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { applicantReport } from '@prisma/client/sql'

const prisma = new PrismaClient()

export async function GET() {
    const report = await prisma.$queryRawTyped(applicantReport())

    return NextResponse.json(report)
}
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface IParams extends Promise<any> {
    id: string
}

export async function PUT(request: Request, {params}: { params: IParams }) {
    const {id} = params
    const {status} = await request.json()

    try {
        // Обновляем статус заявки в базе данных
        const updatedApplication = await prisma.application.update({
            where: {id: parseInt(id)},
            data: {status},
        })

        return NextResponse.json(updatedApplication)
    } catch (error) {
        return NextResponse.json({error: 'Failed to update application'}, {status: 500})
    }
}
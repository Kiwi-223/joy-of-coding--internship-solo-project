import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request:NextRequest, { params }: { params: { id: string }}) {
    const task = await prisma.task.findUnique({
        where: {
          id: (parseInt(params.id)),
        },
      })
    return NextResponse.json(task)
}
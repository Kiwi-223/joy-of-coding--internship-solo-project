import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request:NextRequest) {
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}

export async function DELETE (request:NextRequest, { params }: { params: { id: string } }) {
    const deleteTask = await prisma.task.delete({
        where: {
          id: parseInt(params.id),
        },
      })
      return NextResponse.json(deleteTask)
}

// export async function PATCH(request:NextRequest, { params }: { params: { id: string } }) {
    
// }
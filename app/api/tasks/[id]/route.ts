import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request:NextRequest, { params }: { params: { id: string }}) {
    const task = await prisma.task.findUnique({
        where: {
          id: (parseInt(params.id)),
        },
      })
    if (!task){
      return NextResponse.json("Task not found", {status: 404})
    }
    return NextResponse.json(task)
}

export async function DELETE(request:NextRequest, { params }: { params: { id: string }}) {
  const task = await prisma.task.findUnique({
    where: {
      id: (parseInt(params.id)),
    },
  })
  if (!task){
    return NextResponse.json("Task not found", {status: 404})
  }

  const deleteTask = await prisma.task.delete({
      where: {
        id: parseInt(params.id),
      },
    })
   
    return NextResponse.json(deleteTask)
}

export async function PATCH(request:NextRequest, { params }: { params: { id: string } }) {
  const editTask = await prisma.task.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      id: parseInt(params.id),
    }
  })
  return NextResponse.json(editTask)
}
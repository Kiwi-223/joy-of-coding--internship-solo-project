import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request:NextRequest) {
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}

export async function POST(request:NextRequest) {
      
    const body = await request.json()
    
    const newTask = await prisma.task.create({
      data: {
        title: body.title,
        description: body.description,
        priority: body.priority,
        dueDate: body.dueDate
      },
    })
    return NextResponse.json(newTask)
  }
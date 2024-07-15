import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request:NextRequest) {
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}
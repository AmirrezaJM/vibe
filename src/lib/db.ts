import { PrismaClient } from '@/generated/prisma'

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}


// global not effected by hotreload
const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
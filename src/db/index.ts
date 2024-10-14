import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.snipeet.create({
    data: {
        title: 'Title',
        code: 'const a = () => {}'
    }
})
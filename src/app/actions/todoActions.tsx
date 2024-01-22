'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "@/utils/prisma"

export async function create(formData: FormData) {
    const input = formData.get("input") as string

    try {
        await prisma.todo.create({
            data: {
            title: input
            }
        });
        console.log('Todo created successfully!');
    } catch (error) {
        console.error('Error creating todo:', error);
        // Handle the error as needed, you might want to throw or log it
    }
}
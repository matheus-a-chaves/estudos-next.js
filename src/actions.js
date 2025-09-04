"use server"
import { redirect } from "next/navigation";
import { db } from "./db";

export async function deleteTodo(formData) {
    const id = Number(formData.get("id"));

    await db.todo.deleteMany(
        {
            where: { id }
        }
    );
    redirect("/")
}

export async function addTodo(formData) {
    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");
    const status = "pendente"

    await db.todo.create({
        data: {
            titulo,
            descricao,
            status
        }
    })
    redirect("/")
}

export async function findTodoById(id) {

    return db.todo.findFirst({
        where: { id }
    });
}

export async function updateTodo(formState, formData) {

    const id = Number(formData.get("id"));
    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");

    try {
        if (titulo.length < 5) {
            return {
                errors: "O titulo precisa ter mais de 5 caracteres"
            }
        }
        if (descricao.length < 10) {
            return {
                errors: "A descricao precisa ter mais de 10 caracteres"
            }
        }
        // throw new Error("Falha ao salvar dados, sistema offline")
        await db.todo.update({
            where: { id },
            data: {
                titulo,
                descricao,
            }
        })
        redirect("/")
    } catch (error) {
        return {
            errors: error.message
        }
    }
}

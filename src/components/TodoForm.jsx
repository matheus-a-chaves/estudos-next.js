"use client"
import { updateTodo } from "@/actions";
import { useActionState } from "react";

const TodoForm = ({ todo }) => {

    const [formState, action] = useActionState(updateTodo, { errors: "" });


    return (
        <form action={action} className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
            <input
                type="hidden"
                name="id"
                defaultValue={todo.id}
            />

            {formState.errors ? (
                <div className="flex text-gray-600 font-light">
                    <p className="text-red-500 font-light block px-2 text-2xl">*</p>
                    {formState.errors}
                </div>
            ) : ""}
            <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="titulo"
            >
                Título
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Insira o título"
                    required
                    className="mt-1 px-4 border border-gray-300 rounded-md w-full"
                    defaultValue={todo.titulo}
                />
            </label>
            <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="descricao">
                Descricao
                <textarea
                    type="text"
                    id="descricao"
                    name="descricao"
                    placeholder="Descreva a tarefa"
                    required
                    className="mt-1 px-4 border border-gray-300 rounded-md w-full h-32"
                    defaultValue={todo.descricao}
                ></textarea>
            </label>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Atualizar
            </button>
        </form>
    )
}

export default TodoForm
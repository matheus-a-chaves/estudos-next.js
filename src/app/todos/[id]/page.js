import { db } from '@/db';
import { notFound } from 'next/navigation';

const TodoShow = async ({ params }) => {
    await new Promise((a => setTimeout(a, 2000)))

    const id = Number(params.id);
    const todo = await db.todo.findFirst({
        where: { id }
    });
    if (!todo) return notFound();

    return (
        <div>
            <h1>Todo {todo.titulo}</h1>
        </div>
    )
}

export default TodoShow
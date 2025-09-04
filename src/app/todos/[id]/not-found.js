import Link from "next/link"

const TodoNotFound = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold ">Página não encontada</h1>
            <Link href={"/"}>Voltar para Home</Link>
        </div>

    )
}

export default TodoNotFound
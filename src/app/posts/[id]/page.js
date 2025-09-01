
const PostPage = ({ params }) => {
    const id = params.id;

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <h1>Titulo: {id}</h1>
        </div>
    )
}

export default PostPage
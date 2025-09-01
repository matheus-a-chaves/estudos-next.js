import Link from "next/link";

const PostsPage = () => {
    const postsId = [1, 2, 3];
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <h1>Blog</h1>
            <ul>
                {postsId.map(id => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>Ver post {id}</Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default PostsPage
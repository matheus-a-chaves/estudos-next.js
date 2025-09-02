import { redirect } from "next/navigation";

const ProfilePage = () => {
    //logado = true, deslogado = false
    const user = false;

    if (!user) {
        redirect('/')
    }
    return (
        <div>ProfilePage</div>
    )
}

export default ProfilePage
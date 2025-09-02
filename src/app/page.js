import BotaoRedirect from '@/components/BotaoRedirect';
import { encrypt } from '@/util/encryption';
import Link from "next/link";

export default function Home() {
  const valorParamCriptografado = encrypt("123");
  return (

    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Home
      <Link href="/sobre">Sobre</Link>
      <Link href="/posts">Posts</Link>
      <Link href={`/exemplo?params=${valorParamCriptografado}`}>Pagina com parametro</Link>
      <Link href="/produtos/categorias/roupas">Ir para produtos</Link>
      <Link href="/dashboard">DashBoard</Link>
      <BotaoRedirect />
    </div>
  );
}

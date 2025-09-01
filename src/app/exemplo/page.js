'use client';
import { decrypt } from '@/util/encryption';
import { useSearchParams } from "next/navigation";

const ExemploPage = () => {
    const searchParams = useSearchParams();
    const valorParam = decrypt(searchParams.get('params'))
    const valorParamHas = searchParams.has('param')
    return (
        <div>O parametro é {valorParam},
            {valorParamHas ? " Tem has" : " Não tem nada"}
        </div>
    )
}

export default ExemploPage
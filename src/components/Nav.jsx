'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathName = usePathname();
    return (
        <div>
            <ul>
                <li>
                    <Link className={`link ${pathName === "/" ? "active" : ""}`}
                        href={'/'}>Home</Link>
                </li>
                <li>
                    <Link className={`link ${pathName === "/sobre" ? "active" : ""}`}
                        href={'/sobre'}>Sobre</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
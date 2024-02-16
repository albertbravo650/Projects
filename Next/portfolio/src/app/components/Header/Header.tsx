import styles from '@/app/components/Header/header.module.css'
import './header.css';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.bar}>
            <div className='logo'>
                <Link href={'/'} className={`text-xl font-semibold logoAB`}>AB</Link>
            </div>
            <nav className='links'>
                <Link href={'/about'}><button className='topButton'>About</button></Link>
                <Link href={'/portfolio'}><button className='topButton'>Portfolio</button></Link>
                <Link href={'/contact'}><button className='topButton'>Contact</button></Link>
            </nav>
        </div>
    )
}
import Link from 'next/link';
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className='bar'>
            <div>
                <Link href={'https://www.linkedin.com/in/albertbravo/'}>
                    <button className="sideButton" data-text="Awesome">
                        <span className="actual-text">&nbsp;LinkedIn&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;LinkedIn&nbsp;</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link href={'https://github.com/albertbravo650'}>
                    <button className="sideButton" data-text="Awesome">
                        <span className="actual-text">&nbsp;GitHub&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;GitHub&nbsp;</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}
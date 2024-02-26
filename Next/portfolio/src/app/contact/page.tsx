import React from 'react'
import Link from 'next/link';
import './contact.css'

export default function Contact() {
    return (
        <div className='mid'>
            <div className="hero-text">
                <h1 className="text-4xl font-bold mt-4">Contact</h1>
                <div className='info'>
                    <p className='mb-5'>Email:<span className='ml-5'>abduarte20@gmail.com</span></p>
                    <p className='mb-5'>LinkedIn:
                        <Link href={'https://www.linkedin.com/in/albertbravo/'}>
                            <button className="contactButton ml-5" data-text="LinkedIn">click to visit my LinkedIn</button>
                        </Link>
                    </p>
                    <p className='mb-5'>GitHub:
                        <Link href={'https://www.linkedin.com/in/albertbravo/'}>
                            <button className="contactButton ml-5" data-text="LinkedIn">click to visit my GitHub</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

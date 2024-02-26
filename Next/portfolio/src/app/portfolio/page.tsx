import React from 'react'
import Card from '../components/Card/Card'
import Image from "next/image";
import Link from 'next/link';
import './portfolio.css'

export default function Portfolio() {
    return (
        <div className='mid'>
            <div className="hero-text">
                <h1 className="topPort text-4xl font-bold mt-4">Portfolio</h1>
            </div>
            <Card>
                <div className='portCard mb-20'>
                    <div className='portImages'>
                        <Image
                            src="/simpleTask.png"
                            alt="SF"
                            width={400}
                            height={200}
                            className="simpleTask">
                        </Image>
                        <Image
                            src="/simpleTask2.png"
                            alt="SF"
                            width={400}
                            height={200}
                            className="simpleTask">
                        </Image>
                        <Image
                            src="/simpleTask3.png"
                            alt="SF"
                            width={400}
                            height={200}
                            className="simpleTask">
                        </Image>
                    </div>
                    <div className='portInfo'>
                        <h1 className='mt-5 mb-10 text-4xl'>Simple Task Management App</h1>
                        <h1 >
                            One of my first projects, a simple task management app using Docker and MERN technologies 
                            which include Mongoose, Express, React and Node.js. Also has validation for not allowing blank submissions, 
                            and uses bootstrap CSS.
                        </h1>
                        <Link href={'https://github.com/albertbravo650/Projects/tree/main/MERN/TaskManagement'}>
                            <button className="portButton mt-10" data-text="Task App Repo">GitHub repo</button>
                        </Link>
                    </div>
                </div>
                <div className='portCard mb-15'>
                    <div className='portImages'>
                        <Image
                            src="/taskApp.png"
                            alt="SF"
                            width={400}
                            height={200}
                            className="simpleTask">
                        </Image>
                        <Image
                            src="/taskApp2.png"
                            alt="SF"
                            width={400}
                            height={200}
                            className="simpleTask">
                        </Image>
                        <Image
                            src="/taskApp3.png"
                            alt="SF"
                            width={400}
                            height={200}
                            className="simpleTask">
                        </Image>
                    </div>
                    <div className='portInfo'>
                        <h1 className='mt-5 mb-10 text-4xl'>Simple Task Management App</h1>
                        <h1 >
                            One of my first projects, a simple task management app using Docker and MERN technologies 
                            which include Mongoose, Express, React and Node.js. Also has validation for not allowing blank submissions, 
                            and uses bootstrap CSS.
                        </h1>
                        <Link href={'https://github.com/albertbravo650/Projects/tree/main/MERN/TaskManagement'}>
                            <button className="portButton mt-10" data-text="Task App Repo">GitHub repo</button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    )
}

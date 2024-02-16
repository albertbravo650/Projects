import Image from "next/image";
import './about.css';
import Card from '../components/Card/Card';
// import LottieAnimation from '../components/LottieAnimation/LottieAnimation.js';

export default function About() {
    return (
        <div className='mid'>
            <div className="hero-text">
                <h1 className="text-4xl font-bold mt-4">About</h1>
            </div>
            <Image
                src="/goldengate.jpg"
                alt="SF"
                width={500}
                height={400}
                className="aboutImg"
            ></Image>
            <Card>
                <h1 className='text-center mt-5 mb-10 text-4xl'>Born and Raised in the Bay Area.</h1>
                <p>I am a passionate software engineer based in Mountain View CA. I have a strong background in developing apps/websites
                    and a keen interest in music production and video games. With 4+ years of experience, I've had the privilege to work
                    on a variety of projects, ranging from simple games to full stack applications. I thrive in collaborative environments
                    and enjoy bringing creative solutions to complex problems. When I'm not coding, you can find me making music, working
                    out, exploring new technologies, or enjoying quality time with friends and family.</p>
                <h1 className='text-center mt-20 mb-10 text-4xl'>Why did I choose Software Engineering?</h1>
                <p>Besides being completely engulfed and surrounded by tech giants taking over the Bay Area, I always had an interest 
                    in technology with my first experience being on a blocky windows pc fit with an also blocky monitor that was too heavy 
                    for me to even think about picking up and moving around. I played games such as minesweeper and solitaire, and taught 
                    myself how to install cd software so I can play 3D games such as Backyard Baseball and Magic School Bus games (yes, 
                    kind of nerdy, but I didn't care). I loved challenges and solving problems and even tried taking apart hardware to see 
                    what was inside. I usually ended up getting in trouble but it was worth the curiosity.<br></br> I eventually got into 
                    software programming around high school when I was deciding what career path to take. Being that I was really into 
                    computers and tech, it was pretty easy for me to decide on software engineering. Math and science were my favorite 
                    subjects growing up, but I pretty much developed an interest in everything from astronomy, to history, and especially 
                    music. I believe in the importance of creative thinking especially in problem solving, and my natural love for rhythm 
                    and music helped to shape my mindset for remaining open-minded about any situation or task.
                </p>
                <h1 className='text-center mt-20 mb-10 text-4xl'>My Skills</h1>
                <div className='skillCard mb-5'>
                    {/* <LottieAnimation></LottieAnimation> */}
                    <Image src="/HTML-icon.gif" alt='HTML' width={100} height={100}></Image>
                    <Image src="/CSS-icon.gif" alt='CSS' width={100} height={100}></Image>
                    <Image src="/JS-icon.gif" alt='JS' width={90} height={100}></Image>
                    <Image src="/React-icon.gif" alt='React' width={70} height={100} className="ml-4"></Image>
                    <Image src="/Git-icon.gif" alt='Git' width={125} height={100} className="mt-4"></Image>
                    <Image src="/Mongo-icon.gif" alt='Mongo' width={100} height={100} className="mongo"></Image>
                    <Image src="/Docker-icon.gif" alt='Docker' width={120} height={100} className="docker mt-4"></Image>
                    <Image src="/MySQL-icon.gif" alt='MySQL' width={120} height={100} className="mysql mt-4"></Image>
                </div>
                <p className="text-center">HTML5, CSS3, JavaScript, Node.js, Next.js, TypeScript, Python, React, MongoDB, Docker, MySQL, Express,
                    Git, GitHub
                </p>
                <h1 className='text-center mt-20 mb-10 text-4xl'>Education</h1>
                <h1 className='text-center mt-20 mb-10 text-4xl'>Interests/Hobbies</h1>
                <p>Sports, music, videogames, traveling</p>
            </Card>
        </div>
    )
}

import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hi.js',
}

// function Counter() {
//   const [counter, setCounter] = useState(0)
// }

const Greeting = () => {
  return <p className='danger'>Hello React</p>;
};

console.log(Greeting());

export default function Home() {
  return (
  <>
    <h1>Home page!</h1>
    <Greeting />
  </>
  )
}

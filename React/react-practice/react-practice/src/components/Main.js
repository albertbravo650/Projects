import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import Button from './Button';
import Form from './Form';
import './Main.css';

const url = "https://pokeapi.co/api/v2/pokemon"

// using props
function NextButton(props) {
    function handleClick() {
        alert('Hello!');
        alert('You clicked a button using props!');
        console.log("You pressed the props button");
    }

    return (
        <button className='button' onClick={handleClick}>{props.text}</button>
    )
}

// using Refs
function Counter(props) {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert(`You clicked ${ref.current} times!`);
        console.log(`You clicked this button ${ref.current} time(s)`)
    }

    return (
        <button onClick={handleClick}>{props.children}</button>
    )
}

// create a stopwatch using ref
function Stopwatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        // resets timer
        setStartTime(Date.now());
        setNow(Date.now());

        // clear interval stops and resets the timer
        clearInterval(intervalRef.current);
        // sets a repeated call set to 10ms
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
        console.log("Timer started");
    }

    function handleStop() {
        // stops the timer
        clearInterval(intervalRef.current);
        console.log("Timer stopped");
    }

    let secondsPassed = 0;
    if(startTime != null && now != null) {
        secondsPassed = (now - startTime)/1000;
    }

    return (
        <>
            <h3>Time passed: {secondsPassed.toFixed(2)}</h3>
            <button onClick={handleStart}>Start Timer</button>
            <button onClick={handleStop}>Stop Timer</button>
        </>
    )
}

export default function Main() {
    const [pokemonImg, setPokemonImg] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    
    useEffect(() => {
        async function getPokemon() {
            try {
                const res = await axios.get(`${url}/4`);
                // console.log(res.data.sprites.front_default);
                setPokemonImg(res.data.sprites.front_default);
                setPokemonName(res.data.name);
            } catch(err) {
                console.log(`Oops theres an error: ${err}`);
            }
            
        }
        getPokemon();
    }, [])

    return (
        <div className='main'>
            <h2>Hello</h2>
            <h2>This pokemon is {pokemonName}</h2>
            <div>
                <img src={pokemonImg} alt={pokemonImg}></img>
            </div>
            <div>
                <Button>This is a Styled Button</Button>
            </div>
            <div>
                <NextButton text={"This is a button using props!"}></NextButton>
            </div>
            <div>
                <Counter>Click Me!</Counter>
            </div>
            <div>
                <Stopwatch></Stopwatch>
            </div>
            <Form></Form>
        </div>
    )
}

// const Button = styled button<{$primary?:boolean}>`
//     background
// `;
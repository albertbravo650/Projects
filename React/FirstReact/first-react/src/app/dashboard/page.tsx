'use client'
import Form from './form' 

export default function Dashboard() {

    const text1 = <p>This is a text element.</p>;

    return(
        <main>
            {text1}
            <Form />
        </main>
    )
}
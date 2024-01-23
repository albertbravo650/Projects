import './Form.css'
import Button from './Button'

export default function Form() {
    return(
        <form onSubmit={e => {
            e.preventDefault();
            alert("Form Submitted!");
            }}>
            <input></input>
            <Button>Submit</Button>
        </form>
    )
}
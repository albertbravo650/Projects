import {useFormInput} from './useFormInput';

export default function Form() {
  const firstNameProps= useFormInput('');
  const lastNameProps = useFormInput('');

  return (
    <div className='form'>
      <h1>Form</h1>
      <form>
        <label>
          First name:
          <input {...firstNameProps} />
        </label>
        <label>
          Last name:
          <input {...lastNameProps} />
        </label>
        <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
        <button>Submit</button>
      </form>
    </div>
    
  );
}
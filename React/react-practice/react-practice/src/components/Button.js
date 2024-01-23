import styled from 'styled-components';

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    &:hover {
        background-color: #BF4F74;
        color: white;
        cursor: pointer;
    }

    &:active {
        transform: scale(0.97);
    }
`;

export default function Button(props) {
    function handleClick() {
        alert('You clicked a styled button!');
        console.log("You pressed the styled button")
    }

    return (
        <StyledButton onClick={handleClick}>
            {props.children}
        </StyledButton>
    )
}
import React from 'react'

const Card = (props) => {
    console.log("Card props: ", props)
    const{data, text} = props;
    return (
        <div>
            Card
            <p>Data z App.jsx: {data}</p>
            <p>TEXT: {text}</p>
        </div>
    )
}

export default Card


export const CardBlue = () => {
    return (
        <div>CardBlue</div>
    )
}

import React from 'react'
import styled from 'styled-components'


const Cell = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:200px;
    
    background-color:skyblue;
    color:indigo;
    margin:0 15px;
    padding:0;
    font-size: 4em;
    
`
const Item = (props) => {
    return (
        <div className="container" key={props.value}>
            <Cell >{props.value}</Cell>
        </div>
    )
}

export default Item

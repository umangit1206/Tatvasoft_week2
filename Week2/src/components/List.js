import React from 'react'
import Title from './Title';
function List(){
    const data1 = [
        {
            id:12002080501070,
            title:"Umang Patel",
            description:"Xyz"
        },
        {
            id:12002080501076,
            title:"Vrutti Patel",
            description:"abc"
        },
        {
            id:12002080501073,
            title:"Vedant Raval",
            description:"xyz"
        }
    ]
    const datalist = data1.map(data2 => (
    <Title data2 = {data2}></Title> ))
    return <div>{datalist}</div>
}

export default List;
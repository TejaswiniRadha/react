import React from 'react'

export default function Map() {
    const arr=[{
        id:1,title:"reactjs"
    },
{id:2,
title:"angular",
description:"fgnkjsdhgkjhs"},
{id:1,
title:"javascript"}]
    return (
        <div>
{
    arr.map((value,index)=><li key={value.id}>{value.id}{value.title}{value.description}</li>
    )
}
          
        </div>
    )
}

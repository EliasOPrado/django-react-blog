import React from 'react'

function List({list, index}) {
    return (
        <div key={index}>
           <div>{list.author}</div>
           <div>{list.title}</div>
           <div>{list.article}</div>
           <div>{list.date}</div>
            
            <br/>
        </div>
    )
}

export default List

import React from 'react'


const List = ({ items }) => {
  return (
    <ul style={{marginTop: '80px'}}>
      {items.map(item => (
        <li key={item.id} >
          {JSON.stringify(item)}
        </li>
      ))}
    </ul>

    
  )
}

export default List
import React from 'react'


const Table = ({ items }) => {
  return (
    <div className='table-container' style={{ marginTop: '80px' }}>
      <table>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              {Object.entries(item).map(([key, value]) => {
                return (
                  <td key={key}>
                    {JSON.stringify(value)}
                  </td>)
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )
}

export default Table
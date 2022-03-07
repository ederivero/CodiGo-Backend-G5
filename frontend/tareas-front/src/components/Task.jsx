import React from 'react'

export const Task = ({nombre, status, fecha_vencimiento}) => {
    
  return (
    <div style={{border: '1px dotted black'}}>
        <h1>{nombre}</h1>
        <h2>{status === 'POR_HACER' ? '📝' : status === 'HACIENDO' ? '⌛' : '✅'}</h2>
        <h3>📆 {fecha_vencimiento}</h3>
    </div>
  )
}

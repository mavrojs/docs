import React from 'react'

export default function Callout({emoji, children}) {
  return (
    <div className='callout'>
      <span>{emoji}{children}</span>
    </div>
  )
}

import React from 'react'

function Footerlist({ title, links }) {
  return (
    <ul className='footer-list'>
        <h2 className='footer-list-title'>{title}</h2>
        {links.map(link=>
        (
            <li className='footer-list-link' key={Math.random()}>{link}</li>
        ))}
    </ul>
  )
}

export default Footerlist
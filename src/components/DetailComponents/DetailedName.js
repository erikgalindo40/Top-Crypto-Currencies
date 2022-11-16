import React from 'react'

function DetailedName({ name, logo, rank, acronym }) {
  return (
    <div className='detailed-name-container'>
      <div className="detailed-name-and-logo">
        <img className='detailed-name-logo' src={logo} alt="Crypto Currency Logo" />
        <h1>{name}</h1>
        <div className='detailed-name-acronym'>{acronym}</div>
      </div>
      <div className="detailed-name-rank">
        Rank #{rank}
      </div>
    </div>
  )
}

export default DetailedName
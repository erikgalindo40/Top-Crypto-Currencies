import React from 'react'

function DetailedAdditionalInfo({ name, value }) {
  return (
    <div className='detailed-additional-info-wrapper'>
        <div className='detailed-additional-info-name'>{name}</div>
        <div className='detailed-additional-info-value'>{value}</div>
    </div>
  )
}

export default DetailedAdditionalInfo
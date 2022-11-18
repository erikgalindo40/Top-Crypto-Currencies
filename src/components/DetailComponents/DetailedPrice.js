import React from 'react'

function DetailedPrice(props) {
  return (
    <div className='detailed-price-container'>
      <span>{props.name} Price ({props.acronym})</span>
      <h1 className='detailed-price-price'>
        ${
          parseFloat(props.price.toFixed(2))>1 || props.price.toFixed(2)==='0.00'
          ? parseFloat(props.price.toFixed(2))<1
            ? new Intl.NumberFormat('en-US', {maximumSignificantDigits:2}).format(props.price)
            : new Intl.NumberFormat('en-US', {maximumFractionDigits:2}).format(props.price)
          : props.price.toFixed(2)
        }
      </h1>
    </div>
  )
}

export default DetailedPrice
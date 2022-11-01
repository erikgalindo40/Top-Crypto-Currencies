import React from 'react'

function CryptoHeader() {
  return (
    <div className='crypto-header'>
        <span className='crypto-header-item'>#</span>
        <span className='crypto-header-item'>Name</span>
        <span className='crypto-header-item'>Price</span>
        <span className='crypto-header-item'>Market Cap</span>
        <span className='crypto-header-item'>Volume(24h)</span>
        <span className='crypto-header-item'>Circulating Supply</span>
    </div>
  )
}

export default CryptoHeader
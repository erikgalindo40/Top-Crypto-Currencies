import React from 'react'

function CryptoHeader() {
  return (
    <div className='crypto-header-container'>
        <div className='crypto-header-name-and-rank'>
            <span>#</span>
            <span>Name</span>
        </div>
        <span>Price</span>
        <span className='crypto-header-item-market-cap'>Market Cap</span>
        <span>Volume(24h)</span>
        <span>Circulating Supply</span>
    </div>
  )
}

export default CryptoHeader
import React from 'react'

function CryptoHeader() {
  return (
    <div className='crypto-header-container'>
        <div className='crypto-header-name-and-rank'>
            <span>#</span>
            <span>Name</span>
        </div>
        <span className='crypto-header-price'>Price</span>
        <span className='crypto-header-market-cap'>Market Cap</span>
        <span className='crypto-header-volume'>Volume(24h)</span>
        <span className='crypto-header-circulating-supply'>Circulating Supply</span>
    </div>
  )
}

export default CryptoHeader
import React from 'react'
import CryptoHeader from './CryptoHeader'
import Cryptocurrency from './Cryptocurrency'

function CryptoContainer() {
  return (
    <div>
        <CryptoHeader />
        <Cryptocurrency/>
    </div>
  )
}
// example
//{crypto.map( crypto => (
//    <Cryptocurrency price={crypto.price} />
//))}

// rank, name, price, market cap, volume and circulating supply

export default CryptoContainer
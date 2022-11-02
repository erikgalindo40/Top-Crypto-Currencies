import React from 'react'
import { useSelector } from 'react-redux'
import CryptoHeader from './CryptoHeader'
import Cryptocurrency from './Cryptocurrency'

function CryptoContainer() {
  const { data } = useSelector( (state) => state.currency )
  
  return (
    <div>
        <CryptoHeader />
        {
          data.map( cryptocurrency => (
            <Cryptocurrency
              rank={data.id}
              name={data.name}
              price={data.market_pairs[0].quote.USD.price}
              marketCap={100000000}
              volume={data.market_pairs[0].quote.USD.volume_24h}
              circulatingSupply={21000000}
            />
          ))
        }
    </div>
  )
}
// example
//{crypto.map( crypto => (
//    <Cryptocurrency price={crypto.price} />
//))}

// rank, name, price, market cap, volume and circulating supply

export default CryptoContainer
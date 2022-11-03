// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import CryptoHeader from './CryptoHeader'
import Cryptocurrency from './Cryptocurrency'
// import { getAsyncData } from '../features/currency/currencySlice'
import { Link } from 'react-router-dom'

function CryptoContainer() {
  // const { data } = useSelector( (state) => state.currency )
  // const dispatch=useDispatch()

  // dispatch(getAsyncData())
  
  return (
    <div>
        <CryptoHeader />
        {
          // data.map( cryptocurrency => (
          //   <Cryptocurrency
          //     rank={data.id}
          //     name={data.name}
          //     price={data.market_pairs[0].quote.USD.price}
          //     marketCap={100000000}
          //     volume={data.market_pairs[0].quote.USD.volume_24h}
          //     circulatingSupply={21000000}
          //   />
          // ))
        }
        <Cryptocurrency/>
        <Link to='/test'>Go To Test Page</Link> 
    </div>
  )
}
// example
//{crypto.map( crypto => (
//    <Cryptocurrency price={crypto.price} />
//))}

// rank, name, price, market cap, volume and circulating supply

export default CryptoContainer
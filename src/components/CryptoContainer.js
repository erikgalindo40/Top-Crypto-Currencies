import { useSelector } from 'react-redux'
import CryptoHeader from './CryptoHeader'
import Cryptocurrency from './Cryptocurrency'
import { Link } from 'react-router-dom'

function CryptoContainer() {
  const { data } = useSelector( (state) => state.currency )
  
  return (
    <div>
        <CryptoHeader />
        {
          Object.keys(data).map(cryptocurrency=> (
            <Cryptocurrency
              logo={data[cryptocurrency][0].logo} 
              rank={data[cryptocurrency][0].cmc_rank}
              name={data[cryptocurrency][0].name}
              acronym={data[cryptocurrency][0].symbol}
              price={data[cryptocurrency][0].quote.USD.price}
              marketCap={data[cryptocurrency][0].quote.USD.market_cap}
              volume={data[cryptocurrency][0].quote.USD.volume_24h}
              circulatingSupply={data[cryptocurrency][0].circulating_supply}
            />
          ))
        }
        {/* <Cryptocurrency/> */}
        <Link to='/test'>Go To Test Page</Link> 
    </div>
  )
}

// rank, name, price, market cap, volume and circulating supply

export default CryptoContainer
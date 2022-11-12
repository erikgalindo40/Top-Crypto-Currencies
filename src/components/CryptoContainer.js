import { useSelector } from 'react-redux'
import CryptoHeader from './CryptoHeader'
import Cryptocurrency from './Cryptocurrency'
import { Link } from 'react-router-dom'

function CryptoContainer() {
  const { filteredData } = useSelector( (state) => state.currency )
  
  return (
    <div>
        <CryptoHeader />
        {
          Object.keys(filteredData).map(cryptocurrency=> (
            <Cryptocurrency
              logo={filteredData[cryptocurrency][0].logo} 
              rank={filteredData[cryptocurrency][0].cmc_rank}
              name={filteredData[cryptocurrency][0].name}
              acronym={filteredData[cryptocurrency][0].symbol}
              price={filteredData[cryptocurrency][0].quote.USD.price}
              marketCap={filteredData[cryptocurrency][0].quote.USD.market_cap}
              volume={filteredData[cryptocurrency][0].quote.USD.volume_24h}
              circulatingSupply={filteredData[cryptocurrency][0].circulating_supply}
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
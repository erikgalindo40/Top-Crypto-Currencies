import { useSelector } from 'react-redux'
import CryptoHeader from './CryptoHeader'
import Cryptocurrency from './Cryptocurrency'

function CryptoContainer() {
  const { filteredData } = useSelector( (state) => state.currency )
  
  return (
    <div>
        <CryptoHeader />
        {
          Object.keys(filteredData).map((cryptocurrency, index)=> (
            <Cryptocurrency
              key={index}
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
    </div>
  )
}

export default CryptoContainer
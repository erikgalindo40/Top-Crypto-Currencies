import { useSelector } from 'react-redux'
import CryptoHeader from './CryptoHeader'
import Cryptocurrency from './Cryptocurrency'

function CryptoContainer() {
  const { filteredData } = useSelector( (state) => state.currency )
  
  return (
    <div>
        <CryptoHeader />
        {
          Object.keys(data).map((cryptocurrency, index)=> (
            <Cryptocurrency
              key={index}
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
    </div>
  )
}

export default CryptoContainer
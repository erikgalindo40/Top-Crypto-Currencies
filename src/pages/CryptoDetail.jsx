import { useLocation } from 'react-router-dom'
import DetailedName from '../components/DetailComponents/DetailedName'
import DetailedPrice from '../components/DetailComponents/DetailedPrice'
import DetailedInfoContainer from '../components/DetailComponents/DetailedInfoContainer'

// WHAT DATA CONSISTS OF:
// logo,
// rank,
// name,
// acronym,
// price,
// marketCap,
// volume,
// circulatingSupply
// maxSupply,
// totalSupply
// fullyDilutedMarketCap

function CryptoDetail() {
  const location = useLocation()
  const data = location.state
  
  return (
    <>
    <div className='details-page-container'>
    <DetailedName
    name={data.name}
    logo={data.logo}
    rank={data.rank}
    acronym={data.acronym}
    />
    <DetailedPrice 
    name={data.name}
    acronym={data.acronym}
    price={data.price}
    />
    <DetailedInfoContainer 
    name={data.name}
    logo={data.logo}
    rank={data.rank}
    acronym={data.acronym}
    price={data.price}
    marketCap={data.marketCap}
    volume={data.volume}
    circulatingSupply={data.circulatingSupply}
    maxSupply={data.maxSupply}
    totalSupply={data.totalSupply}
    fullyDilutedMarketCap={data.fullyDilutedMarketCap}
    />
    </div>
    </>
  )
}

export default CryptoDetail
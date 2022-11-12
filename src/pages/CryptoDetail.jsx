import { Link, useLocation } from 'react-router-dom'
import DetailedName from '../components/DetailComponents/DetailedName'
import DetailedPrice from '../components/DetailComponents/DetailedPrice'
import DetailedInfo from '../components/DetailComponents/DetailedInfo'

// WHAT DATA CONSISTS OF:
// logo,
// rank,
// name,
// acronym,
// price,
// marketCap,
// volume,
// circulatingSupply

function CryptoDetail() {
  const location = useLocation()
  const data = location.state
  return (
    <div className='details-page-container'>
    <h1>THIS IS {data.name}'s PAGE</h1>
    <DetailedName />
    <DetailedPrice />
    <DetailedInfo />
    <Link to={'/'}>TO HOME PAGE</Link>
    </div>
  )
}

export default CryptoDetail
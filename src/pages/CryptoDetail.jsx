import { Link, useLocation } from 'react-router-dom'

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
    <>
    <h1>THIS IS {data.name}'s PAGE</h1>
    <Link to={'/'}>TO HOME PAGE</Link>
    </>
  )
}

export default CryptoDetail
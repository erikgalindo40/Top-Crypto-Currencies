// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cryptocurrency({ logo,rank,name,acronym,price,marketCap,volume,circulatingSupply, maxSupply, totalSupply, fullyDilutedMarketCap }) {
  const data={
    logo,
    rank,
    name,
    acronym,
    price,
    marketCap,
    volume,
    circulatingSupply,
    maxSupply,
    totalSupply,
    fullyDilutedMarketCap
  }

  return (
    <div className="crypto-currency-container">
        <span className="currency-name-and-rank">
            <span className="currency-rank">{rank}</span>
            <Link to="/cryptodetail" state={data} className="currency-full-name">
                <div className="currency-names">
                    <img className="currency-logo" src={logo} alt="Bitcoin Logo" />
                    <span>{name}</span>
                    <span className="currency-acronym">{acronym}</span>
                </div>
            </Link>
        </span>
        <span className="currency-price">${price.toFixed(2)}</span>
        <span className="currency-market-cap">${new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(marketCap)}</span>
        <span className="currency-volume">${new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(volume)}</span>
        <span className="currency-circulating-supply-info">{new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(circulatingSupply)}<span className="currency-circulating-supply-acronym">{acronym}</span></span>
    </div>
  )
}

export default Cryptocurrency
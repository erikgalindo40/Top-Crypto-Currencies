// import React from 'react'

function Cryptocurrency({ logo,rank,name,acronym,price,marketCap,volume,circulatingSupply }) {
  return (
    <div className="crypto-currency-container">
        <span className="currency-name-and-rank">
            <span className="currency-rank">{rank}</span>
            <a href="/" className="currency-full-name">
                <div className="currency-names">
                    <img className="currency-logo" src={logo} alt="Bitcoin Logo" />
                    <span>{name}</span>
                    <span className="currency-acronym">{acronym}</span>
                </div>
            </a>
        </span>
        <span className="currency-price">{price.toFixed(2)}</span>
        <span className="currency-market-cap">{marketCap.toFixed(2)}</span>
        <span className="currency-volume">{volume.toFixed(2)}</span>
        <span className="currency-circulating-supply-info">{circulatingSupply.toFixed(2)}<span className="currency-circulating-supply-acronym">{acronym}</span></span>
    </div>
    // rank, name, price, 
    // market cap, volume and circulating supply
  )
}

export default Cryptocurrency
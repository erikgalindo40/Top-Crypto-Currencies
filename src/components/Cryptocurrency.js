// import React from 'react'

function Cryptocurrency() {
  return (
    <div className="crypto-currency-container">
        <span className="currency-name-and-rank">
            <span className="currency-rank">1</span>
            <a href="/" className="currency-full-name">
                <div className="currency-names">
                    <img className="currency-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="Bitcoin Logo" />
                    <span>Bitcoin</span>
                    <span className="currency-acronym">BTC</span>
                </div>
            </a>
        </span>
        <span className="currency-price">$20,469</span>
        <span className="currency-market-cap">$393,112,363,062</span>
        <span className="currency-volume">$40,432,706,209</span>
        <span className="currency-circulating-supply-info">19,195,700 <span className="currency-circulating-supply-acronym">BTC</span></span>
    </div>
    // rank, name, price, 
    // market cap, volume and circulating supply
  )
}

export default Cryptocurrency
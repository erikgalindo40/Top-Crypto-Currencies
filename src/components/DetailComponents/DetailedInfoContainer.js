import React from 'react'
import DetailedInfo from './DetailedInfo'

function DetailedInfoContainer({ acronym, marketCap, volume, circulatingSupply, maxSupply, totalSupply, fullyDilutedMarketCap }) {
  const marketCapInfo={
    title:'Market Cap',
    value: `$${new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(marketCap)}`,
    additionalInfo: false,
  }
  const volumeInfo={
    title:'Volume',
    value: `$${new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(volume)}`,
    additionalInfo:false,
  }
  const circulatingSupplyInfo={
    title:'Circulating Supply',
    value: `$${new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(circulatingSupply)} ${acronym}`,
    additionalInfo: [
      {
        title: 'Max Supply',
        value: maxSupply!=='None'
          ?new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(maxSupply)
          :`--`,
      },
      {
        title: 'Total Supply',
        value: totalSupply!==0
        ? new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(totalSupply)
        :'--',
      }
    ]
  }
  const fullyDilutedMarketCapInfo={
    title:'Fully Diluted Market Cap',
    value: fullyDilutedMarketCap!==0
    ? `$${new Intl.NumberFormat('en-US', {maximumFractionDigits:0}).format(fullyDilutedMarketCap)}`
    : '--',
  }
  
  return (
    <div className='detailed-info-container'>
        <DetailedInfo info={marketCapInfo}/>
        <DetailedInfo info={fullyDilutedMarketCapInfo}/>
        <DetailedInfo info={volumeInfo}/>
        <DetailedInfo info={circulatingSupplyInfo}/>
    </div>
  )
}

//to do grab total supply, max supply, and fully diluted market cap info from api call

export default DetailedInfoContainer
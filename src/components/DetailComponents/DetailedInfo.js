import React from 'react'
import DetailedAdditionalInfo from './DetailedAdditionalInfo'

function DetailedInfo({ info }) {
  // console.log(info)
  
  return (
    <>
    <div className='detailed-info-wrapper'>
      <div className='detailed-info'>
        <div className='detailed-info-name'>{info.title}</div>
        <div className='detailed-info-value'>{info.value}</div>
      </div>
      {info.additionalInfo&&
      <div>
      {info.additionalInfo[0].value!=='--'&&<progress style={{width:'100%'}} max={1} value={parseInt(info.additionalInfo[1].value)/parseInt(info.additionalInfo[0].value).toFixed(3)}></progress>}
      <DetailedAdditionalInfo name={info.additionalInfo[0].title} value={info.additionalInfo[0].value}/>
      <DetailedAdditionalInfo name={info.additionalInfo[1].title} value={info.additionalInfo[1].value}/>
      </div>
      }
    </div>
    </>
  )
}

export default DetailedInfo
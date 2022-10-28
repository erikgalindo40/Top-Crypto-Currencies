// import React from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOneToPairs } from './features/currency/currencySlice'

function App() {
  const { data } = useSelector((state)=>state.currency)
  const dispatch = useDispatch()

  return (
    <>
    <div>{data[0].name}</div>
    <div>{data[0].num_market_pairs}</div>
    <button onClick={()=>dispatch(addOneToPairs())}>Get Name</button>
    </>
  );
}

export default App;

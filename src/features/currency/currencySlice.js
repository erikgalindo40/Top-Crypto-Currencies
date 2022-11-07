
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { cryptocurrencies } from '../../app/CryptoCurrencyData'

const url = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest'

export const getAsyncData = createAsyncThunk('currency/getAsyncData', async () => {
    try {
        const response = await fetch(url, {
            headers: {
                'X-CMC_PRO_API_KEY': '02043e0b-1221-4fe4-89a2-9b870bb7e158'
            }
        })
        return response.json()
    } catch(err) {
        console.log(`---------ERROR HERE---------`,err)
    }
})

const initialState = cryptocurrencies


const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    addOneToPairs(state) {
      state.data[0].num_market_pairs++
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAsyncData.fulfilled, (state, action)=>{
        console.log(`--------SUCCESS IS HERE-------`)
        console.log(`THIS IS STATE`,state)
        console.log(`THIS IS ACTION`,action.payload)
    })
  }
})

export const { addOneToPairs } = currencySlice.actions
export default currencySlice.reducer
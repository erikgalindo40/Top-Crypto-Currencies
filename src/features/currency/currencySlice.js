
import { createSlice } from '@reduxjs/toolkit'
import { cryptocurrencies } from '../../app/CryptoCurrencyData'

const initialState = cryptocurrencies


const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    searchReducer(state, action) {
        let query = action.payload.toLowerCase()
        if ( query ) {
            const asArray = Object.entries(state.data);
            let filtered = asArray.filter( ([key, value]) => {
                    if ( value[0].name.toLowerCase().match(query) || 
                        value[0].symbol.toLowerCase().match(query) || 
                        value[0].slug.toLowerCase().match(query) 
                        ) {
                        return true
                    } else return false
                }
            )
            let obj = Object.fromEntries(filtered);
            state.filteredData = obj
        } else {
            state.filteredData = state.data
        }
    }
  }
})

export const { searchReducer } = currencySlice.actions
export default currencySlice.reducer
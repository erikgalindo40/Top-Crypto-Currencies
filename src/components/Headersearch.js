import { useMemo } from 'react'
import debounce from 'lodash.debounce'

import { useDispatch } from 'react-redux'
import { searchReducer } from '../features/currency/currencySlice'

const Headersearch = props => {
    const dispatch = useDispatch()

    // lodash debounce wraps handleChange event to only fire
    // after waiting period of .5 seconds after previous call to event
    const debouncedHandleChange = useMemo(
        () => {
                const handleChange = e => {
                    dispatch(searchReducer(e.target.value))
                }
                return debounce(handleChange, 500)
            }
    , [dispatch])

    return (
        <form>
            <input 
              type="text" 
              placeholder="Search"
              onChange={debouncedHandleChange}
            />
        </form>
    )
}

export default Headersearch
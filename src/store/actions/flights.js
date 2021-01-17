import { 
    flightsListSuccess,
    isFetchStart,
    isFetchError
} from './actions'
import errorHandler from '../../utils/errorHandler'

export function flightsFetchData(date) {
    return (dispatch) => {
        dispatch(isFetchStart(true))
        dispatch(flightsListSuccess(null))
        dispatch(isFetchError(null))
        fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/${date}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c13f70326cmsh8e2722f893b4104p1ff122jsn59eef51f3095",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status !== 200) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(flights => {
            console.log('fetch', flights)
            dispatch(flightsListSuccess(flights))
        })
        .finally(res => {
            dispatch(isFetchStart(false))
        })
        .catch((err) => {
            console.log(err)
            dispatch(isFetchError(errorHandler(err.message)))
        });
    }
}

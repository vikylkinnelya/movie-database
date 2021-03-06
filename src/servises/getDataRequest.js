const getDataRequest = (searchParam, questionParam, setState, currPage, type = '', year = '', setError, setTotalResults, setLoading, setDetailRequest) => { //гибкий запрос на сервер

  const API_KEY = 'a6a004a3'

  fetch(`https://www.omdbapi.com/?${searchParam}=${questionParam}&page=${currPage}&type=${type.length === 2 ? type = '' : type}&y=${year}&apikey=${API_KEY}`)
    .then(resp => resp.json())
    .then(response => {
      if (response.Response === 'False') {
        setError(response.Error)
        console.log(response.Error)
        throw new Error(response.statusText)
      } else {
        if (searchParam === 's') {
          setState(response.Search)
          setTotalResults(response.totalResults)
        }
        if (searchParam === 'i' && response) {
          setState(response)
        }
      }
      setError(null);
      setLoading(false);
      setDetailRequest(false);
    }).catch(( {message} ) => {
      setLoading(false);
      setError(message);
    })
}

export default getDataRequest
import { useState, useEffect } from 'react'
import { requestAuth } from '../services/RequestService'

export const Request = (props) => {
  const [data, setData] = useState()
  const { urlApi, param } = props

  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    Api()
  }, [])

  function call() {
    Api()
    setLoading(false)
  }

  function Api() {
    if (urlApi !== null) {
      requestAuth('GET', urlApi, data)
        .then(function (response) {
          setData(response.data)
          setPagination(response.headers.pagination)
          setError(false)
        })
        .catch(function (error) {
          setError(true)
        })
        .then(function (res) {
          setLoading(true)
        })
    } else {
      setData(null)
      setError(true)
      setLoading(true)
    }
  }

  return { loading, data, pagination, call, error }
}

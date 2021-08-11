import { useState, useEffect } from 'react'
import axios from 'axios'
import ENV_URL from '../config.js'

// function to fetch data and can be reused given the api url
export const useFetch = (url) => {
  const [element, setElement] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(ENV_URL + url)
        setElement(data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { element, loading, error }
}

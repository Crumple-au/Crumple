import { useState, useEffect } from 'react'
import axios from 'axios'
import ENV_URL from '../config.js'

export const useFetch = (url) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(ENV_URL + url)
      setCategories(data)
    }
    fetchData()
  }, [url])

  return { categories }
}

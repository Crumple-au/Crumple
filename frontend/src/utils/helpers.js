import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url)
      setCategories(data)
    }
    fetchData()
  }, [url])

  return { categories }
}

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

export const bgColors = (type) => {
  switch(type) {
    case 'Drawing and Painting':
      return '#E5E5E5';
      case 'Design and Tech':
      return '#6184C4';
    case 'Merchandise':
      return '#323232';
    case 'Books and Writing':
      return '#F62D01';
    case 'Photography':
      return '#323232';
    case 'Film and Video':
      return '#F62D01';
    case 'Music and Sound Design':
      return '#E5E5E5';
    case 'Crafts and DIY':
      return '#6184C4';
    default:
      return 'white'
  }
};

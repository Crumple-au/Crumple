import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/helpers'

const ArtworkDetails = () => {
  const { id } = useParams()
  const { element } = useFetch(`/api/artworks/${id}`)
  console.log(element)
  return (
    <>
      <h1>ArtworkDetails Page</h1>
      <p>{element.name}</p>
    </>
  )
}

export default ArtworkDetails

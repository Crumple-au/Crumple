import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/helpers'

const Category = () => {
  // const [category, setCategory] = useState([])
  
  const { id } = useParams()
  const { categories } = useFetch(`/api/categories/${id}`)


  
  useEffect(() => {
    // console.log('Categories', categories.name)
    // console.log('ID', id)

    // const newCategory = categories.find((category) => category._id === id)
    // setCategory(newCategory)
    // console.log(newCategory)
  }, [])


  return (
    <>
      <ul key={categories._id}>
        <li>{categories.name}</li>
        <li>{categories.description}</li>
        <img src={categories.image} alt={categories.altName} height="100"></img>
      </ul>
    </>
  )
}

export default Category

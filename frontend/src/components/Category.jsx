import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/helpers'

const Category = () => {
  const [category, setCategory] = useState('')
  const { id } = useParams()
  const { categories } = useFetch('/api/categories')

  console.log(categories)
  console.log(id)

  useEffect(() => {
    // const newCategory = categories.find((category) => category._id === id)
    // setCategory(newCategory.name)
  }, [])

  console.log(category)

  return (
    <>
      <h1>{id}</h1>
    </>
  )
}

export default Category

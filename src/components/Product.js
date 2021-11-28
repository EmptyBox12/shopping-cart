import React from 'react'
import { useParams } from 'react-router'

export default function Product() {
  let {id} = useParams();
  return (
    <div>
      <h1>This is single Product {id}</h1>
    </div>
  )
}

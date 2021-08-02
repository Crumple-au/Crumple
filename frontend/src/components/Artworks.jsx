import React from 'react'

const Artworks = ({user, artworks}) => {
  return <main className="main">
      {user.name}'s Artworks
        {artworks.map((artwork) => (
          <ul key={artwork._id}>
            <li>{artwork.name}</li>
            <li>Category: {artwork.category}</li>
            <li>{artwork.description}</li>
            <li>${artwork.price}</li>
            <br></br>
          </ul>
        ))}
    </main>
}

export default Artworks

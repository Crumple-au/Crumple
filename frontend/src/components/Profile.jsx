import React from 'react'

function Profile({ user }) {

    return (
        <main className="main">
            {user ? (
                <>
                    <img className="profile-picture" src={user.image} alt="profile picture" height="100"></img>
                    <h1>{user.name }'s Profile page</h1>
                    <h1>{user.email }</h1>
                    <h1>Admin: {String(user.isAdmin) }</h1>
                    <h1>Seller: {String(user.isSeller) }</h1>     
                    <p>{user.description}</p> 
                </>
            )
            : <h1>No profile data</h1>
            }
        </main>
    )
}

export default Profile

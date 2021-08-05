import React from 'react';
import Chip from '@material-ui/core/Chip';

function Profile({ user }) {
    console.log(user)

    return (
        <main className="main">
            {user ? (
                <div className="profile-wrapper">
                        <div className="profile-header">
                            <img  src={user.image} alt="profile picture"></img>
                            <div className="heading">
                                <h1>{user.name}</h1>
                                {user.isAdmin ? 
                                    <Chip 
                                        label="admin"
                                        color="primary"
                                        className="admin-badge"
                                    /> 
                                    : ''}
                            </div>
                        </div>
                    
                    <div className="profile-details">
                        <p>{user.email }</p>
                        <p>{user.description}</p>
                    </div>
                </div>
            )
            : <h1>No profile data</h1>
            }
        </main>
    )
}

export default Profile

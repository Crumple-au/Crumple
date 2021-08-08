import React, {useState} from 'react';
import Artworks from '../components/Artworks';
import UploadModal from '../components/UploadModal';
import { Button } from '@material-ui/core'


function ProfileArtworksPage({user, artworks}) {

    const [show, setShow] = useState(false)

    return (
        <>
        <div>
            <Button variant='contained' color='primary' onClick={() => setShow(true)} >Upload Artwork</Button>
            {show && <UploadModal onClose={() => setShow(false)}  /> }
        </div>
        <div>
            <Artworks user={user} artworks={artworks} />
        </div>
        </>
    )
}

export default ProfileArtworksPage

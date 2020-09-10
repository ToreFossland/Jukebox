import React from 'react';
import { Link } from 'react-router-dom'

const Track = (props: { track: any; }) => {
    const {track} = props;
    return(
        <div>
            <div>
                <h5>{track.artist_name}</h5>
                <h6>{track.track_name}</h6>
                <Link to ={`lyrics/track/${track.track_id}`}>About</Link>

            </div>
        </div>
    )
}


export default Track;
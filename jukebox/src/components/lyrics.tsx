import React, {Component, useContext, useEffect, useState} from "react";
import axios from 'axios';
import {Context} from '../context'
import Spinner from "../resources/media/Spinner";


const Lyrics = () =>{
    const [lyrics, setLyrics] = useState("" as string);
    let {currentTrackIDObject} = useContext(Context)!



    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=`+ currentTrackIDObject?.currentTrackID+`&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log(res.data.message.body.lyrics.lyrics_body);
                let tempLyrics = (res.data.message.body.lyrics.lyrics_body).split("...")
                console.log(tempLyrics[0])
                setLyrics(res.data.message.body.lyrics.lyrics_body);
            })
            .catch(err => console.log(err))
    }, [currentTrackIDObject?.currentTrackID])
    console.log(lyrics)

    return(
        <div id="lyricsmain">
            <h1>Lyrics</h1>
            <div id="lyricsText">
                <p id="hore">
                    {lyrics}
                </p>
            </div>
        </div>
    )
}

export default Lyrics;
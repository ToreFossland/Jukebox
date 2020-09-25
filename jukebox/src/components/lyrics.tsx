import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import {Context} from '../context'



const Lyrics = () =>{
    const [lyrics, setLyrics] = useState("" as string);
    let {currentTrackIDObject} = useContext(Context)!

    //Henter sangteksten for den aktive sangen, vill kjøres på nytt når currentTrackID oppdateres

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=`+ currentTrackIDObject?.currentTrackID+`&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                setLyrics(res.data.message.body.lyrics.lyrics_body);
            })
            .catch(err => console.log(err))
    }, [currentTrackIDObject?.currentTrackID])


    //Returnerer en paragraf med sangteksen fra sangtekst hook'en
    return(
        <div id="lyricsmain">
            <h1>Lyrics</h1>
            <div id="lyricsText">
                <p>
                    {lyrics}
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </p>
            </div>
        </div>
    )
}

export default Lyrics;
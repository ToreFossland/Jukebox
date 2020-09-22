import React, {Component, SetStateAction, useEffect, useState} from "react";
import axios from 'axios';

type ContextProps = {
    trackList: Track[] | null,
    currentTrackIDObject:currentTrackIDType,
    currentTrackNameObject: currentTrackNameType,
    currentTrackAlbumObject: currentTrackAlbumType,
    currentTrackArtistObject: currentTrackArtistType
};

type currentTrackIDType = {
    currentTrackID: number,
    setCurrentTrackID: (val: any) => void
}
type currentTrackNameType = {
    currentTrackName: string,
    setCurrentTrackName: (val: any) => void
}
type currentTrackAlbumType = {
    currentTrackAlbum: string,
    setCurrentTrackAlbum: (val: any) => void
}
type currentTrackArtistType = {
    currentTrackArtist: string,
    setCurrentTrackArtist: (val: any) => void
}


type Track ={
    trackID:number,
    name:string,
    artist:string,
    album:string
}

export const Context = React.createContext<Partial<ContextProps>>({});


export const Provider:React.FC = ({children}) => {
    const [trackList, setTrackList] = useState<any>([] as any[])
    const [currentTrackID, setCurrentTrackID] = useState(0)
    const [currentTrackName, setCurrentTrackName] = useState("")
    const [currentTrackAlbum, setCurrentTrackAlbum] = useState("")
    const [currentTrackArtist, setCurrentTrackArtist] = useState("")

    const currentTrackIDObject = {currentTrackID, setCurrentTrackID}
    const currentTrackNameObject = {currentTrackName, setCurrentTrackName}
    const currentTrackAlbumObject = {currentTrackAlbum, setCurrentTrackAlbum}
    const currentTrackArtistObject = {currentTrackArtist, setCurrentTrackArtist}


    let songID:number[] = [
        //OneMoreTime, SingThemeSong, 
            103162573, 114669898, 107705824
        ]

    useEffect(() => {
    const k = [
    {trackID: 103162573, name: "haakon", artist: "kaskads", album: "album"},
    {trackID: 114669898, name: "Kaspar", artist: "Daft punk", album: "album2"},
    {trackID: 107705824, name: "Tore", artist: "haakon band", album: "album2"}
    ]
    
    setTrackList(k)
    },[]);
    /*
        let apiURL:any[] = [];
        
        songID.forEach(element => {
            let temp:string = (`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=`+element +`&apikey=${process.env.REACT_APP_MM_KEY}`)
            apiURL.push(axios.get(temp))
        });
       
        useEffect(() => {
         axios.all(apiURL).then(axios.spread((...responses) => {
           console.log(responses)

            const tracks = responses.map( (item) => {
                
                return {
                    trackID:item.data.message.body.track.commontrack_id,
                    name:item.data.message.body.track.track_name,
                    artist:item.data.message.body.track.artist_name,
                    album:item.data.message.body.track.album_name
                }
                }
            )
            setTrackList(tracks)

        })).catch(errors => console.log(errors));
    }, [])
    */
        return(
            <Context.Provider value = {{ trackList, currentTrackIDObject, currentTrackNameObject, currentTrackAlbumObject, currentTrackArtistObject}}>
                {children}
            </Context.Provider>
        );
}

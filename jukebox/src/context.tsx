import React, {useEffect, useState} from "react";
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
    setCurrentTrackID: (val: number) => void
}
type currentTrackNameType = {
    currentTrackName: string,
    setCurrentTrackName: (val: string) => void
}
type currentTrackAlbumType = {
    currentTrackAlbum: string,
    setCurrentTrackAlbum: (val: string) => void
}
type currentTrackArtistType = {
    currentTrackArtist: string,
    setCurrentTrackArtist: (val: string) => void
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
        //OneMoreTime, SingThemeSong, dancing in the moonlight, daffodils, living on a prayer, break my stride, move your feet
            114611205, 83635443
        //, 84712669, 44456039, 995081, 2368206, 1844865
        ]

    useEffect(() => {
    const k = [
    {trackID: 114611205, name: "One more Time", artist: "Daft Punk", album: "Discovery"},
    {trackID: 83635443, name: "3b 3b", artist: "Jokeasses", album: "album2"},
    {trackID: 84712669, name: "Daning in the moonlight", artist: "jubel", album: "album4"},
    {trackID: 44456039, name: "Dafodills", artist: "Mark Ronson", album: "album5"},
    {trackID: 995081, name: "Livin on a prayer", artist: "Bon Jovi", album: "album2"},
    {trackID: 2368206, name: "Break my stide", artist: "Matthew Wilder", album: "album2"},
    {trackID: 1844865, name: "Move your feet", artist: "Junior senior", album: "album2"}
    ]
    
    setTrackList(k)
    },[]);
    /*
        let apiURL:any[] = [];
        //Definerer en liste med alle URL'ene for alle sangene mot Musixmatch API'et, brukes til å hente alle sammen samtidig med axios.all
  
        songID.forEach(element => {
            let temp:string = (`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=`+element +`&apikey=${process.env.REACT_APP_MM_KEY}`)
            apiURL.push(axios.get(temp))
        });

      useEffect(() => {
         axios.all(apiURL).then(axios.spread((...responses) => {
           console.log(responses)
            //Maps the response data into a Track type, and then sets the track list to this data
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
    })*/

        return(
            <Context.Provider value = {{ trackList, currentTrackIDObject, currentTrackNameObject, currentTrackAlbumObject, currentTrackArtistObject}}>
                {children}
            </Context.Provider>
        );
}

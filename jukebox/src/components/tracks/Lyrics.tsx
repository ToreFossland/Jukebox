import React, {Component} from "react";
import axios from 'axios';
import Track from "./Track";
import Spinner from "../../resources/media/Spinner";


class Lyrics extends Component{

    state = {
        track: {track: undefined},
        lyrics: {}
    }


    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=190589562&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log(res.data);
                this.setState({ lyrics: res.data.message.body.lyrics_body});

                return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=5920049&apikey=${process.env.REACT_APP_MM_KEY}`)
            })
            .then(res => {
                this.setState({track: res.data.message.body.track})
            })
            .catch(err => console.log(err))
    }

    render() {
        const {track, lyrics} = this.state;
        if( track === undefined ||
            lyrics === undefined ||
            Object.keys(track).length === 0 ||
            Object.keys(lyrics).length === 0){
            return <Spinner />
        }else{
            return <h1>data returned</h1>
        }
    }
}

export default Lyrics;
import React, {Component} from "react";
import axios from 'axios';
import Track from "./Track";


class Lyrics extends Component{
    state = {
        track: {track: undefined},
        lyrics: {}
    }

    //
    //
    // componentDidMount(){
    //     axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.state.track.track_id}&apikey=${process.env.REACT_APP_MM_KEY}`)
    //         .then(res => {
    //             console.log(res.data);
    //             // this.setState);
    //         })
    //         .catch(err=> console.log(err))
    // }
    //
    // render(){
    //     return(
    //         <div>
    //
    //         </div>
    //     )
    // }
}

export default Lyrics;
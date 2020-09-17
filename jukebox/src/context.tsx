import React, {Component} from "react";
import axios from 'axios';
import Track from "./components/tracks/Track";

type ContextProps = {
    trackList: Track[],
    heading: string,
};

type Track ={
    trackID:number
    name:string,
    artist:string,
    album:string,
    imgURL:any,
    sourceURL:string
}

const Context = React.createContext<Partial<ContextProps>>({});

export class Provider extends Component {
    state = {
        trackList: [],
        heading: 'Top ten tracks',
    }

    componentDidMount() {

        let songID:number[] = [
            103162573, 114669898
        ]

        let apiURL:any[] = [];
        
        songID.forEach(element => {
            let temp:string = (`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=`+element +`&apikey=${process.env.REACT_APP_MM_KEY}`)
            apiURL.push(axios.get(temp))
        });

       axios.all(apiURL).then(axios.spread((...responses) => {
           console.log(responses)
            let tempArray:any = [];

            responses.map( (item) => {
                
                let temp: Track={
                    trackID:item.data.message.body.track.track_id,
                    name:item.data.message.body.track.track_name,
                    artist:item.data.message.body.track.artist_name,
                    album:item.data.message.body.track.album_name,
                    imgURL:this.getImgSource(item.data.message.body.track.track_id),
                    sourceURL:""
                }
                tempArray.push(temp)
                }
            )

            this.setState({trackList:tempArray})
    
        
        })).catch(errors => console.log(errors));
    }

    getImgSource(trackID:number){
        return "./resources/media/"+trackID+".jpg"
    }


    

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
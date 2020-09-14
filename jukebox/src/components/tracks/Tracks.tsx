import React, {Component} from 'react';
import {Consumer} from '../../context';
import Spinner from '../../resources/media/Spinner'
import Track from './Track'


class Tracks extends Component{
    render() {
       return(
           <Consumer>
               {value => {
                   const { trackList } = value;
                   console.log(value);
                if (trackList == undefined || trackList.length == 0){
                    return <Spinner />
                }else{
                    return(
                        <React.Fragment>
                            <h1> Tracks </h1>
                            <div className= 'row'>
                                {trackList.map((item: { track: any; }) => (
                                    <Track key ={item.track.track_id} track = {item.track}/>
                                ))

                                }
                            </div>
                        </React.Fragment>
                    )
                }
               }}
           </Consumer>
       )
    }
}

export default Tracks;
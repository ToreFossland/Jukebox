import React, {Component} from "react";
import axios from 'axios';

type ContextProps = {
    trackList: any,
    heading: string
};

const Context = React.createContext<Partial<ContextProps>>({});

export class Provider extends React.Component {
    state = {
        trackList: [],
        heading: 'Top ten tracks'
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=no&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log(res.data);
                this.setState({trackList: res.data.message.body.track_list});
            })
            .catch(err=> console.log(err))
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
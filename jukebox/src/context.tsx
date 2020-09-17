import React, {Component} from "react";
import axios from 'axios';

type ContextProps = {
    trackList: any,
    heading: string
};

const Context = React.createContext<Partial<ContextProps>>({});

export class Provider extends Component {
    state = {
        trackList: [],
        heading: 'Top ten tracks'
    }

    componentDidMount() {
        // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=no&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({trackList: res.data.message.body.track_list});
        //     })
        //     .catch(err=> console.log(err))

        let one = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=5920049&apikey=${process.env.REACT_APP_MM_KEY}`;
        let two = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=201226125&apikey=${process.env.REACT_APP_MM_KEY}`;

        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);

        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
            this.setState({trackList: responses});
            // console.log(this.state.trackList)
            const responseOne = responses[0]
            // const responseTwo = responses[1]
            // console.log(responseOne.data.message.body.track.track_id);
        })).catch(errors => console.log(errors));

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
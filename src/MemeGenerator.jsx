import React from "react";
import ReactDOM from "react-dom/client";
import Generator from "./Generator";
// import './MemeGenerator.css';
class MemeGenerator extends React.Component {
    constructor() {
        super();

        this.state = {
            toptext: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        };
        // this.handleSubmit = this.setRandomImg.bind(this);
    }
    render() {
        return <div>
            <Generator randomImg={this.state.randomImg} handleSubmit={() => this.setRandomImg()} />

        </div>
    }

    setRandomImg() {
        if (this.state.allMemeImgs.length !== 0) {
            const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
            const randMemeImg = this.state.allMemeImgs[randNum].url;
            this.setState(
                {
                    randomImg: randMemeImg
                })
        }
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes').
            then(response => response.json()).
            then(response => {
                console.log(response.data);
                const { memes } = response.data;
                this.setState({ allMemeImgs: memes })
            })
    }
}

export default MemeGenerator;
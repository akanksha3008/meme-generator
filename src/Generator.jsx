import React from "react";
import { ReactDOM } from "react";
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Generator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topText: '',
            bottomText: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (<Box
            alignItems="center"
            justifyContent="center"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='meme' >
                <div alignItems="center" className="form"
                    justifyContent="center">
                    <TextField
                        id="outlined-multiline-static q1"
                        label="Top Text"
                        name="topText"
                        multiline
                        rows={2}
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="outlined-multiline-static q2"
                        label="Bottom Text"
                        name="bottomText"
                        multiline
                        rows={2}
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <form>
                        <Button color="primary" variant="contained" onClick={this.props.handleSubmit} style={{ justifyContent: 'center' }}>GENERATE NEW</Button>
                    </form>
                </div>


                <div className='meme'>
                    <img src={this.props.randomImg} alt='' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>

            </div >
        </Box>)
    }

    gen() {

    }
}

export default Generator;
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { postNewTweet } from '../store/actions/actionCreators';
import Alert from '@material-ui/lab/Alert';

class newTweet extends Component {
    constructor(props) {
        super(props);
        this.state ={
            text: '',
            error: false,
            errorDisc: ''
        }
    }
    handleChange(e) {
        this.setState({text: e.target.value});
    }
    handlePost() {
        postNewTweet(this.props.currentUserId, {text: this.state.text});
    }
    render() {
        return (
            <div className="new-tweet">
                <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                value={this.state.text}
                onChange={(e) => this.handleChange(e)}
                />
                <Button component="button" onClick={() => this.handlePost()} variant="contained" color="primary">
                    Post
                </Button>
                {this.state.error ? <Alert severity="error">{this.state.errorDisc}</Alert>:null}
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUserId: store.currentUser.user._id
});

export default connect(mapStateToProps, null)(newTweet)
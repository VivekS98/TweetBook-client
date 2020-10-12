import React, { Component } from 'react';
import { Button, TextField, FormControl } from '@material-ui/core/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { postNewTweet } from '../store/actions/actionCreators';
import '../styling/main.css';

class NewTweet extends Component {
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
    handlePost(e) {
        e.preventDefault();
        postNewTweet(this.props.currentUserId, {text: this.state.text})
            .then(data => {
                console.log(data);
                this.props.history.push('/usr/home');
            })
            .catch(err => {
                console.log(err);
                this.setState({error: true, errorDisc: err.message});
            })
    }
    render() {
        return (
            <div className="new-tweet">
                <FormControl component="form" onSubmit={(e) => this.handlePost(e)} fullWidth={true}>
                    <TextField
                    id="outlined-multiline-static"
                    label="New Tweet"
                    multiline
                    rows={4}
                    required
                    variant="outlined"
                    value={this.state.text}
                    onChange={(e) => this.handleChange(e)}
                    /><br/>
                    <Button type="submit" variant="contained" color="primary">
                        Post
                    </Button>
                </FormControl><br />
                {this.state.error ? <Alert severity="error">{this.state.errorDisc}</Alert>:null}
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUserId: store.currentUser.user.id
});

export default withRouter(connect(mapStateToProps, null)(NewTweet));
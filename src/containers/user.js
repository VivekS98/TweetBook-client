import React, { Component } from 'react';
import NavBar from "./NavBar";
import { withRouter } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { apiCall } from '../services/api';
import MessageCard from '../components/messageCard';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            load: false,
            navbar: null
        }
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        const { user } = this.props;
        console.log(user, " ", id);
        
        apiCall('get', `/api/users/${id}`)
            .then(data => {
                if(id === user.id) {
                    this.setState({user: data, load:true, navbar: "User"});
                } else {
                    this.setState({user: data, load:true});
                }
            })
            .catch(err => console.log(err));
    }
    render() {
        let user = <CircularProgress />;
        if(this.state.load === true) {
            const { username, profileImgUrl, bio, followers, following, messages } = this.state.user;
            const follower = [...followers];
            const tweets = messages.map((item, index) => {
                return <MessageCard key={index} post={item} />
            });
            const followin = [...following];
            user = <div>
                <div className="profile-row">
                    <img 
                    className="profile-img" 
                    src={profileImgUrl ? 
                    user.profileImgUrl : 
                    "https://www.knack.com/images/about/default-profile.png"} 
                    alt="profile-img"
                    />
                    <div className="profile-info">
                        <h1 className="username">{username}</h1>
                        <p>{bio}</p>
                        <div className="profile-row">
                            <Chip 
                            component="div"
                            style={{padding: '10px'}}
                            label={`followers ${follower.length}`}
                            onClick={() => this.setState({dialog: true, dialogInfo: 'followers'})} 
                            />
                            <Chip 
                            componenet="div"
                            style={{padding: '10px'}}
                            label={`following ${followin.length}`} 
                            onClick={() => this.setState({dialog: true, dialogInfo: 'followers'})}
                            />
                        </div>
                    </div>
                </div>
                {tweets}
            </div>
        }
        return (
            <React.Fragment>
                <div className="home-page">
                {user}
                </div>
                <NavBar value={this.state.navbar} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser.user
});

export default withRouter(connect(mapStateToProps, null)(User));
import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import {fetchNotifications, markNotifications } from '../store/actions/actionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';
import emptyImg from '../styling/text638.png';
import '../styling/main.css';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let { user, notify } = this.props;
        console.log("notify:", notify.otifications);
        this.props.fetchNotifications(user.id)
            .then(data => this.setState({data}))
            .catch(err => console.log(err));
        if(notify.length > 0) {
            markNotifications(user.id)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        } else this.setState({data: null});
    }
    render() {
        let data = this.state.data;
        let notify = <div className="loading"><CircularProgress /></div>;
        console.log(data);
        if(data!== null && data.length > 0) {
            notify = data.map((item, index) => {
                return <div key={index} className="notify-card">
                    <p>{item.text}</p>
                </div>
            });
        } else notify = <img className="notify" src={emptyImg} alt="empty" />;
        return (
           <React.Fragment>
                <div className="home-page">
                    {notify}
                </div>
                <NavBar value="Notifications" />
           </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.currentUser.user,
    notify: state.notify
});

export default connect(mapStateToProps, {fetchNotifications})(Notifications);
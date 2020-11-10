import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { markNotifications } from '../store/actions/actionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';
import emptyImg from '../styling/text638.png';
import '../styling/main.css';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            empty: true
        }
    }
    componentDidMount() {
        this.setState({data: this.props.notify});
        markNotifications(this.props.user.id)
            .then(data => this.setState({data: data.reverse(), empty: data.length === 0 ? true : false}))
            .catch(err => console.log(err))
    }
    render() {
        let notify = <div className="loading"><CircularProgress /></div>;
        console.log(this.state.data.length);
        if(this.state.data.length > 0) {
            let data = [...this.state.data];
            notify = data.map((item, index) => {
                return <div key={index} className="notify-card">
                    <p>{item.text}</p>
                </div>
            });
        } else if(!this.state.empty) {
            notify = <img className="notify" src={emptyImg} alt="empty" />
        }
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

export default connect(mapStateToProps, null)(Notifications);
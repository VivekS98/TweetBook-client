import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { markNotifications } from '../store/actions/actionCreators';
import emptyImg from '../styling/text638.png';
import '../styling/main.css';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.setState({data: this.props.notify});
        markNotifications(this.props.user.id)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    render() {
        let notify = <img className="notify" src={emptyImg} alt="empty" />;
        if(this.state.data.length > 0) {
            let data = [...this.state.data];
            notify = data.map((item, index) => {
                console.log(item);
                return <div key={index} className="notify-card">
                    <p>{item}</p>
                    
                </div>
            });
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
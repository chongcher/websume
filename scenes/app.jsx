import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Main from './main.jsx';
import Posts from './posts.jsx';
import Photos from './photos.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentView: <Main/>
        };
    }

    render() {
        return (
            <div className="row">
                <Navbar bsStyle="inverse">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a onClick={this.main.bind(this)}>chongcher</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem onClick={this.posts.bind(this)}>posts</NavItem>
                        <NavItem onClick={this.photos.bind(this)}>photos</NavItem>
                        <NavItem onClick={this.about.bind(this)}>about</NavItem>
                        <NavItem onClick={this.contact.bind(this)}>contact</NavItem>
                    </Nav>
                </Navbar>
                { this.state.currentView }
            </div>
        )
    }

    main(){
        let main = <div><Main/></div>;
        this.setState({currentView: main});
    }

    posts(){
        let posts = <div><Posts/></div>;
        this.setState({currentView: posts});
    }

    photos(){
        let photos = <div><Photos/></div>;
        this.setState({currentView: photos});
    }

    about(){
        let about = <div><About/></div>;
        this.setState({currentView: about});
    }

    contact(){
        let contact = <div><Contact/></div>;
        this.setState({currentView: contact});
    }

}
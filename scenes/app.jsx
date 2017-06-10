import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentView: ""
        };
        this.posts = this.posts.bind(this);
        this.photos = this.photos.bind(this);
        this.about = this.about.bind(this);
        this.contact = this.contact.bind(this);
    }

    render() {
        return (
            <div className="row">
                <Navbar bsStyle="inverse">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">chongcher</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem onClick={this.posts}>posts</NavItem>
                        <NavItem onClick={this.photos}>photos</NavItem>
                        <NavItem onClick={this.about}>about</NavItem>
                        <NavItem onClick={this.contact}>contact</NavItem>
                    </Nav>
                </Navbar>
                { this.state.currentView }
            </div>
        )
    }

    posts(){}

    photos(){}

    about(){}

    contact(){}

}
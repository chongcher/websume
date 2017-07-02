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
            currentView: <Main openPost={pageIndex => this.posts(pageIndex)}/>
        };
    }

    render() {
        return (
            <div className="row">
                <Navbar bsStyle="inverse" style={{margin: '0 0 1vh 0', width: '100vw'}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a onClick={this.main.bind(this)}>chongcher</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem onClick={this.posts.bind(this, 0)}>posts</NavItem>
                            <NavItem onClick={this.photos.bind(this)}>photos</NavItem>
                            <NavItem onClick={this.about.bind(this)}>about</NavItem>
                            <NavItem onClick={this.contact.bind(this)}>contact</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                { this.state.currentView }
            </div>
        )
    }

    main(){
        let main = <div><Main openPost={pageIndex => this.posts(pageIndex)}/></div>;
        this.setState({currentView: main});
    }

    posts(pageIndex){
        let posts = <div><Posts activePage={pageIndex}/></div>;
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
import React from 'react';
import Post from '../components/post/post.jsx';
import content from '../content/content.js';
import { Navbar, Pagination } from 'react-bootstrap'

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activePage: props.activePage || 1
        };
    }

    render(){
        return (
            <div className="col-xs-12" style={{textAlign: 'center'}}>

                <div className="col-xs-10 col-xs-offset-1">
                    <Post
                        title={content.posts[this.state.activePage - 1].title}
                        body={content.posts[this.state.activePage - 1].body} />
                </div>

                <Navbar fixedBottom={true} style={{backgroundColor: '#ffffff', border: "0px"}} >
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        items={content.posts.length}
                        maxButtons={5}
                        activePage={this.state.activePage}
                        onSelect={eventKey => this.setState({activePage: eventKey})} />
                </Navbar>

            </div>
        )
    }
}
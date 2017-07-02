import React from 'react';
import { Button } from 'react-bootstrap';
import content from '../../content/content.js';
import { getPostBodyPreview } from '../../utility/constants.js';

export default class Newsfeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let renderedPosts = content.posts.map((post, i) => {
            return (
                <div key={i} className="col-xs-12" style={{margin: '0'}}>
                    <h4 className="col-xs-12" style={{overflow: 'hidden', margin: '0', padding: '0'}}>{post.title}</h4>
                    <h6 className="col-xs-12" style={{overflow: 'hidden', margin: '0', padding: '0',height: '4ex'}}>{getPostBodyPreview(post)}</h6>
                    <Button className="col-xs-12" bsStyle="link" onClick={event => this.props.openPost(i + 1)} style={{textAlign: 'right', padding: '0'}}>More..</Button>
                </div>
            )
        });
        return (
            <div>
                {renderedPosts}
            </div>
        )
    }

}
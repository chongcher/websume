import React from 'react';

export default class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xs-12">
                <h4>{this.props.title}</h4><br/>

                {this.props.body}
            </div>
        )
    }

}
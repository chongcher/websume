import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';

export default class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='col-xs-12'>
                <div className='col-xs-10 col-xs-offset-1'>
                    <Tabs id="contact">
                        <Tab eventKey={'index'} title="Contact Info">
                            Feel free to contact me on LinkedIn, or look through my projects on Github, Gitlab or Bitbucket.
                        </Tab>
                        <Tab eventKey={'linkedin'} title="LinkedIn">
                            <Button bsStyle="link" href="https://www.linkedin.com/in/chongcher/">linkedin.com/in/chongcher</Button>
                        </Tab>
                        <Tab eventKey={'github'} title="Github">
                            <Button bsStyle="link" href="https://github.com/chongcher">github.com/chongcher</Button>
                        </Tab>
                        <Tab eventKey={'gitlab'} title="Gitlab">
                            <Button bsStyle="link" href="https://gitlab.com/chongcher">gitlab.com/chongcher</Button>
                        </Tab>
                        <Tab eventKey={'bitbucket'} title="Bitbucket">
                            <Button bsStyle="link" href="https://bitbucket.org/chongcher/">bitbucket.org/chongcher</Button>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }

}
import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Newsfeed from '../components/newsfeed/newsfeed.jsx';
import content from '../content/content.js';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Grid>
                <Row className="show-grid" style={{paddingBottom: '1vh'}}>
                    <h3 style={{textAlign: 'center', padding: '0 0 1vh 0', margin: '0'}}>Latest Photo</h3>
                    <Col xs={10} xsOffset={1} style={{justifyContent: 'center', borderRadius: '6px'}}>
                        <Image src={content.photos[0].src} rounded style={{display: 'flex', objectFit: 'fit', maxWidth: '100%', maxHeight: '40vh', margin: 'auto'}}/>
                    </Col>
                    <Col xs={8} xsOffset={2} style={{textAlign: 'center', whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
                        <h6 style={{margin: '0', wordWrap: 'break-word'}}>{content.photos[0].caption}</h6>
                    </Col>
                </Row>
                <hr style={{margin: '1vh 0 1vh 0'}}/>
                <Row className="show-grid" style={{display: 'flex'}}>
                    <Col xs={8} style={{height: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <h3 style={{textAlign: 'center', padding: '0 0 1vh 0', margin: '0'}}>Recent Posts</h3>
                        <div style={{margin: '0', overflow: 'scroll'}}>
                            <Newsfeed openPost={pageIndex => this.props.openPost(pageIndex)}/>
                        </div>
                    </Col>
                    <Col xs={4} style={{height: '30vh', overflow: 'scroll', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'flex-start'}}>
                        <h3 style={{textAlign: 'center', padding: '0 0 1vh 0', margin: '0'}}>About Me</h3>
                        Chia Chong Cher (谢宗哲)<br/>
                        SMU SIS (Senior)<br/>
                        <i>Intern at Credit Suisse Singapore</i>
                    </Col>
                </Row>
            </Grid>
        )
    }

}
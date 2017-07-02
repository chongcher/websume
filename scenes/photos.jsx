import React from 'react';
import { Glyphicon, Carousel, Image } from 'react-bootstrap';
import content from '../content/content.js';
import { getDisplayDateFromPhoto } from '../utility/constants.js';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activePage: 0
        }
    }

    render(){
        let renderedPhotos = content.photos.map((photo, i) => {
            let displayDate = getDisplayDateFromPhoto(photo.date);
            return (
                <Carousel.Item key={i} animateIn={false} animateOut={false}>
                    <Image src={photo.src} alt={photo.caption} rounded style={{maxHeight: '90vh', maxWidth: '100%', margin: 'auto'}}/>
                    <Carousel.Caption>
                        <h6 style={{whiteSpace: 'pre-wrap'}}>{photo.caption}</h6>
                        <h6>{displayDate === undefined ? null : displayDate}</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        });
        return (
            <div className="col-xs-10 col-xs-offset-1">
                <Carousel
                    activeIndex={this.props.activePage}
                    interval={0}
                    nextIcon={<Glyphicon glyph="menu-right"/>}
                    prevIcon={<Glyphicon glyph="menu-left"/>}
                    slide={false}
                    indicators={false}>
                    {renderedPhotos}
                </Carousel>
            </div>
        )
    }
}
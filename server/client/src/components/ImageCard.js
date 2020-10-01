import React, {Component} from 'react';

class ImageCard extends Component {
    render() {
        return (
            <div>
                <div className="col s12 m7">
                    <h2 className="header">Sports</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="https://lorempixel.com/100/190/nature/6"  />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>Tennis, Soccer, Biking, Badminton, everything you can think of!</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7">
                    <h2 className="header">Board Game</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="https://lorempixel.com/100/190/nature/6"  />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>Tennis, Soccer, Biking, Badminton, everything you can think of!</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ImageCard;
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Button from './Button';
import Pagination from './Pagination';
import Landing from './Landing';
import ImageCard from './ImageCard';
import Dashboard from './Dashboard';

const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Button} />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/" component={ImageCard} />
                        <Route exact path="/" component={Pagination} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path = "/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default connect(null, actions)(App);
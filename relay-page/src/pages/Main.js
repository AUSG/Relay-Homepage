import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Banner from '../components/Banner';

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default Main;
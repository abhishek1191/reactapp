import {Link} from "react-router"
import React from "react"
import Navigate from "../components/Navigate"
import Footer from "../components/Footer"

export default class Layout extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { title: "Coffee" };
    // }
    // changeTitle(title) {
    //     this.setState({ title });
    // }

    render() {
        const {location} = this.props;
        return (
            <div>
                <Navigate location={location}/>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>
                                React Application
                            </h1>
                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}


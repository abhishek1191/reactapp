import {Link} from "react-router"
import React from "react"

export default class Layout extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { title: "Coffee" };
    // }
    // changeTitle(title) {
    //     this.setState({ title });
    // }
  
    render() {
          console.log(this.props);
        return (
            <div>
                <h1>
                    React Application
                </h1>
                {this.props.children}
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </div>
        )
    }
}


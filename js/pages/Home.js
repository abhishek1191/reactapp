import React from "react"
import Article from "../components/Article"

export default class Home extends React.Component {
    render() {

        const Articles = ["Introdcution",
            "Beginning",
            "Story"].map((title, i) => <Article key={i} title={title}/>);

        return (
            <div>
                <div class="row">
                    <div class="col-md-12">
                    <h2>Home</h2>
                    </div>
                </div>
                <div class="row">{Articles}</div>
            </div>
        )
    }
}
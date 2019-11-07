import React, { Component, Fragment } from "react";
import Question from "./Question"
import Solution from "./Solution";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {solutionVisible: false, questionVisible: true};
    }

    render() {
        const { cardStack } = this.props;
        
        const showSolution = () => {
            this.setState({solutionVisible: true, questionVisible: false });
        };
        const showQuestion = () => {
            this.setState({solutionVisible: false, questionVisible: true });
        };
        
        return (
            <div className="master-card" >
                {this.state.questionVisible && 
                    <Fragment>
                        <Question cardDetails={cardStack} />
                        <button className="btn cta-solution" onClick={showSolution}>
                            <h4>See Solution</h4>
                        </button>
                        {/* <button className="btn nav-next">Next</button> */}
                    </Fragment>
                }
                {this.state.solutionVisible && 
                    <Fragment>
                        <Solution cardDetails={cardStack} />
                        <button className="btn cta-question" onClick={showQuestion}>
                            <h4>Return to Question</h4>
                        </button>
                    </Fragment>
                }
            </div>
        );
    }
}

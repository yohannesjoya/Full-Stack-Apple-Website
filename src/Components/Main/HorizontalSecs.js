import { Component } from "react";

import LearnComp from "./LearnComp";

class HorizontalSecs extends Component {
  render() {
    return (
      <>
        <section className={this.props.secClassNAME}>
          <div className="container">
            <div className="new-alert">{this.props.alertContent}</div>

            <div className="title-wraper bold black">
              {this.props.titleContent}
            </div>

            <div className="description-wrapper black">
              {this.props.descriptionContent}
            </div>

            <div className="price-wrapper grey">{this.props.priceContent}</div>

            <LearnComp
              hREF1="Learn"
              hREF2={`/${this.props.secondLearnCompArg}`}
              firstContent="Learn more"
              secondContent={this.props.secondLearnCompArg}
            />
            {this.props.children}
          </div>
        </section>
      </>
    );
  }
}

export default HorizontalSecs;

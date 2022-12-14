import { Component } from "react";
class LearnComp extends Component {
  render() {
    return (
      <>
        <div class="links-wrapper">
          <ul>
            <li>
              <a href={this.props.hREF1}>{this.props.firstContent}</a>
            </li>
            <li>
              <a href={this.props.hREF2}>{this.props.secondContent}</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}


export default LearnComp;
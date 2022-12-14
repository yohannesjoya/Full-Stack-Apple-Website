import { Component } from "react";

class FooterLinks extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: this.props.ColTitle,
  //     contents: this.props.ContentsArray,
  //   };
  // }

  render() {
    return (
      <>
        <h3>{this.props.ColTitle}</h3>
        <ul>
          {this.props.ContentsArray.map((X, index) => {
            return (
              <li key={index}>
                <a href="/#">{X}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default FooterLinks;

import { Component } from "react";
class NavLinks extends Component {
  render() {
    return (
      <li className={this.props.MainLiClass}>
        <a className={this.props.innerAncClass} href={this.props.hrefURL}>
          {this.props.Content}
        </a>
      </li>
    );
  }
}
export default NavLinks;

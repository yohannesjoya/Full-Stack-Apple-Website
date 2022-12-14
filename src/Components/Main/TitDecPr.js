import { Component } from "react";

class TitDecPr extends Component {
  render() {
      return (
        <>
              <div class={ this.props.TitleClassNAME}>{this.props.titleContent }</div>
          <div class="description-wraper">
                  { this.props.DescriptionContent}
          </div>
          <div class="price-wrapper">
                  { this.props.PriceContent}
          </div>
        </>
      );
  }
}
export default TitDecPr;
import { Component } from "react";
import HorizontalSecs from "../HorizontalSecs";

class Section2 extends Component {
  render() {
    return (
      <>
        <HorizontalSecs
          secClassNAME="second-hightlight-wrapper"
          alertContent="New"
          titleContent="MacBook Air"
          descriptionContent="Twice the speed. Twice the storage."
          priceContent="From $999."
          secondLearnCompArg="Buy"
        />
      </>
    );
  }
}

export default Section2;

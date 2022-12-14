import { Component } from "react";

import HorizontalSecs from "../HorizontalSecs";

class Section1 extends Component {

    
  render() {
    return (
      <>
        <HorizontalSecs
          secClassNAME="first-hightlight-wrapper"
          alertContent="New"
          titleContent="iPad Pro"
          secondLearnCompArg="Order"
          // descriptionContent="Twice the speed. Twice the storage."
          // priceContent="From $999."
          children={
            <div className="ipod-caption row">
              <div className="col-sm-10 col-md-6 text-md-right">
                iPad Pro available starting 3.25
              </div>
              <div className="col-sm-12 col-md-6 text-md-left">
                Magic Keyboard coming in May
              </div>
            </div>
          }
        />
      </>
    );
  }
}

export default Section1;

import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";
import { useState } from "react";



const AppleCounterComponent = () => {
const totalApples = 20;
const [leftApples, setLeftApples] = useState(0);
const [rightApples, setRightApples] = useState(totalApples - leftApples);

  const rightBtnEvt = () => {
    if (leftApples > 0) {
      setLeftApples(leftApples - 1);
      setRightApples(rightApples + 1);
    }
  };

  const leftEvtBtn = () => {
    if (rightApples > 0) {
      setRightApples(rightApples - 1);
      setLeftApples(leftApples + 1);
    }
  };

  return (
    <>
      <div className="container">
        <ApplesBaskt appleCount={leftApples} basket="Basket 1" />

        <ButtonComponent
          imageUrl={LeftArrow}
          buttonName="left arrow btn"
          btnClickEvt={leftEvtBtn}
        />

        <ButtonComponent
          imageUrl={RightArrow}
          buttonName="right arrow btn"
          btnClickEvt={rightBtnEvt}
        />
        <ApplesBaskt appleCount={rightApples} basket="Basket 2" />
      </div>
    </>
  );
};

export default AppleCounterComponent;

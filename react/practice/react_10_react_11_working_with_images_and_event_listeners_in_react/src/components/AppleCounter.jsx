import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const totalApples = 20;
let leftApples = 10;
let rightApples = totalApples - leftApples;

const AppleCounterComponent = () => {
  const rightBtnEvt = () => {
    if (leftApples > 0) {
      rightApples++;
      leftApples--;
      root.render(<AppleCounterComponent />);
    }
  };

  const leftEvtBtn = () => {
    if (rightApples > 0) {
      leftApples++;
      rightApples--;
      root.render(<AppleCounterComponent />);
    }
  };

  return (
    <>
      <div className="container">
        <ApplesBaskt appleCount={leftApples} basket="Basket 1" />

        {/* way 1 */}
        {/* <ButtonComponent imageUrl={LeftArrow} buttonName="left arrow btn" btnClickEvt={() => console.log("Left Btn Clicked")} /> */}

        {/* way 2 */}
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
      <p style={{ textAlign: "center", marginTop: "32px" }}>
        <button onClick={() => {
          root.render(<AppleCounterComponent />);
        }}>Re - Render </button>
      </p>
    </>
  );
};

export default AppleCounterComponent;

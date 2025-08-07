# [What is Children Prop in React? | The Complete React Course | Ep.16](https://www.youtube.com/watch?v=mo6EC4Q91ZY&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=17)

To understand children let us first look at App.jsx and Button.jsx

```jsx
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
```

```jsx
const ButtonComponent = ({ imageUrl, buttonName, btnClickEvt }) => {
  return (
    <div>
      <button className="btn" title={buttonName} onClick={btnClickEvt}>
        <img
          src={imageUrl}
          alt={buttonName}
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    </div>
  );
};

export default ButtonComponent;
```

You see we have passed an image inside the button, given it buttonName as alt and also passed buttonName as title. Now say we need to pas something inside button component tags which change everytime for each button, how to do so?

For this we will use children props.

see this example now, where we used children prop, instead of button prop.

```jsx
const ButtonComponent = ({ imageUrl, btnClickEvt, children }) => {
  return (
    <div>
      <button className="btn" title={children} onClick={btnClickEvt}>
        <img
          src={imageUrl}
          alt={children}
          style={{ width: "50px", height: "50px" }}
        />
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
```

```jsx
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
          btnClickEvt={leftEvtBtn}
          children="Left Arrow Button"
        />
        {/* way 1, passing children as an attribute */}

        <ButtonComponent imageUrl={RightArrow} btnClickEvt={rightBtnEvt}>
          Right Arrow Button
        </ButtonComponent>
        {/* way 2, passing inside <ButtonComponent>children</ButtonComponent> */}
        <ApplesBaskt appleCount={rightApples} basket="Basket 2" />
      </div>
    </>
  );
};

export default AppleCounterComponent;
```

Now you see, we can use children in 2 different ways as seen above.

The benefit of using children is that a children can be a string, a number, an object, a function, a component even and so much more...

If we pass nothing in children, it will be `undefined`.

---

# [Conditional Rendering in React | Explained with Examples | The Complete React Course | Ep.17](https://www.youtube.com/watch?v=taSooNO2S4c&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=18)

Conditional rendering of components generally means, showing one component when some condition is met and showing another component when the condition is not met.

Here we'll take the same example of apple counter and show the conditions, full when the basket has 20 apples and empty when the basket has 0 apples.

I did it in 2 ways

1. Passed it as props and used the conditions in AppleCounter.jsx

```jsx
import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";
import { useState } from "react";

const AppleCounterComponent = () => {
  const totalApples = 20;
  const [leftApples, setLeftApples] = useState(0);
  const [rightApples, setRightApples] = useState(totalApples - leftApples);

  const leftStatus =
    leftApples === totalApples ? "full" : leftApples === 0 ? "empty" : "";
  const rightStatus =
    rightApples === totalApples ? "full" : rightApples === 0 ? "empty" : "";

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
        <ApplesBaskt
          appleCount={leftApples}
          basket="Basket 1"
          full_or_empty_status={leftStatus}
        />

        <ButtonComponent imageUrl={LeftArrow} btnClickEvt={leftEvtBtn} />

        <ButtonComponent
          imageUrl={RightArrow}
          btnClickEvt={rightBtnEvt}
        ></ButtonComponent>
        <ApplesBaskt
          appleCount={rightApples}
          basket="Basket 2"
          full_or_empty_status={rightStatus}
        />
      </div>
    </>
  );
};

export default AppleCounterComponent;
```

```jsx
const ApplesBaskt = ({ appleCount, basket, full_or_empty_status }) => {
  return (
    <div>
      <div>
        <span className="apples">{appleCount}</span>
        <span className="apples"> Apples</span>
      </div>
      <p className="basket">{basket}</p>
      <p className="full-empty">{full_or_empty_status}</p>
    </div>
  );
};

export default ApplesBaskt;
```

2. Made the conditional code in ApplesBaskt.jsx

```jsx
const ApplesBaskt = ({ appleCount, basket }) => {
  return (
    <div>
      <div>
        <span className="apples">{appleCount}</span>
        <span className="apples"> Apples</span>
      </div>
      <p className="basket">{basket}</p>
      <p className="full-empty">
        {appleCount === 20 ? "full" : appleCount === 0 ? "empty" : ""}
      </p>
    </div>
  );
};

export default ApplesBaskt;
```

```jsx
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

        <ButtonComponent imageUrl={LeftArrow} btnClickEvt={leftEvtBtn} />

        <ButtonComponent
          imageUrl={RightArrow}
          btnClickEvt={rightBtnEvt}
        ></ButtonComponent>
        <ApplesBaskt appleCount={rightApples} basket="Basket 2" />
      </div>
    </>
  );
};

export default AppleCounterComponent;
```

no changes in AppleCounter.jsx

In some cases, you will see `condition1 && condition2` -> It means if condition 1 is true, render the value in condition 2, else do nothing. Works similar to logical AND.

---

# [How to Scope CSS to a Component in React? | CSS Modules in React | The Complete React Course | Ep.18](https://www.youtube.com/watch?v=YjB5LaJTR5c&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=19)

Till now we have been using external css for all our react components but sometimes when we write css for one component, it gets reflected for all the components in that page as when a css file loads for a page, it gets applied to all the components in that page.

Now how can we give selective css for a component without altering the css of other component, we will see it here.

So let us focus on our counter component, say I want to keep the counter button yellow and the counter text green while the remaining buttons are red, as made in App.css. So how to do so??

Simple, we will create a css file called `Counter.module.css`, name can be anything, we just need to use `module.css` after it. Then we can write css for that component as normally.

### Importing the css file

Now if we want to show or reflect these changes in our Counter.jsx file, we will do so like this:

```jsx
import { useState } from "react";
import styles from "../Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1 className={styles["text-ksd"]}>{count}</h1>
      <button
        className={styles.btn}
        onClick={() => {
          {
            setCount((prev) => prev + 1);
          }
        }}
      >
        Count ko badhaao
      </button>
      {/* Never use count++ with React state. Use count + 1 or the callback form. */}
    </div>
  );
};

export default Counter;
```

Notice how we used it like an object, because by following this method, we can use styles like an object inside which we will find all the css classes.

We can then access them using dot operator.

Note: In classes like `.text-ksd`, we will have to use bracket notation as seen above. Or else, we can use camel case for class naming like `textKsd`.

### Now how to give multiple css classes to a component

We can use an array, write multiple css classes and then use `.join(" ")`. We will see the example below, look at button element:

```jsx
import { useState } from "react";
import styles from "../Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1 className={styles["text-ksd"]}>{count}</h1>
      <button
        className={[styles.btn, styles["text-ksd"]].join(" ")}
        onClick={() => {
          {
            setCount((prev) => prev + 1);
          }
        }}
      >
        Count ko badhaao
      </button>
      {/* Never use count++ with React state. Use count + 1 or the callback form. */}
    </div>
  );
};

export default Counter;
```

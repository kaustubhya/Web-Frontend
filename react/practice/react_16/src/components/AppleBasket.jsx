
const ApplesBaskt = ({appleCount, basket}) => {
  return (
    <div>
      <div>
        <span className= "apples">{appleCount}</span>
        <span className="apples"> Apples</span>
      </div>
      <p className="basket">{basket}</p>
      <p className="full-empty">{appleCount === 20 ? "full" : appleCount === 0 ? "empty" : ""}</p>
    </div>
  );
};

export default ApplesBaskt;

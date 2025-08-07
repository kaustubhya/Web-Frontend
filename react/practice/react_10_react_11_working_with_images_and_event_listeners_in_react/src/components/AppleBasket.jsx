
const ApplesBaskt = ({appleCount, basket}) => {
  return (
    <div>
      <div>
        <span className= "apples">{appleCount}</span>
        <span className="apples">Apples</span>
      </div>
      <p className="basket">{basket}</p>
    </div>
  );
};

export default ApplesBaskt;

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

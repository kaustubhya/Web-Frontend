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

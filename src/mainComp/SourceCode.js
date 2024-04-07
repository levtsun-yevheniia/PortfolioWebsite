const SourceCode = ({ onMouseHover, onMouseHoverOut }) => {
  return (
    <div className="sourcecode">
      <div className="container">
        <div className="title">
          <div className="heading">
            <p>Source code</p>
          </div>
        </div>
        <div className="head">
          <p>Visit my GitHub repository for a comprehensive view of my coding work.</p>
        </div>
        <div className="button_block">
          <div
            className="btn btn--second"
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseHoverOut}
          >
            Show me
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceCode;

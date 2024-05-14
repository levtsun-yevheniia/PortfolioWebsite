import { useCursor } from '../utils/cursorContext';

const SourceCode = () => {
  const { onMouseHover, onMouseHoverOut, onClickCursorAnimation } = useCursor();
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
          <a href="https://github.com/levtsun-yevheniia" target="_blank">
            <div
              className="btn btn--second"
              onMouseEnter={onMouseHover}
              onMouseLeave={onMouseHoverOut}
              onClick={onClickCursorAnimation}
            >
              Show me
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SourceCode;

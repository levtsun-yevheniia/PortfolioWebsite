import useAnimatedButtons from '../useAnimatedButtons';

const Header = ({ onMouseHover, onMouseHoverOut }) => {
  useAnimatedButtons();
  return (
    <div className="header">
      <div className="container">
        <div className="menu">
          <div className="menu__options">
            <ul>
              <li onMouseEnter={onMouseHover} onMouseLeave={onMouseHoverOut}>
                About me
              </li>
              <li onMouseEnter={onMouseHover} onMouseLeave={onMouseHoverOut}>
                Projects
              </li>
              <li onMouseEnter={onMouseHover} onMouseLeave={onMouseHoverOut}>
                Skills
              </li>
            </ul>
          </div>
          <div className="menu__btn">
            <button
              className="btn btn--first"
              onMouseEnter={onMouseHover}
              onMouseLeave={onMouseHoverOut}
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

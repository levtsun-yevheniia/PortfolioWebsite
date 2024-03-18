function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="menu">
          <div className="menu__options">
            <ul>
              <li>About me</li>
              <li>Projects</li>
              <li>Skills</li>
            </ul>
          </div>
          <div className="menu__btn">
            <button className="btn btn--first">Contact me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

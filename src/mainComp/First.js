import mainimage from '../assets/background3.jpg';
import planet from '../assets/planet.png';
import linkedIn from '../assets/linkedIn.png';
import github from '../assets/github.png';

function First() {
  return (
    <div className="first">
      <img className="first__background" src={mainimage} alt="Main" />

      <div className="first__title">
        <div className="text">
          <p>Hi! My name is Yevheniia Levtsun and I’m</p>
          <h1>WEB DEVELOPER</h1>
        </div>
        <div className="located">
          <div className="located__image">
            <img src={planet} alt="BackgroundPicture" />
          </div>
          <p className="located__text">Located in Montreal, QC, Canada</p>
        </div>
      </div>
      <div className="container">
        <div className="first__links">
          <img className="linkedIn_icon" src={linkedIn} alt="LinkedIn" />
          <img className="github_icon" src={github} alt="GitHub" />
        </div>
      </div>
    </div>
  );
}

export default First;

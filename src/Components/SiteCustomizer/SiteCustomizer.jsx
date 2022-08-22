// Icon Imports
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as TbIcons from "react-icons/tb";
// Style Imports
import './SiteCustomizer.css';

const SiteCustomizer = (props) => {
  const { SetAccentColor, SetAccentCursor } = props;

  const onOpenClick = (e) => {
    e.target.parentElement.parentElement.classList.toggle("opened");
  }

  const onColorClick = (e) => {
    SetAccentColor(e.target.style["background-color"]);
  }

  const onCursorClick = (e) => {
    const cursorElements = document.getElementsByClassName("clicker");
    for (var element of cursorElements) {
      if (element.classList.contains("active")) {
        element.classList.toggle("active");
      }
    }

    e.target.classList.toggle("active");
    SetAccentCursor(e.target.classList[0]);
  }

  const isMobile = () => {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;

    let isMobileDevice = regexp.test(details);
    console.log(details)
    if (isMobileDevice) {
      return true;
    }

    return false;
  }
  
  return (
    <div id="customizer" className="customizer-container">
      <div className="icon-container">
        <BsIcons.BsGearWideConnected className="icon" />
        <div className="click-field" onClick={onOpenClick}></div>
      </div>
      <div className="wrapper">
        <span className="title">Color Picker</span>
        <ul className="colors">
          <li><div onClick={onColorClick} style={{backgroundColor: "#4169e1"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#66B95C"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#ff9800"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#ff5e94"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#fa5b0f"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#f39977"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#9200ee"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#00D4BD"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#5e9e9f"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#EB4A4C"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#666d41"}}></div></li>
          <li><div onClick={onColorClick} style={{backgroundColor: "#fe0000"}}></div></li>
        </ul>
        {isMobile() 
        ? <></>
        : <>  
          <span className="title">Cursor Picker</span>
          <ul className="cursor">
            <li>
              <div>
                <GiIcons.GiArrowCursor className="cursor-icon" />
                <div className="default clicker active" onClick={onCursorClick}></div>
              </div>
            </li>
            <li>
              <div>
                <FaIcons.FaHandPointer className="cursor-icon" />
                <div className="pointer clicker" onClick={onCursorClick}></div>
              </div>
            </li>
            <li>
              <div>
                <FaIcons.FaHandPaper className="cursor-icon" />
                <div className="grab clicker" onClick={onCursorClick}></div>
              </div>
            </li>
            <li>
              <div>
                <FaIcons.FaHandRock className="cursor-icon" />
                <div className="grabbing clicker" onClick={onCursorClick}></div>
              </div>
            </li>
            <li>
              <div>
                <BiIcons.BiPlusMedical className="cursor-icon" />
                <div className="cell clicker" onClick={onCursorClick}></div>
              </div>
            </li>
            <li>
              <div>
                <BiIcons.BiCrosshair className="cursor-icon" />
                <div className="crosshair clicker" onClick={onCursorClick}></div>
              </div>
            </li>
            <li>
              <div>
                <TbIcons.TbForbid className="cursor-icon" />
                <div className="no-drop clicker" onClick={onCursorClick}></div>
              </div>
            </li>
          </ul>
        </> }
      </div>
    </div>
  );
}

export default SiteCustomizer;
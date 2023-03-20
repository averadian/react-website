// Package Imports
import { useNavigate } from 'react-router-dom';
// Icon Imports
import * as IoIcons from "react-icons/io";
// Style Imports
import './BackButton.css';

const BackButton = (props) => {
  const { OverlayUp } = props;

  const navigate = useNavigate();

  const handleOnClick = () => {
    OverlayUp();

    setTimeout(() => {  
      navigate("/portfolio");
    }, 500);
  }

  return (
    <div onClick={handleOnClick} className="project-back-icon-wrapper">
      <IoIcons.IoMdArrowRoundBack className="project-back-icon" />
    </div>
  )
}

export default BackButton;
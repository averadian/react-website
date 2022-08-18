// Package Imports
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
// Style Imports
import './PageBox.css';

const PageBox = (props) => {
  const { Title, Description, OverlayUp, OverlayDown } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const pageName = location.pathname.substring(1);

  const handleOnClick = () => {
    OverlayDown();

    setTimeout(() => {
      navigate("/");
    }, 400);
  }

  useEffect(() => {
    OverlayUp();
    
    setTimeout(() => {
      setLoading(false);
    }, 400);
  });

  return (
    !loading ? (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <div id={pageName} className={`pagebox-wrapper ${pageName}-on`} data-simplebar="init">
          <div className="simplebar-wrapper">
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset">
                <div className="simplebar-content-wrapper">
                  <div className="simplebar-content">
                    <div className="container">
                      <div className="pagebox-close">
                        <div className="close-btn" onClick={handleOnClick} data-modal-close=""></div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="pagebox-content">
                            <div className="row">
                              <div className="col-12">
                                <div className="section-heading page-heading">
                                  <p className="section-description">{Description}</p>
                                  <h2 className="section-title">{Title}</h2>
                                  <div className="animated-bar"></div>
                                </div>
                              </div>
                            </div>
                            {/* stuff goes here */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="simplebar-placeholder"></div>
          </div>
          <div className="simplebar-track simplebar-horizontal">
            <div className="simplebar-scrollbar"></div>
          </div>
          <div className="simplebar-track simplebar-vertical">
            <div className="simplebar-scrollbar"></div>
          </div>
        </div>
      </motion.div>
    ) : <></> 
  );
}

export default PageBox;

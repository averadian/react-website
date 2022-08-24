// Page Imports
import PageBox from '../../Components/PageBox/PageBox';
// Component Imports
import SkillBar from '../../Components/SkillBar/SkillBar';
// Style Imports
import './Resume.css';

const Resume = (props) => {
  const { Title, Description, OverlayDown, AccentColor } = props;

  return (
    <PageBox 
      Title={Title} 
      Description={Description}  
      OverlayDown={OverlayDown}
      AccentColor={AccentColor}  
    >
      <section className="resume-section single-section">
        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              <div className="block-title">
                <h3>Education</h3>
              </div>
              <div className="timeline timeline-second-style clearfix">
                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2022</h5>
                    <span className="item-company">Manitoba Institute of Trades and Technology</span>
                  </div>
                  <div className="divider" style={{"--accentColor": AccentColor}}></div>
                  <div className="right-part">
                    <h4 className="item-title">Software Developer Diploma</h4>
                    <p>Course graduate with 4.2 GPA. The course consisted of 9 months of studies covering both Back and Front End development. Ending with an 8 week job placement.</p>
                  </div>
                </div>
                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2020</h5>
                    <span className="item-company">Collège Sturgeon Heights Collegiate</span>
                  </div>
                  <div className="divider" style={{"--accentColor": AccentColor}}></div>
                  <div className="right-part">
                    <h4 className="item-title">High School Diploma</h4>
                    <p>Grade 12 graduate, with French Immersion Diploma along with Computer Science 42S International Baccalaureate credit.</p>
                  </div>
                </div>
              </div>
              <div className="white-space-50"></div>
              <div className="block-title">
                <h3>Experience</h3>
              </div>
              <div className="timeline timeline-second-style clearfix">
                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2022</h5>
                    <span className="item-company">Dreamscape One Inc.</span>
                  </div>
                  <div className="divider" style={{"--accentColor": AccentColor}}></div>
                  <div className="right-part">
                    <h4 className="item-title">Full Stack Developer</h4>
                    <p>Worked to develop the back and front ends of a website from scratch with a small team as part of my MITT Software Developer internship. This consisted of operating independently and collaboratively during development as well as successfully managing time/deadlines while working remotely.</p>
                  </div>
                </div>
                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2022</h5>
                    <span className="item-company">Manitoba Institute of Trades and Technology</span>
                  </div>
                  <div className="divider" style={{"--accentColor": AccentColor}}></div>
                  <div className="right-part">
                    <h4 className="item-title">Student Tutoring</h4>
                    <p>Aided other MITT Software Development students to understand front-end development concepts. Broke down steps for troubleshooting code in Javascript, HTML and CSS</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Skills & Certificates --> */}
            <div className="col-xs-12 col-sm-5">
              {/* <!-- Design Skills --> */}
              <div className="block-title">
                <h3>Design <span style={{"--accentColor": AccentColor}}>Skills</span></h3>
              </div>
              <div className="skills-info skills-second-style">
                <SkillBar Name={"Web Design"} Width={"85%"} AccentColor={AccentColor} />
                <SkillBar Name={"Graphic Design"} Width={"75%"} AccentColor={AccentColor} />
                <SkillBar Name={"Logo Design"} Width={"80%"} AccentColor={AccentColor} />
                <SkillBar Name={"Database Design"} Width={"90%"} AccentColor={AccentColor} />
              </div>
              {/* <!-- End of Design Skills --> */}
              <div className="white-space-10"></div>
              {/* <!-- Coding Skills --> */}
              <div className="block-title">
                <h3>Coding <span style={{"--accentColor": AccentColor}}>Skills</span></h3>
              </div>
              <div className="skills-info skills-second-style">
                <SkillBar Name={"JavaScript"} Width={"85%"} AccentColor={AccentColor} />
                <SkillBar Name={"HTML/CSS"} Width={"80%"} AccentColor={AccentColor} />
                <SkillBar Name={"C#"} Width={"85%"} AccentColor={AccentColor} />
                <SkillBar Name={"React.js"} Width={"80%"} AccentColor={AccentColor} />
                <SkillBar Name={"Java"} Width={"75%"} AccentColor={AccentColor} />
              </div>
              {/* <!-- End of Coding Skills --> */}
              <div className="white-space-10"></div>
              {/* <!-- Knowledges --> */}
              <div className="block-title">
                <h3>Knowledges</h3>
              </div>
              <ul className="knowledges">
                <li style={{"--accentColor": AccentColor}}>Problem-Solving</li>
                <li style={{"--accentColor": AccentColor}}>Time Management</li>
                <li style={{"--accentColor": AccentColor}}>Communication</li>
                <li style={{"--accentColor": AccentColor}}>Flexibility</li>
                <li style={{"--accentColor": AccentColor}}>Fast Learner</li>
                <li style={{"--accentColor": AccentColor}}>Creativity</li>
                <li style={{"--accentColor": AccentColor}}>Attention to Detail</li>
                <li style={{"--accentColor": AccentColor}}>Teamwork</li>
              </ul>
              {/* <!-- End of Knowledges --> */}
            </div>
            {/* <!-- End of Skills & Certificates --> */}
          </div>
        </div>
      </section>
    </PageBox>
  );
}

export default Resume;
// Style Imports
import './SkillBar.css';

const SkillBar = (props) => {
  return (
    <>
      <div className="skill clearfix">
        <h4>Web Design</h4>
        <div className="skill-value">{props.Width}</div>
      </div>
      <div className="skill-container" style={{"--accentColor": props.AccentColor}}>
        <div className="skill-percentage" style={{"--barWidth": props.Width}}></div>
      </div>
    </>
  );
}

export default SkillBar;
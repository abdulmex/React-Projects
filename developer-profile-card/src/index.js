import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
      <Skill />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="steve.jpg" alt="ten" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Stephen Abdulmumeen</h1>
      <p>An experirnced front-end developer with sauce</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML + CSS" emoji="💪" color="blue" />
      <Skill name="JavaScript" color="yellow" />
      <Skill name="Web design" color="orange" />
      <Skill name="Git GitHub" color="gray" />
      <Skill name="React" color="purple" />
      <Skill name="Responsive design" color="violet" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span> {props.name} </span>
      <span> {props.emojis} </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

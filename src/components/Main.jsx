import React from 'react';
import { Link } from 'react-router';
import css from './styles/Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className={css.main}>
      <div className={css.container}>
        <div className={css.name}> Shiranka Miskin </div>
        <div className={css.links}>
          <div> <a target="_blank" href="https://github.com/samiskin">> Github</a> </div>
          <div> <a target="_blank" href="https://ca.linkedin.com/in/shiranka-miskin-5a0b3092">> LinkedIn</a> </div>
          <div> <a target="_blank" href="resume.pdf" >> Resume</a> </div>
          <div> <a href="mailto:shiranka.miskin@gmail.com">> E-mail</a> </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Main;

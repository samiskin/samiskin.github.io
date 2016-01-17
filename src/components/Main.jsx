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
          <div> <a href="https://github.com/samiskin">> Github</a> </div>
          <div> <a href="https://ca.linkedin.com/in/shiranka-miskin-5a0b3092">> LinkedIn</a> </div>
          <div> <Link to="resume">> Resume</Link> </div>
          <div> <a href="mailto:shiranka.miskin@gmail.com">> E-mail</a> </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Main;

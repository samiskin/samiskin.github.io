
import React from 'react';
import Store from 'Store';
import css from './styles/App.css';

export default class App extends React.Component {

  static childContextTypes = {
    store: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return { store: Store };
  }

  render() {
    let DevTools = null;
    if (__DEV__) {
      let DevToolsComponent = require('DevTools.jsx').default;
      DevTools = <DevToolsComponent />;
    }

    return (
      <div className={css.app}>
        <div className={css.main}> 

          <div className={css.name}> Shiranka Miskin </div>
          <div className={css.links}>
            <div> <a href="https://github.com/samiskin">Github</a> </div>
            <div> <a href="https://ca.linkedin.com/in/shiranka-miskin-5a0b3092">LinkedIn</a> </div>
            <div> <a target="_blank" href="../../res/resume.pdf">Resume</a> </div>
            <div> <a href="mailto:shiranka.miskin@gmail.com">E-mail</a> </div>
          </div>
        
        </div>
        {DevTools}
      </div>
    );
  }
}

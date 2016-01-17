import React from 'react';

class ResumeView extends React.Component {
  render() {
    return (
      <embed width="100%" height="100%" src="resume.pdf" type="application/pdf" />
    );
  }
}

export default ResumeView;

import React from 'react';

const Progress = ({value}) => (
  <div className="progress">
    <div
      className="progress__bar"
      style={{ width: `${value}%`,
        backgroundColor: value > 66 ? '#85cc00'
          : value > 33 ? '#ffbf00' : '#ff2e00'}}
    />
  <div className="progress__percent">{value}%</div>
  </div>
);

export default Progress;

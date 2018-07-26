import React, {Component} from 'react';

import addButton from '../../assets/add-button.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';

import './style.scss';

class Section extends Component {1

  state = {
    toggle: true,
  }

  toggleSection = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const {toggle} = this.state;
    const {title} = this.props
    return(
      <div className="section">
        <div className="section__header">
          <div className="sectionTitle">{title}</div>
          <div className="sectionButtons">
            <img src={addButton} alt="addButton"/>
            <img onClick={this.toggleSection} src={toggle? arrowUp : arrowDown} alt="arrow"/>
          </div>
        </div>
        <div className={toggle? "section__body" : "section__hide"}>XXXXXXXXXX</div>
      </div>
    );
  }
};

export default Section;

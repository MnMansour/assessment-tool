import React from 'react';
import addButton from '../../assets/add-button.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';

const SectionHeader = ({enableEdit, title, toggle, toggleSection, openModal}) => (
  <div className="section__header">
    <div className="sectionTitle">{title}</div>
    <div className="sectionButtons" >
      { enableEdit && <img src={addButton} alt="addButton" onClick={()=>openModal()} />}
      <img onClick={()=>toggleSection()} src={toggle? arrowUp : arrowDown} alt="arrow"/>
    </div>
  </div>
);

export default SectionHeader;

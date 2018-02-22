import React from "react";

class GenericIcons extends React.Component {
  render() {
    if( this.props.size === '2x' ){
      return (<img src="{this.props.src}" width="40" />);
    } else if( this.props.size == '3x' ){
      return (<img src="{this.props.src}" width="60" />);
    }
    return( <img src="{this.props.src}" width="20" /> );
  }
}

export default GenericIcons;

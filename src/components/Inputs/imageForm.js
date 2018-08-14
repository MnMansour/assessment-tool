import React, { Component } from 'react';

class InputField extends Component {

  state = {
      pictureUrl: ''
    }

  displayPicture = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];
      if(file){
      reader.onloadend = () => {
        console.log(file);
        this.setState({
          picture: file,
          pictureUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  render() {
    const {input} = this.props,
    {pictureUrl} = this.state;
    delete input.value;
    return (
      <div>
        <div className={pictureUrl? "input-file" :"image-container"}>
          <label className="label-file" htmlFor={input.name}>
            uploud image
          </label>
          <input type="file"
           {...input}
           onChange={(...args) => {
             input.onChange(...args)
             this.displayPicture(...args)
           }}
           className="input-file"
           id={input.name}
          />
        </div>
        {pictureUrl &&<PreviewPicture pictureUrl={pictureUrl}/>}
      </div>
    );
  }
}

export default InputField;

const PreviewPicture = ({pictureUrl}) => {
    return (
      <div className="image">
        <img className="uploud-image" src={pictureUrl} alt="user"/>
      </div>
    )
};

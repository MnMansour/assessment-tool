import React, { Component } from 'react';

class InputField extends Component {

  state = {
      pictureUrl: '',
      errorMessage: '',
      error: false
    }

  displayPicture = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    if(file){
      const type = file.type;
      const size = file.size;
      if (type.includes('image')) {
        if (size < 1000000) {
          reader.onloadend = () => {
            this.setState({
              picture: file,
              pictureUrl: reader.result
            });
          };
          reader.readAsDataURL(file);
        }else this.setState({errorMessage:"Maximum uploaad image size 2MB", error:true})
      }else this.setState({errorMessage:"Pleace select only image file",  error:true})
    }
  }

  render() {
    const {input} = this.props,
    {pictureUrl, error, errorMessage} = this.state;
    delete input.value;
    return (
      <div>
        { error && <div className="login-error">{errorMessage}
          <span onClick={()=>this.setState({error: false})}>x</span></div> }
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

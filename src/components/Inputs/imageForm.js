import React, { Component } from 'react';
import removeIcon from '../../assets/remove-icon.svg'

class InputField extends Component {

  state = {
      pictureUrl: '',
      errorMessage: '',
      error: false
    }

  componentWillMount() {
    const {Image} = this.props;
    if(Image) this.setState({pictureUrl:Image});
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

  removeImage = () => {
    this.setState({pictureUrl: ''});
    this.props.resetImage();
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
           onChange={(event) => {
             input.onChange(event)
             this.displayPicture(event)
           }}
           className="input-file"
           id={input.name}
          />
        </div>
        {pictureUrl &&<PreviewPicture remove={this.removeImage} pictureUrl={pictureUrl}/>}
      </div>
    );
  }
}

export default InputField;

const PreviewPicture = ({pictureUrl, remove}) => {
    return (
      <div className="image">
        <img className="uploud-image" src={pictureUrl} alt="user"/>
        <img className="remove-image" src={removeIcon} alt="remove" onClick={()=>remove()}/>
      </div>
    )
};

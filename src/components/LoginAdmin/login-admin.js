import React, { Component } from 'react';
import './login-admin.css';
import tick from '../../assets/tick.png';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import {connect} from 'react-redux';
import {logIn, userState} from '../../redux/actions';
import {fetchUsers} from '../../util/api';


const validate = (obj)=>{
  return {
    username:isAlphanumeric(obj.username),
    password:isAlphanumeric(obj.password)
  }
}

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      apiusers:{}
    }
  }
  componentWillMount(){
  fetchUsers((data) => this.setState({apiusers:data}))
  }
  componentDidMount(){
    this.props.insertuser(this.state.apiusers)
    console.log('Login-page', this.state.apiusers.data)
  }  
  /*getUsers =()=>{
    this.props.insertuser(this.state.apiusers)
    console.log('Login-page', this.state.apiusers.data)
  }*/
  handleLogin = (e)=>{
    e.preventDefault();
   if(this.state.apiusers.status===200){
      let users = Object.values(this.state.apiusers.data);
      let id = this.state.username;
      let pass = this.state.password
      let check = users.filter((item)=>item.id===id)
      let checked ={...check}
        if((pass===Object.values(checked)[0].account) && (id===Object.values(checked)[0].id)){
          this.props.login(checked)
          window.location.href =`/app/loginprocess`
          console.log("Success!",checked )
        }else{
          console.log("failed!",checked )
        }
   }else if(this.state.apiusers.status===404){
    console.log("error-section!", this.state.apiusers.status)
   }else{
    console.log("error-section-two!", this.state.apiusers.status)
   }
}
  render() {
    //this.getUsers()
    const errors = validate(this.state)
    return (
      <div className="login">
        <p className='title'>Sign-In</p>
        <form onSubmit={(e)=>{this.handleLogin(e)}}>
            <input type="text" 
            placeholder="Username" 
            className="form"
            onChange={e=>this.setState({username:e.target.value})}
            value={this.state.username}/>
            <span className="username">
            <img src={tick} alt="tick" className={errors.username ? 'valid' : 'tick'}/>
            </span>
            <input type="password" 
            placeholder="Password" 
            className="form"
            onChange={e=>this.setState({password:e.target.value})}
            value={this.state.password}/>
            <span className="password">
            <img src={tick} alt="tick" className={errors.password ? 'valid' : 'tick'}/>
            </span>
            <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}

  const mapDispatchToProps = (dispatch)=>{
    return { 
      login: (user)=>dispatch(logIn(user)),
      insertuser: (users)=>dispatch(userState(users)),
    }
  }

export default connect(null, mapDispatchToProps)(LoginForm);
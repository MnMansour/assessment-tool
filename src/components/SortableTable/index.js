import React, { Component } from "react";
import "./sortableTable.css"
import {connect} from "react-redux"
class SortableTable extends Component{
    
    handleSortAlpha = (classes,sortBy,isReversed)=>{
        let sortedClasses = []
        isReversed ?  sortedClasses = [...classes].sort((a,b)=>a[sortBy]>b[sortBy])
        : sortedClasses = [...classes].sort((a,b)=>a[sortBy]<b[sortBy])

       this.setState({classes:sortedClasses})
    }
    handleSortNum = (classes,sortBy,isReversed)=>{
        let sortedClasses = []
        isReversed ?  sortedClasses = [...classes].sort((a,b)=>b[sortBy]-a[sortBy])
        : sortedClasses = [...classes].sort((a,b)=>a[sortBy]-b[sortBy])

       this.setState({classes:sortedClasses})
    }
    render(){
        const classes=this.props.classes
        console.log(classes)
        return (
            <table className="classes">
                <thead>
                    <tr>
                        <th className="classes__th">Id
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortAlpha(classes,"id",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortAlpha(classes,"id",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Location     
                            <span className="classes__span">
                                <div 
                                    onClick={()=>this.handleSortAlpha(classes,"location",true)} 
                                    className="arrow-up">
                                </div>
                                <div 
                                    onClick={()=>this.handleSortAlpha(classes,"location",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </th>
                        <th className="classes__th">Class Name
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortAlpha(classes,"className",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortAlpha(classes,"className",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Participants
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortNum(classes,"participants",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum(classes,"participants",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Current Sprint
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortNum(classes,"currentSprint",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum(classes,"currentSprint",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Mange</th>
                    </tr>
                </thead>
                {classes.map((item,i)=>{
                    return(
                        <tbody key={i}>
                            <tr >
                                <td>{item.id}</td>
                                <td>{item.location}</td>
                                <td>{item.className}</td>
                                <td>{item.participants}</td>
                                <td>{item.currentSprint}</td>
                                <td>{item.manage}</td>
                             </tr>
                        </tbody>
                        
                    )
                    
                })}
            
          </table>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        classes: state.userClass
    }
}
export default connect(mapStateToProps)(SortableTable);
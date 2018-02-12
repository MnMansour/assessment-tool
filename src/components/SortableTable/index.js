import React, { Component } from "react";
import "./sortableTable.css"
import {connect} from "react-redux"
import {sortClasses} from '../../redux/actions'
class SortableTable extends Component{
    
    handleSortAlpha = (classes,sortBy,isReversed)=>{
        let sortedClasses = []
        isReversed ?  sortedClasses = classes.sort((a,b)=>a[sortBy]>b[sortBy])
        : sortedClasses = classes.sort((a,b)=>a[sortBy]<b[sortBy])
        console.log(sortedClasses,'wow')
       this.props.sortClasses(sortedClasses)
    }
    handleSortNum = (classes,sortBy,isReversed)=>{
        let sortedClasses = []
        isReversed ?  sortedClasses = [...classes].sort((a,b)=>b[sortBy]-a[sortBy])
        : sortedClasses = [...classes].sort((a,b)=>a[sortBy]-b[sortBy])

        this.props.sortClasses(sortedClasses)
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
                                onClick={()=>this.handleSortNum(classes,"id",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum(classes,"id",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th"> Graduation Date    
                            <span className="classes__span">
                                <div 
                                    onClick={()=>this.handleSortNum(classes,"graduationDate",true)} 
                                    className="arrow-up">
                                </div>
                                <div 
                                    onClick={()=>this.handleSortAlpha(classes,"graduationDate",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </th>
                        <th className="classes__th"> Name
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortAlpha(classes,"name",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortAlpha(classes,"name",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Participants
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortNum(classes,"participantCount",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum(classes,"participantCount",false)}
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
                        <th className="classes__th">Head Teacher
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortAlpha(classes,"headTeacher",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortAlpha(classes,"headTeacher",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Planned Sprints
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortNum(classes,"plannedSprints",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum(classes,"plannedSprints",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">
                            Manage
                        </th>
                    </tr>
                </thead>
                {classes.map((item,i)=>{
                    return(
                        <tbody key={i}>
                            <tr >
                                <td>{item.id}</td>
                                <td>{item.graduationDate}</td>
                                <td>{item.name}</td>
                                <td>{item.participantCount}</td>
                                <td>{item.currentSprint}</td>
                                <td>{item.headTeacher}</td>
                                <td>{item.plannedSprints}</td>
                                <td></td>
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
        classes: state.userClass.classInfo
    }
}
const mapDispatchToProps = dispatch => {
    return {
      sortClasses: classes => dispatch((sortClasses(classes)))
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(SortableTable);
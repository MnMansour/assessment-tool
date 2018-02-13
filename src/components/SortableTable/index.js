import React, { Component } from "react";
import "./sortableTable.css"
import {connect} from "react-redux"
import {sortClasses} from '../../redux/actions'
class SortableTable extends Component{
    
 
    handleSortGeneral = (classes, sortBy, isReversed, sorter)=>{
        let sortedClasses = [...classes]
        sortedClasses.sort((a, b) => isReversed
            ?  sorter(a[sortBy], b[sortBy])
            :  - sorter(a[sortBy], b[sortBy])
        )
        return sortedClasses
    }
   
    dateSorter =  (a,b)=> (new Date(a).getTime() - new Date(b).getTime())
    numberSorter = (a,b)=> a - b
    alphaNumSorter = (a,b)=> {
        if(a > b) {
            return 1;
        }
        if(a < b) {
            return -1;
        }
        return 0;
    }
    
    handleDate = (classes, sortBy,isReversed) => this.handleSortGeneral(classes, sortBy,isReversed, this.dateSorter)
    handleNumber = (classes,sortBy,isReversed) => this.handleSortGeneral(classes,sortBy,isReversed,this.numberSorter)
    handleAlpha = (classes,sortBy,isReversed) => this.handleSortGeneral(classes,sortBy,isReversed,this.alphaNumSorter)

    handleSortDate = (sortBy,isReversed) => {
        const sorted = this.handleDate(this.props.classes, sortBy,isReversed)
        this.props.sortClasses(sorted)
    }
    handleSortNum = (sortBy,isReversed) => {
        const sorted = this.handleNumber(this.props.classes, sortBy,isReversed)
        this.props.sortClasses(sorted)
    }
    handleSortAlpha = (sortBy,isReversed) => {
        const sorted = this.handleAlpha(this.props.classes, sortBy,isReversed)
        this.props.sortClasses(sorted)
    }

    render(){
        const classes=this.props.classes
        return (
            <table className="classes">
                <thead>
                    <tr>
                        <th className="classes__th">Id
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortNum("id",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum("id",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th"> Graduation Date    
                            <span className="classes__span">
                                <div 
                                    onClick={()=>this.handleSortDate("graduationDate",true)} 
                                    className="arrow-up">
                                </div>
                                <div 
                                    onClick={()=>this.handleSortDate("graduationDate",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </th>
                        <th className="classes__th"> Name
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortAlpha("name",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortAlpha("name",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Participants
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortNum("participantCount",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum("participantCount",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Current Sprint
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortNum("currentSprint",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum("currentSprint",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Head Teacher
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortAlpha("headTeacher",true)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortAlpha("headTeacher",false)}
                                className="arrow-down">
                            </div>
                        </span>
                        </th>
                        <th className="classes__th">Planned Sprints
                        <span className="classes__span">
                            <div 
                                onClick={()=>this.handleSortNum("plannedSprints",true, this.dateSorter)} 
                                className="arrow-up">
                            </div>
                            <div 
                                onClick={()=>this.handleSortNum("plannedSprints",false, this.dateSorter)}
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
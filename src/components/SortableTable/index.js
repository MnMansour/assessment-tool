import React, { Component } from "react";
import "./sortableTable.css"
import {connect} from "react-redux"
import {sortClasses, getClasses} from '../../redux/actions'
import {handleDate,handleNumber,handleAlpha} from '../../utilities/sort'
import {fetchClassess} from '../../API'

class SortableTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            classes : []
        }
    }

    componentDidMount() {
        fetchClassess()
            .then((res) => {
                this.setState({classes:res.data})
            })
            .catch(err => console.log(err))
     }
    handleSortDate = (sortBy,isReversed) => {
        const sorted = handleDate(Object.values(this.state.classes), sortBy,isReversed)
        this.setState({classes:sorted})
    }
    handleSortNum = (sortBy,isReversed) => {
        const sorted = handleNumber(Object.values(this.state.classes), sortBy,isReversed)
        this.setState({classes:sorted})
    }
    handleSortAlpha = (sortBy,isReversed) => {
        const sorted = handleAlpha(Object.values(this.state.classes), sortBy,isReversed)
        this.setState({classes:sorted})
    }

    render(){
        const classes=Object.values(this.state.classes)
        console.log('classes', classes)
        console.log(this.props.classes)
        return (
            <div className="classes">
                    <div className = "head">
                        <div  className="title">
                            <span className="head__span">Id</span>
                            <span className="head__span">
                                <div
                                    onClick={()=>this.handleSortNum("id",true)}
                                    className="arrow-up">
                                </div>
                                <div
                                    onClick={()=>this.handleSortNum("id",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                       </div>
                        <div  className="title">
                            <span className="head__span">Graduation Date </span>
                            <span className="head__span">
                                <div
                                    onClick={()=>this.handleSortDate("graduationDate",true)}
                                    className="arrow-up">
                                </div>
                                <div
                                    onClick={()=>this.handleSortDate("graduationDate",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </div>
                        <div className="title">
                            <span className="head__span">Name</span>
                            <span className="head__span">
                                <div
                                    onClick={()=>this.handleSortAlpha("name",true)}
                                    className="arrow-up">
                                </div>
                                <div
                                    onClick={()=>this.handleSortAlpha("name",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </div>
                        <div  className="title">
                            <span className="head__span">Participants</span>
                            <span className="head__span">
                                <div
                                    onClick={()=>this.handleSortNum("participantCount",true)}
                                    className="arrow-up">
                                </div>
                                <div
                                    onClick={()=>this.handleSortNum("participantCount",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </div>
                        <div  className="title">
                            <span className="head__span">Current Sprint</span>
                            <span className="head__span">
                                <div
                                    onClick={()=>this.handleSortNum("currentSprint",true)}
                                    className="arrow-up">
                                </div>
                                <div
                                    onClick={()=>this.handleSortNum("currentSprint",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </div>
                        <div  className="title">
                            <span className="head__span">Head Teacher</span>
                            <span className="head__span">
                                <div
                                    onClick={()=>this.handleSortAlpha("headTeacher",true)}
                                    className="arrow-up">
                                </div>
                                <div
                                    onClick={()=>this.handleSortAlpha("headTeacher",false)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </div>
                        <div  className="title">
                            <span className="head__span">Planned Sprints</span>
                            <span className="head__span">
                                <div
                                    onClick={()=>this.handleSortNum("plannedSprints",true, this.dateSorter)}
                                    className="arrow-up">
                                </div>
                                <div
                                    onClick={()=>this.handleSortNum("plannedSprints",false, this.dateSorter)}
                                    className="arrow-down">
                                </div>
                            </span>
                        </div>
                        <div  className="title">
                           <span className="head__span">Manage</span>
                        </div>
                    </div>
                {classes.map((item,i)=>{
                    return(
                        <div key={i} className="body">
                                <div className="info">{item.id}</div>
                                <div className="info">{item.graduationDate}</div>
                                <div className="info">{item.name}</div>
                                <div className="info">{item.participantCount}</div>
                                <div className="info">{item.currentSprint}</div>
                                <div className="info">{item.headTeacher}</div>
                                <div className="info">{item.plannedSprints}</div>
                                <div className="info"></div>

                        </div>

                    )

                })}

          </div>
        )
    }
}

const mapStateToProps = (classes)=>{
    return {
        classes
    }
}
const mapDispatchToProps = dispatch => {
    return {
      sortClasses: classes => dispatch((sortClasses(classes))),
      showClasses: () => dispatch(getClasses())
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(SortableTable);

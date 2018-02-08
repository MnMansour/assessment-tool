import React, { Component } from "react";
import "./sortableTable.css"
class SortableTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes:[
                {id:"a1b2c3d",
                location:"Helsinki",
                className:"first class group ",
                participants:"25",
                currentSprint:"12",
                manage:"mange"
                 },
                {id:"a2a2c3d",
                location:"Helsinki",
                className:"second class group ",
                participants:"15",
                currentSprint:"12",
                manage:"mange"},
                {id:"c1b2a3d",
                location:"Tampere",
                className:"third class group ",
                participants:"10",
                currentSprint:"8",
                manage:"mange"},
                {id:"d1b2c3a",
                location:"Stockholm",
                className:"fourth class group ",
                participants:"13",
                currentSprint:"6",
                manage:"mange"},
                {id:"f1b2c3d",
                location:"Helsinki",
                className:"class 2018",
                participants:"19",
                currentSprint:"4",
                manage:"mange"},
                {id:"g1b2c3d",
                location:"Berlin",
                className:"class 2017",
                participants:"17",
                currentSprint:"1",
                manage:"mange"}
            ]
          };
    }
    handleSortAlpha = (classes,sortBy,isReversed)=>{
        let sortedClasses = []
        isReversed ?  sortedClasses = classes.sort((a,b)=>a[sortBy]>b[sortBy])
        : sortedClasses = classes.sort((a,b)=>a[sortBy]<b[sortBy])

       this.setState({classes:sortedClasses})
    }
    handleSortNum = (classes,sortBy,isReversed)=>{
        let sortedClasses = []
        isReversed ?  sortedClasses = classes.sort((a,b)=>b[sortBy]-a[sortBy])
        : sortedClasses = classes.sort((a,b)=>a[sortBy]-b[sortBy])

       this.setState({classes:sortedClasses})
    }
    render(){
        const classes=this.state.classes
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
                {classes.map((item)=>{
                    return(
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.location}</td>
                        <td>{item.className}</td>
                        <td>{item.participants}</td>
                        <td>{item.currentSprint}</td>
                        <td>{item.manage}</td>
                    </tr>
                    )
                    
                })}
            
          </table>
        )
    }
}
export default SortableTable;
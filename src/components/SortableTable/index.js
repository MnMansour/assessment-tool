import React, { Component } from "react";

class SortableTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes:[
                {id:"a1b2c3d",
                location:"Helsinki",
                className:"first class group ",
                participants:"15",
                currentSprint:"12",
                manage:""
                 },
                {id:"b1a2c3d",
                location:"Helsinki",
                className:"second class group ",
                participants:"15",
                currentSprint:"12",
                manage:""},
                {id:"c1b2a3d",
                location:"Tampere",
                className:"third class group ",
                participants:"15",
                currentSprint:"8",
                manage:""},
                {id:"d1b2c3a",
                location:"Stockholm",
                className:"fourth class group ",
                participants:"15",
                currentSprint:"6",
                manage:""},
                {id:"f1b2c3d",
                location:"Helsinki",
                className:"2018",
                participants:"15",
                currentSprint:"4",
                manage:""},
                {id:"g1b2c3d",
                location:"Berlin",
                className:"2017",
                participants:"15",
                currentSprint:"1",
                manage:""}
            ]
          };
    }
    render(){
        return (
            <div>

            </div>
        )
    }
}
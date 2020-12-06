import React, { Coomponent } from 'react'
import * as d3 from 'd3'

export default class BarChart extends React.Component {

    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }


    componentDidMount(){
        
        const temperatureData = [ 8, 5, 13, 9, 12, 86, 1 ]
        
        const w = 500;
        const h = 400;
        
        let accessToRef = d3.select(this.myRef.current)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("background-color", "beige")
            .style("padding", 10)
            .style("margin-left", 50)            
            
            accessToRef.selectAll("rect")
                .data(temperatureData)
                .enter()
                .append("rect")
                .attr("x", (d, i) => i * 70)
                .attr("y", (d, i) => h - 10 * d)
                .attr("width", 65)
                .attr("height", (d, i) => d * 10)
                .attr("fill", "tomato")

    }

    render(){
        return <>
            <div ref = {this.myRef}> </div>
        </>
    }

}
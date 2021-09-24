import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarChart extends Component {

    getChartData(labels, currentLevelData, targetRoleData) {
        return {
            labels: labels,
            datasets: [{
                label: "Current levels",
                //lineTension: 0.1, //more wobbly lines
                backgroundColor: "rgba(102, 153, 204, 0.2)",
                borderColor: "rgba(102, 153, 204, 1)",
                pointBackgroundColor: "rgba(102, 153, 204, 1)",
                pointBorderColor: "#fff",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(102, 153, 204, 1)",
                data: currentLevelData
            },
            {
              label: "Target role",
              //lineTension: 0.1, //more wobbly lines
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: targetRoleData
          }]
        };
    }

    getChartOptions(skillLevelDefinitions) {
        return {
            scale: {
              angleLines: {
                display: true,
                lineWidth: 0.5,
                color: 'rgba(128, 128, 128, 0.2)'
              },
              pointLabels: { // outside labels
                fontSize: 12,
                fontStyle: '300',           
                fontFamily: "'Lato', sans-serif"
              },
              ticks: {
                fontSize: 12,
                beginAtZero: true,
                min: 0,
                max: 4,
                callback: function(value, index, values) {
                  return skillLevelDefinitions[index];
                },
                stepSize: 1
              }
            },
            maintainAspectRatio: true
        }
    }

    render() {
        return (
          <section id="chart" style={{ // Need this here as chart resizing doesnt work correctly through the chart react component!
            position: "relative",
            height: "650px",
            width: "650px"
          }}>
            <Radar 
                data={this.getChartData(this.props.labels, this.props.currentLevelData, this.props.targetLevelData)}
                options={this.getChartOptions(this.props.skillLevelDefinitions)}
                getElementsAtEvent = {(events) => {
                  console.log(events);
                 
                }}                 />
          </section>
        );
      }
}


export default RadarChart;
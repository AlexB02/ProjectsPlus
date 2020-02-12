import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import styled from "styled-components";

const TitleBar = styled.span`
  font-family: 'Karla', sans-serif;
  padding: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;
  background-color: ${props => props.colour};
  transition: all 0.2s;
  z-index: 1;
  color: white;
  cursor: default;
  font-weight: bold;
  text-align: center;
`

const StatisticCircle = styled.td`
  width: 20%;
`

const CircleGap = styled.td`
  width: 20%;
`

export class ProjectStatisticsWidget extends React.Component {
  render() {
    return (
      <html class="widget">
        <TitleBar colour="#BF0864">Statistics</TitleBar>
        <p />
        <table>

          <CircleGap />

          <StatisticCircle>
            0%
            <Circle percent="0" strokeWidth="4" strokeColor="#DE614A"/>
          </StatisticCircle>

          <CircleGap />

          <StatisticCircle>
            50%
            <Circle percent="50" strokeWidth="4" strokeColor="#FF8429"/>
          </StatisticCircle>

          <CircleGap />

        </table>
        <p />
      </html>
    )
  }
}

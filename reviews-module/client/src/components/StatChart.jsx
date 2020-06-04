import React, { Fragment } from 'react';
import styled from 'styled-components';
import StatSlider from './StatSlider.jsx';

const Header = styled.div`
margin: 20px 0 0 0;
`;
const Percent = styled.header`
margin:0;
padding:0;
font-size: 56px;
    line-height: 48px;
    font-family: AdineuePRO,Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 600;
`;


class StatChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var percentRecommended;
    var reviews = this.props.reviews[0].review;
    var totalRecommended = 0;
    var size = 0;
    var width = 0;
    var comfort = 0;
    var quality = 0;
    if (reviews.length === 0) {
      percentRecommended = 0 + '%';
      var sizePercent = 0;
      var widthPercent = 0;
      var comfortPercent = 0;
      var qualityPercent = 0;
    } else {
      for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].doesRecommended === true) totalRecommended += 1;
        if (reviews[i].rating_size === 'a size too small') {
          size += 0;
        } else if (reviews[i].rating_size === '1/2 a size too small') {
          size += 25;
        } else if (reviews[i].rating_size === 'Perfect') {
          size += 50;
        } else if (reviews[i].rating_size === '1/2 a size too big') {
          size += 75;
        } else {
          size += 100;
        }
        if (reviews[i].rating_width === 'Too narrow') {
          width += 0;
        } else if (reviews[i].rating_width === 'Slightly narrow') {
          width += 25;
        } else if (reviews[i].rating_width === 'Perfect') {
          width += 50;
        } else if (reviews[i].rating_width === 'Slightly wide') {
          width += 75;
        } else {
          width += 100;
        }
        if (reviews[i].rating_comfort === 'Uncomfortable') {
          comfort += 0;
        } else if (reviews[i].rating_comfort === 'Slightly uncomfortable') {
          comfort += 25;
        } else if (reviews[i].rating_comfort === 'Ok') {
          comfort += 50;
        } else if (reviews[i].rating_comfort === 'Comfortable') {
          comfort += 75;
        } else {
          comfort += 100;
        }
        if (reviews[i].rating_quality === 'Poor') {
          quality += 0;
        } else if (reviews[i].rating_quality === 'Below average') {
          quality += 25;
        } else if (reviews[i].rating_quality === 'What I expected') {
          quality += 50;
        } else if (reviews[i].rating_quality === 'Pretty great') {
          quality += 75;
        } else {
          quality += 100;
        }
      }
      percentRecommended = Math.round(totalRecommended / reviews.length * 100) + '%';
      var sizePercent = size / reviews.length;
      var widthPercent = width / reviews.length;
      var comfortPercent = comfort / reviews.length;
      var qualityPercent = comfort / reviews.length;
    }
  
    // console.log(qualityPercent)
    return (
      <Fragment>
        <Header>
          <Percent>{percentRecommended}</Percent>
          <span>of customers recommend this product</span>
        </Header>
        <StatSlider title={'size'} labels={['small', 'perfect', 'large']} prct={sizePercent}/>
        <StatSlider title={'width'} labels={['narrow', 'perfect', 'wide']} prct={widthPercent}/>
        <StatSlider title={'comfort'} labels={['poor', '', 'perfect']} prct={comfortPercent}/>
        <StatSlider title={'quality'} labels={['poor', '', 'perfect']} prct={qualityPercent}/>
      </Fragment>
    );
  }
}

export default StatChart;
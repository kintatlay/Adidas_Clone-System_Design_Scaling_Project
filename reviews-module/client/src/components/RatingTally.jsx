import React, { Fragment } from 'react';
import styled from 'styled-components';
import RatingTallyEntry from './RatingTallyEntry.jsx';

const StarRating = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
background-color: #2ada71;
`;
const OutofFive = styled.div`
font-size: 56px;
font-weight: 700;
text-align: right;
padding-right: 8px;
`;
const Stars = styled.div`
flex-flow: column wrap;
justify-content: space-between;
padding: 8px 0 8px 8px;
`;
const RatingBreakdown = styled.div`
border-bottom: 1px solid #ebedee;
padding-bottom: 20px;
margin-top: 20px;
`;
const Header = styled.header`
font-size: 18px;
line-height: 16px;
font-family: AdineuePRO,Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: 600;
margin-bottom: 20px;
text-transform: uppercase;
`;

class RatingTally extends React.Component {
  constructor(props) {
    super(props);
  }

  /********  MongoDB  ********/
  render() {
    var reviews = this.props.reviews[0].review;
    var totalRating_Overall = 0;
    var fiveStarRatingCount = 0;
    var fourStarRatingCount = 0;
    var threeStarRatingCount = 0;
    var twoStarRatingCount = 0;
    var oneStarRatingCount = 0;
    for (var i=0; i<reviews.length; i++) {
      totalRating_Overall += reviews[i].rating_overall;
      if (reviews[i].rating_overall === 1) {
        oneStarRatingCount += 1;
      } else if (reviews[i].rating_overall === 2) {
        twoStarRatingCount += 1;
      } else if (reviews[i].rating_overall === 3) {
        threeStarRatingCount += 1;
      } else if (reviews[i].rating_overall === 4) {
        fourStarRatingCount += 1;
      } else {
        fiveStarRatingCount += 1;
      }
    }
    var avgRating = Math.round(totalRating_Overall / reviews.length * 100) / 100;
    var fiveStarRatingCountPercentage = fiveStarRatingCount / reviews.length * 100;
    var fourStarRatingCountPercentage = fourStarRatingCount / reviews.length * 100;
    var threeStarRatingCountPercentage = threeStarRatingCount / reviews.length * 100;
    var twoStarRatingCountPercentage = twoStarRatingCount / reviews.length * 100;
    var oneStarRatingCountPercentage = oneStarRatingCount / reviews.length * 100;
    // console.log(reviews);
    if (avgRating > 4.4) {
      var avgStar = '★★★★★';
    } else if (avgRating > 3.4 && avgRating <= 4.4) {
      var avgStar = '★★★★☆';
    } else if (avgRating > 2.4 && avgRating <= 3.4) {
      var avgStar = '★★★☆☆';
    } else if (avgRating > 1.4 && avgRating <= 2.4) {
      var avgStar = '★★☆☆☆';
    } else if (avgRating <= 1.4) {
      var avgStar = '★☆☆☆☆';
    }
    return (
      <>
        <StarRating>
          <OutofFive>{avgRating}</OutofFive>
          <Stars>
            <div>{avgStar}</div>
            <div><strong>{reviews.length}</strong> Reviews</div>
          </Stars>
        </StarRating>
        <RatingBreakdown>
          <Header>rating breakdown</Header>
          <RatingTallyEntry star={5} percent={fiveStarRatingCountPercentage} count={fiveStarRatingCount}/>
          <RatingTallyEntry star={4} percent={fourStarRatingCountPercentage} count={fourStarRatingCount}/>
          <RatingTallyEntry star={3} percent={threeStarRatingCountPercentage} count={threeStarRatingCount}/>
          <RatingTallyEntry star={2} percent={twoStarRatingCountPercentage} count={twoStarRatingCount}/>
          <RatingTallyEntry star={1} percent={oneStarRatingCountPercentage} count={oneStarRatingCount}/>
        </RatingBreakdown>
      </>
    );
  }

  /********  PostageSQL  ********/
  // render() {
  //   return (
  //     <>
  //       <StarRating>
  //         <OutofFive>4.7</OutofFive>
  //         <Stars>
  //           <div>★★★★★</div>
  //           <div><strong>6860</strong> Reviews</div>
  //         </Stars>
  //       </StarRating>
  //       <RatingBreakdown>
  //         <Header>rating breakdown</Header>
  //         <RatingTallyEntry star={5} percent={76.65} count={5253} />
  //         <RatingTallyEntry star={4} percent={17} count={1192} />
  //         <RatingTallyEntry star={3} percent={3} count={244} />
  //         <RatingTallyEntry star={2} percent={1} count={75} />
  //         <RatingTallyEntry star={1} percent={2} count={101} />
  //       </RatingBreakdown>
  //     </>
  //   );
  // }
}

export default RatingTally;
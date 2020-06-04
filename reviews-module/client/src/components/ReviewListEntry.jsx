import React, { Fragment } from 'react';
import styled from 'styled-components';

const CollectionItem = styled.div`
    border-bottom: 1px solid #000;
    position: relative;
    padding-bottom: 40px;
    margin-top: 40px;`;
const Stars = styled.div`
color: #767677;
display: inline-flex;
`;
const Time = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    color: #767677;
    font-size: 14px;
    line-height: 20px;
    margin: 0 0 14px 0;
    `;
const Title = styled.header`
margin: 20px 0 0 0;
padding: 0;
font-size: 18px;
    line-height: 16px;
    font-family: AdineuePRO,Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    `;
const Text = styled.div`
margin-top: 10px 0 0 0;
`;
const Recommend = styled.span`
margin-top: 20px 0 0 0;`;
const DontRecommend = styled.span`
${'' /* display: none; */}
margin: 20px 0 0 0;
`;
const User = styled.div`
    text-transform: uppercase;
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0 14px 0;
`;

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  /********  MongoDB  ********/
  render() {
    var review = this.props.review;
    var date_placeholder = review.created_at.split('-');
    var created_date = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][Number(date_placeholder[1])] + ' ' + (Number(date_placeholder[2].slice(0, 2))).toString() + ', ' + date_placeholder[0];
    // console.log('review', review);
    // console.log('nickname', review.user_nickname);
    if (review.rating_overall === 1) {
      var star = '★☆☆☆☆';
    } else if (review.rating_overall === 2) {
      var star = '★★☆☆☆';
    } else if (review.rating_overall === 3) {
      var star = '★★★☆☆';
    } else if (review.rating_overall === 4) {
      var star = '★★★★☆';
    } else {
      var star = '★★★★★';
    };
    return (
      <CollectionItem>
        <Stars>{star}</Stars>
        <Time>{created_date}</Time>
        <Title>{review.title}</Title>
        <Text>{review.text}</Text>
        {
          review.doesRecommended
            ?
            <Recommend>✓ I recommend this product</Recommend>
            :
            <DontRecommend>x I do not recommend this product</DontRecommend>
        }
        <User>{review.user.nickname}</User>
        <div>Was this review helpful? Yes ({review.isHelpful}) No ({review.isNotHelpful})</div>
      </CollectionItem>
    )
  }

  /********  PostageSQL  ********/
  // render() {
  //   // console.log(this.props.review);
  //   var review = this.props.review;
  //   var date_placeholder = review.created_at.split(' ').slice(1, 4);
  //   var created_date = date_placeholder.slice(0, 2).join(' ').concat(', ', date_placeholder[2]);
  //   // console.log('review', review);
  //   // console.log('nickname', review.user_nickname);
  //   if (review.rating_overall === '1') {
  //     var star = '★';
  //   } else if (review.rating_overall === '2') {
  //     var star = '★★';
  //   } else if (review.rating_overall === '3') {
  //     var star = '★★★'
  //   } else if (review.rating_overall === '4') {
  //     var star = '★★★★';
  //   } else {
  //     var star = '★★★★★';
  //   };
  //   return (
  //     <CollectionItem>
  //       <Stars>{star}</Stars>
  //       <Time>{created_date}</Time>
  //       <Title>{review.title}</Title>
  //       <Text>{review.text}</Text>
  //       {
  //         review.doesrecommended
  //           ?
  //           <Recommend>✓ I recommend this product</Recommend>
  //           :
  //           <DontRecommend>x I do not recommend this product</DontRecommend>
  //       }
  //       <User>{review.nickname}</User>
  //       <div>Was this review helpful? Yes ({review.ishelpful}) No ({review.isnothelpful})</div>
  //     </CollectionItem>
  //   )
  // }

}
// const ReviewListEntry = (props) => (

// );

export default ReviewListEntry;

/*
<Fragment>
  <div>★★★★☆ April 30, 2020</div>
  <div>Title: Awesome shoe!</div>
  <div>Text: Comfortable, it has great style</div>
  <div>✓I recommend this product</div>
  <div>user: vanesa4</div>
  <div>Was this review helpful? Yes (0) No (0)</div>
  <div>---------------------------------------</div>
</Fragment>
*/
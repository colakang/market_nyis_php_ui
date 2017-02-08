/**
 * Created by shaochenlu on 1/16/17.
 */

import React, { Component, PropTypes} from 'react';

export default class StarRate extends Component {
  constructor(props){
    super(props);
    this.state ={
      stable: true,
      pendingScore: 0,
      score: +props.initVal || 0
    };
  }

  handleStarClick(score){
    this.setState({score});
    this.props.onChange(score);
  }

  renderStar(){
    let {stable, pendingScore, score} = this.state;
    let showScore = stable ? score : pendingScore;
    let stars = [];
    for(let i = 0; i < 5; i ++){
      stars.push(
          <span
              key={`rate-star-${i}`}
              onMouseEnter={() => this.setState({pendingScore: i + 1})}
              onClick={() => this.handleStarClick(i + 1)}
              style={{color: i < showScore ? "#ffd756" : "#d8d8d8"}}
          ><i className="fa fa-star"/></span>
      )
    }
    return stars;
  }

  render(){
    return (
        <div
            style={{
              display: "inline-block",
              fontSize: "25px",
              letterSpacing: "10px",
              cursor: "default",
              padding: "10px 0"
            }}
            onMouseEnter={() => this.setState({stable: false})}
            onMouseLeave={() => this.setState({stable: true})}
        >
          {this.renderStar()}
        </div>
    );
  }
}

StarRate.propTypes = {
  initVal: PropTypes.number,
  onChange: PropTypes.func,
};
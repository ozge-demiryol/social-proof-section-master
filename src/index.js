import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Review from './components/Review';
import Card from './components/Card';
import imageColton from './images/image-colton.jpg';
import imageIrene from './images/image-irene.jpg';
import imageAnne from './images/image-anne.jpg';

ReactDOM.render(
  <div>
    <div >
      <h1 className="main-title">10,000+ of our users love our products.</h1>
      <p className="main-text">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about services.</p>
    </div>
    <div className="rating-1">
      <Review
        review="Reviews" />
    </div>
    <div className="rating-2">
      <Review
        style={{ marginTop: '200px', float: 'right' }}
        review="Report Guru" />
    </div>
    <div className="rating-3">
      <Review
        style={{ marginRight: '100px', float: 'right' }}
        review="BestTech" />
    </div>
    <div className="card">
      <div className="card-1">
        <Card
          image={imageColton}
          userName="Colton Smith"
          comment=' "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" '
        />
      </div>
      <div className="card-2">
        <Card
          image={imageIrene}
          userName="Irene Roberts"
          comment='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed delivery."'
        />
      </div>
      <div className="card-3">
        <Card
          image={imageAnne}
          userName="Anne Wallace"
          comment='"Put an order with this company and can only praise them for the very high standart. Will definitely use them again and recommend them to everyone!"'
        />
      </div>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank"
      > Frontend Mentor </a>. Coded by <a href="https://github.com/ozge-demiryol" rel="noreferrer" target="_blank">Özge Demiryol</a>.
    </div>
  </div>,
  document.getElementById('root')
);


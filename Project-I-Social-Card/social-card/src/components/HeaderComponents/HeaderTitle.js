import React from 'react';
import moment from 'moment'
import './Header.css';

const currentDateString = () => moment().format('DD MMM').toLowerCase();

const HeaderTitle = () => (
  <div className="header-title">
    <span class="header-title-text">Lambda School</span>
    <span class="header-title-handle-timestamp">
      <a href="https://twitter.com/LambdaSchool" className="header-title-handle">@LambdaSchool</a>
      <span class="header-title-bullet">•</span>
      <span class="header-title-timestamp">{currentDateString()}</span>
    </span>
  </div>
);
  
export default HeaderTitle;
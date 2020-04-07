import React, { useEffect } from 'react';
import { render } from 'react-dom'
import * as $ from 'jquery'
import Posts from './models/Posts'
// import json from './assets/json'
// import xml from './assets/data.xml';
import WebpackLogo from '@/assets/webpack-logo.png'
import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/sass.scss'

// console.log('JSON: ', json);
// console.log('XML:  ', xml);

const App = () => {
  const post = new Posts('Webpack lesson', WebpackLogo);

  useEffect(() => {
    $('pre').addClass('code').html(post.toString())
  }, [])

  return (
  <div className="container">
    <h1>Welcome!</h1>
    <hr/>
    <div className="logo"></div>
    <hr/>
    <pre></pre>
    <hr/>
    <div className="box">
      <h2>Less</h2>
    </div>
    <hr/>
    <div className="card">
      <h2>SASS</h2>
    </div>
  </div>
  );
}

render(
  <App/>,
  document.getElementById('app')
)

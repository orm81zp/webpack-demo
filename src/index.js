import * as $ from 'jquery';
import Posts from './models/Posts';
import './styles/styles.css';
// import json from './assets/json'
// import xml from './assets/data.xml';
import WebpackLogo from '@/assets/webpack-logo.png';

const post = new Posts('Webpack lesson', WebpackLogo);

$('pre').html( post.toString());

// console.log('JSON: ', json);
// console.log('XML:  ', xml);

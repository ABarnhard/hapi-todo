'use strict';

module.exports = [
  {method: 'get',  path: '/',           config: require('./config/home/get_home')},
  {method: 'get',  path: '/about',      config: require('./config/home/get_about')},
  {method: 'post', path: '/priorities', config: require('./config/priorities/post_priorities')}
];

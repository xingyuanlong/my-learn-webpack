import _ from 'lodash';
import Txt from './test.txt';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack',Txt], ' ');
  
  return element;
}
console.log('Txt:', Txt);

document.body.appendChild(component());

import createHeader from './header'
import createFooter from './footer'

import "./reset.css"
import "./TOP-header-footer.css"
console.log('test')

const content = document.getElementById('content');
content.appendChild(createHeader());
content.appendChild(createFooter());
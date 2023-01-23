import createHeader from './header'
import createFooter from './footer'
import createNavBar from './nav'

import "./reset.css"
import "./TOP-header-footer.css"
import "./nav.css"

console.log('test')

const content = document.getElementById('content');
content.appendChild(createHeader());
content.appendChild(createNavBar());
content.appendChild(createFooter());
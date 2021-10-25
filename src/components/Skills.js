import React from 'react'
import { Badge } from 'react-bootstrap'

function Skills() {
  return (
    <div>
      <h1 className="skills">Skills<br /></h1>
      <div>
        <ul className="pskills">
          <li><i class="devicon-javascript-plain">JavaScript</i></li>
          <li><i class="devicon-html5-plain-wordmark">HTML</i></li> 
          <li><i class="devicon-python-plain-wordmark">Python3</i></li>
          <li><i class="devicon-nodejs-plain-wordmark">Node.js</i></li>
          <li><i class="devicon-express-original">express</i></li>
          <li><i class="devicon-react-original">React.js</i></li>
          <li><i class="devicon-django-plain-wordmark">Django</i></li>
          <li><i class="devicon-bootstrap-plain">Bootstrap</i></li>
          <li><i class="devicon-css3-plain">CSS</i></li>
          <li><i class="devicon-mongodb-plain-wordmark">MongoDB</i></li>
          <li><i class="devicon-postgresql-plain-wordmark">PostgreSQL</i></li>
          <li><i class="devicon-git-plain-wordmark">Git</i></li>
          <li><i class="devicon-github-original">Github</i></li>
          <li><i class="devicon-heroku-original-wordmark">Heroku</i></li>
        </ul>
      </div>
    </div>
  )
}

export default Skills

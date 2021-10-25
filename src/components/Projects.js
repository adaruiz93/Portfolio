import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function Projects() {
  return (
    <div id="projects">
  <CardGroup className="card-groups">
  <Card>
    <Card.Img variant="top" src="./images/jamlist.jpeg" />
    <Card.Body>
      <Card.Title>JamList</Card.Title>
      <Card.Text>
      JAMList is an app to help users create and manage shopping lists by store.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button target="_blank" className="button" variant="outline-secondary" href="https://jamlist.herokuapp.com/">Go to JamList</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/devnet.jpeg" />
    <Card.Body>
      <Card.Title>DevNet</Card.Title>
      <Card.Text>
      DevNet provides a space for current students, alumni, and new developers to post interview questions they've encountered during their job search. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button target="_blank" className="button" variant="outline-secondary" href="https://devnet-sitefordevs.surge.sh/">Go to DevNet</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/timt.jpeg" />
    <Card.Body>
      <Card.Title>TIMT</Card.Title>
      <Card.Text>
      This Is Me Trying is a mental health app to help identify mood triggers via mood tracking, includes quote randomizer for inspiration.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button target="_blank" className="button" variant="outline-secondary" href="https://timt.surge.sh/">Go to TIMT</Button>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  )
}

export default Projects

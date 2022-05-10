import React from 'react'
import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket'
import Container from 'react-bootstrap/container'
export default function Rockets() {

  const rockets = useSelector(state => state.Rockets);
  return (
    <Container>
      {rockets.map((rocket) =>
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_images}
          reserved={rocket.reserved}
        />)}
    </Container>
  )
}

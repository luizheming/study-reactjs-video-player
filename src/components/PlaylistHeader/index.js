import React from 'react'

import { Container, Journey } from './styles'

const PlaylistHeader = ({ active, total }) => (
  <Container>
    <p>{active.title}</p>
    <Journey>
      {active.num} / {total}
    </Journey>
  </Container>
)

export default PlaylistHeader

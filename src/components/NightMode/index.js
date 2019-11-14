import React from 'react'

import { Container } from './styles'

const NightMode = ({ nightModeCallback, nightMode }) => (
  <Container>
    <span>NightMode:</span>
    <label className="switch">
      <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
      <span className="slider round"></span>
    </label>
  </Container>
)

export default NightMode

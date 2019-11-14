import React from 'react'

import { Container } from './styles'

const PlaylistItem = ({ video, active, played }) => (
	<Container active={active} played={played}>
		<div className="wbn-player__video-nr">{video.num}</div>
		<div className="wbn-player__video-name">{video.title}</div>
		<div className="wbn-player__video-time">{video.duration}</div>
	</Container>
)

export default PlaylistItem

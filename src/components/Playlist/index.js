import React from 'react'

import PlaylistHeader from '../../components/PlaylistHeader'
import PlaylistItems from '../PlaylistItems'

import { Container } from './styles'
import NightMode from '../../components/NightMode'

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
	<Container>
		<NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
		<PlaylistHeader active={active} total={videos.length} />
		<PlaylistItems videos={videos} active={active} />
	</Container>
)

export default Playlist

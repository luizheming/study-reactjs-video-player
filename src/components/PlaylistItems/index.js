import React from 'react'

import PlaylistItem from '../../components/PlaylistItem'
import withLink from '../../hoc/withLink'
import { Container } from './styles'

const PlaylistItemWithLink = withLink(PlaylistItem)

const PlaylistItems = ({ videos, active }) => (
  <Container>
    {videos.map(video => (
      <PlaylistItemWithLink 
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
      />
    ))}
  </Container>
)

export default PlaylistItems

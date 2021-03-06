import React from 'react';
import ReactPlayer from 'react-player'

import { Container } from './styles';

const Video = ({ active, autoplay, endCallback, progressCallback}) => (
  <Container>
    <ReactPlayer
      width="100%"
      height="100%"
      style={{ position: "absolute", top: "0" }}
      playing={autoplay}
      controls={true}
      url={active.video}
      onEnded={endCallback}
      onProgress={progressCallback}
    />
  </Container>
);

export default Video;

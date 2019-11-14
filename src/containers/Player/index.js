import React, { useState, useEffect } from 'react'

import { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import themeDefault from '../../config/themes/default/styles'
import themeLight from '../../config/themes/light/styles'

import Video from '../../components/Video'
import Playlist from '../Playlist'

import * as videos from '../../config/playlist.json'

const Player = (props) => {
	const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`))

	const [ state, setState ] = useState({
		videos      : videos.playlist,
		activeVideo : savedState ? savedState.activeVideo : videos.playlist[0],
		nightMode   : savedState ? savedState.nightMode : true,
		playlistId  : savedState ? savedState.playlistId : videos.playlistId,
		autoplay    : savedState ? savedState.autoplay : false
	})

	useEffect(
		() => {
			localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }))
		},
		[ state ]
	)

	useEffect(
		() => {
			const videoId = props.match.params.activeVideo
			if (videoId !== undefined) {
				const foundVideo = state.videos.find((video) => video.id === videoId)

				setState((prev) => ({
					...prev,
					activeVideo : foundVideo,
					autoplay    : props.location.autoplay
				}))
			} else {
				props.history.push({
					pathname : `/${state.activeVideo.id}`,
					autoplay : false
				})
			}
		},
		[ props.match.params.activeVideo, props.location.autoplay, props.history, state.activeVideo.id, state.videos]
	)

	const nightModeCallback = () => {
		setState((prev) => ({
			...prev,
			nightMode : !prev.nightMode
		}))
	}

	const endCallBack = () => {
		const videoId = props.match.params.activeVideo
		const currentVideoIndex = state.videos.findIndex((video) => video.id === videoId)

		const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1

		props.history.push({
			pathname : `${state.videos[nextVideo].id}`,
			autoplay : false
		})
	}

	const progressCallBack = (e) => {
		if (e.playedSeconds > 10 && e.playedSeconds < 11) {
			setState((prev) => ({
				...prev,
				videos : prev.videos.map((video) => {
					return video.id === prev.activeVideo.id ? { ...video, played: true } : video
				})
			}))
		}
	}

	return (
		<ThemeProvider theme={state.nightMode ? themeDefault : themeLight}>
			{state.videos !== null ? (
				<Container>
					<Video
						active={state.activeVideo}
						autoplay={state.autoplay}
						endCallback={endCallBack}
						progressCallback={progressCallBack}
					/>

					<Playlist
						videos={state.videos}
						active={state.activeVideo}
						nightModeCallback={nightModeCallback}
						nightMode={state.nightMode}
					/>
				</Container>
			) : null}
		</ThemeProvider>
	)
}

export default Player

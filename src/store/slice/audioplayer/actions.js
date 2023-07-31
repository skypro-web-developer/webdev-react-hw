export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK'
export const NEXT_TRACK = 'NEXT_TRACK'
export const PREV_TRACK = 'PREV_TRACK'
export const TOGGLE_SUFFLED = 'TOGGLE_SUFFLED'
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'

export const setCurrentTrack = ({ playlist, track }) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    playlist,
    track,
  },
})

export const nextTrack = () => ({
  type: NEXT_TRACK,
})

export const prevTrack = () => ({
  type: PREV_TRACK,
})

export const toggleShuffled = () => ({
  type: TOGGLE_SUFFLED,
})

export const createPlayAction = () => ({
  type: PLAY,
})

export const createPauseAction = () => ({
  type: PAUSE,
})

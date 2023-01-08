import {useCallback, useEffect, useState} from 'react'

function ActionByKey(key) {
  const keyActionsMap = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
  }

  return keyActionsMap[key]
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    textures1: false,
    textures2: false,
    textures3: false,
    textures4: false,
    textures5: false,
  })

  const handleKeyDown = useCallback((e) => {
    const action = ActionByKey(e.code)

    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: true,
        }
      })
    }
  }, [])

  const handleKeyUp = useCallback((e) => {
    const action = ActionByKey(e.code)

    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: false,
        }
      })
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return actions
}

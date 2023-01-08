import {useEffect, useState} from 'react'
import {useKeyboard} from '../hooks/useKeyboard'
import {useStore} from '../hooks/useStore'

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false)
  const [activeTexture] = useStore((state) => [state.activeTexture])
  const actions = useKeyboard()

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 2000)

    setVisible(true)

    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [activeTexture])

  return visible && <div className="absolute centered">TextureSelector</div>
}

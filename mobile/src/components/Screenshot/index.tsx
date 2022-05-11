import React from 'react'
import { Trash, Camera } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

import { theme } from '../../theme'
import { styles } from './styles'

interface Props {
  screenshot: string | null
  onTakeShot: () => void
  onRemoveShot: () => void
}

const Screenshot: React.FC<Props> = ({
  screenshot,
  onRemoveShot,
  onTakeShot,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <Trash
          weight="fill"
          size={22}
          color={theme.colors.text_secondary}
          style={styles.removeIcon}
        />
      ) : (
        <Camera weight="bold" size={24} color={theme.colors.text_secondary} />
      )}
    </TouchableOpacity>
  )
}

export { Screenshot }

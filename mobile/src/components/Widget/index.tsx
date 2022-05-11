import React, { useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native'
import { ChatTeardropDots } from 'phosphor-react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { Options } from '../Options'
import { Form } from '../Form'

import { styles } from './styles'
import { theme } from '../../theme'
import { feedbackTypes } from '../../utils/feedbackTypes'

export type FeedbackType = keyof typeof feedbackTypes

const Widget: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleOpen = () => {
    bottomSheetRef.current?.expand()
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Form feedbackType="BUG" />
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget)
import { ArrowLeft } from 'phosphor-react-native'
import React from 'react'
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native'

import { FeedbackType } from '../Widget'
import { Screenshot } from '../Screenshot'

import { feedbackTypes } from '../../utils/feedbackTypes'
import { theme } from '../../theme'
import { styles } from './styles'

interface Props {
  feedbackType: FeedbackType
}

const Form: React.FC<Props> = ({ feedbackType }) => {
  const feedbackInfo = feedbackTypes[feedbackType]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackInfo.image} style={styles.image} />

          <Text style={styles.titleText}>{feedbackInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        autoCorrect={false}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <Screenshot
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
          screenshot=""
        />
      </View>
    </View>
  )
}

export { Form }

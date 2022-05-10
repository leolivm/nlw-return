import { FC, useState } from 'react'

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

import bug from '../../assets/bug.svg'
import idea from '../../assets/idea.svg'
import another from '../../assets/another.svg'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bug,
      alt: 'Imagem de inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: idea,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: another,
      alt: 'Imagem de um balão de pensamento',
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes

const WidgetForm: FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>()
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center justify-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com 💜 pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  )
}

export { WidgetForm }

import { FC } from 'react'

import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

const FeedbackTypeStep: FC<FeedbackTypeStepProps> = ({
  onFeedbackTypeChanged,
}) => (
  <>
    <header>
      <span className="text-xl leading-6">Deixe seu feedback</span>

      <CloseButton />
    </header>

    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, item]) => (
        <button
          type="button"
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          key={key}
          onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
        >
          <img src={item.image.source} alt={item.image.alt} />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  </>
)

export { FeedbackTypeStep }

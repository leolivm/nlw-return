import { FC } from 'react'

import { CloseButton } from '../../CloseButton'
import success from '../../../assets/success.svg'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

const FeedbackSuccessStep: FC<FeedbackSuccessStepProps> = ({
  onFeedbackRestartRequested,
}) => (
  <>
    <header>
      <CloseButton />
    </header>

    <div className="flex flex-col items-center py-10 w-[304px]">
      <img src={success} alt="Formulário enviado com sucesso" />

      <span className="text-xl mt-2">Agradecemos o feedback!</span>

      <button
        type="button"
        onClick={onFeedbackRestartRequested}
        className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
      >
        Quero enviar outro!
      </button>
    </div>
  </>
)

export { FeedbackSuccessStep }

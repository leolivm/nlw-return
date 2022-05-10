import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedbackUseCasa = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedbackUseCasa.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,asdasdasd,',
      })
    ).resolves.not.toThrow()

    // mock the functions and test if it has been called
    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeedbackUseCasa.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,asdasdasd,',
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeedbackUseCasa.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,asdasdasd,',
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(
      submitFeedbackUseCasa.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'test.jpg',
      })
    ).rejects.toThrow()
  })
})

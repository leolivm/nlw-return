import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from '../mail-adapter'

export class NodemailerMailAdapter implements MailAdapter {
  public async sendMail({ subject, body }: SendMailData) {
    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Leandro Martins <leolivm@outlook.com>',
      subject,
      html: body,
    })
  }
}

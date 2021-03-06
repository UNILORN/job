'use strict'

const Mail = use('Mail')
const Env = use('Env')

class MailService {
  * invite (userId, token, email) {
    return yield Mail.send('emails.welcome', {user_id: userId, token: token}, (message) => {
      message.to(email)
      message.from(Env.get('MAIL_USERNAME'))
      message.subject('Welcome to the Kitten\'s World')
    })
  }
}

module.exports = MailService

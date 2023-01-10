const pagarme = require('pagarme')

pagarme.client.connect({ encryption_key: 'SUA_ENCRYPTION_KEY' })
  .then(client => {
    return client.security.encrypt({
      card_number: '4111111111111111',
      card_holder_name: 'abc',
      card_expiration_date: '1225',
      card_cvv: '123',
    })
  })
  .then(card_hash => console.log(card_hash))

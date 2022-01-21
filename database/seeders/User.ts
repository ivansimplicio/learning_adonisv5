import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'e_mail'
    await User.updateOrCreateMany(uniqueKey, [
      {
        e_mail: 'maria@email.com',
        password: '654321',
      },
      {
        e_mail: 'jose@email.com',
        password: '123456',
      },
      {
        e_mail: 'joao@email.com',
        password: '123456',
      },
    ])
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'
    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'maria@email.com',
        password: '123456',
      },
      {
        email: 'jose@email.com',
        password: '123456',
      },
      {
        email: 'joao@email.com',
        password: '123456',
      },
    ])
  }
}

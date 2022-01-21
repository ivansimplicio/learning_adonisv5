import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return User.all()
  }

  public async store({}: HttpContextContract) {
    return
  }

  public async show({}: HttpContextContract) {
    return
  }

  public async update({}: HttpContextContract) {
    return
  }

  public async destroy({}: HttpContextContract) {
    return
  }
}

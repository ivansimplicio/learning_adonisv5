import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  /*Route.get('/users', 'UsersController.index')
  Route.post('/users', 'UsersController.store')
  Route.get('/users/:id', 'UsersController.show')
  Route.put('/users/:id', 'UsersController.update')
  Route.delete('/users/:id', 'UsersController.destroy')*/
  Route.resource('/users', 'UsersController')
    .apiOnly()
    .middleware({
      index: ['auth'],
      show: ['auth'],
      update: ['auth'],
      destroy: ['auth'],
    })
})

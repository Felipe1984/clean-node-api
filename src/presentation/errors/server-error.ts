export class ServerError extends Error {
  constructor () {
    super('Erro interno... tente novamente mais tarde...')
    this.name = 'ServerError'
  }
}

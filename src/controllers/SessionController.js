
/*
index, show, update, destroy, store

index - listagem de sessoes
show - listar uma unica sessao
update - atualizar sessao
destroy - deletar sessao
store - criar sessao
*/


class SessionController {

  store(req, res) {
    return res.json({ message: 'Minha API' })
  }
}

export default new SessionController();
module.exports = Object.freeze({
  //USUARIO (1 - 1000)
  ERROR_USUARIO_SEM_PERMISSAO_DE_ACESSO: {
    message: "Usuário não possuí permissão de acesso",
    code: 1
  },
  ERROR_USUARIO_TOKEN_DE_ACESSO_INVALIDO_OU_MODIFICADO: {
    message: "Token de acesso inválido ou modificado",
    code: 2
  },
  ERROR_USUARIO_TOKEN_DE_ACESSO_NAO_ENVIADO: {
    message: "Token de acesso não enviado",
    code: 3
  },

  //FILME (1001 - 2000)
  ERROR_FILME_NAO_CADASTRADO_NO_SISTEMA: {
    message: 'Filme não cadastrado no sistema',
    code: 1001
  },
  ERROR_FILME_NUMERO_DE_COPIAS_INSUFICIENTE: {
    message: 'Número de copias insuficiente',
    code: 1002
  },
  

  //CLIENTE (2001 - 3000)
  ERROR_CLIENTE_NAO_CADASTRADO_NO_SISTEMA: {
    message: 'Cliente não cadastrado no sistema',
    code: 2001
  },

  //ALUGUEL (3001 - 4000)
  ERROR_ALUGUEL_NAO_ENCONTRADO: {
    message: 'Aluguel não encontrado',
    code: 3001
  }
});
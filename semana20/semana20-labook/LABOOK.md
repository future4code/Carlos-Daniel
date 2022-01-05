LABOOK

### ESTRUTURA DE DADOS

    USUÁRIOS
        id
        nome
        email
        senha

    POSTS
        idUsuario(ForeignKey)
        foto
        descricao
        dataCriacao
        tipo: "normal" || "evento"

    CURTIDAS
        idUsuario(ForeignKey)
        idPost(ForeignKey)

    COMENTARIOS
        id
        texto
        idUsuario(ForeignKey)
        idPost(ForeignKey)

### FUNCIONALIDADES

    cadastrar: (dadosUsuario) => token

    logar: (email,senha) => token

    criarPost: (dadosPost) => void

    buscarPostPorId: id => post

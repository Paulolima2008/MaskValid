# MaskValid
Exemplo utilizando javascript puro com regex para formatar e validar inputs.

maskvalid.js 
contém o código de formatação e validação dos campos dividido em 3 tópicos.

1. Máscaras - contém as funções que formatar o input com (regex)expressões regulares e por padrão o nome da função começa sempre com a letra (m) seguido do nome (mCpfCnpj).
2. Validação - contém as funções de validação dos input e por padrão o nome da função começa sempre com a letra (v) seguido do nome (vCpfCnpj).
3. Eventos - contém as chamadas das funções por ID no javascript pelo eventos onkeyup e onblur, ambos podem ser utilizados tanto para formatar como para validar o input.

index.html 
tem exemplos do formato e validação. E bem simples de usar, com o ID do input receber a chamada no js.

Esse exemplo foi criado para ajudar a comunidade de desenvolvedores no tratamento de dados, visto que o plugin jquery que possibilitava um forma mais prática está em desuso. 

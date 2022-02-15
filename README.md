# MaskValid - Máscara e validação com regex
Exemplo utilizando javascript puro com regex para formatar e validar inputs.

## Utilização

### maskvalid.js 
contém o código de formatação e validação dos campos dividido em 3 tópicos.

1. Máscaras - contém as funções que formatar o input com (regex)expressões regulares e por padrão o nome da função começa sempre com a letra (m) seguido do nome (mCpfCnpj).
2. Validação - contém as funções de validação dos input e por padrão o nome da função começa sempre com a letra (v) seguido do nome (vCpfCnpj).
3. Eventos - contém as chamadas das funções por ID no javascript com os eventos onkeyup e onblur, ambos podem ser utilizados tanto para formatar como para validar o input.

### index.html 
tem exemplos do formato e validação. E bem simples de usar, O ID do input receber a chamada no js.

## Considerações finais
Esse exemplo foi criado para ajudar a comunidade de desenvolvedores no tratamento de dados.
Visto que muitas empresas e desenvolvedores vem removendo o jQuery de seus códigos.

Isso se dá por alguns fatores principais, são eles:

1. Evolução do JavaScript como linguagem de alto nível.
2. Padrões do JavaScript sendo acatados pelos principais navegadores.
3. Surgimento de novos frameworks web, como Angular, Vue e React.

Esses três fatores associados com o crescimento dos frameworks web modernos aumentam cada vez mais o declínio de utilização do jQuery.


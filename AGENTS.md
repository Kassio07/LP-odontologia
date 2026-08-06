# AGENTS.md — Regras para projetos de Landing Pages

## 1. Objetivo do projeto

Este projeto é uma Landing Page criada inicialmente com auxílio de ferramentas de inteligência artificial e posteriormente personalizada manualmente no Visual Studio Code.

O objetivo principal é produzir Landing Pages:

* Profissionais;
* Responsivas;
* Rápidas;
* Acessíveis;
* Bem organizadas;
* Fáceis de editar;
* Otimizadas para conversão;
* Otimizadas para mecanismos de busca;
* Compatíveis com dispositivos móveis e navegadores modernos.

O Codex deve atuar como assistente de desenvolvimento, análise, correção, organização e melhoria do projeto.

---

## 2. Tecnologias padrão

Sempre verifique as tecnologias que já existem no projeto antes de realizar qualquer alteração.

As tecnologias normalmente utilizadas serão:

* HTML5;
* CSS3;
* JavaScript;
* Bootstrap, quando já estiver instalado;
* PHP, quando necessário para formulários ou integrações;
* Bibliotecas adicionais somente quando realmente necessárias.

Não instalar frameworks, dependências, bibliotecas ou ferramentas sem solicitação explícita.

Não transformar um projeto HTML, CSS e JavaScript em React, Vue, Angular, Next.js ou outro framework sem autorização.

---

## 3. Regra principal de trabalho

Antes de alterar qualquer arquivo:

1. Analise a estrutura completa do projeto;
2. Identifique os arquivos envolvidos;
3. Verifique como o código atual funciona;
4. Procure componentes, classes e funções já existentes;
5. Explique resumidamente o que será alterado;
6. Faça somente as alterações necessárias;
7. Verifique se a alteração não prejudicou outras partes da página.

Não substituir arquivos completos quando uma alteração localizada for suficiente.

Não apagar código existente sem confirmar que ele não está sendo utilizado.

Não modificar arquivos que não tenham relação direta com a tarefa solicitada.

---

## 4. Preservação da estrutura

O Codex deve preservar:

* A estrutura atual de pastas;
* Os nomes dos arquivos;
* As rotas existentes;
* Os links existentes;
* As classes e IDs utilizados pelo JavaScript;
* A identidade visual definida;
* O conteúdo que não estiver relacionado à solicitação;
* As integrações já existentes;
* O funcionamento dos formulários;
* As configurações de publicação.

Não renomear arquivos, pastas, classes, IDs, funções ou variáveis sem necessidade.

Caso seja necessário renomear algo, atualizar todas as referências relacionadas.

---

## 5. Não inventar informações

Não inventar:

* Rotas;
* Endpoints;
* APIs;
* E-mails;
* Telefones;
* Endereços;
* Redes sociais;
* Depoimentos;
* Nomes de clientes;
* Empresas;
* Certificações;
* Estatísticas;
* Preços;
* Promoções;
* Links;
* Formas de pagamento;
* Políticas;
* Informações legais;
* Credenciais;
* Chaves de API.

Quando uma informação não estiver disponível, utilizar um placeholder claramente identificado, como:

```text
[INSERIR TELEFONE]
[INSERIR E-MAIL]
[INSERIR ENDEREÇO]
[INSERIR LINK DO WHATSAPP]
[INSERIR DEPOIMENTO REAL]
```

Nunca apresentar informações fictícias como se fossem reais.

---

## 6. Padrões de HTML

Utilizar HTML semântico sempre que possível.

Preferir elementos como:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<form>
```

Regras:

* Manter apenas um `<h1>` principal por página;
* Respeitar a hierarquia de títulos;
* Utilizar textos alternativos em imagens;
* Utilizar `label` nos campos de formulário;
* Evitar excesso de elementos `<div>`;
* Não utilizar estilos inline, salvo quando realmente necessário;
* Não utilizar JavaScript inline sem justificativa;
* Manter IDs únicos;
* Manter links e botões com textos claros;
* Utilizar `button` para ações e `a` para navegação.

O código deve ser organizado, legível e corretamente indentado.

---

## 7. Padrões de CSS

O CSS deve ser:

* Organizado;
* Reutilizável;
* Responsivo;
* Fácil de personalizar;
* Sem duplicações desnecessárias.

Preferir variáveis CSS para valores recorrentes:

```css
:root {
    --color-primary: #000000;
    --color-secondary: #ffffff;
    --color-accent: #cccccc;
    --color-text: #222222;
    --color-background: #ffffff;
    --font-primary: Arial, sans-serif;
    --container-width: 1200px;
    --border-radius: 8px;
}
```

Regras:

* Evitar `!important`;
* Evitar seletores excessivamente específicos;
* Reaproveitar classes existentes;
* Não duplicar estilos;
* Não utilizar valores aleatórios sem seguir o design do projeto;
* Manter espaçamentos consistentes;
* Garantir contraste adequado entre texto e fundo;
* Evitar larguras fixas que prejudiquem telas menores;
* Utilizar unidades responsivas quando apropriado;
* Organizar media queries de maneira previsível.

Não remover estilos sem verificar onde estão sendo utilizados.

---

## 8. Responsividade

Toda alteração deve ser validada considerando, no mínimo:

* Celulares pequenos;
* Celulares maiores;
* Tablets;
* Notebooks;
* Monitores desktop.

Priorizar abordagem mobile-first quando o projeto permitir.

Verificar especialmente:

* Menu;
* Cabeçalho;
* Banner principal;
* Textos;
* Imagens;
* Formulários;
* Cards;
* Tabelas;
* Botões;
* Rodapé;
* Botões flutuantes;
* Espaçamentos;
* Elementos lado a lado.

Não permitir:

* Rolagem horizontal indevida;
* Textos cortados;
* Imagens deformadas;
* Botões inacessíveis;
* Elementos sobrepostos;
* Conteúdo ultrapassando o container;
* Fontes muito pequenas no celular.

---

## 9. JavaScript

O JavaScript deve ser simples, organizado e compatível com a estrutura atual.

Regras:

* Não criar variáveis globais sem necessidade;
* Não duplicar eventos;
* Verificar se o elemento existe antes de manipulá-lo;
* Evitar erros quando um elemento não estiver presente;
* Não adicionar bibliotecas para funções simples;
* Não criar comportamentos que prejudiquem a navegação;
* Não bloquear o carregamento da página sem necessidade;
* Manter nomes de funções e variáveis claros;
* Utilizar comentários somente quando ajudarem a explicar a lógica.

Exemplo de verificação:

```javascript
const menuButton = document.querySelector('[data-menu-button]');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        // Comportamento do menu
    });
}
```

Não remover scripts sem verificar sua utilização.

---

## 10. Formulários

Ao trabalhar com formulários:

* Validar campos obrigatórios;
* Validar formatos de e-mail e telefone;
* Informar erros de maneira clara;
* Informar quando o envio for concluído;
* Evitar múltiplos envios;
* Não expor informações sensíveis;
* Não armazenar senhas ou credenciais no front-end;
* Não criar uma integração falsa;
* Não afirmar que o formulário envia dados quando não existir backend configurado.

Quando ainda não existir integração, deixar isso registrado no código:

```html
<!-- TODO: integrar o formulário ao serviço de envio definido pelo cliente -->
```

Caso o formulário utilize PHP:

* Validar os dados no servidor;
* Sanitizar entradas;
* Não confiar apenas na validação do navegador;
* Não exibir erros internos para o visitante;
* Não deixar credenciais diretamente no repositório;
* Proteger o formulário contra envios automatizados quando solicitado.

---

## 11. WhatsApp e chamadas para ação

Os botões de WhatsApp devem:

* Utilizar o número informado no projeto;
* Possuir mensagem inicial clara;
* Abrir em nova aba quando apropriado;
* Ter `rel="noopener noreferrer"` quando utilizarem `target="_blank"`;
* Ser identificados por tecnologias assistivas;
* Funcionar em dispositivos móveis e desktop.

Não inventar número de telefone.

Caso o número ainda não esteja disponível, utilizar:

```text
[INSERIR NÚMERO DO WHATSAPP]
```

Os principais botões de chamada para ação devem utilizar textos objetivos, como:

* Solicitar orçamento;
* Falar com um especialista;
* Agendar avaliação;
* Conhecer os serviços;
* Tirar uma dúvida.

A chamada para ação deve ser coerente com o objetivo real da Landing Page.

---

## 12. SEO

Ao criar ou revisar uma página, verificar:

* Título da página;
* Meta description;
* Hierarquia dos títulos;
* Texto alternativo das imagens;
* URL canônica, quando aplicável;
* Open Graph;
* Ícone do site;
* Conteúdo semântico;
* Links internos;
* Nomes dos arquivos de imagem;
* Dados estruturados, quando aplicáveis.

Não inserir palavras-chave de forma artificial.

Não inventar informações para dados estruturados.

Os títulos e descrições devem representar corretamente o conteúdo da página.

Exemplo:

```html
<title>Nome do serviço | Nome da empresa</title>

<meta
    name="description"
    content="Descrição clara e objetiva sobre o serviço apresentado na página."
>
```

---

## 13. Acessibilidade

Seguir boas práticas de acessibilidade:

* Utilizar HTML semântico;
* Adicionar `alt` adequado nas imagens;
* Associar campos aos respectivos labels;
* Garantir navegação por teclado;
* Manter foco visível;
* Garantir contraste adequado;
* Não depender apenas de cores para transmitir informações;
* Adicionar `aria-label` somente quando necessário;
* Não ocultar conteúdo importante de leitores de tela;
* Respeitar usuários que preferem menos animações.

Evitar animações excessivas, piscantes ou que dificultem a leitura.

---

## 14. Performance

Priorizar carregamento rápido.

Sempre que possível:

* Otimizar imagens;
* Utilizar WebP ou AVIF quando compatível;
* Definir largura e altura das imagens;
* Aplicar carregamento tardio em imagens fora da primeira tela;
* Evitar bibliotecas pesadas;
* Remover códigos realmente não utilizados;
* Evitar scripts duplicados;
* Evitar fontes externas em excesso;
* Não carregar vídeos pesados automaticamente;
* Adiar scripts que não sejam essenciais;
* Reduzir alterações desnecessárias no layout durante o carregamento.

Exemplo:

```html
<img
    src="assets/images/exemplo.webp"
    alt="Descrição da imagem"
    width="800"
    height="600"
    loading="lazy"
>
```

Imagens da primeira seção podem exigir carregamento prioritário e não devem receber `loading="lazy"` automaticamente.

---

## 15. Imagens e arquivos

Organizar os arquivos preferencialmente em estruturas como:

```text
assets/
├── css/
├── js/
├── images/
├── icons/
└── fonts/
```

Regras:

* Não apagar imagens sem verificar sua utilização;
* Não renomear imagens sem atualizar suas referências;
* Utilizar nomes descritivos;
* Evitar espaços e caracteres especiais nos nomes;
* Não incorporar arquivos grandes em base64 sem necessidade;
* Não utilizar imagens externas sem autorização;
* Não substituir imagens do cliente por imagens aleatórias;
* Manter proporção correta;
* Evitar imagens pixeladas ou deformadas.

Quando uma imagem ainda precisar ser fornecida, utilizar um placeholder claramente identificado.

---

## 16. Design e identidade visual

Preservar a identidade visual existente.

Ao realizar melhorias:

* Manter consistência entre cores;
* Manter consistência entre fontes;
* Utilizar espaçamentos padronizados;
* Manter botões visualmente coerentes;
* Manter cards com o mesmo padrão;
* Não misturar estilos visuais incompatíveis;
* Evitar excesso de efeitos, sombras e animações;
* Destacar a chamada principal;
* Manter boa legibilidade;
* Priorizar uma aparência profissional.

Não redesenhar toda a página quando a solicitação for apenas uma correção localizada.

---

## 17. Conteúdo e conversão

A Landing Page deve comunicar com clareza:

1. O que está sendo oferecido;
2. Para quem é o serviço;
3. Qual problema é resolvido;
4. Quais são os benefícios;
5. Por que o visitante deve confiar;
6. Qual ação o visitante deve realizar.

Ao melhorar textos:

* Não alterar informações técnicas ou comerciais sem autorização;
* Não criar promessas exageradas;
* Não garantir resultados;
* Não inventar depoimentos;
* Não inventar números;
* Não utilizar linguagem enganosa;
* Não utilizar urgência falsa;
* Manter textos diretos e fáceis de entender.

---

## 18. Segurança e informações sensíveis

Nunca inserir no código:

* Senhas;
* Tokens;
* Chaves de API;
* Dados bancários;
* Credenciais de hospedagem;
* Credenciais de banco de dados;
* Informações pessoais sensíveis;
* Arquivos `.env` reais;
* Chaves privadas.

Utilizar variáveis de ambiente quando existir backend.

Não modificar:

* Arquivos de conexão;
* Configurações do servidor;
* DNS;
* `.htaccess`;
* Regras de redirecionamento;
* Configurações de hospedagem;
* Pipelines de publicação;

sem solicitação explícita.

Não executar comandos destrutivos.

Não excluir pastas, históricos, branches ou arquivos em massa.

---

## 19. Dependências

Antes de adicionar uma dependência:

1. Verifique se a funcionalidade pode ser criada com o código já existente;
2. Verifique se o projeto já possui uma biblioteca equivalente;
3. Avalie o impacto no carregamento;
4. Explique por que a dependência é necessária;
5. Aguarde autorização quando a instalação alterar significativamente o projeto.

Não atualizar todas as dependências automaticamente.

Não alterar versões apenas porque existe uma versão mais recente.

Não criar arquivos de configuração desnecessários.

---

## 20. Git e controle de versão

Antes de realizar mudanças significativas:

* Verificar o estado atual do repositório;
* Não apagar alterações existentes do desenvolvedor;
* Não sobrescrever trabalho ainda não salvo;
* Não utilizar comandos destrutivos;
* Não realizar `push` sem solicitação;
* Não realizar merge sem solicitação;
* Não alterar o histórico;
* Não utilizar `git reset --hard`;
* Não utilizar `git clean -fd`;
* Não excluir branches;
* Não modificar commits existentes.

Quando solicitado a sugerir um commit, utilizar mensagens claras, como:

```text
feat: adiciona seção de benefícios
fix: corrige responsividade do formulário
style: ajusta espaçamento da seção principal
refactor: organiza scripts do menu mobile
seo: atualiza título e descrição da página
```

---

## 21. Testes obrigatórios

Após cada alteração, verificar:

### Estrutura

* O HTML continua válido;
* Não existem tags abertas incorretamente;
* Não existem IDs duplicados;
* Todos os arquivos referenciados existem;
* Não existem caminhos quebrados.

### Funcionalidades

* Menu mobile;
* Links;
* Botões;
* Formulários;
* Máscaras de campos;
* Modais;
* Carrosséis;
* Animações;
* Botão do WhatsApp;
* Rolagem entre seções.

### Responsividade

* Celular;
* Tablet;
* Desktop;
* Orientação vertical e horizontal quando relevante.

### Console

* Não existem erros JavaScript;
* Não existem arquivos retornando erro;
* Não existem chamadas para rotas inexistentes.

### Visual

* Não existem elementos sobrepostos;
* Não existe rolagem horizontal;
* As imagens mantêm a proporção;
* O conteúdo permanece legível;
* O design continua consistente.

Caso não seja possível executar algum teste, informar claramente qual teste não foi realizado.

---

## 22. Análise de código

Quando a solicitação for apenas para analisar:

* Não alterar arquivos;
* Não aplicar correções automaticamente;
* Identificar os problemas encontrados;
* Informar os arquivos e trechos envolvidos;
* Classificar os problemas por prioridade;
* Explicar o impacto;
* Apresentar uma sugestão de correção.

Classificações recomendadas:

* Crítico;
* Alto;
* Médio;
* Baixo;
* Melhoria opcional.

Não tratar preferências pessoais como erros técnicos.

---

## 23. Alterações de código

Quando houver autorização para alterar:

* Faça mudanças pequenas e objetivas;
* Trabalhe somente nos arquivos necessários;
* Preserve o restante do projeto;
* Evite reescrever arquivos completos;
* Não altere textos sem necessidade;
* Não troque imagens sem solicitação;
* Não mude a identidade visual sem autorização;
* Não crie novas páginas sem solicitação;
* Não altere integrações existentes sem necessidade;
* Revise o resultado final.

Sempre apresentar ao final:

1. O que foi alterado;
2. Quais arquivos foram modificados;
3. Quais testes foram realizados;
4. Quais pontos ainda precisam de atenção.

---

## 24. Comentários no código

Não adicionar comentários óbvios ou excessivos.

Comentários devem explicar decisões importantes, limitações ou pontos que exigem configuração futura.

Exemplos adequados:

```javascript
// Mantém compatibilidade com o menu utilizado na versão mobile.
```

```html
<!-- TODO: substituir pelo depoimento real aprovado pelo cliente -->
```

Exemplo desnecessário:

```javascript
// Seleciona o botão
const button = document.querySelector('button');
```

---

## 25. Regras para código gerado por inteligência artificial

Como parte do projeto pode ter sido gerada por inteligência artificial, verificar especialmente:

* Código duplicado;
* Classes não utilizadas;
* JavaScript que procura elementos inexistentes;
* Links com `#` sem função;
* Textos genéricos;
* Dados fictícios;
* Rotas inventadas;
* Imagens externas quebradas;
* Bibliotecas carregadas sem uso;
* CSS repetido;
* Falta de responsividade;
* Falta de acessibilidade;
* Formulários sem integração real;
* Meta tags genéricas;
* Comentários artificiais ou excessivos;
* Inconsistência nos nomes das classes;
* Componentes repetidos com pequenas diferenças.

Não reescrever automaticamente todo o código gerado.

Corrigir de forma progressiva, preservando as partes que já funcionam.

---

## 26. Compatibilidade

Garantir funcionamento nos navegadores modernos:

* Google Chrome;
* Microsoft Edge;
* Mozilla Firefox;
* Safari.

Não utilizar funcionalidades experimentais sem fallback quando isso puder prejudicar usuários.

Não adicionar polyfills ou bibliotecas de compatibilidade sem necessidade comprovada.

---

## 27. Ordem de prioridade

Ao tomar decisões, seguir esta ordem:

1. Não quebrar funcionalidades existentes;
2. Segurança;
3. Correção do código;
4. Responsividade;
5. Acessibilidade;
6. Performance;
7. SEO;
8. Organização;
9. Aparência visual;
10. Recursos opcionais.

---

## 28. Comportamento esperado do Codex

O Codex deve:

* Ler este arquivo antes de trabalhar;
* Analisar antes de modificar;
* Respeitar as tecnologias existentes;
* Ser objetivo;
* Explicar decisões importantes;
* Evitar alterações desnecessárias;
* Não inventar dados;
* Não esconder erros;
* Informar limitações;
* Apontar riscos;
* Preservar o trabalho do desenvolvedor;
* Entregar código limpo e fácil de manter.

Quando houver diferentes soluções possíveis, priorizar a solução:

* Mais simples;
* Mais segura;
* Mais leve;
* Mais fácil de manter;
* Mais compatível com o projeto atual.

---

## 29. Formato da resposta

Ao concluir uma tarefa, responder utilizando esta estrutura:

### Resumo

Descrição curta do que foi realizado.

### Arquivos alterados

Lista dos arquivos modificados.

### Alterações realizadas

Explicação objetiva das principais mudanças.

### Testes

Lista dos testes executados.

### Pendências

Itens que ainda dependem de informações, arquivos ou decisões do desenvolvedor.

---

## 30. Informações específicas deste projeto

Preencher esta seção para cada nova Landing Page:

```text
Nome do projeto:
Cliente:
Nicho:
Objetivo principal:
Público-alvo:
Principal chamada para ação:
Telefone/WhatsApp:
E-mail:
Domínio:
Tecnologias:
Hospedagem:
Integrações:
Observações:
```

As informações registradas nesta seção devem ser consideradas a fonte principal sobre o projeto.

Quando existir conflito entre conteúdo genérico e informações específicas desta seção, preservar as informações específicas do projeto.

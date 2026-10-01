# Impacto Solidário

Projeto front-end acadêmico demonstrativo de uma página institucional para uma organização social.

## Tecnologias
- HTML5 semântico
- CSS3 responsivo
- JavaScript ES Modules
- Vite

## Requisitos
- Node.js 18 ou superior
- npm

## Instalação local
```bash
npm install
npm run dev
```
Abra o endereço informado pelo Vite no navegador.

## Build de produção
```bash
npm run build
npm run preview
```
A build é gerada na pasta `dist/`.

## Acessibilidade
O projeto utiliza landmarks semânticos, rótulos associados aos campos, navegação por teclado, foco visível, link para pular ao conteúdo, `aria-label`/`aria-live` quando necessários e suporte a preferência de movimento reduzido.

## Versionamento sugerido
O projeto utiliza GitFlow, com `main` para versões estáveis, `develop` para desenvolvimento contínuo e branches `feature/*` para novas funcionalidades. Exemplos de commits:
- `feat: cria estrutura inicial do projeto`
- `feat: implementa interface principal`
- `fix: corrige problemas de responsividade`

## Deploy
Pode ser publicado em serviços como Vercel, Netlify ou GitHub Pages. Para Vercel, conecte o repositório GitHub, use `npm run build` como comando de build e publique a pasta `dist` quando a plataforma solicitar.

## Responsividade
A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela, incluindo dispositivos móveis, tablets e computadores. Foram utilizados recursos de CSS responsivo e media queries para manter a organização e a usabilidade em diferentes resoluções.

## Observação acadêmica
Os números de impacto exibidos na página são ilustrativos. Substitua-os por dados reais caso o projeto seja adaptado para uma organização existente. O formulário também é demonstrativo e não envia dados para um servidor.

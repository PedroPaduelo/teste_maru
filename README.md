# Teste Maru - Sistema Completo

Uma aplicação full-stack moderna desenvolvida com React, TypeScript, Vite e TailwindCSS, demonstrando autenticação, rotas protegidas e dashboard interativo.

## 🚀 Funcionalidades

- ✅ **Autenticação Completa** - Sistema de login com persistência de sessão
- ✅ **Rotas Protegidas** - Acesso controlado baseado em autenticação
- ✅ **Dashboard Interativo** - Painel com métricas e overview do sistema
- ✅ **Design Responsivo** - Interface moderna com TailwindCSS
- ✅ **TypeScript** - Tipagem estática para melhor desenvolvimento
- ✅ **Performance Otimizada** - Build com Vite para carregamento rápido

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript + Vite
- **Estilização**: TailwindCSS
- **Roteamento**: React Router DOM v6
- **Autenticação**: Context API + LocalStorage
- **Code Quality**: ESLint + Prettier
- **Build Tool**: Vite

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/PedroPaduelo/teste_maru.git
   cd teste_maru
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🔐 Credenciais de Teste

Para testar o sistema de autenticação:

- **Email**: `admin@testemaru.com`
- **Senha**: `admin123`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ProtectedRoute.tsx  # Rota protegida
│   └── ui/             # Componentes de interface
├── contexts/           # Contextos React
│   └── AuthContext.tsx # Gerenciamento de autenticação
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── Login.tsx       # Página de login
│   └── Dashboard.tsx   # Dashboard principal
├── types/              # Definições TypeScript
├── utils/              # Funções utilitárias
├── styles/             # Estilos globais
├── App.tsx             # Componente principal
└── main.tsx            # Entry point
```

## 🎯 Como Usar

### Fluxo de Autenticação

1. **Acesso Inicial**: A aplicação inicia na página Home
2. **Login**: Clique em "Fazer Login" e use as credenciais de teste
3. **Dashboard**: Após login bem-sucedido, você é redirecionado para o Dashboard
4. **Logout**: Use o botão "Sair" no dashboard para encerrar a sessão

### Rotas Disponíveis

- `/` - Página inicial com overview do sistema
- `/login` - Página de autenticação
- `/dashboard` - Dashboard protegido (requer login)

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa ESLint
- `npm run format` - Formata código com Prettier

## 🎨 Personalização

### Cores e Tema
O sistema usa TailwindCSS. Para modificar as cores, edite o arquivo `tailwind.config.js`.

### Autenticação Real
Para conectar com um backend real, modifique a função `login` no `AuthContext.tsx` para fazer chamadas API.

## 📊 Funcionalidades do Dashboard

- **Métricas Principais**: Cards com dados de projetos, usuários e conversão
- **Atividades Recentes**: Lista de ações recentes no sistema
- **Layout Responsivo**: Adaptável para desktop, tablet e mobile
- **Navegação**: Header com informações do usuário e logout

## 🔧 Desenvolvimento

### Adicionando Novas Páginas
1. Crie o componente em `src/pages/`
2. Adicione a rota em `src/App.tsx`
3. Use `ProtectedRoute` para páginas que requerem autenticação

### Novos Componentes
Componentes reutilizáveis devem ser criados em `src/components/`

### Contextos Adicionais
Para estado global complexo, crie novos contextos em `src/contexts/`

## 📝 Próximos Passos

Algumas melhorias possíveis:
- [ ] Integração com API real
- [ ] Sistema de registro de usuários
- [ ] Dashboard com gráficos reais (Chart.js)
- [ ] Modo escuro/claro
- [ ] Internacionalização (i18n)
- [ ] Testes automatizados

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação acima
2. Consulte as issues do projeto
3. Entre em contato com o maintainer

---

Desenvolvido com ❤️ usando React + TypeScript + Vite
# Site da Carta Surpresa

Um site elegante e moderno criado para surpreender com uma carta de amor.

## 📖 Sobre

Este site foi criado com carinho para apresentar uma carta especial de forma bonita e memorável. Com design clean e animações sutis, o foco total está na mensagem de amor.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com gradientes e animações
- **JavaScript Vanilla** - Animações interativas sem dependências

## 🎨 Design

- **Paleta de cores:** Tons neutros com toques de vermelho
- **Tipografia:** Fontes serifadas elegantes para o texto
- **Animações:** Efeitos sutis de entrada e interação
- **Responsividade:** Adaptável a todos os dispositivos

## 📁 Estrutura de Arquivos

```
lara-site/
├── index.html          # Página principal com a carta
├── style.css          # Estilos e animações
├── script.js          # Comportamentos interativos
├── images/            # Pasta para futuras fotos
└── README.md          # Este arquivo
```

## 🌐 Hospedagem

### GitHub Pages (Recomendado)

1. **Crie um repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Versão inicial do site da carta"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
   git push -u origin main
   ```

2. **Configure o GitHub Pages**
   - Acesse as configurações do repositório
   - Em "Pages", selecione a branch `main` e a pasta `/ (root)`
   - Salve as configurações

3. **Acesse o site**
   - O site ficará disponível em: `https://seu-usuario.github.io/nome-do-repositorio/`

### AWS S3

1. **Crie um bucket S3**
   ```bash
   aws s3 mb s3://nome-do-seu-bucket
   ```

2. **Configure o bucket para hospedagem estática**
   - No console da AWS, vá até o bucket
   - Em "Properties", habilite "Static website hosting"
   - Defina `index.html` como página de índice

3. **Faça upload dos arquivos**
   ```bash
   aws s3 sync . s3://nome-do-seu-bucket --acl public-read
   ```

4. **Acesse o site**
   - O site ficará disponível em: `http://nome-do-seu-bucket.s3-website-regiao.amazonaws.com`

## 🖼️ Galeria de Memórias

A galeria de memórias permite exibir imagens com títulos e descrições detalhadas:

- **Modal Interativo:** Clique nas imagens para abrir um modal com título e texto
- **Posicionamento Inteligente:** O modal aparece sempre na área visível da tela
- **Scroll Interno:** Permite visualizar todo o conteúdo quando necessário
- **Design Responsivo:** Funciona perfeitamente em todos os dispositivos

### Como funciona
1. Cada imagem tem um índice associado no HTML
2. Os dados (título e descrição) são armazenados em um array JavaScript
3. Ao clicar, o modal abre com o conteúdo correspondente
4. O posicionamento é calculado dinamicamente baseado na viewport atual

## 🖼️ Futuras Expansões

- Ícones temáticos (corações, estrelas, etc.)
- Música de fundo opcional
- Efeitos de partículas ou confetes

## 💡 Personalização

### Alterar Cores
No arquivo `style.css`, ajuste as variáveis de cor:
```css
/* Cores principais */
background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
color: #e74c3c; /* Vermelho do coração */
```

### Alterar Tipografia
No arquivo `index.html`, modifique o link das fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Nova+Fonte:wght@400;500&display=swap" rel="stylesheet">
```

### Adicionar Fotos
1. Coloque as fotos na pasta `images/`
2. Adicione-as ao HTML conforme necessário
3. Ajuste o CSS para estilizá-las

## 📱 Compatibilidade

- Chrome (últimas 3 versões)
- Firefox (últimas 3 versões)
- Safari (últimas 3 versões)
- Edge (últimas 3 versões)

## 🎁 Dicas

- Teste o site em diferentes dispositivos antes de compartilhar
- Considere usar um domínio personalizado para tornar o site ainda mais especial
- Faça backup do código antes de fazer alterações significativas

---

*Feito com amor para surpreender alguém especial ❤️*
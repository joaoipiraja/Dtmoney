# DTMONEY

- [x] Estrutura da aplicação ⚙️
- [x] Componentização 🧩
- [x] Consumindo API 🗣
- [ ] Modal e Forms 🪟
- [ ] Contextos e hooks🪝

## Preparing environment faster 
```cmd
$ yarn create-react-app dtmoney --template typescript
```

## Styled-Components: CSS in JS

```cmd
$ yarn add styled-components
$ yarn add @types/styled-components -D
```
#### In Action 👊🏽

```jsx

import styled from 'styled-components'

const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`

  return (
    <div className="App">
      <Title>Olá,mundo!</Title>
    </div>
  );
}
```

## MirageJS API: Fake Backend

```cmd
$ yarn add miragejs
```
#### In Action 👊🏽

```jsx

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

```

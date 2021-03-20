# DTMONEY

- [x] Estrutura da aplicação ⚙️
- [ ] Componentização 🧩
- [ ] Consumindo API 🗣
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
Exemplificando:

```jsx

import styled from 'styled-components'

const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`

export function App() {
  return (
    <div className="App">
      <Title>Olá,mundo!</Title>
    </div>
  );
}


```

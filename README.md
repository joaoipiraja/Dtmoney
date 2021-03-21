# DTMONEY

- [x] Estrutura da aplicação ⚙️
- [x] Componentização 🧩
- [x] Consumindo API 🗣
- [x] Modal e Forms 🪟
- [ ] Contextos e hooks🪝

## Preparing environment faster 
```cmd
$ yarn create-react-app dtmoney --template typescript
```

## Styled-Components + Polished : CSS in JS

```cmd
$ yarn add styled-components
$ yarn add @types/styled-components -D
$ yarn add polished
```
#### In Action 👊🏽

```jsx

import styled from 'styled-components'
import { darken, transparentize } from 'polished';

const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`
const Button = styled.button`
  &:hover{
    border-color:${darken(0.1, '#d7d7d7')};
  }
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
##### Component Props

```jsx

interface RadioBoxProps {}

export const RadioBox = styled.button<RadioBoxProps>`

        background: ${(props) => props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'};

`;

<RadioBox
    type="button"
    isActive={type === "withdraw"}
    activeColor="red"
 >
```
## Axios: A HTTP Client

```cmd
$ yarn add axios
```
#### In Action 👊🏽

##### api.ts

```jsx

import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

```
##### Use in the components


```jsx

import { api } from "../../services/api";

useEffect(() => {
        api.get("transactions")
            .then(data => console.log(data))
    }, []);

```
## React Modal

```cmd
$ yarn add react-modal
```
#### In Action 👊🏽

```jsx
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

        </Modal>
    )
}

```
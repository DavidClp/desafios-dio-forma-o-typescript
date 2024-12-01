import { Card, Input } from "@chakra-ui/react"

import { login } from "../services/login"
import { ButtonLogin } from "./ButtonLogin"

export const FormCard = () => {
  return (
    <Card.Root width="320px">

      <Card.Body gap="2">
        <Card.Title mt="2">Faça o login</Card.Title>
      
        <Card.Description spaceY={3}>
          <Input placeholder="email" />
          <Input placeholder="password" />
        </Card.Description>
      </Card.Body>

      <Card.Footer justifyContent="flex-end">
        <ButtonLogin text="Entrar" event={() => login("Boas Vindas David")}/>
      </Card.Footer>
    </Card.Root>
  )
}
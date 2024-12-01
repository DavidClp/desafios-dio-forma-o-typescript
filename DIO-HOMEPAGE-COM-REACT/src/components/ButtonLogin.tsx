import { Button } from "@chakra-ui/react"

interface IProps {
  text: string;
  event: () => void
}

export const ButtonLogin = ({ text, event }: IProps) => {
  return (
    <Button onClick={event} size='sm' width='100%' marginTop='5px'>
      {text}
    </Button>
  )
}
import { Container, ContainerProps } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface Props extends ContainerProps {
  children?: any
}
const AppContainer: React.FC<Props> = props => {
  const { children } = props
  const matchesSM = useMediaQuery('(max-width: 767px)')

  return (
    <Container size="xl" mt={matchesSM ? '9rem' : '5rem'} {...props}>
      {children}
    </Container>
  )
}

export default AppContainer

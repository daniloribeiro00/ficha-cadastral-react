import { Container, Content } from './styles';

import { MultiStepForm } from '../../components/MultiStepForm'

export const Home = () => {
    return (
        <Container>
            <h1>Ficha cadastral</h1>
            <Content>
                <MultiStepForm />
            </Content>
        </Container>
    )
}
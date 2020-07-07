import styled, { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { myTheme } from '../my-theme'

const FooterElement = styled.footer`
    background: rgba(0, 0, 0, 0.18);
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;
    margin-top: 5rem;
`

const LinkElement = styled.a`
    color: ${(props) => props.theme.colors.font};
    font-size: 3rem;
    transition: color 0.2s;

    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`

export default function Footer(): JSX.Element {
    return (
        <ThemeProvider theme={myTheme}>
            <FooterElement>
                <LinkElement
                    target="_blank"
                    href="https://github.com/beardcoder/bavaria-ipsum"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </LinkElement>
            </FooterElement>
        </ThemeProvider>
    )
}

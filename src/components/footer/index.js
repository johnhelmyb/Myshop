import React from 'react';
import { Container, Wrapper, Row, Colunm, Link, Title} from './styles/footer';

export default function Footer({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Colunm = function FooterColunm({children, ...restProps}) {
    return <Colunm {...restProps}>{children}</Colunm>
}

Footer.Link = function FooterLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}


import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive'


import "./layout.css"
import MobileMenu from "./mobileMenu"

import logo from './images/logo.png'

const Page = styled.div`
    box-sizing: border-box;
    margin: 0px;
`

const Container = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
`

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
`

const Header = styled.header`
    position: sticky;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
    margin: 0px;
    padding: 8px 0px;
    height: 32px;
    background-color: #fff;
    border-bottom: 1px solid #e2e8f0;
`

const Logo = styled.div`
    height: 32px;
`

export default function Layout({ page, children }) {
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    // const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    return (
        <Page>

            <Header>
                <HeaderContainer>
                    <Logo>
                        <Link to="/"><img style={{ height: '32px' }} alt="logo" src={logo} /></Link>
                    </Logo>
                    {isMobile &&
                        <MobileMenu page={page} />
                    }
                </HeaderContainer>
            </Header>

            <Container>
                {children}
            </Container>
        </Page >
    )
}
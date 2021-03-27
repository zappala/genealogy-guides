import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

import "fontsource-marck-script"

import zappalaLogo from './images/zappala-logo.png'
import morris from './images/morris-carpet.jpg'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
    @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
  `

const HeroBody = styled.div`
@media (min-width: 668px) {
  flex: 1;
}
`

const MorrisImage = styled.img`
  width: 500px;
`

const HeroLogo = styled.img`
  margin-top: 50px;
  margin-bottom: 0px;
  width: 150px;
  @media (min-width: 668px) {
    max-width: 400px;
}
`

const HeroTitle = styled.h1`
  font-size: 38px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -1.12px;
  margin: 0 0 2;
  margin-top: 0px;
}
`

const HeroTeaser = styled.p`
  font-size: 18;
  @media (max-width: 768px) {
      font-size: 20;
  }

  @media (max-width: 1024px) {
      font-size: 24;
  }
`

const Article = styled.div`
    max-width: 52em;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
`

export default function Home() {
  return <Layout>
    <Article>
      <Hero>
        <HeroBody>
          <HeroLogo src={zappalaLogo}></HeroLogo>
          <HeroTitle>Genealogy Guides</HeroTitle>
          <HeroTeaser>
            We're sorry, that page doesn't exist. Please browse the rest of the site.

            <MorrisImage src={morris} />
          </HeroTeaser>
        </HeroBody>
      </Hero>
    </Article>
  </Layout >
}

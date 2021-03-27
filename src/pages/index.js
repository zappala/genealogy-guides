import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import Layout from "../components/layout"

import "fontsource-marck-script"

import zappalaLogo from './images/zappala-logo.png'
import coverImage from './images/zappalas-cover.png'

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

const Button = styled.button`
  border-radius: 8px;
  padding: 0.5rem 0;
  width: 11rem;
  background: #E2E8F0;
  color: black;
  border: none;
  &:hover {
    background: #CBD5E0;
  }
 
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
  `

const HeroImage = styled.img`
  margin-top: 40px;
  flex: 1;
  object-fit: cover;
  @media (min-width: 668px) {
    margin-left: 50px;
    max-width: 400px;
}
`

const Signature = styled.div`
  font-family: 'Marck Script', cursive;
  font-size: 1.2em;
  line-height: 1.2;
`

const Section = styled.div`
  margin-top: 20px;
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
            A series of short guides to help you learn genealogy and reconnect with your family's
            history
          </HeroTeaser>
          <Link to="/getting-started/welcome">
            <Button>
              Browse Guides
            </Button>
          </Link>
        </HeroBody>
        <HeroBody>
          <HeroImage src={coverImage}></HeroImage>
        </HeroBody>
      </Hero>
      <Signature>
        by Daniel and Tracy Zappala
    </Signature>
      <Section>
        <p><strong>Tracy</strong>: I work at Ancestry ProGenealogists, where I specialize in Southern
      United States and African American genealogy. I solve unique cases, including
      those related to the South, migration, burned counties, African American
      history, Caribbean history, immigration, and numerous other localities and
      cultures. I have also conducted research for the "Who Do You Think You Are?"
      television show, including the Regina King episode. I’m an accredited genealogist in African American, United States Mid-South and United States South Central Genealogy. My personal genealogy research includes finding ancestors in Tennessee, South Carolina, Denmark and England.
      </p>

        <p><strong>Daniel</strong>: I am a professor in the Computer Science Department at Brigham Young
      University. I love making complex things easy to understand when I'm teaching. I
      have been an amateur genealogist for many years as I have worked on my own
      family tree. I have learned how to find records for my ancestors from the United
      States, Italy, England, Denmark, Scotland, and Ireland.
      </p>
      </Section>
    </Article >
  </Layout >
}

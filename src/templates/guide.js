import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import DesktopMenu from "../components/desktopMenu"

const BigContainer = styled.div`
    display: grid;
    grid-template-columns: 200px minmax(0, 1fr) 50px;;
    grid-gap: 100px;
    margin-top: 40px;
`

const Article = styled.div`
    max-width: 52em;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
`

const Title = styled.h1`
    margin-top: 10px;
`

export default function Guide({ location, data }) {
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    const guide = data.mdx
    console.log("Guide:", guide)
    const locationArray = location.pathname.split("/")
    const page = '/' + locationArray[locationArray.length - 2]
    return (
        <Layout>
            {isDesktop &&
                <BigContainer>
                    <DesktopMenu page={page} />
                    <Article>
                        <div>
                            <Title>{guide.frontmatter.title}</Title>
                            <MDXRenderer>{guide.body}</MDXRenderer>
                        </div>
                    </Article>
                </BigContainer>
            }
            {isMobile &&
                <Article>
                    <div>
                        <Title>{guide.frontmatter.title}</Title>
                        <MDXRenderer>{guide.body}</MDXRenderer>
                    </div>
                </Article>
            }
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
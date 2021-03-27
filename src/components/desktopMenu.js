import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from "styled-components"

import MenuLinks from "./menuLinks"

const Wrapper = styled.div`
  display: block;
  margin-left: auto;
`

export function DesktopNav() {
    return (
        <Wrapper>
            <Link to="/getting-started/welcome">Guides</Link>
        </Wrapper>
    )
}

const MenuArea = styled.aside`
  position: sticky;
  top: 50px;
  padding: 4px 0;
  overflow-y: auto;
  height: calc(100vh - 50px);
  width: 200px;
)}
`

export default function DesktopMenu({ page }) {
    return (
        <StaticQuery
            query={graphql`
        query DesktopMenuQuery {
          site {
            siteMetadata {
                sideBar {
                    name
                    prefix
                    links {
                        title
                        link
                    }
              }
            }
          }
        }
      `}
            render={data => (
                <MenuArea>
                    {data.site.siteMetadata.sideBar.map(section => (
                        <MenuLinks page={page} name={section.name} prefix={section.prefix} links={section.links} />
                    ))}
                </MenuArea>
            )}
        />)
}
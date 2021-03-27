import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { useDialogState, Dialog, DialogDisclosure } from 'reakit/Dialog'
import { VscChevronDown } from 'react-icons/vsc'
import styled from "styled-components"

import MenuLinks from "./menuLinks"

const MenuButton = styled.button`
  border: 0;
  color: #000;
  background-color: #fff;
  transition: base;
  transition-property: color;
  font-size: 14px;
  padding-bottom: 5px;


  &:focus {
    color: background;
  }

  > svg {
    //width: 24px;
    //height: 24px;
    transition: transform 200ms ease-in-out;
    font-size: 20px;

    &:first-child {
      transform: translateY(5px) rotate(-90deg);
    }
  }

  &[aria-expanded='true'] {
    > svg:first-child {
      transform: translateY(5px) rotate(0deg);
    }
  }
`

const MenuDialog = styled.div`
  background-color: #f7fafc;
  backdrop-filter: blur(3px);
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  overflow: auto;
  transition: base;
  opacity: 0;
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  transform: translate3d(0, 10vh, 0);
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 48px;

  &[data-enter] {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  &:focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  display: block;
  margin-left: auto;
`

function Menu({ children }) {
    const dialog = useDialogState({ animated: true })
    return (
        <>
            <Dialog {...dialog} as={MenuDialog}>
                {children}
            </Dialog>
            {/* <Portal> */}
            <DialogDisclosure {...dialog} as={MenuButton}>
                Guides <VscChevronDown />
            </DialogDisclosure>
            {/* </Portal> */}
        </>
    )
}

export default function MobileMenu({ page }) {
    return (
        <StaticQuery
            query={graphql`
        query MobileMenuQuery {
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
                <Wrapper>
                    <Menu>
                        {data.site.siteMetadata.sideBar.map(section => (
                            <MenuLinks page={page} name={section.name} prefix={section.prefix} links={section.links} />
                        ))}
                    </Menu>
                </Wrapper>
            )}
        />)
}

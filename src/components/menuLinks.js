import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"

const SectionName = styled.h1`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #d03341;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1.33em;
  
  `

const SectionLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    border-left: 1px solid #a0a0a0;
`

const Item = styled.li`
    padding: 0;
    margin: 2px 0px 4px -2px;

    a {
        color: #4a5568;
        display: block;
        transition: fast;
        transition-property: color, border-color;
        padding: 2px 0px 2px 8px;
        border-left: 3px solid transparent;
        text-decoration: none;
        
    }

    a:hover {
       color: #000;
    }

    a[aria-current='page'] {
        font-weight: 600;
        border-color: #d03341;
        color: black;
    }
`

export default function MenuLinks({ page, name, prefix, links }) {
    return (
        <div>
            <SectionName>{name}</SectionName>
            <SectionLinks>
                {links.map(link => (
                    <Item current={page === link.link} key={link.title}>
                        <Link to={`/${prefix}${link.link}`}>
                            {link.title}
                        </Link>
                    </Item>
                ))}
            </SectionLinks>
        </div>
    )
}

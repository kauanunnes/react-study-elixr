import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { Button } from './Button'

const FooterContainer = styled.footer`
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 55vh;
  
  background: #000d1a;
  color: #FFF;
  
  padding: 0 4.5rem;

  @media screen and (max-width:768px) {
    flex-direction: column;
    padding: 1rem 4.5rem;
    justify-content: center;
    gap: 1rem;
  }

`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 450px;

  > h1 {
    font-size: 3.5rem;
  }
  @media screen and (max-width:768px) {
    text-align: center;
  }

  
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 450px;

  align-items: center;

`
const IconsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;  
  margin-top: 4rem;
  align-items: center;
  width: 50%;

  @media screen and (max-width:768px) {
    margin: 2rem 0;
    width: 100%;
    justify-content: center;
  }

  
`
const Icons = styled(Link)`
  color: #CD853F;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #FFF;

  }
`
const ContainerItems = styled.div`
  display: flex;
  gap: 2.5rem;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  > ul li {
    list-style: none;
    cursor: pointer;
    transition: 0.3s;


    &:hover {
      text-decoration: underline;
      transform: scale(1.05);

    }
  }
  margin-bottom: 4rem;

`

const Footer = () => {
  return (
    <FooterContainer>
      <LeftColumn>
        <h1>Let's find your Dream Home</h1>
        <IconsContainer>
          <Icons to='/'>
            <FaYoutube size={25} />
          </Icons>
          <Icons to='/'>
            <FaInstagram size={25} />
          </Icons>
          <Icons to='/'>
            <FaFacebookF size={25} />
          </Icons>
          <Icons to='/'>
            <FaLinkedinIn size={25} />
          </Icons>
        </IconsContainer>
      </LeftColumn>
      <RightColumn>
        <ContainerItems>
          <ul>
            <li><h3>Contact Us</h3></li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Questions</li>
          </ul>
          <ul>
            <li><h3>Offices</h3></li>
            <li>United States</li>
            <li>Europe</li>
            <li>Brazil</li>
          </ul>
        </ContainerItems>
        <Button to='#'>Let's chat</Button>
      </RightColumn>
    </FooterContainer>
  )
}

export default Footer

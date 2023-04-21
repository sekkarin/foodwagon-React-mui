import { Button } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderSection } from '../components/HeaderSection'
import CardFood from '../components/CardFood'
import { HowDoesItWork } from '../components/HowDoesItWork'
import { PopularItems } from '../components/PopularItems'




export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeaderSection/>
      <CardFood></CardFood>
      <HowDoesItWork></HowDoesItWork>
      <PopularItems></PopularItems>
    </>
  )
}

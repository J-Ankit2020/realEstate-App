import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CardWrapper from './components/CardWrapper'
import { Box } from '@chakra-ui/react'
import FilterBox from './components/FilterBox'
import propertyData from './propertyData.js';
import { useEffect, useState } from 'react'
function App() {
  const [searchText, setSearchText] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [price, setPrice] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const searchHandler = (text) => {
    setSearchText(text);
  }

  const selectHandler = (value, type) => {
    if (type === 'price') setPrice(value);
    else if (type === 'type') setPropertyType(value);
    else if (type === 'beds') setBedrooms(value);
  }
  const priceFilter = (data) => {
    if (price === 'lowest') return data.rent >= 500 && data.rent <= 2000
    else if (price === 'medium') return data.rent >= 2000 && data.rent <= 3000
    else if (price === 'highest') return data.rent >= 3000;
    else return true
  }

  const propertyFilter = (data) => {
    if (data.propertyType === propertyType || propertyType == 'all') return true;
  }

  const bedsFilters = (data) => {
    return data.bedrooms == bedrooms || bedrooms === 'all';
  }

  // useEffect(() => { }, [searchText, propertyType, price])
  const filteredProperties = propertyData.filter
    (data => data.name.toLowerCase().includes(searchText))
    .filter(propertyFilter)
    .filter(priceFilter)
    .filter(bedsFilters)
  return (
    <Box className="App" bg="#F8F6FC" h='full' w="100%" >
      <NavBar />
      <Hero handleSearch={searchHandler} />
      <FilterBox selectHandler={selectHandler} />
      <CardWrapper propertyData={filteredProperties} />

    </Box>
  )
}

export default App

import React, {useState, useEffect} from 'react'
import axios from 'axios';

import '../ui/homePage.styles.css'
import {Navbar} from '../components/Navbar'
import { HeaderHome } from '../components/HeaderHome'
import { Footer } from '../components/Footer'
import { UploadGif } from '../components/UploadGif';

export const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const [gifs, setGifs] = useState(undefined)

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/gif/categories")
      .then(({data}) => {
        setCategories(data.slice(0,3))
      })
  },[])

  useEffect(() => {
    const params = {}

    if(searchText){
      params.category = searchText
    }

    axios
      .get("http://localhost:4000/api/gif",{
        params
      }).then(({data}) => {
        console.log(data)
        setGifs(data)
      })
  }, [searchText])

  

  
  return (
    <>
    <Navbar categories={categories} searchText={searchText} setSearchText={setSearchText}/>
    <UploadGif categories={categories} />
    <HeaderHome gifs={gifs}/>
    <Footer />
    </>
  )
}

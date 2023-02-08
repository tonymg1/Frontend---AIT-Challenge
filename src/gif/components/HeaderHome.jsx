import React from 'react'
import '../ui/headerHome.styles.css'
import gifhub from '../../assets/img/gitGif.gif'

export const HeaderHome = () => {
  return (
    <header>
      <div className="header-content">
        <h1 className="header-title text-center">Welcome to Gif Hub</h1>
        <p>This is a gifs app where you can search, view and save your own gif collection</p>
        <img src={gifhub} alt="Example gif" />
      </div>
    </header>
  )
}

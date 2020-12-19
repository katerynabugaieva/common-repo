import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Scroll = styled.button`
  // display: none;
  position: fixed;
  bottom: 20px;
  right: ${rhythm(0.3)};;
  z-index: 99;
  font-size: 14px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  border-radius: 50px;
  border: 1px solid #121212;
   background-color: none;
`

const ScrollMe = () => {
  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <Scroll onClick={topFunction} id="myBtn">
      &uarr;
    </Scroll>
  )
}
export default ScrollMe


/*

 var button = document.getElementById("myBtn")
  window.onscroll = function () {
   // scrollFunction()
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      button.style.display = "block"
    } else {
      button.style.display = "none"
    }
  }
*/
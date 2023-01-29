import logo from "../assets/logo.svg" 

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#D2D2D2] h-[271px] flex items-center justify-between on-center mt-[91px] flex-wrap max-[1000px]:justify-center">
      <img src={logo} alt="Compretionline logo"/>
      <nav className="flex gap-10 text-sm text-[#1E2833] flex-wrap justify-center">
        <a href="#">Computadores</a>
        <a href="#">Smartphones</a>
        <a href="#">Consoles</a>
        <a href="#">Headsets</a>
      </nav>
      <p className="text-[#5c5c5c] text-[15px] text-center">
        Copyright © 2023. Compretionline. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;
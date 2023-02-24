import { ArrowUp } from "phosphor-react"

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="border-t border-[#D2D2D2] p-14 flex items-center justify-between on-center mt-[91px] flex-wrap max-[1000px]:justify-center">
      <p className="text-[#5c5c5c] text-[15px] text-center">
      © 2023 Compretionline. All rights reserved.
      </p>
      <button 
        className="border w-[54px] h-[56px] flex items-center justify-center rounded outline-none"
        onClick={() => scrollToTop()}
      >
        <ArrowUp/>
      </button>
    </footer>
  )
}
export default function Footer() {
  return (
    <footer className="border-t-2 border-[#D2D2D2] h-[271px] flex items-center justify-between on-center mt-[91px] flex-wrap max-[1000px]:justify-center">
      <a href="/">
        <img src="/logo.svg" alt="Compretionline logo"/>
      </a>
      <nav className="flex gap-10 text-sm text-[#1E2833] flex-wrap justify-center">
        <a href="/search/computador">Computadores</a>
        <a href="/search/celular">Smartphones</a>
        <a href="/search/console">Consoles</a>
        <a href="/search/teclado">Teclados</a>
      </nav>
      <p className="text-[#5c5c5c] text-[15px] text-center">
        Copyright © 2023. Compretionline. All rights reserved.
      </p>
    </footer>
  )
}
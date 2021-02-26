function Header(props) {
  return <header>
    <img id="logo" src={props.imageSrc} alt='logo' />
    <span>{props.name}</span>
  </header>
}

export default Header;
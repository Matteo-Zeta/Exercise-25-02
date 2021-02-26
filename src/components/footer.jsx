function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();
  return <footer>{year} © {props.company}</footer>
}

export default Footer;
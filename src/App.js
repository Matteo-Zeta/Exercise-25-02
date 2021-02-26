import logo from './logo.svg';
import './App.css';
import './Body.css';
import './Header.css';
import './Footer.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';


function App() {

    const data = {
      name: 'HappyShoes',
      logo: 'https://logoipsum.com/logo/logo-16.svg',
      company: 'SZH Inc.',
      cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Welcome to our brand new HappyShoes website!',
      description: `Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.`,
    }
    return (
      <div className="App">
        <Header imageSrc = {data.logo} name = {data.name} ></Header>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        {/* <main className="App-main">
        </main> */}
        <Body cover={data.cover} title={data.title} description={data.description}></Body>
        <Footer className="App-footer" company={data.company}></Footer>
      </div>
    );
  }

export default App;

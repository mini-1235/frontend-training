import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome person="GIngo"></Welcome>
        <Welcome person="gimgo"></Welcome>
        <Welcome person="gio"></Welcome>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn QSC
        </a>
      </header>
    </div>
  );
}

export default App;
{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
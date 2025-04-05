import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import { Layout } from "antd";
import RegHeader from "./header";
import Login from "./login";
import Signup from './signup';
import RegFooter from './footer';
import Home from './home';
import './App.css';
const { Header, Content,Footer } = Layout;

function App() {
  return (
    <>
    <Router>
    <Layout style={{ minHeight: "100vh",minWidth:"100vw",background:"#fff" }}>
    <Header style={{background:"#fff"}}>
      <RegHeader />
    </Header>
    <Content style={{minHeight:"80vh"}}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/home" element={<Home />} />
     
      </Routes>
    </Content>
    <Footer>
      <RegFooter />
    </Footer>
    </Layout>
    </Router>
    </>
  )
}

export default App

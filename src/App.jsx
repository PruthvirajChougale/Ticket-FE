import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "antd";
import RegHeader from "./header";
import Login from "./login";
import Signup from "./signup";
import RegFooter from "./footer";
//import Home from "./home";
import Flight from "./components/flight";
import "./App.css";
const { Header, Content, Footer } = Layout;

function App() {
	return (
		<>
			<Router>
				<Layout style={{ minHeight: "100vh", background: "#fff" }}>
					<Header style={{ background: "#fff", height: "auto" }}>
						<RegHeader />
					</Header>
					<Content>
						<Routes>
							<Route path="/" element={<Navigate to="/login" />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							{/* <Route path="/home" element={<Home />} /> */}
							<Route path="/:path" element={<Flight />} />
						</Routes>
					</Content>
					<Footer style={{ height: "auto", backgroundColor: "#2C3046" }}>
						<RegFooter />
					</Footer>
				</Layout>
			</Router>
		</>
	);
}

export default App;

import { io } from "socket.io-client";

const socket = io("http://13.203.150.86:5000", {
	transports: ["websocket"],
	withCredentials: true,
});

export default socket;

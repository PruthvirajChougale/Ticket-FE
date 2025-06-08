import { io } from "socket.io-client";

const socket = io("http://43.205.87.196:5000", {
	transports: ["websocket"],
	withCredentials: true,
});

export default socket;

import { io } from "socket.io-client";

const socket = io("https://isrogeonli.in", {
	transports: ["websocket"],
	withCredentials: true,
});

export default socket;

// Copy/rename this file to `config.js` (remove example), then modify the values as you wish
const CONFIG = {
  clock: {
    epoch: new Date("2021-03-27 00:00:00"),
  },
  changelog: {
    version: 123,
    date: "2023-01-01",
    updates: [
      "Did some updates.",
      "Did some more updates.",
      "Did EVEN MORE updates.",
    ],
  },
  hardwareMonitor: {
    webserverAddress: "http://127.0.0.1:8085/data.json",
  },
  statusRelay: {
    websocketAddress: "ws://127.0.0.1:8080",
  },
};

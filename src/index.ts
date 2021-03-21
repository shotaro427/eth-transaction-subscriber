import Web3 from "web3";

const webSocketProvider = new Web3.providers.WebsocketProvider(
  "ws://127.0.0.1:8546"
);
const web3 = new Web3(
  "wss://mainnet.infura.io/ws/v3/81e3cb3407184595b23483190bf0d734"
);

const subscription = web3.eth
  .subscribe("pendingTransactions", () => {})
  .on("data", async (trxData) => {
    console.log(trxData);
    const transaction = await web3.eth.getTransaction(trxData);

    console.log("transaction", transaction);
  });

// subscription.unsubscribe(function (error, success) {
//   if (success) console.log("Successfully unsubscribed!");
// });

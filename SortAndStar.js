function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
console.log(
  twoSort([
    "BTC",
    "Bitcoin",
    "Classic",
    "DarkCoin",
    "Dogecoin",
    "Dogecoin",
    "Dogecoin",
    "Dogecoin",
    "Ethereum",
    "MadeSafeCoin",
    "MadeSafeCoin",
    "Mine",
    "ProofOfStake",
    "ProofOfStake",
    "ProofOfStake",
    "ProofOfWork",
    "Ripple",
    "Steem",
  ]),
);

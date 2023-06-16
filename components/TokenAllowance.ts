const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const token = async () => {
  await Moralis.start({
    apiKey: "mWx7PIHJ3HcB5msisjerHmzUFvshbDZI6VPZD9Z1fxkOn8buIXmTT8OcgqPM045z",
    // ...and any other configuration
  });

  const chain = EvmChain.ETHEREUM;

  // Here, we'll have to take inputs form the user.
  const address = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

  const ownerAddress = "0x7c470D1633711E4b77c8397EBd1dF4095A9e9E02";

  const spenderAddress = "0xed33259a056f4fb449ffb7b7e2ecb43a9b5685bf";

  const response = await Moralis.EvmApi.token.getTokenAllowance({
    address,
    chain,
    ownerAddress,
    spenderAddress,
  });

  const response1 = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });

  console.log(response.toJSON(), response1.toJSON());
};

token();

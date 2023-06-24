const { ApiPromise, ScProvider } = require("@polkadot/api");
const Sc = require("@substrate/connect");

async function queryInfo(api) {
  const assetMetadata = await api.query.assets.metadata.entries();

  assetMetadata.map((asset) => {
    let h = asset[1].toHuman();
    console.log(JSON.stringify(h));
  });
}

async function setup() {
  const jsonParachainSpecAstar = require("./chain-specs/astar.json");
  const astarSpec = JSON.stringify(jsonParachainSpecAstar);

  const relayProvider = new ScProvider(Sc, Sc.WellKnownChain.polkadot);
  const provider = new ScProvider(Sc, astarSpec, relayProvider);

  await provider.connect();
  const api = await ApiPromise.create({ provider });

  console.log("Connected to Astar Network using ScProvider (light client)");
  await queryInfo(api);
  process.exit();
}

setup();

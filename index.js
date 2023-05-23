/* Amplify Params - DO NOT EDIT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

// ----- You will know which network to use in "ENV" -----
// dev: testnet
// demo: testnet
// stg: mainnet
// prod: mainnet
require('dotenv').config();
// const ENV = process.env.ENV; // dev, demo, stg, prod
const ENV = "dev";
const private_key = process.env.PRIVATEKEY;;
// ----- Region is only Tokyo region (ap-northeast-1) -----
// const REGION = process.env.REGION; // ap-northeast-1


//const PORT = process.env.PORT || 3000;
const { callPlatformMethods } = require("./core_scripts/index");
const REGION = "ap-northeast-1"

async function main(req) {

    let platform_res = [];
    var method = req.method;
    var platform = req.platform;
    var address1, address2;
    var pair = req.pair;
    var pool = req.pool;
    var farm = req.farm;

    var amount1 = 0;
    var amount2 = 0;
    var liquidity = 0;
    var rpc_url = "";
    switch (platform) {
        case "testnetftmscan":
            rpc_url = process.env.FantomTestUrl;
            break;
        // PancakeSwap
        case "PancakeSwap":
            rpc_url = process.env.BscRpcUrl;
            break;

        // UniSwap
        case "UniSwap":
            rpc_url = "";
            break;

        // TradeJoe
        case "TradeJoe":
            rpc_url = "";
            break;
        // SushiSwap
        case "SushiSwap":
            rpc_url = process.env.EthereumRpcUrl;
            break;
        // Raydium
        case "Raydium":
            rpc_url = "";
            break;
        // ORCA
        case "ORCA":
            rpc_url = "";
            break;
        // SUN.io
        case "SUN.io":
            rpc_url = "";
            break;

        // SpookySwap
        case "SpookySwap":
            rpc_url = "";
            break;
        default:
            rpc_url = "";
            break;
    }
    let request = {};
    switch (method) {
        case "statusGet":
            address1 = req.address1;
            address2 = req.address2;
            request = { platform, pair, method, pool, farm, address1, address2, private_key, rpc_url };
            break;
        case "liquidityAdd":
            address1 = req.address1;
            address2 = req.address2;
            amount1 = req.amount1;
            amount2 = req.amount2;
            request = { platform, pair, method, pool, farm, address1, address2, amount1, amount2, private_key, rpc_url };
            break;
        case "liquidityRemove":
            address1 = req.address1;
            address2 = req.address2;
            liquidity = req.liquidity;
            request = { platform, pair, method, pool, farm, address1, address2, liquidity, private_key, rpc_url };
            break;
        case "farmingDeposit":
            address1 = req.address1;
            address2 = req.address2;
            liquidity = req.liquidity;
            request = { platform, pair, method, pool, farm, address1, address2, liquidity, private_key, rpc_url };
            break;
        case "farmingHarvest":
            request = { platform, pair, method, pool, farm, private_key, rpc_url };
            break;
        case "farmingWithdraw":
            address1 = req.address1;
            address2 = req.address2;
            liquidity = req.liquidity;
            request = { platform, pair, method, pool, farm, address1, address2, liquidity, private_key, rpc_url };
            break;
        default:
            break;
    }
    platform_res = await callPlatformMethods(request);

    return platform_res;
}


exports.handler = async (event) => {

    console.log("Service Core Partak Farming");
    //console.log(`${ENV} - ${REGION}`);
    console.log(event);
    request_data = event;
    let platform_response = await main(request_data);
    platform_response["requestData"]["private_key"] = "";
    try {
        delete platform_response["requestData"]["private_key"];
    }
    catch (err) { }
    return platform_response;
};

/* Amplify Params - DO NOT EDIT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

// ----- You will know which network to use in "ENV" -----
// dev: testnet
// demo: testnet
// stg: mainnet
// prod: mainnet

// const ENV = process.env.ENV; // dev, demo, stg, prod
const ENV = "dev";
const private_key = "0xd094758b9ee14eb5781835359297f1b9cbf102c8a4a499e650d28ff27d2d94d8";
// ----- Region is only Tokyo region (ap-northeast-1) -----
// const REGION = process.env.REGION; // ap-northeast-1

//require('dotenv').config();
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
            rpc_url = "https://rpc.testnet.fantom.network/";
            break;
        // PancakeSwap
        case "PancakeSwap":
            rpc_url = "https://bsc-dataseed1.ninicoin.io/";
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
            rpc_url = "https://ethereum.publicnode.com";
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

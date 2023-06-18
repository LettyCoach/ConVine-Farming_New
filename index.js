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
const private_key = process.env.PRIVATEKEY;
// ----- Region is only Tokyo region (ap-northeast-1) -----
// const REGION = process.env.REGION; // ap-northeast-1


//const PORT = process.env.PORT || 3000;
const { callPlatformMethods } = require("./core_scripts/index");
const REGION = "ap-northeast-1"

async function main(req) {
    let platform_res = {
        statusCode: 200,
        requestData: req,
        responseData: null
    }
    var req_access_token = req.access_token;
    let Access_Token = process.env.Access_Token;
    if (req_access_token != Access_Token) {
        platform_res["status"] = 400;
        platform_res["responseData"] = "Invalid access token";
        return platform_res;
    }
    var method = req.method;
    var platform = req.platform;
    var version = req.version;
    var address1, address2;
    var pair = req.pair;
    var pool = req.pool;
    var farm = req.farm;
    var tokenId = req.tokenId;
    var amount1 = 0;
    var amount2 = 0;
    var liquidity = 0;
    var rpc_url = "";
    var private_key = process.env.PRIVATEKEY;
    var tickLower = req.tickLower;
    var tickUpper = req.tickUpper;
    var RadiusNumberOfBins = req.RadiusNumberOfBins;
    var activeId = req.activeId;
    switch (platform) {
        case "testnetftmscan":
            rpc_url = process.env.FantomTestUrl;
            //https://testnet.ftmscan.com/address/0xfb1ea3760c69b7be86422a4661f47796d52ceb1b
            break;
        // PancakeSwap
        case "PancakeSwap":
            rpc_url = process.env.BscRpcUrl;
            //https://bscscan.com/address/0xfb1EA3760C69B7bE86422a4661f47796d52Ceb1B
            break;

        // UniSwap
        case "UniSwap":
            rpc_url = "https://arb1.croswap.com/rpc";
            //https://arbiscan.io/address/0xfb1EA3760C69B7bE86422a4661f47796d52Ceb1B
            break;

        // TradeJoe
        case "TradeJoe":
            rpc_url = process.env.AvalancheRpcUrl;
            //https://snowtrace.io/address/0xfb1EA3760C69B7bE86422a4661f47796d52Ceb1B
            break;
        // SushiSwap
        case "SushiSwap":
            rpc_url = process.env.EthereumRpcUrl;
            //https://etherscan.io/address/0xfb1EA3760C69B7bE86422a4661f47796d52Ceb1B
            break;
        // Raydium
        case "Raydium":
            rpc_url = "";
            //https://solscan.io/account/FmpW4uaeZcLS6DYCgb6aXGjA9gr5TLLtBYwBBxeBpbNU
            break;
        // ORCA
        case "ORCA":
            rpc_url = "";
            break;
        // SUN.io
        case "SUN.io":
            rpc_url = process.env.TronscanRpcUrl;
            private_key = process.env.TronPRIVATEKEY;
            //https://tronscan.org/#/address/TW9P7KrpNGW1fRfMBm4MxGpCZNuNYMZaJb
            break;

        // SpookySwap
        case "SpookySwap":
            rpc_url = process.env.FantomRpcUrl;
            //https://ftmscan.com/address/0xfb1EA3760C69B7bE86422a4661f47796d52Ceb1B
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
            request = { platform, pair, method, pool, farm, address1, address2, private_key, rpc_url, version, tokenId };
            break;
        case "liquidityAdd":
            address1 = req.address1;
            address2 = req.address2;
            amount1 = req.amount1;
            amount2 = req.amount2;
            request = { platform, pair, method, pool, farm, address1, address2, amount1, amount2, private_key, rpc_url, version, tokenId,tickLower,tickUpper,RadiusNumberOfBins };
            break;
        case "liquidityRemove":
            address1 = req.address1;
            address2 = req.address2;
            liquidity = req.liquidity;
            request = { platform, pair, method, pool, farm, address1, address2, liquidity, private_key, rpc_url, version, tokenId ,RadiusNumberOfBins,activeId};
            break;
        case "farmingDeposit":
            address1 = req.address1;
            address2 = req.address2;
            liquidity = req.liquidity;
            request = { platform, pair, method, pool, farm, address1, address2, liquidity, private_key, rpc_url, version, tokenId };
            break;
        case "farmingHarvest":
            request = { platform, pair, method, pool, farm, private_key, rpc_url, version, tokenId };
            break;
        case "farmingWithdraw":
            address1 = req.address1;
            address2 = req.address2;
            liquidity = req.liquidity;
            request = { platform, pair, method, pool, farm, address1, address2, liquidity, private_key, rpc_url, version, tokenId };
            break;
        default:
            break;
    }
    platform_res = await callPlatformMethods(request);

    try {
        platform_res["requestData"]["private_key"] = "";
        delete platform_res["requestData"]["private_key"];
    }
    catch (err) { }
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
        platform_response["requestData"]["private_key"] = "";
        delete platform_response["requestData"]["private_key"];
    }
    catch (err) { }
    return platform_response;
};

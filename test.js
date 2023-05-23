const ethers = require("ethers");
require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const private_key = process.env.PRIVATEKEY;
const { callPlatformMethods } = require("./core_scripts/index");
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
    platform_res["requestData"]["private_key"] = "";
    try {
        delete platform_res["requestData"]["private_key"];
    }
    catch (err) { }
    return platform_res;
}

var app = express();

app.use(bodyParser.json());

app.post('/operate_platform', function (request, response) {
    var req = request.body;

    //platform_res = operate_platform(req).then();
    main(req)
        .then((res) => {
            console.error(res);
            response.send(res);
        })
        .catch((error) => {
            console.error(error);
            response.send(error);
        });
    //console.log(platform_res);
    //response.send(request.body);    // echo the result back
});

// Handle GET requests to /api http://localhost:3001/api
app.get("/api", (req, res) => {
    res.json({ "req": req.data, message: "Hello from server!  qqq" });
});

app.listen(PORT, () => {

});
//node index.js


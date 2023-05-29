const Addresses = require('../../config/addresses.json');
var fs = require('fs');
const readline = require('readline');
// testnet.ftmscan
exports.TestnetFtmscanGetpIdFromPairName = function (pair) {
    var pid = 0;
    switch (pair) {
        case "CAKE-USDT":
            pid = 3;
            break;
        case "WETH-USDT":
            pid = 2;
            break;
        case "WETH-CAKE":
            pid = 1;
            break;
        default:
            break;
    }
    return pid;
};
exports.TestnetFtmscanGetAddressFromPairName = function (pair) {
    var addr1 = "";
    var addr2 = "";
    switch (pair) {
        case "CAKE-USDT":
            addr1 = Addresses.Cake;
            addr2 = Addresses.Usdt;
            break;
        case "RACA-BUSD":
            addr1 = "";//Addresses.RACA;
            addr2 = "";//Addresses.BUSD;
            break;
        case "CAKE-BUSD":
            addr1 = Addresses.Cake;
            addr2 = "";//Addresses.BUSD;
            break;
        case "CAKE-BNB"://CAKE-WBNB
            addr1 = Addresses.Cake;
            addr2 = "";//Addresses.WBNB;
            break;
        default:
            break;
    }
    res = { addr1, addr2 };
    return res;
};
//========================= Pancakeswap======================
exports.PancakeswapGetFeeFromPairName = function (pair) {
    var fee = 0;
    switch (pair) {
        case "CAKE-USDT":
        case "USDT-CAKE":
            fee = 0.25;// %  pair address : 
            break;
        case "BNB-BUSD":
        case "BUSD-BNB":
            fee = 0.05; //pair address : 
            break;
        case "CAKE-BUSD":
        case "BUSD-CAKE":
            fee = 0.25; //pair address : 
            break;
        case "CAKE-BNB"://CAKE-WBNB
        case "BNB-CAKE"://CAKE-WBNB
            fee = 0.25;//pair address : 
            break;
        case "USDT-BNB"://CAKE-WBNB
        case "BNB-USDT"://CAKE-WBNB
            fee = 0.05;//pair address : 
            break;
        default:
            break;
    }
    return fee;
};
exports.PancakeswapGetpIdFromPairName = function (pair) {
    var pid = 0;
    switch (pair) {
        case "CAKE-USDT":
        case "USDT-CAKE":
            pid = 3;//pair address : 0x7f51c8AaA6B0599aBd16674e2b17FEc7a9f674A1
            break;
        case "RACA-BUSD":
        case "BUSD-RACA":
            pid = -1; //pair address : 
            break;
        case "CAKE-BUSD":
        case "BUSD-CAKE":
            pid = -1; //pair address : 
            break;
        case "CAKE-BNB"://CAKE-WBNB
        case "BNB-CAKE"://CAKE-WBNB
            pid = -1;//pair address : 
            break;
        case "USDT-BNB"://
        case "BNB-USDT"://
            pid = -1;//pair address : 
            break;
        case "BNB-BUSD":
        case "BUSD-BNB":
            pid = -1;//pair address : 
            break;
        default:
            break;
    }
    return pid;
};
exports.PancakeswapGetAddressFromPairName = function (pair) {
    var addr1 = "";
    var addr2 = "";
    switch (pair) {
        case "CAKE-USDT":
            addr1 = Addresses.PancakeSwapCake;
            addr2 = Addresses.PancakeSwapUsdt;
            break;
        case "USDT-CAKE":
            addr2 = Addresses.PancakeSwapCake;
            addr1 = Addresses.PancakeSwapUsdt;
            break;
        case "RACA-BUSD":
            addr1 = Addresses.PancakeSwapRACA;
            addr2 = Addresses.PancakeSwapBUSD;
            break;
        case "BUSD-RACA":
            addr2 = Addresses.PancakeSwapRACA;
            addr1 = Addresses.PancakeSwapBUSD;
            break;
        case "CAKE-BUSD":
            addr1 = Addresses.PancakeSwapCake;
            addr2 = Addresses.PancakeSwapBUSD;
            break;
        case "BUSD-CAKE":
            addr2 = Addresses.PancakeSwapCake;
            addr1 = Addresses.PancakeSwapBUSD;
            break;
        case "CAKE-BNB"://CAKE-WBNB
            addr1 = Addresses.PancakeSwapCake;
            addr2 = Addresses.PancakeSwapWBNB;
            break;
        case "BNB-CAKE"://CAKE-WBNB
            addr2 = Addresses.PancakeSwapCake;
            addr1 = Addresses.PancakeSwapWBNB;
            break;
        default:
            break;
    }
    res = { addr1, addr2 };
    return res;
};
//========================= Sushiswap======================
exports.SushiswapGetpIdFromPairName = function (pair) {
    var pid = 0;
    switch (pair) {
        case "ETH-ILV":
        case "ILV-ETH":
            pid = 244;//pair address : 0x6a091a3406E0073C3CD6340122143009aDac0EDa
            break;
        case "ETH-SUSHI":
        case "SUSHI-ETH":
            pid = 12; //pair address : 0x795065dCc9f64b5614C407a6EFDC400DA6221FB0
            break;
        case "ETH-AAVE":
        case "AAVE-ETH":
            pid = 37; //pair address : 0xD75EA151a61d06868E31F8988D28DFE5E9df57B4
            break;
        case "ETH-USDT"://
        case "USDT-ETH"://
            pid = 0;//pair address : 0x06da0fd433C1A5d7a4faa01111c044910A184553
            break;
        case "ETH-USDC"://
        case "USDC-ETH"://
            pid = 1;//pair address : 0x397FF1542f962076d0BFE58eA045FfA2d347ACa0
            break;
        default:
            break;
    }
    return pid;
};
exports.SushiswapGetAddressFromPairName = function (pair) {
    var addr1 = "";
    var addr2 = "";
    switch (pair) {
        case "ETH-ILV":
            addr1 = Addresses.SushiSwapWETH;
            addr2 = Addresses.SushiSwapIlv;
            break;
        case "ILV-ETH":
            addr2 = Addresses.SushiSwapWETH;
            addr1 = Addresses.SushiSwapIlv;
            break;
        case "ETH-SUSHI":
            addr1 = Addresses.SushiSwapWETH;
            addr2 = Addresses.SushiSwapSushi;
            break;
        case "SUSHI-ETH":
            addr2 = Addresses.SushiSwapWETH;
            addr1 = Addresses.SushiSwapSushi;
            break;
        case "ETH-AAVE":
            addr1 = Addresses.SushiSwapWETH;
            addr2 = Addresses.SushiSwapAave;
            break;
        case "AAVE-ETH":
            addr2 = Addresses.SushiSwapWETH;
            addr1 = Addresses.SushiSwapAave;
            break;
        case "ETH-USDT"://
            addr1 = Addresses.SushiSwapWETH;
            addr2 = Addresses.SushiSwapUsdt;
            break;
        case "USDT-ETH"://
            addr2 = Addresses.SushiSwapWETH;
            addr1 = Addresses.SushiSwapUsdt;
            break;
        case "ETH-USDC"://
            addr1 = Addresses.SushiSwapWETH;
            addr2 = Addresses.SushiSwapUsdc;
            break;
        case "USDC-ETH"://
            addr2 = Addresses.SushiSwapWETH;
            addr1 = Addresses.SushiSwapUsdc;
            break;
        default:
            break;
    }
    res = { addr1, addr2 };
    return res;
};


//========================= SpookySwap======================
exports.SpookySwapGetpIdFromPairName = function (pair) {
    var pid = 0;
    switch (pair) {
        case "FTM-fUSDT":
        case "fUSDT-FTM":
            pid = 1;//pair address : 0x5965E53aa80a0bcF1CD6dbDd72e6A9b2AA047410
            break;
        case "FTM-USDC":
        case "USDC-FTM":
            pid = 2; //pair address : 0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c
            break;
        case "FTM-DAI":
        case "DAI-FTM":
            pid = 3; //pair address : 0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428
            break;
        case "FTM-DEUS"://
        case "DEUS-FTM"://
            pid = -1;//pair address : 0xaF918eF5b9f33231764A5557881E6D3e5277d456
            break;

        default:
            break;
    }
    return pid;
};
exports.SpookySwapGetAddressFromPairName = function (pair) {
    var addr1 = "";
    var addr2 = "";
    switch (pair) {
        case "FTM-fUSDT":
            addr1 = Addresses.SpookySwapWFTM;
            addr2 = Addresses.SpookySwapFUsdt;
            break;
        case "fUSDT-FTM":
            addr2 = Addresses.SpookySwapWFTM;
            addr1 = Addresses.SpookySwapFUsdt;
            break;
        case "FTM-USDC":
            addr1 = Addresses.SpookySwapWFTM;
            addr2 = Addresses.SpookySwapUsdc;
            break;
        case "USDC-FTM":
            addr2 = Addresses.SpookySwapWFTM;
            addr1 = Addresses.SpookySwapUsdc;
            break;
        case "FTM-DAI":
            addr1 = Addresses.SpookySwapWFTM;
            addr2 = Addresses.SpookySwapDAI;
            break;
        case "DAI-FTM":
            addr2 = Addresses.SpookySwapWFTM;
            addr1 = Addresses.SpookySwapDAI;
            break;
        case "FTM-DEUS"://
            addr1 = Addresses.SpookySwapWFTM;
            addr2 = Addresses.SpookySwapDeus;
            break;
        case "DEUS-FTM"://
            addr2 = Addresses.SpookySwapWFTM;
            addr1 = Addresses.SpookySwapDeus;
            break;
        default:
            break;
    }
    res = { addr1, addr2 };
    return res;
};

//========================= TradeJoe======================
exports.TradeJoeGetpIdFromPairName = function (pair) {
    var pid = 0;
    switch (pair) {
        case "AVAX-USDT":
        case "USDT-AVAX":
            pid = 28;//pair address : 0xeD8CBD9F0cE3C6986b22002F03c6475CEb7a6256
            break;
        case "AVAX-JOE":
        case "JOE-AVAX":
            pid = 0; //pair address : 0x454E67025631C065d3cFAD6d71E6892f74487a15
            break;
        case "BUSD-WAVAX":
        case "WAVAX-BUSD":
            pid = -1; //pair address : 
            break;
        case "AVAX-VTX"://
        case "VTX-AVAX"://
            pid = -1;//pair address : 0x9EF0C12b787F90F59cBBE0b611B82D30CAB92929
            break;
        case "AVAX-USDC"://
        case "USDC-AVAX"://
            pid = -1;//pair address : 0xf4003F4efBE8691B60249E6afbD307aBE7758adb
            break;
        default:
            break;
    }
    return pid;
};
exports.TradeJoeGetAddressFromPairName = function (pair) {
    var addr1 = "";
    var addr2 = "";
    switch (pair) {
        case "BUSD-WAVAX":
            addr1 = Addresses.TradeJoeBUSD;
            addr2 = Addresses.TradeJoeWAvax;
            break;
        case "WAVAX-BUSD":
            addr2 = Addresses.TradeJoeBUSD;
            addr1 = Addresses.TradeJoeWAvax;
            break;
        case "AVAX-VTX":
            addr1 = Addresses.TradeJoeAvax;
            addr2 = Addresses.TradeJoeVTX;
            break;
        case "VTX-AVAX":
            addr2 = Addresses.TradeJoeAvax;
            addr1 = Addresses.TradeJoeVTX;
            break;
        case "AVAX-JOE":
            addr1 = Addresses.TradeJoeAvax;
            addr2 = Addresses.TradeJoeJoe;
            break;
        case "JOE-AVAX":
            addr2 = Addresses.TradeJoeAvax;
            addr1 = Addresses.TradeJoeJoe;
            break;
        case "AVAX-USDT":
            addr1 = Addresses.TradeJoeAvax;
            addr2 = Addresses.TradeJoeUsdt;
            break;
        case "USDT-AVAX":
            addr2 = Addresses.TradeJoeAvax;
            addr1 = Addresses.TradeJoeUsdt;
            break;
        case "AVAX-USDC":
            addr1 = Addresses.TradeJoeAvax;
            addr2 = Addresses.TradeJoeUsdc;
            break;
        case "USDC-AVAX":
            addr2 = Addresses.TradeJoeAvax;
            addr1 = Addresses.TradeJoeUsdc;
            break;
        default:
            break;
    }
    res = { addr1, addr2 };
    return res;
};

//========================= SUN.io======================
exports.SUNIoGetpIdFromPairName = function (pair) {
    var pid = 0;
    switch (pair) {
        case "USDD-TRX":
        case "TRX-USDD":
            pid = -1;//pair address : 
            break;
        case "USDD-USDT":
        case "USDT-USDD":
            pid = -1; //pair address : 
            break;

        default:
            break;
    }
    return pid;
};
exports.SUNIoGetAddressFromPairName = function (pair) {
    var addr1 = "";
    var addr2 = "";
    switch (pair) {
        case "USDD-TRX":
            addr1 = Addresses.SUNIoUsdd;
            addr2 = Addresses.SUNIoTrx;
            break;
        case "TRX-USDD":
            addr2 = Addresses.SUNIoUsdd;
            addr1 = Addresses.SUNIoTrx;
            break;
        case "USDD-USDT":
            addr1 = Addresses.SUNIoUsdd;
            addr2 = Addresses.SUNIoUsdt;
            break;
        case "USDT-USDD":
            addr2 = Addresses.SUNIoUsdd;
            addr1 = Addresses.SUNIoUsdt;
            break;
        default:
            break;
    }
    res = { addr1, addr2 };
    return res;
};

//============================================================================
exports.writeLPInformation = function (path, res) {
    fs.writeFileSync(path, "");
    fs.appendFileSync(path, "liquidity:" + res["liquidity"] + "\n");
    fs.appendFileSync(path, "volume:" + res["volume"] + "\n");
    fs.appendFileSync(path, "liquidity_value:" + res["liquidity_value"] + "\n");

    fs.appendFileSync(path, "deposit_value:" + res["deposit_value"] + "\n");
    fs.appendFileSync(path, "reward_value:" + res["reward_value"] + "\n");
    fs.appendFileSync(path, "APR:" + res["APR"] + "\n");
    fs.appendFileSync(path, "LTV:" + res["LTV"] + "\n");
}
exports.readLPInformation = async (path) => {
    var result = {
        liquidity: "0", // pool liquidity
        volume: "0", // pool volume
        liquidity_value: "0", // my liquidity value
        APR: "0", // pool liquidity
        LTV: "0", // volume 
        deposit_value: "0", // my deposit value
        reward_value: "0" // my reward value
    }

    try {
        const fileStream = fs.createReadStream(path);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.

        for await (const line of rl) {
            // Each line in input.txt will be successively available here as `line`.
            try {
                var strlist = line.split(":");
                var val = strlist[1];
                if (val.trim() == "") val = 0;
                result[strlist[0]] = val;
            }
            catch (err) { }
        }
    }
    catch (err) {

    }
    //console.log(result);
    return result;

}
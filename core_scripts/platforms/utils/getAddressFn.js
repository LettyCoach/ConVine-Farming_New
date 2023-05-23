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
exports.PancakeswapGetpIdFromPairName = function (pair) {
    var pid = 0;
    switch (pair) {
        case "CAKE-USDT":
        case "USDT-CAKE":
            pid = 422;//pair address : 0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b
            break;
        case "RACA-BUSD":
        case "BUSD-RACA":
            pid = 507; //pair address : 0x8e744Ec2795c8B836689d1b4EBE1489204357dAC
            break;
        case "CAKE-BUSD":
        case "BUSD-CAKE":
            pid = 389; //pair address : 0x804678fa97d91B974ec2af3c843270886528a9E6
            break;
        case "CAKE-BNB"://CAKE-WBNB
        case "BNB-CAKE"://CAKE-WBNB
            pid = 251;//pair address : 0x0eD7e52944161450477ee417DE9Cd3a859b14fD0
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

exports.writeLPInformation = function (path, res) {
    try {
        fs.writeFileSync(path, "");
        fs.appendFileSync(path, "liquidity:" + res["liquidity"] + "\n");
        fs.appendFileSync(path, "volume:" + res["volume"] + "\n");
        fs.appendFileSync(path, "liquidity_value:" + res["liquidity_value"] + "\n");

        fs.appendFileSync(path, "deposit_value:" + res["deposit_value"] + "\n");
        fs.appendFileSync(path, "reward_value:" + res["reward_value"] + "\n");
        fs.appendFileSync(path, "APR:" + res["APR"] + "\n");
        fs.appendFileSync(path, "LTV:" + res["LTV"] + "\n");
    }
    catch (err) {

    }

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
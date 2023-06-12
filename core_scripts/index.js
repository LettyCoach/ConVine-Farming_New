// node 14.x系のためmoduleでimport

// ----- main function -----
// Wrapperを呼び出すためのメインの関数
const {
  call_testnetftmscan,
  call_PancakeSwap,
  call_UniSwap,
  call_TradeJoe,
  call_SushiSwap,
  call_Raydium,
  call_ORCA,
  call_SUNio,
  call_SpookySwap
} = require("./calling");

//const { testfile } = require("./test_assets/testfile");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// Call Platform Operate Function
exports.callPlatformMethods = async (request_data) => {
  var platform_name = request_data["platform"];
  // platformの取得
  let platform_response = {
    statusCode: 200,
    requestData: request_data,
    responseData: null
  }
  console.log(platform_name)
  switch (platform_name) {
    // testnetftmscan
    case "testnetftmscan":
      platform_response = await call_testnetftmscan(request_data);
      break;
    // PancakeSwap
    case "PancakeSwap":
      platform_response = await call_PancakeSwap(request_data);
      break;

    // UniSwap
    case "UniSwap":
      platform_response = await call_UniSwap(request_data);
      break;

    // TradeJoe
    case "TradeJoe":
      platform_response = await call_TradeJoe(request_data);
      break;

    // SushiSwap
    case "SushiSwap":
      platform_response = await call_SushiSwap(request_data);
      break;

    // Raydium
    case "Raydium":
      platform_response = await call_Raydium(request_data);
      break;

    // ORCA
    case "ORCA":
      platform_response = await call_ORCA(request_data);
      break;

    // SUN.io
    case "SUN.io":
      platform_response = await call_SUNio(request_data);
      break;

    // SpookySwap
    case "SpookySwap":
      platform_response = await call_SpookySwap(request_data);
      break;

    default:
      platform_response["statusCode"] = 400;
      new Error("Not Platform Select!")
      break;
  }
  try {
    delete platform_response["requestData"]["private_key"];
  }
  catch (err) { }

  return platform_response;
}
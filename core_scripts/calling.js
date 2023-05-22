// testnet.ftmscan
exports.call_testnetftmscan = async (req) => {
  console.log("calling testnet.ftmscan Methods");
  const { platform, pair, method, pool, farm } = req;
  const {
    statusGet,
    liquidityAdd,
    liquidityRemove,
    farmingDeposit,
    farmingHarvest,
    farmingWithdraw
  } = require("./platforms/testnetftmscan");
  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      res = await statusGet(req);
      method_data = res;
      break;
    case "liquidityAdd":
      // operate function here
      res = await liquidityAdd(req);
      method_data = res;
      break;

    case "farmingDeposit":
      // operate function here
      res = await farmingDeposit(req);
      method_data = res;
      break;

    case "farmingHarvest":
      // operate function here
      res = await farmingHarvest(req);
      method_data = res;
      break;

    case "farmingWithdraw":
      // operate function here
      res = await farmingWithdraw(req);
      method_data = res;
      break;

    case "liquidityRemove":
      // operate function here
      res = await liquidityRemove(req);
      method_data = res;
      break
  }
  return method_data;
};



// PancakeSwap
exports.call_PancakeSwap = async (req) => {
  console.log("calling PancakeSwap Methods");
  const { platform, pair, method, pool, farm } = req;
  const {
    statusGet,
    liquidityAdd,
    liquidityRemove,
    farmingDeposit,
    farmingHarvest,
    farmingWithdraw
  } = require("./platforms/PancakeSwap");
  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      res = await statusGet(req);
      method_data = res;
      break;
    case "liquidityAdd":
      // operate function here
      res = await liquidityAdd(req);
      method_data = res;
      break;

    case "farmingDeposit":
      // operate function here
      res = await farmingDeposit(req);
      method_data = res;
      break;

    case "farmingHarvest":
      // operate function here
      res = await farmingHarvest(req);
      method_data = res;
      break;

    case "farmingWithdraw":
      // operate function here
      res = await farmingWithdraw(req);
      method_data = res;
      break;

    case "liquidityRemove":
      // operate function here
      res = await liquidityRemove(req);
      method_data = res;
      break

    default:
      break;
  }
  return method_data;
};

// BiSwap
exports.call_BiSwap = async (req) => {
  console.log("calling BiSwap Methods");
  const { platform, pair, method, pool, farm } = req;
  const {
    statusGet,
    liquidityAdd,
    liquidityRemove,
    farmingDeposit,
    farmingHarvest,
    farmingWithdraw
  } = require("./platforms/Biswap");
  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      res = await statusGet(req);
      method_data = res;
      break;
    case "liquidityAdd":
      // operate function here
      res = await liquidityAdd(req);
      method_data = res;
      break;

    case "farmingDeposit":
      // operate function here
      res = await farmingDeposit(req);
      method_data = res;
      break;

    case "farmingHarvest":
      // operate function here
      res = await farmingHarvest(req);
      method_data = res;
      break;

    case "farmingWithdraw":
      // operate function here
      res = await farmingWithdraw(req);
      method_data = res;
      break;

    case "liquidityRemove":
      // operate function here
      res = await liquidityRemove(req);
      method_data = res;
      break

    default:
      break;
  }
  return method_data;
};
// Orca
exports.call_Orca = async (req) => {
  console.log("calling Orca Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // contol method here
      break;

    case "liquidityAdd":
      // contol method here
      break;

    case "farmingDeposit":
      // contol method here
      break;

    case "farmingHarvest":
      // contol method here
      break;

    case "farmingWithdraw":
      // contol method here
      break;

    case "liquidityRemove":
      // contol method here
      break;

    default:
      break;
  }
  return method_data;
};

// Raydium
exports.call_Raydium = async (req) => {
  console.log("calling Raydium Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};

// SushiSwap
exports.call_SushiSwap = async (req) => {
  console.log("calling SushiSwap Methods");
  const { platform, pair, method, pool, farm } = req;
  const {
    statusGet,
    liquidityAdd,
    liquidityRemove,
    farmingDeposit,
    farmingHarvest,
    farmingWithdraw
  } = require("./platforms/SushiSwap");
  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      res = await statusGet(req);
      method_data = res;
      break;
    case "liquidityAdd":
      // operate function here
      res = await liquidityAdd(req);
      method_data = res;
      break;

    case "farmingDeposit":
      // operate function here
      res = await farmingDeposit(req);
      method_data = res;
      break;

    case "farmingHarvest":
      // operate function here
      res = await farmingHarvest(req);
      method_data = res;
      break;

    case "farmingWithdraw":
      // operate function here
      res = await farmingWithdraw(req);
      method_data = res;
      break;

    case "liquidityRemove":
      // operate function here
      res = await liquidityRemove(req);
      method_data = res;
      break

    default:
      break;
  }
  return method_data;
};

// Sun.io
exports.call_Sunio = async (req) => {
  console.log("calling Sun.io Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};

// TradeJoe
exports.call_TradeJoe = async (req) => {
  console.log("calling TradeJoe Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};

// Pangolin
exports.call_Pangolin = async (req) => {
  console.log("calling Pangolin Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};

// VectorFinance
exports.call_VectorFinance = async (req) => {
  console.log("calling VectorFinance Methods");
  const { platform, pair, method, pool, farm } = req;

  const {
    statusGet,
    liquidityAdd,
    liquidityRemove,
    farmingDeposit,
    farmingHarvest,
    farmingWithdraw
  } = require("./platforms/VectorFinance");
  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      res = await statusGet(req);
      method_data = res;
      break;
    case "liquidityAdd":
      // operate function here
      res = await liquidityAdd(req);
      method_data = res;
      break;

    case "farmingDeposit":
      // operate function here
      res = await farmingDeposit(req);
      method_data = res;
      break;

    case "farmingHarvest":
      // operate function here
      res = await farmingHarvest(req);
      method_data = res;
      break;

    case "farmingWithdraw":
      // operate function here
      res = await farmingWithdraw(req);
      method_data = res;
      break;

    case "liquidityRemove":
      // operate function here
      res = await liquidityRemove(req);
      method_data = res;
      break

    default:
      break;
  }
  return method_data;
};

// SpookySwap
exports.call_SpookySwap = async (req) => {
  console.log("calling SpookySwap Methods");
  const { platform, pair, method, pool, farm } = req;

  const {
    statusGet,
    liquidityAdd,
    liquidityRemove,
    farmingDeposit,
    farmingHarvest,
    farmingWithdraw
  } = require("./platforms/SpookySwap");
  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      res = await statusGet(req);
      method_data = res;
      break;
    case "liquidityAdd":
      // operate function here
      res = await liquidityAdd(req);
      method_data = res;
      break;

    case "farmingDeposit":
      // operate function here
      res = await farmingDeposit(req);
      method_data = res;
      break;

    case "farmingHarvest":
      // operate function here
      res = await farmingHarvest(req);
      method_data = res;
      break;

    case "farmingWithdraw":
      // operate function here
      res = await farmingWithdraw(req);
      method_data = res;
      break;

    case "liquidityRemove":
      // operate function here
      res = await liquidityRemove(req);
      method_data = res;
      break

    default:
      break;
  }
  return method_data;
};

// Beethonven
exports.call_Beethonven = async (req) => {
  console.log("calling Beethonven Methods");
  const { platform, pair, method, pool, farm } = req;

  const {
    statusGet,
    liquidityAdd,
    liquidityRemove,
    farmingDeposit,
    farmingHarvest,
    farmingWithdraw
  } = require("./platforms/Beethonven");
  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      res = await statusGet(req);
      method_data = res;
      break;
    case "liquidityAdd":
      // operate function here
      res = await liquidityAdd(req);
      method_data = res;
      break;

    case "farmingDeposit":
      // operate function here
      res = await farmingDeposit(req);
      method_data = res;
      break;

    case "farmingHarvest":
      // operate function here
      res = await farmingHarvest(req);
      method_data = res;
      break;

    case "farmingWithdraw":
      // operate function here
      res = await farmingWithdraw(req);
      method_data = res;
      break;

    case "liquidityRemove":
      // operate function here
      res = await liquidityRemove(req);
      method_data = res;
      break

    default:
      break;
  }
  return method_data;
};

// VVS Finance
exports.call_VVSFinance = async (req) => {
  console.log("calling VVS Finance Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};

// Single Finance
exports.call_SingleFinance = async (req) => {
  console.log("calling Single Finance Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};

// Wingriders
exports.call_Wingriders = async (req) => {
  console.log("calling Wingriders Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};

// MinSwap
exports.call_MinSwap = async (req) => {
  console.log("calling MinSwap Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};

// Pact
exports.call_Pact = async (req) => {
  console.log("calling Pact Methods");
  const { platform, pair, method, pool, farm } = req;

  // initial data
  let method_data = {
    statusCode: null,
    requestData: req,
    responseData: null
  }

  switch (method) {
    case "statusGet":
      // operate function here

      // return
      break;

    case "liquidityAdd":
      // operate function here

      // return
      break;

    case "farmingDeposit":
      // operate function here

      // return
      break;

    case "farmingHarvest":
      // operate function here

      // return
      break;

    case "farmingWithdraw":
      // operate function here

      // return
      break;

    case "liquidityRemove":
      // operate function here

      // return
      break;

    default:
      break;
  }
  return method_data;
};
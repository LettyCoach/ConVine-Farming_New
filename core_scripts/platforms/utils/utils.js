exports.getMinTick = function (tickSpacing) { return Math.ceil(-887272 / tickSpacing) * tickSpacing; }
exports.getMaxTick = function (tickSpacing) { return Math.floor(887272 / tickSpacing) * tickSpacing; }

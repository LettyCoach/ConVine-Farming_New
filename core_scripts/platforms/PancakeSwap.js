const _0x305bdb = _0xef52; (function (_0x1994f6, _0x5c189d) { const _0x3c1bb7 = _0xef52, _0x1f2a45 = _0x1994f6(); while (!![]) { try { const _0x17c4d0 = -parseInt(_0x3c1bb7(0x174)) / 0x1 * (-parseInt(_0x3c1bb7(0x1b2)) / 0x2) + parseInt(_0x3c1bb7(0x1b3)) / 0x3 * (parseInt(_0x3c1bb7(0x19c)) / 0x4) + -parseInt(_0x3c1bb7(0x19d)) / 0x5 + -parseInt(_0x3c1bb7(0x1af)) / 0x6 + -parseInt(_0x3c1bb7(0x1ab)) / 0x7 + parseInt(_0x3c1bb7(0x167)) / 0x8 + parseInt(_0x3c1bb7(0x16c)) / 0x9; if (_0x17c4d0 === _0x5c189d) break; else _0x1f2a45['push'](_0x1f2a45['shift']()); } catch (_0x313ea5) { _0x1f2a45['push'](_0x1f2a45['shift']()); } } }(_0x4239, 0x95c90)); const ethers = require('ethers'); var fs = require('fs'); const Addresses = require(_0x305bdb(0x17b)); var data = fs[_0x305bdb(0x173)](__dirname + '/abi/PcnVault.json', 'utf-8'); function _0xef52(_0x56049b, _0x4b64f8) { const _0x4239ea = _0x4239(); return _0xef52 = function (_0xef522e, _0x89b31d) { _0xef522e = _0xef522e - 0x15f; let _0xffce0f = _0x4239ea[_0xef522e]; return _0xffce0f; }, _0xef52(_0x56049b, _0x4b64f8); } const pcnVaultabi = JSON[_0x305bdb(0x19a)](data)['abi']; data = fs[_0x305bdb(0x173)](__dirname + '/abi/NeondexRouter.json', 'utf-8'); const Routerabi = JSON[_0x305bdb(0x19a)](data)['abi']; data = fs[_0x305bdb(0x173)](__dirname + _0x305bdb(0x1ad), _0x305bdb(0x16f)); const ExchangeFactoryabi = JSON[_0x305bdb(0x19a)](data)[_0x305bdb(0x1b0)]; function _0x4239() { const _0x3cd5a6 = ['39dokkvy', 'getBalance', ',\x20price2=', 'liquidity=', 'getPair', 'utils', 'approve\x20token1', 'farm', 'harvest_value', 'farmingDeposit', '6689872KqWlgC', 'calling\x20liquidityAdd', 'function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)', '/abi/NeondexPair.json', 'formatEther', '3889053CxpsmF', 'toNumber', 'liquidity', 'utf-8', 'LPTokens', 'tokenLp\x20token', 'price1=', 'readFileSync', '5mLzeTn', 'pool', 'deposit_value', 'providers', 'parseUnits', 'log', 'deposit', '../../core_scripts/config/addresses.json', 'owner\x20address', 'wait', 'lpToken', 'calling\x20farmingDeposit', 'PancakeSwapcakeVault', 'calling\x20farmingHarvest', 'calling\x20statusGet', 'approve', 'reward_value', 'calling\x20liquidityRemove', './utils/getAddressFn', 'harvest', 'Add\x20', 'statusCode', 'decimals', 'farmingWithdraw', 'rewardDebt', 'approve\x20token2', 'Contract', 'value', 'pair', 'removeLiquidity', 'address', 'JsonRpcProvider', 'reason', 'PancakeSwapUsdt', 'pid:', 'LTV', 'PancakeSwapmasterchef', 'liquidityRemove', 'parse', 'balanceOf', '105660TbpBHe', '1539530oUDdBP', 'liquidity_value', 'add', 'volume', 'statusGet', 'APR', 'PancakeSwapExchangeFactory', 'error_reason', 'getAmountsIn', 'balance0ETH', 'result', 'Wallet', '/abi/BEP20Token.json', 'addLiquidity', '5960843lsGKHy', 'responseData', '/abi/NeondexFactory.json', 'withdraw', '4009116dkuONU', 'abi', 'liquidityAdd', '331766gnGJBO']; _0x4239 = function () { return _0x3cd5a6; }; return _0x4239(); } data = fs[_0x305bdb(0x173)](__dirname + _0x305bdb(0x1a9), _0x305bdb(0x16f)); const busdabi = JSON[_0x305bdb(0x19a)](data)[_0x305bdb(0x1b0)]; data = fs[_0x305bdb(0x173)](__dirname + '/abi/MasterChef.json', _0x305bdb(0x16f)); const MasterChefabi = JSON[_0x305bdb(0x19a)](data)[_0x305bdb(0x1b0)]; data = fs['readFileSync'](__dirname + _0x305bdb(0x16a), _0x305bdb(0x16f)); const LPPairabi = JSON[_0x305bdb(0x19a)](data)['abi'], { readLPInformation, writeLPInformation, PancakeswapGetpIdFromPairName, PancakeswapGetAddressFromPairName } = require(_0x305bdb(0x186)), ExchangeFactoryAddr = Addresses[_0x305bdb(0x1a3)], ExchangeRouterAddr = Addresses['PancakeSwapExchangeRouter'], cakeVaultAddr = Addresses[_0x305bdb(0x180)], masterchefAddr = Addresses[_0x305bdb(0x198)], UsdtAddr = Addresses[_0x305bdb(0x195)]; async function findPid(_0x550bc8, _0x2f624b, _0x2feae2) { const _0x32a37e = _0x305bdb; console[_0x32a37e(0x179)](_0x32a37e(0x171), _0x2feae2); var _0x1e25be = 0x0; try { while (0x1) { _0x1e25be++; const _0xfb6f83 = await _0x2f624b['poolInfo'](String(_0x1e25be)); _0xfb6f83[_0x32a37e(0x17e)] == _0x2feae2 && console[_0x32a37e(0x179)](_0x32a37e(0x196) + String(_0x1e25be)); } } catch (_0x239862) { } } exports[_0x305bdb(0x1a1)] = async _0x23e92b => { const _0x279ccd = _0x305bdb; console[_0x279ccd(0x179)](_0x279ccd(0x182)); const { platform: _0x18d0bf, pair: _0x47af08, method: _0x5b8bc2, pool: _0x44dcd5, farm: _0x439edf, address1: _0x330796, address2: _0x4c7173, private_key: _0x38e4ae, rpc_url: _0x2fb045 } = _0x23e92b, { addr1: _0x3ccb16, addr2: _0x332615 } = PancakeswapGetAddressFromPairName(_0x47af08), _0x4c3b6c = new ethers[(_0x279ccd(0x177))][(_0x279ccd(0x193))](_0x2fb045), _0x8ed4d = new ethers[(_0x279ccd(0x1a8))](_0x38e4ae, _0x4c3b6c); var _0x524de7 = _0x3ccb16, _0x1e2a91 = _0x332615; if (_0x524de7 == '') _0x524de7 = _0x330796; if (_0x1e2a91 == '') _0x1e2a91 = _0x4c7173; let _0x2d4c2b = { 'statusCode': 0xc8, 'requestData': _0x23e92b, 'responseData': null }; try { console[_0x279ccd(0x179)]('owner\x20address', _0x8ed4d[_0x279ccd(0x192)]); const _0x103374 = await _0x4c3b6c[_0x279ccd(0x1b4)](_0x8ed4d['address']), _0x12ff3b = ethers[_0x279ccd(0x162)]['formatUnits'](_0x103374, 0x12); console[_0x279ccd(0x179)](_0x279ccd(0x1a6), _0x12ff3b); const _0x1b8ee2 = new ethers[(_0x279ccd(0x18e))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x8ed4d), _0x397579 = new ethers['Contract'](ExchangeRouterAddr, Routerabi, _0x8ed4d), _0x4ff9c9 = new ethers['Contract'](masterchefAddr, MasterChefabi, _0x8ed4d); var _0x9894b0 = await _0x1b8ee2[_0x279ccd(0x161)](_0x524de7, _0x1e2a91); const _0x5b0fe6 = new ethers[(_0x279ccd(0x18e))](_0x9894b0, LPPairabi, _0x8ed4d); var _0x34d6da = _0x18d0bf + '_' + _0x47af08; let _0xb4bdf4 = await readLPInformation(_0x34d6da); _0x2d4c2b[_0x279ccd(0x1ac)] = { 'wallet_balance': _0x12ff3b, 'pairAddr': _0x9894b0, 'address1': _0x524de7, 'address2': _0x1e2a91, 'pool': { 'pair': _0x23e92b[_0x279ccd(0x190)], 'liquidity': '', 'volume': '', 'liquidity_value': '', 'LPTokens': '' }, 'farm': { 'pair': _0x23e92b[_0x279ccd(0x190)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; let _0x24f865; if (_0x44dcd5 == '1') try { const _0x4eb20d = await _0x5b0fe6[_0x279ccd(0x18a)](), _0x3d31bd = await _0x5b0fe6['balanceOf'](_0x8ed4d[_0x279ccd(0x192)]), _0x3427a9 = new ethers[(_0x279ccd(0x18e))](_0x524de7, busdabi, _0x8ed4d), _0x1ca351 = new ethers[(_0x279ccd(0x18e))](_0x1e2a91, busdabi, _0x8ed4d), _0x4ea214 = await _0x3427a9[_0x279ccd(0x19b)](_0x9894b0), _0x7e2f04 = await _0x1ca351[_0x279ccd(0x19b)](_0x9894b0), _0x40d930 = await _0x3427a9[_0x279ccd(0x19b)](_0x8ed4d['address']), _0x4b25cd = await _0x1ca351['balanceOf'](_0x8ed4d[_0x279ccd(0x192)]); var _0x105d45 = parseFloat(ethers[_0x279ccd(0x162)][_0x279ccd(0x16b)](String(_0x4ea214))), _0x306f2a = parseFloat(ethers['utils'][_0x279ccd(0x16b)](String(_0x7e2f04))), _0x1eeee0 = parseFloat(ethers['utils']['formatEther'](String(_0x40d930))), _0x5bb25f = parseFloat(ethers[_0x279ccd(0x162)][_0x279ccd(0x16b)](String(_0x4b25cd))), _0x227698 = 0x1, _0x35226c = 0x1, _0x4a61b3 = 0x0, _0x2c60cf = 0x0; try { if (UsdtAddr != _0x524de7) { _0x227698 = await _0x397579['getAmountsIn'](ethers[_0x279ccd(0x162)]['parseUnits'](String('1'), _0x4eb20d), [UsdtAddr, _0x524de7]); var _0x432744 = ethers[_0x279ccd(0x162)][_0x279ccd(0x16b)](String(_0x227698[0x0])); _0x227698 = parseFloat(_0x432744), console[_0x279ccd(0x179)](_0x227698), _0x4a61b3 = 0x1; } } catch (_0x4d5e68) { _0x4a61b3 = 0x0; } try { if (UsdtAddr != _0x1e2a91) { _0x35226c = await _0x397579[_0x279ccd(0x1a5)](ethers[_0x279ccd(0x162)]['parseUnits'](String('1'), _0x4eb20d), [UsdtAddr, _0x1e2a91]), console[_0x279ccd(0x179)](ethers[_0x279ccd(0x162)][_0x279ccd(0x16b)](String(_0x35226c[0x0]))); var _0x432744 = ethers[_0x279ccd(0x162)][_0x279ccd(0x16b)](String(_0x35226c[0x0])); _0x35226c = parseFloat(_0x432744), _0x2c60cf = 0x1; } } catch (_0x2607ed) { _0x2c60cf = 0x0; } _0x4a61b3 == 0x0 && (_0x227698 = 0x0, _0x35226c = _0x35226c * 0x2); _0x2c60cf == 0x0 && (_0x35226c = 0x0, _0x227698 = _0x227698 * 0x2); console[_0x279ccd(0x179)](_0x279ccd(0x172) + String(_0x227698) + _0x279ccd(0x15f) + String(_0x35226c)); var _0xc412eb = _0x105d45 * _0x227698 + _0x306f2a * _0x35226c, _0x1d5609 = _0x1eeee0 * _0x227698 + _0x5bb25f * _0x35226c; console['log'](_0x279ccd(0x160) + String(_0xc412eb) + ',liquidity_value\x20=' + String(_0x1d5609)), _0x2d4c2b[_0x279ccd(0x1ac)][_0x279ccd(0x175)][_0x279ccd(0x16e)] = _0xc412eb, _0x2d4c2b['responseData'][_0x279ccd(0x175)][_0x279ccd(0x1a0)] = '', _0x2d4c2b[_0x279ccd(0x1ac)][_0x279ccd(0x175)][_0x279ccd(0x19e)] = _0x1d5609, _0x2d4c2b[_0x279ccd(0x1ac)]['pool'][_0x279ccd(0x170)] = ethers[_0x279ccd(0x162)][_0x279ccd(0x16b)](String(_0x3d31bd));; _0xb4bdf4['liquidity'] = _0x2d4c2b[_0x279ccd(0x1ac)]['pool'][_0x279ccd(0x16e)], _0xb4bdf4[_0x279ccd(0x1a0)] = _0x2d4c2b['responseData'][_0x279ccd(0x175)]['volume'], _0xb4bdf4[_0x279ccd(0x19e)] = _0x2d4c2b[_0x279ccd(0x1ac)][_0x279ccd(0x175)][_0x279ccd(0x19e)]; } catch (_0x2bae31) { console['log'](_0x2bae31); } if (_0x439edf == '1') try { var _0x455912 = PancakeswapGetpIdFromPairName(_0x47af08); console[_0x279ccd(0x179)](_0x279ccd(0x196) + String(_0x455912)); if (_0x455912 > 0x0) { const _0x48bbf9 = await _0x4ff9c9['userInfo'](_0x455912, _0x8ed4d[_0x279ccd(0x192)]); _0x2d4c2b[_0x279ccd(0x1ac)][_0x279ccd(0x164)][_0x279ccd(0x176)] = ethers[_0x279ccd(0x162)][_0x279ccd(0x16b)](String(_0x48bbf9['amount'])), _0x2d4c2b[_0x279ccd(0x1ac)][_0x279ccd(0x164)]['reward_value'] = ethers[_0x279ccd(0x162)][_0x279ccd(0x16b)](String(_0x48bbf9[_0x279ccd(0x18c)])); } _0x2d4c2b[_0x279ccd(0x1ac)][_0x279ccd(0x164)][_0x279ccd(0x1a2)] = '', _0x2d4c2b[_0x279ccd(0x1ac)]['farm'][_0x279ccd(0x197)] = '', _0xb4bdf4['deposit_value'] = _0x2d4c2b[_0x279ccd(0x1ac)][_0x279ccd(0x164)]['deposit_value'], _0xb4bdf4['reward_value'] = _0x2d4c2b[_0x279ccd(0x1ac)][_0x279ccd(0x164)]['reward_value'], _0xb4bdf4[_0x279ccd(0x1a2)] = _0x2d4c2b['responseData'][_0x279ccd(0x164)][_0x279ccd(0x1a2)], _0xb4bdf4[_0x279ccd(0x197)] = _0x2d4c2b['responseData'][_0x279ccd(0x164)][_0x279ccd(0x197)]; } catch (_0x208773) { console[_0x279ccd(0x179)](_0x208773); } writeLPInformation(_0x34d6da, _0xb4bdf4); } catch (_0x286a06) { _0x2d4c2b['statusCode'] = 0x190, console['log'](_0x286a06); } return _0x2d4c2b; }, exports[_0x305bdb(0x1b1)] = async _0x47a52a => { const _0x5c3117 = _0x305bdb; console['log'](_0x5c3117(0x168)); const { platform: _0x57bf77, pair: _0x4820bb, method: _0x42886f, pool: _0x47b3e9, farm: _0x46aa85, address1: _0x41cb5b, address2: _0x261292, amount1: _0x2a436c, amount2: _0x51def2, private_key: _0x161e64, rpc_url: _0x2cee29 } = _0x47a52a, { addr1: _0x3cb036, addr2: _0x5383c7 } = PancakeswapGetAddressFromPairName(_0x4820bb), _0x59729a = new ethers['providers'][(_0x5c3117(0x193))](_0x2cee29), _0x553c62 = new ethers[(_0x5c3117(0x1a8))](_0x161e64, _0x59729a); var _0x13f143 = _0x3cb036, _0x524e70 = _0x5383c7; if (_0x13f143 == '') _0x13f143 = _0x41cb5b; if (_0x524e70 == '') _0x524e70 = _0x261292; console[_0x5c3117(0x179)]('owner\x20address', _0x553c62[_0x5c3117(0x192)]); let _0x33579d = { 'statusCode': 0xc8, 'requestData': _0x47a52a, 'responseData': null }; var _0x200c27 = _0x57bf77 + '_' + _0x4820bb; let _0x25f3ab = await readLPInformation(_0x200c27); _0x33579d[_0x5c3117(0x1ac)] = { 'address1': _0x13f143, 'address2': _0x524e70, 'pool': { 'pair': _0x47a52a[_0x5c3117(0x190)], 'liquidity': _0x25f3ab[_0x5c3117(0x16e)], 'volume': _0x25f3ab[_0x5c3117(0x1a0)], 'liquidity_value': _0x25f3ab['liquidity_value'] }, 'farm': null }; try { const _0x40727b = new ethers[(_0x5c3117(0x18e))](ExchangeRouterAddr, Routerabi, _0x553c62), _0x3ee408 = new ethers[(_0x5c3117(0x18e))](_0x13f143, [_0x5c3117(0x169)], _0x553c62); tx = await _0x3ee408[_0x5c3117(0x183)](_0x40727b[_0x5c3117(0x192)], ethers[_0x5c3117(0x162)][_0x5c3117(0x178)](String(parseFloat(_0x2a436c) * 0x2), 0x12)), await tx[_0x5c3117(0x17d)](), console[_0x5c3117(0x179)](_0x5c3117(0x163)); const _0x2366f0 = new ethers[(_0x5c3117(0x18e))](_0x524e70, ['function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)'], _0x553c62); tx = await _0x2366f0['approve'](_0x40727b[_0x5c3117(0x192)], ethers[_0x5c3117(0x162)][_0x5c3117(0x178)](String(parseFloat(_0x51def2) * 0x2), 0x12)), await tx[_0x5c3117(0x17d)](), console['log'](_0x5c3117(0x18d)); var _0x2cae68 = 0x12, _0x2fbe82 = 0x12; if (_0x13f143 == UsdtAddr) _0x2cae68 = 0x6; if (_0x524e70 == UsdtAddr) _0x2fbe82 = 0x6; tx = await _0x40727b[_0x5c3117(0x1aa)](_0x13f143, _0x524e70, ethers[_0x5c3117(0x162)][_0x5c3117(0x178)](String(_0x2a436c), _0x2cae68), ethers[_0x5c3117(0x162)][_0x5c3117(0x178)](String(_0x51def2), _0x2fbe82), 0x0, 0x0, _0x553c62['address'], '111111111111111111111'), await tx['wait'](), _0x33579d['responseData'][_0x5c3117(0x1a7)] = tx; } catch (_0x10cbdd) { _0x33579d['statusCode'] = 0x190, _0x33579d['error_reason'] = _0x10cbdd[_0x5c3117(0x194)]; } return _0x33579d; }, exports[_0x305bdb(0x199)] = async _0x3db6eb => { const _0x5e66ab = _0x305bdb; console[_0x5e66ab(0x179)](_0x5e66ab(0x185)); const { platform: _0x92c225, pair: _0xbf9220, method: _0x16e0bf, pool: _0x47ec8e, farm: _0xcccd23, address1: _0x537f93, address2: _0x4168c7, liquidity: _0x2d7684, private_key: _0x528a64, rpc_url: _0x4fed70 } = _0x3db6eb, { addr1: _0x10f58e, addr2: _0xb14b0c } = PancakeswapGetAddressFromPairName(_0xbf9220), _0x319b55 = new ethers[(_0x5e66ab(0x177))][(_0x5e66ab(0x193))](_0x4fed70), _0x216f23 = new ethers[(_0x5e66ab(0x1a8))](_0x528a64, _0x319b55); var _0x64e26a = _0x10f58e, _0x52a869 = _0xb14b0c; if (_0x64e26a == '') _0x64e26a = _0x537f93; if (_0x52a869 == '') _0x52a869 = _0x4168c7; console[_0x5e66ab(0x179)](_0x5e66ab(0x17c), _0x216f23[_0x5e66ab(0x192)]); let _0x30ea4b = { 'statusCode': 0xc8, 'requestData': _0x3db6eb, 'responseData': null }; var _0x2599ed = _0x92c225 + '_' + _0xbf9220; let _0x4c3e78 = await readLPInformation(_0x2599ed); _0x30ea4b[_0x5e66ab(0x1ac)] = { 'address1': _0x64e26a, 'address2': _0x52a869, 'pool': { 'pair': _0x3db6eb[_0x5e66ab(0x190)], 'liquidity': _0x4c3e78['liquidity'], 'volume': _0x4c3e78[_0x5e66ab(0x1a0)], 'liquidity_value': _0x4c3e78[_0x5e66ab(0x19e)] }, 'farm': null }; try { const _0x281550 = new ethers[(_0x5e66ab(0x18e))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x216f23), _0x226a44 = new ethers[(_0x5e66ab(0x18e))](ExchangeRouterAddr, Routerabi, _0x216f23); var _0x3c306a = await _0x281550[_0x5e66ab(0x161)](_0x64e26a, _0x52a869); const _0x2afe30 = new ethers[(_0x5e66ab(0x18e))](_0x3c306a, ['function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)'], _0x216f23); tx = await _0x2afe30['approve'](_0x226a44['address'], ethers['utils']['parseUnits'](String(_0x2d7684), 0x12)), await tx['wait'](), tx = await _0x226a44[_0x5e66ab(0x191)](_0x64e26a, _0x52a869, ethers[_0x5e66ab(0x162)][_0x5e66ab(0x178)](String(_0x2d7684), 0x12), 0x0, 0x0, _0x216f23[_0x5e66ab(0x192)], '111111111111111111111'), await tx[_0x5e66ab(0x17d)](), _0x30ea4b[_0x5e66ab(0x1ac)][_0x5e66ab(0x1a7)] = tx; } catch (_0x423f65) { _0x30ea4b['statusCode'] = 0x190, _0x30ea4b[_0x5e66ab(0x1a4)] = _0x423f65[_0x5e66ab(0x194)]; } return _0x30ea4b; }, exports[_0x305bdb(0x166)] = async _0x41b856 => { const _0x32aaa6 = _0x305bdb; console[_0x32aaa6(0x179)](_0x32aaa6(0x17f)); const { platform: _0x26208c, pair: _0xe99205, method: _0x56ebce, pool: _0xd6de11, farm: _0x4029b3, address1: _0x2d0758, address2: _0x22d003, liquidity: _0x1ae6d2, private_key: _0x3006be, rpc_url: _0x281989 } = _0x41b856, { addr1: _0x901de, addr2: _0x3aaf11 } = PancakeswapGetAddressFromPairName(_0xe99205), _0x183487 = new ethers[(_0x32aaa6(0x177))][(_0x32aaa6(0x193))](_0x281989), _0x2e28fc = new ethers[(_0x32aaa6(0x1a8))](_0x3006be, _0x183487); var _0x33d796 = _0x901de, _0x408e78 = _0x3aaf11; if (_0x33d796 == '') _0x33d796 = _0x2d0758; if (_0x408e78 == '') _0x408e78 = _0x22d003; console[_0x32aaa6(0x179)]('owner\x20address', _0x2e28fc[_0x32aaa6(0x192)]); let _0x49e02c = { 'statusCode': 0xc8, 'requestData': _0x41b856, 'responseData': null }; var _0x2be1e6 = _0x26208c + '_' + _0xe99205; let _0x213032 = await readLPInformation(_0x2be1e6); _0x49e02c[_0x32aaa6(0x1ac)] = { 'address1': _0x33d796, 'address2': _0x408e78, 'pool': null, 'farm': { 'pair': _0x41b856[_0x32aaa6(0x190)], 'APR': _0x213032[_0x32aaa6(0x1a2)], 'LTV': _0x213032[_0x32aaa6(0x197)], 'deposit_value': _0x213032[_0x32aaa6(0x176)], 'reward_value': _0x213032[_0x32aaa6(0x184)] } }; try { const _0x1dcaa5 = new ethers['Contract'](ExchangeFactoryAddr, ExchangeFactoryabi, _0x2e28fc), _0x22c809 = new ethers[(_0x32aaa6(0x18e))](masterchefAddr, MasterChefabi, _0x2e28fc); var _0xf4c99c = await _0x1dcaa5[_0x32aaa6(0x161)](_0x33d796, _0x408e78); console[_0x32aaa6(0x179)](_0x32aaa6(0x171), _0xf4c99c); var _0x1c6b7d = PancakeswapGetpIdFromPairName(_0xe99205); console[_0x32aaa6(0x179)](_0x32aaa6(0x196) + String(_0x1c6b7d)); _0x1c6b7d < 0x0 && (console['log']('Add\x20', _0xf4c99c), tx = await _0x22c809[_0x32aaa6(0x19f)](0x64, _0xf4c99c, ![]), await tx['wait'](), _0x1c6b7d = 0x1); const _0x288fd6 = new ethers['Contract'](_0xf4c99c, [_0x32aaa6(0x169)], _0x2e28fc); tx = await _0x288fd6[_0x32aaa6(0x183)](_0x22c809[_0x32aaa6(0x192)], ethers['utils'][_0x32aaa6(0x178)](String(_0x1ae6d2), 0x12)), await tx['wait'](), tx = await _0x22c809[_0x32aaa6(0x17a)](String(_0x1c6b7d), ethers[_0x32aaa6(0x162)][_0x32aaa6(0x178)](String(_0x1ae6d2), 0x12)), await tx[_0x32aaa6(0x17d)](), _0x49e02c['responseData']['result'] = tx, _0x213032[_0x32aaa6(0x176)] = parseFloat(_0x213032['deposit_value']) + parseFloat(_0x1ae6d2), _0x49e02c[_0x32aaa6(0x1ac)][_0x32aaa6(0x164)]['deposit_value'] = _0x213032['deposit_value'], writeLPInformation(_0x2be1e6, _0x213032); } catch (_0x459488) { _0x49e02c[_0x32aaa6(0x189)] = 0x190, _0x49e02c['error_reason'] = _0x459488[_0x32aaa6(0x194)]; } return _0x49e02c; }, exports['farmingHarvest'] = async _0x1cbb82 => { const _0x146c17 = _0x305bdb; console[_0x146c17(0x179)](_0x146c17(0x181)); const { platform: _0xce7d1b, pair: _0x5b3e47, method: _0x593ac8, pool: _0x774894, farm: _0x9bddef, address1: _0x5a78ad, address2: _0x50f5f7, private_key: _0x60263, rpc_url: _0x370f02 } = _0x1cbb82, { addr1: _0x5b6306, addr2: _0x46baa3 } = PancakeswapGetAddressFromPairName(_0x5b3e47), _0x3f9511 = new ethers[(_0x146c17(0x177))][(_0x146c17(0x193))](_0x370f02), _0x3553ba = new ethers[(_0x146c17(0x1a8))](_0x60263, _0x3f9511); console[_0x146c17(0x179)]('owner\x20address', _0x3553ba[_0x146c17(0x192)]); let _0x1de096 = { 'statusCode': 0xc8, 'requestData': _0x1cbb82, 'responseData': null }; var _0x1cbdcf = _0xce7d1b + '_' + _0x5b3e47; let _0x9e7623 = await readLPInformation(_0x1cbdcf); _0x1de096['responseData'] = { 'pool': null, 'farm': { 'pair': _0x1cbb82[_0x146c17(0x190)], 'APR': _0x9e7623[_0x146c17(0x1a2)], 'LTV': _0x9e7623[_0x146c17(0x197)], 'deposit_value': _0x9e7623[_0x146c17(0x176)], 'reward_value': _0x9e7623[_0x146c17(0x184)] } }; try { pcnVault = new ethers['Contract'](cakeVaultAddr, pcnVaultabi, _0x3553ba), tx = await pcnVault[_0x146c17(0x187)](), await tx['wait'](), _0x1de096[_0x146c17(0x1ac)][_0x146c17(0x1a7)] = tx, _0x1de096['responseData'][_0x146c17(0x165)] = tx[_0x146c17(0x18f)][_0x146c17(0x16d)](); } catch (_0x414d6e) { _0x1de096[_0x146c17(0x189)] = 0x190, _0x1de096['error_reason'] = _0x414d6e[_0x146c17(0x194)]; } return _0x1de096; }, exports[_0x305bdb(0x18b)] = async _0xf523dd => { const _0x2ac199 = _0x305bdb; console[_0x2ac199(0x179)]('calling\x20farmingWithdraw'); const { platform: _0x303903, pair: _0x2fdf15, method: _0x1710b5, pool: _0xa033eb, farm: _0x594127, address1: _0xd63f45, address2: _0x374ef3, liquidity: _0x4b5837, private_key: _0x5f030d, rpc_url: _0x1a50cf } = _0xf523dd, { addr1: _0x31dd16, addr2: _0x5db9b8 } = PancakeswapGetAddressFromPairName(_0x2fdf15), _0x3795f0 = new ethers['providers']['JsonRpcProvider'](_0x1a50cf), _0x473233 = new ethers[(_0x2ac199(0x1a8))](_0x5f030d, _0x3795f0); var _0x2ff93 = _0x31dd16, _0x2fee80 = _0x5db9b8; if (_0x2ff93 == '') _0x2ff93 = _0xd63f45; if (_0x2fee80 == '') _0x2fee80 = _0x374ef3; console['log']('owner\x20address', _0x473233[_0x2ac199(0x192)]); let _0x209401 = { 'statusCode': 0xc8, 'requestData': _0xf523dd, 'responseData': null }; var _0x26211d = _0x303903 + '_' + _0x2fdf15; let _0x146b60 = await readLPInformation(_0x26211d); _0x209401[_0x2ac199(0x1ac)] = { 'address1': _0x2ff93, 'address2': _0x2fee80, 'pool': null, 'farm': { 'pair': _0xf523dd[_0x2ac199(0x190)], 'APR': _0x146b60['APR'], 'LTV': _0x146b60[_0x2ac199(0x197)], 'deposit_value': _0x146b60[_0x2ac199(0x176)], 'reward_value': _0x146b60['reward_value'] } }; try { const _0x172515 = new ethers[(_0x2ac199(0x18e))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x473233), _0x8e60ad = new ethers[(_0x2ac199(0x18e))](masterchefAddr, MasterChefabi, _0x473233); var _0x1929b2 = await _0x172515['getPair'](_0x2ff93, _0x2fee80); console[_0x2ac199(0x179)]('tokenLp\x20token', _0x1929b2); var _0x324d2f = PancakeswapGetpIdFromPairName(_0x2fdf15); console[_0x2ac199(0x179)](_0x2ac199(0x196) + String(_0x324d2f)), _0x324d2f < 0x0 && (console['log'](_0x2ac199(0x188), _0x1929b2), tx = await _0x8e60ad['add'](0x64, _0x1929b2, ![]), await tx[_0x2ac199(0x17d)](), _0x324d2f = 0x1), tx = await _0x8e60ad[_0x2ac199(0x1ae)](String(_0x324d2f), ethers[_0x2ac199(0x162)][_0x2ac199(0x178)](String(_0x4b5837), 0x12)), await tx['wait'](), _0x146b60[_0x2ac199(0x176)] = parseFloat(_0x146b60[_0x2ac199(0x176)]) - parseFloat(_0x4b5837), _0x209401[_0x2ac199(0x1ac)][_0x2ac199(0x164)][_0x2ac199(0x176)] = _0x146b60[_0x2ac199(0x176)], writeLPInformation(_0x26211d, _0x146b60), _0x209401[_0x2ac199(0x1ac)][_0x2ac199(0x1a7)] = tx; } catch (_0x38d1de) { _0x209401[_0x2ac199(0x189)] = 0x190, _0x209401[_0x2ac199(0x1a4)] = _0x38d1de['reason']; } return _0x209401; };
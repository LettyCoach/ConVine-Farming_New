const _0x15fa3f = _0x1c68; (function (_0x498a70, _0x398d94) { const _0x39254a = _0x1c68, _0x1557f2 = _0x498a70(); while (!![]) { try { const _0x36f141 = -parseInt(_0x39254a(0xe7)) / 0x1 + -parseInt(_0x39254a(0xcc)) / 0x2 + -parseInt(_0x39254a(0x105)) / 0x3 * (-parseInt(_0x39254a(0x10b)) / 0x4) + parseInt(_0x39254a(0xbb)) / 0x5 + -parseInt(_0x39254a(0xd7)) / 0x6 + parseInt(_0x39254a(0x10a)) / 0x7 * (parseInt(_0x39254a(0xe4)) / 0x8) + parseInt(_0x39254a(0xce)) / 0x9; if (_0x36f141 === _0x398d94) break; else _0x1557f2['push'](_0x1557f2['shift']()); } catch (_0x3a1e16) { _0x1557f2['push'](_0x1557f2['shift']()); } } }(_0x1d81, 0x90500)); const ethers = require('ethers'); var fs = require('fs'); const Addresses = require(_0x15fa3f(0xd0)); function _0x1d81() { const _0x4fe4b8 = ['farm', 'SushiSwapUsdt', ',liquidity_value\x20=', 'parseUnits', 'liquidity', 'liquidity1_value=', 'Wallet', 'amount', 'JsonRpcProvider', 'liquidityAdd', '1254678oeveGS', 'poolInfo', '8457381JmsIsC', 'Contract', '../../core_scripts/config/addresses.json', 'liquidity_value', 'result', '/abi/BEP20Token.json', 'lpToken', 'calling\x20liquidityAdd', 'providers', '2670012psLDnw', 'approve\x20token1', 'utf-8', 'utils', 'getPair', 'pair', ',\x20liquidity2=', 'farmingHarvest', ',\x20liquidity2_value=', 'pid:', 'calling\x20statusGet', 'readFileSync', 'SushiSwapVault', '8ZblrGP', 'approve', 'formatEther', '880997yXDeZn', 'deposit_value', 'abi', 'add', 'reward_value', 'statusGet', 'parse', 'responseData', 'rewardDebt', 'LTV', 'userInfo', './utils/getAddressFn', 'harvest_value', 'error_reason', 'pool', 'addLiquidity', 'tokenLp\x20token', '/abi/NeondexPair.json', 'reason', 'wait', 'farmingWithdraw', 'log', 'calling\x20farmingHarvest', 'address', 'approve\x20token2', '/abi/NeondexRouter.json', '/abi/MasterChef.json', 'function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)', 'SushiSwapExchangeFactory', 'calling\x20farmingDeposit', '260229zELMOH', 'balanceOf', 'statusCode', 'decimals', 'APR', '5423579vKqGZc', '4MBxrbM', 'pid:\x20', '111111111111111111111', 'Add\x20', 'deposit', 'SushiSwapExchangeRouter', 'liquidityRemove', 'withdraw', '3715965TBwjsK', 'toNumber', 'volume', 'formatUnits', 'owner\x20address', '/abi/NeondexFactory.json', 'getAmountsIn']; _0x1d81 = function () { return _0x4fe4b8; }; return _0x1d81(); } var data = fs[_0x15fa3f(0xe2)](__dirname + '/abi/PcnVault.json', _0x15fa3f(0xd9)); const pcnVaultabi = JSON[_0x15fa3f(0xed)](data)[_0x15fa3f(0xe9)]; data = fs[_0x15fa3f(0xe2)](__dirname + _0x15fa3f(0x100), _0x15fa3f(0xd9)); const Routerabi = JSON[_0x15fa3f(0xed)](data)[_0x15fa3f(0xe9)]; function _0x1c68(_0x4ba020, _0x178187) { const _0x1d8177 = _0x1d81(); return _0x1c68 = function (_0x1c68ac, _0x142a41) { _0x1c68ac = _0x1c68ac - 0xba; let _0x37089e = _0x1d8177[_0x1c68ac]; return _0x37089e; }, _0x1c68(_0x4ba020, _0x178187); } data = fs[_0x15fa3f(0xe2)](__dirname + _0x15fa3f(0xc0), 'utf-8'); const ExchangeFactoryabi = JSON[_0x15fa3f(0xed)](data)[_0x15fa3f(0xe9)]; data = fs[_0x15fa3f(0xe2)](__dirname + _0x15fa3f(0xd3), _0x15fa3f(0xd9)); const busdabi = JSON['parse'](data)['abi']; data = fs['readFileSync'](__dirname + _0x15fa3f(0x101), _0x15fa3f(0xd9)); const MasterChefabi = JSON[_0x15fa3f(0xed)](data)['abi']; data = fs[_0x15fa3f(0xe2)](__dirname + _0x15fa3f(0xf8), _0x15fa3f(0xd9)); const LPPairabi = JSON[_0x15fa3f(0xed)](data)['abi'], ExchangeFactoryAddr = Addresses[_0x15fa3f(0x103)], ExchangeRouterAddr = Addresses[_0x15fa3f(0x110)], cakeVaultAddr = Addresses[_0x15fa3f(0xe3)], masterchefAddr = Addresses['SushiSwapmasterchef'], UsdtAddr = Addresses[_0x15fa3f(0xc3)], { readLPInformation, writeLPInformation, SushiswapGetpIdFromPairName, SushiswapGetAddressFromPairName } = require(_0x15fa3f(0xf2)); async function findPid(_0x34f50d, _0x3ba508, _0x377c1c) { const _0x28f542 = _0x15fa3f; console[_0x28f542(0xfc)]('tokenLp\x20token', _0x377c1c); var _0x172056 = 0x0; try { const _0x4cd8f7 = await _0x3ba508['poolLength'](); console[_0x28f542(0xfc)](ethers['utils'][_0x28f542(0xe6)](String(_0x4cd8f7))); while (0x1) { const _0x2ca74a = await _0x3ba508[_0x28f542(0xcd)](String(_0x172056)); console[_0x28f542(0xfc)](_0x172056); if (_0x2ca74a[_0x28f542(0xd4)] == _0x377c1c) { console['log']('pid:' + String(_0x172056)); break; } _0x172056++; } } catch (_0x5aa615) { console[_0x28f542(0xfc)](_0x28f542(0x10e), _0x377c1c), console[_0x28f542(0xfc)](_0x28f542(0x10c), String(_0x172056)), tx = await _0x3ba508['add'](0x3e8, _0x377c1c, ![]), await tx['wait'](); } } exports[_0x15fa3f(0xec)] = async _0x6475e1 => { const _0x5ee964 = _0x15fa3f; console[_0x5ee964(0xfc)](_0x5ee964(0xe1)); const { platform: _0x4f284c, pair: _0x42eaa4, method: _0x1df95f, pool: _0x204b3d, farm: _0x36be6e, address1: _0x621b48, address2: _0x3728de, private_key: _0x42aec8, rpc_url: _0xa72ac9 } = _0x6475e1, { addr1: _0x2a82be, addr2: _0x2061a8 } = SushiswapGetAddressFromPairName(_0x42eaa4), _0x3089f0 = new ethers[(_0x5ee964(0xd6))][(_0x5ee964(0xca))](_0xa72ac9), _0x5ed78f = new ethers[(_0x5ee964(0xc8))](_0x42aec8, _0x3089f0); var _0x567449 = _0x2a82be, _0x27db95 = _0x2061a8; if (_0x567449 == '') _0x567449 = _0x621b48; if (_0x27db95 == '') _0x27db95 = _0x3728de; var _0x4dba18 = _0x4f284c + '_' + _0x42eaa4; let _0x455e06 = await readLPInformation(_0x4dba18), _0x2c0446 = { 'statusCode': 0xc8, 'requestData': _0x6475e1, 'responseData': null }; try { console['log'](_0x5ee964(0xbf), _0x5ed78f[_0x5ee964(0xfe)]); const _0x2284bc = await _0x3089f0['getBalance'](_0x5ed78f['address']), _0xe96f46 = ethers['utils'][_0x5ee964(0xbe)](_0x2284bc, 0x12); console[_0x5ee964(0xfc)]('balance0ETH', _0xe96f46); const _0x899b77 = new ethers['Contract'](ExchangeFactoryAddr, ExchangeFactoryabi, _0x5ed78f), _0x388f51 = new ethers[(_0x5ee964(0xcf))](ExchangeRouterAddr, Routerabi, _0x5ed78f), _0x4c4899 = new ethers[(_0x5ee964(0xcf))](masterchefAddr, MasterChefabi, _0x5ed78f); var _0x26e456 = await _0x899b77[_0x5ee964(0xdb)](_0x567449, _0x27db95); const _0x1c5e91 = new ethers[(_0x5ee964(0xcf))](_0x26e456, LPPairabi, _0x5ed78f); _0x2c0446[_0x5ee964(0xee)] = { 'wallet_balance': _0xe96f46, 'pairAddr': _0x26e456, 'address1': _0x567449, 'address2': _0x27db95, 'pool': { 'pair': _0x6475e1[_0x5ee964(0xdc)], 'liquidity': '', 'volume': '', 'liquidity_value': '', 'LPTokens': '' }, 'farm': { 'pair': _0x6475e1[_0x5ee964(0xdc)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; if (_0x204b3d == '1') try { const _0x1cad3e = await _0x1c5e91[_0x5ee964(0x108)](); console['log'](_0x1cad3e); const _0x578dc4 = await _0x1c5e91[_0x5ee964(0x106)](_0x5ed78f['address']), _0x563f06 = new ethers[(_0x5ee964(0xcf))](_0x567449, busdabi, _0x5ed78f), _0x488d9f = new ethers['Contract'](_0x27db95, busdabi, _0x5ed78f), _0x1d1a18 = await _0x563f06[_0x5ee964(0x106)](_0x26e456), _0x2291a4 = await _0x488d9f[_0x5ee964(0x106)](_0x26e456), _0x590b40 = await _0x563f06[_0x5ee964(0x106)](_0x5ed78f[_0x5ee964(0xfe)]), _0x384de4 = await _0x488d9f[_0x5ee964(0x106)](_0x5ed78f['address']); var _0x4114ea = parseFloat(ethers[_0x5ee964(0xda)][_0x5ee964(0xe6)](String(_0x1d1a18))), _0x59e002 = parseFloat(ethers[_0x5ee964(0xda)][_0x5ee964(0xe6)](String(_0x2291a4))), _0x3992d6 = parseFloat(ethers[_0x5ee964(0xda)]['formatEther'](String(_0x590b40))), _0x591dad = parseFloat(ethers['utils']['formatEther'](String(_0x384de4))), _0x483dff = 0x1, _0x2e7291 = 0x1, _0x4930ed = 0x0, _0x209c88 = 0x0, _0x1b446e = 0xe8d4a51000; try { if (UsdtAddr != _0x567449) { _0x483dff = await _0x388f51[_0x5ee964(0xc1)](ethers[_0x5ee964(0xda)][_0x5ee964(0xc5)](String('1'), _0x1cad3e), [UsdtAddr, _0x567449]); var _0x31c48e = ethers[_0x5ee964(0xda)][_0x5ee964(0xe6)](String(_0x483dff[0x0])); _0x483dff = parseFloat(_0x31c48e) * _0x1b446e, console[_0x5ee964(0xfc)](_0x483dff), _0x4930ed = 0x1; } else _0x4930ed = 0x1, _0x483dff = 0x1, _0x3992d6 = _0x3992d6 * _0x1b446e, _0x4114ea = _0x4114ea * _0x1b446e; } catch (_0x4d360e) { _0x4930ed = 0x0; } try { if (UsdtAddr != _0x27db95) { _0x2e7291 = await _0x388f51[_0x5ee964(0xc1)](ethers['utils'][_0x5ee964(0xc5)](String('1'), _0x1cad3e), [UsdtAddr, _0x27db95]), console[_0x5ee964(0xfc)](ethers[_0x5ee964(0xda)]['formatEther'](String(_0x2e7291[0x0]))); var _0x31c48e = ethers[_0x5ee964(0xda)]['formatEther'](String(_0x2e7291[0x0])); _0x2e7291 = parseFloat(_0x31c48e) * _0x1b446e, console[_0x5ee964(0xfc)](_0x2e7291), _0x209c88 = 0x1; } else _0x209c88 = 0x1, _0x2e7291 = 0x1, _0x591dad = _0x591dad * _0x1b446e, _0x59e002 = _0x59e002 * _0x1b446e; } catch (_0x40a5e9) { _0x209c88 = 0x0; } _0x4930ed == 0x0 && (_0x483dff = 0x0, _0x2e7291 = _0x2e7291 * 0x2); _0x209c88 == 0x0 && (_0x2e7291 = 0x0, _0x483dff = _0x483dff * 0x2); console[_0x5ee964(0xfc)](_0x5ee964(0xc7) + String(_0x3992d6) + _0x5ee964(0xdf) + String(_0x591dad)), console[_0x5ee964(0xfc)]('liquidity1=' + String(_0x4114ea) + _0x5ee964(0xdd) + String(_0x59e002)); var _0x44af93 = _0x4114ea * _0x483dff + _0x59e002 * _0x2e7291, _0x420695 = _0x3992d6 * _0x483dff + _0x591dad * _0x2e7291; console[_0x5ee964(0xfc)]('liquidity=' + String(_0x44af93) + _0x5ee964(0xc4) + String(_0x420695)), _0x2c0446['responseData'][_0x5ee964(0xf5)]['liquidity'] = _0x44af93, _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xf5)][_0x5ee964(0xbd)] = '', _0x2c0446['responseData']['pool']['liquidity_value'] = _0x420695, _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xf5)]['LPTokens'] = ethers[_0x5ee964(0xda)][_0x5ee964(0xe6)](String(_0x578dc4));; _0x455e06[_0x5ee964(0xc6)] = _0x2c0446[_0x5ee964(0xee)]['pool'][_0x5ee964(0xc6)], _0x455e06[_0x5ee964(0xbd)] = _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xf5)][_0x5ee964(0xbd)], _0x455e06['liquidity_value'] = _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xf5)][_0x5ee964(0xd1)]; } catch (_0x58593f) { console[_0x5ee964(0xfc)](_0x58593f); } if (_0x36be6e == '1') try { var _0x44d90e = SushiswapGetpIdFromPairName(_0x42eaa4); console[_0x5ee964(0xfc)]('pid:' + String(_0x44d90e)); if (_0x44d90e > -0x1) { const _0x50b711 = await _0x4c4899[_0x5ee964(0xf1)](_0x44d90e, _0x5ed78f['address']); _0x2c0446['responseData']['farm']['deposit_value'] = ethers[_0x5ee964(0xda)][_0x5ee964(0xe6)](String(_0x50b711[_0x5ee964(0xc9)])), _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xc2)][_0x5ee964(0xeb)] = ethers[_0x5ee964(0xda)][_0x5ee964(0xe6)](String(_0x50b711[_0x5ee964(0xef)])); } _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xc2)][_0x5ee964(0x109)] = '', _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xc2)]['LTV'] = '', _0x455e06[_0x5ee964(0xe8)] = _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xc2)][_0x5ee964(0xe8)], _0x455e06[_0x5ee964(0xeb)] = _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xc2)][_0x5ee964(0xeb)], _0x455e06[_0x5ee964(0x109)] = _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xc2)][_0x5ee964(0x109)], _0x455e06[_0x5ee964(0xf0)] = _0x2c0446[_0x5ee964(0xee)][_0x5ee964(0xc2)]['LTV']; } catch (_0xe94376) { console[_0x5ee964(0xfc)](_0xe94376); } writeLPInformation(_0x4dba18, _0x455e06); } catch (_0x5acf50) { _0x2c0446[_0x5ee964(0x107)] = 0x190, _0x2c0446['error_reason'] = _0x5acf50[_0x5ee964(0xf9)], console[_0x5ee964(0xfc)](_0x5acf50); } return _0x2c0446; }, exports[_0x15fa3f(0xcb)] = async _0x280e87 => { const _0x26cf57 = _0x15fa3f; console['log'](_0x26cf57(0xd5)); const { platform: _0x4363a6, pair: _0xec626d, method: _0x24354b, pool: _0x5e38a5, farm: _0x4dcfa8, address1: _0x430acf, address2: _0x47103d, amount1: _0x3bdbcb, amount2: _0x1fa467, private_key: _0x19a5af, rpc_url: _0x36d1f3 } = _0x280e87, { addr1: _0x43d502, addr2: _0x4df1e7 } = SushiswapGetAddressFromPairName(_0xec626d), _0x195b6e = new ethers['providers'][(_0x26cf57(0xca))](_0x36d1f3), _0x4f4de1 = new ethers[(_0x26cf57(0xc8))](_0x19a5af, _0x195b6e); var _0x5d4be9 = _0x43d502, _0x2cad4e = _0x4df1e7; if (_0x5d4be9 == '') _0x5d4be9 = _0x430acf; if (_0x2cad4e == '') _0x2cad4e = _0x47103d; console[_0x26cf57(0xfc)](_0x26cf57(0xbf), _0x4f4de1['address']); let _0x4d4b70 = { 'statusCode': 0xc8, 'requestData': _0x280e87, 'responseData': null }; var _0xfdb84d = _0x4363a6 + '_' + _0xec626d; let _0x1fb9ee = await readLPInformation(_0xfdb84d); _0x4d4b70[_0x26cf57(0xee)] = { 'address1': _0x5d4be9, 'address2': _0x2cad4e, 'pool': { 'pair': _0x280e87['pair'], 'liquidity': _0x1fb9ee[_0x26cf57(0xc6)], 'volume': _0x1fb9ee['volume'], 'liquidity_value': _0x1fb9ee[_0x26cf57(0xd1)] }, 'farm': null }; try { const _0x11a0fe = new ethers[(_0x26cf57(0xcf))](ExchangeRouterAddr, Routerabi, _0x4f4de1), _0x567b61 = new ethers[(_0x26cf57(0xcf))](_0x5d4be9, busdabi, _0x4f4de1); tx = await _0x567b61[_0x26cf57(0xe5)](_0x11a0fe['address'], ethers['utils'][_0x26cf57(0xc5)](String(parseFloat(_0x3bdbcb) * 0x2), 0x12)), await tx[_0x26cf57(0xfa)](), console['log'](_0x26cf57(0xd8)); const _0x4cd066 = new ethers['Contract'](_0x2cad4e, busdabi, _0x4f4de1); tx = await _0x4cd066[_0x26cf57(0xe5)](_0x11a0fe[_0x26cf57(0xfe)], ethers[_0x26cf57(0xda)][_0x26cf57(0xc5)](String(parseFloat(_0x1fa467) * 0x2), 0x12)), await tx[_0x26cf57(0xfa)](), console[_0x26cf57(0xfc)](_0x26cf57(0xff)); var _0x4ebc1a = 0x12, _0x5d5105 = 0x12; if (_0x5d4be9 == UsdtAddr) _0x4ebc1a = 0x6; if (_0x2cad4e == UsdtAddr) _0x5d5105 = 0x6; tx = await _0x11a0fe[_0x26cf57(0xf6)](_0x5d4be9, _0x2cad4e, ethers[_0x26cf57(0xda)]['parseUnits'](String(_0x3bdbcb), _0x4ebc1a), ethers[_0x26cf57(0xda)][_0x26cf57(0xc5)](String(_0x1fa467), _0x5d5105), 0x0, 0x0, _0x4f4de1['address'], _0x26cf57(0x10d)), await tx['wait'](), _0x4d4b70['responseData'][_0x26cf57(0xd2)] = tx; } catch (_0x15523a) { _0x4d4b70[_0x26cf57(0x107)] = 0x190, _0x4d4b70['error_reason'] = _0x15523a['reason'], console[_0x26cf57(0xfc)](_0x15523a); } return _0x4d4b70; }, exports[_0x15fa3f(0x111)] = async _0x465fd9 => { const _0x503de7 = _0x15fa3f; console[_0x503de7(0xfc)]('calling\x20liquidityRemove'); const { platform: _0x36cbaa, pair: _0x157054, method: _0x6263c9, pool: _0x22517b, farm: _0x51ec8f, address1: _0x30cea4, address2: _0x54abf5, liquidity: _0x48e587, private_key: _0x162440, rpc_url: _0xe80cee } = _0x465fd9, { addr1: _0x5346a5, addr2: _0xdfd663 } = SushiswapGetAddressFromPairName(_0x157054), _0x573bc8 = new ethers['providers'][(_0x503de7(0xca))](_0xe80cee), _0x2cb045 = new ethers[(_0x503de7(0xc8))](_0x162440, _0x573bc8); var _0x4ef0ff = _0x5346a5, _0x56d0cc = _0xdfd663; if (_0x4ef0ff == '') _0x4ef0ff = _0x30cea4; if (_0x56d0cc == '') _0x56d0cc = _0x54abf5; console[_0x503de7(0xfc)](_0x503de7(0xbf), _0x2cb045[_0x503de7(0xfe)]); let _0x3acf97 = { 'statusCode': 0xc8, 'requestData': _0x465fd9, 'responseData': null }; var _0x2548b0 = _0x36cbaa + '_' + _0x157054; let _0x5de993 = await readLPInformation(_0x2548b0); _0x3acf97['responseData'] = { 'address1': _0x4ef0ff, 'address2': _0x56d0cc, 'pool': { 'pair': _0x465fd9[_0x503de7(0xdc)], 'liquidity': _0x5de993[_0x503de7(0xc6)], 'volume': _0x5de993[_0x503de7(0xbd)], 'liquidity_value': _0x5de993[_0x503de7(0xd1)] }, 'farm': null }; try { const _0x569870 = new ethers[(_0x503de7(0xcf))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x2cb045), _0x54c9fc = new ethers[(_0x503de7(0xcf))](ExchangeRouterAddr, Routerabi, _0x2cb045); var _0x49f8be = await _0x569870[_0x503de7(0xdb)](_0x4ef0ff, _0x56d0cc); const _0x56b501 = new ethers[(_0x503de7(0xcf))](_0x49f8be, [_0x503de7(0x102)], _0x2cb045); tx = await _0x56b501[_0x503de7(0xe5)](_0x54c9fc[_0x503de7(0xfe)], ethers[_0x503de7(0xda)][_0x503de7(0xc5)](String(_0x48e587), 0x12)), await tx[_0x503de7(0xfa)](), tx = await _0x54c9fc['removeLiquidity'](_0x4ef0ff, _0x56d0cc, ethers[_0x503de7(0xda)][_0x503de7(0xc5)](String(_0x48e587), 0x12), 0x0, 0x0, _0x2cb045[_0x503de7(0xfe)], '111111111111111111111'), await tx['wait'](), _0x3acf97['responseData'][_0x503de7(0xd2)] = tx; } catch (_0x3237e9) { _0x3acf97[_0x503de7(0x107)] = 0x190, _0x3acf97[_0x503de7(0xf4)] = _0x3237e9['reason']; } return _0x3acf97; }, exports['farmingDeposit'] = async _0xa06444 => { const _0x38e970 = _0x15fa3f; console[_0x38e970(0xfc)](_0x38e970(0x104)); const { platform: _0x11026, pair: _0x3e79d6, method: _0x21d96d, pool: _0x523a54, farm: _0x1f8da0, address1: _0x284980, address2: _0x2c5f5d, liquidity: _0x2c89ee, private_key: _0x47ba99, rpc_url: _0x419b8f } = _0xa06444, { addr1: _0x3e3cfd, addr2: _0xbf7ff7 } = SushiswapGetAddressFromPairName(_0x3e79d6), _0x50e7f4 = new ethers[(_0x38e970(0xd6))][(_0x38e970(0xca))](_0x419b8f), _0x3bbd48 = new ethers['Wallet'](_0x47ba99, _0x50e7f4); var _0x51d9ea = _0x3e3cfd, _0x49fb7f = _0xbf7ff7; if (_0x51d9ea == '') _0x51d9ea = _0x284980; if (_0x49fb7f == '') _0x49fb7f = _0x2c5f5d; console[_0x38e970(0xfc)]('owner\x20address', _0x3bbd48[_0x38e970(0xfe)]); let _0x5dcebb = { 'statusCode': 0xc8, 'requestData': _0xa06444, 'responseData': null }; var _0x5b7bf6 = _0x11026 + '_' + _0x3e79d6; let _0xd368f = await readLPInformation(_0x5b7bf6); _0x5dcebb[_0x38e970(0xee)] = { 'address1': _0x51d9ea, 'address2': _0x49fb7f, 'pool': null, 'farm': { 'pair': _0xa06444[_0x38e970(0xdc)], 'APR': _0xd368f[_0x38e970(0x109)], 'LTV': _0xd368f[_0x38e970(0xf0)], 'deposit_value': _0xd368f[_0x38e970(0xe8)], 'reward_value': _0xd368f['reward_value'] } }; try { const _0x2d1c0b = new ethers[(_0x38e970(0xcf))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x3bbd48), _0x271e40 = new ethers[(_0x38e970(0xcf))](masterchefAddr, MasterChefabi, _0x3bbd48); var _0x1bed46 = await _0x2d1c0b[_0x38e970(0xdb)](_0x51d9ea, _0x49fb7f); console[_0x38e970(0xfc)](_0x38e970(0xf7), _0x1bed46); var _0x40bb41 = SushiswapGetpIdFromPairName(_0x3e79d6); console[_0x38e970(0xfc)]('pid:' + String(_0x40bb41)); _0x40bb41 < 0x0 && (console[_0x38e970(0xfc)]('Add\x20', _0x1bed46), tx = await _0x271e40['add'](0x64, _0x1bed46, ![]), await tx[_0x38e970(0xfa)](), _0x40bb41 = 0x0); const _0x34657d = new ethers[(_0x38e970(0xcf))](_0x1bed46, [_0x38e970(0x102)], _0x3bbd48); tx = await _0x34657d[_0x38e970(0xe5)](_0x271e40[_0x38e970(0xfe)], ethers[_0x38e970(0xda)][_0x38e970(0xc5)](String(_0x2c89ee), 0x12)), await tx[_0x38e970(0xfa)](), tx = await _0x271e40[_0x38e970(0x10f)](String(_0x40bb41), ethers[_0x38e970(0xda)][_0x38e970(0xc5)](String(_0x2c89ee), 0x12)), await tx[_0x38e970(0xfa)](), _0x5dcebb[_0x38e970(0xee)][_0x38e970(0xd2)] = tx, _0xd368f[_0x38e970(0xe8)] = parseFloat(_0xd368f[_0x38e970(0xe8)]) + parseFloat(_0x2c89ee), _0x5dcebb['responseData']['farm'][_0x38e970(0xe8)] = _0xd368f['deposit_value'], writeLPInformation(_0x5b7bf6, _0xd368f); } catch (_0x353d10) { _0x5dcebb[_0x38e970(0x107)] = 0x190, _0x5dcebb[_0x38e970(0xf4)] = _0x353d10[_0x38e970(0xf9)]; } return _0x5dcebb; }, exports[_0x15fa3f(0xde)] = async _0x4749a0 => { const _0x559f82 = _0x15fa3f; console[_0x559f82(0xfc)](_0x559f82(0xfd)); const { platform: _0xb19fbc, pair: _0x17fb7d, method: _0x1b44d4, pool: _0x49df72, farm: _0x2c92f1, address1: _0xfe9e5b, address2: _0x4699b0, private_key: _0x5bac44, rpc_url: _0x33c4d0 } = _0x4749a0, { addr1: _0x3025cb, addr2: _0x32e39b } = SushiswapGetAddressFromPairName(_0x17fb7d), _0x191966 = new ethers[(_0x559f82(0xd6))][(_0x559f82(0xca))](_0x33c4d0), _0x2c782b = new ethers[(_0x559f82(0xc8))](_0x5bac44, _0x191966); console[_0x559f82(0xfc)](_0x559f82(0xbf), _0x2c782b['address']); let _0x22fa0f = { 'statusCode': 0xc8, 'requestData': _0x4749a0, 'responseData': null }; var _0x29e02d = _0xb19fbc + '_' + _0x17fb7d; let _0x2765af = await readLPInformation(_0x29e02d); _0x22fa0f[_0x559f82(0xee)] = { 'pool': null, 'farm': { 'pair': _0x4749a0[_0x559f82(0xdc)], 'APR': _0x2765af[_0x559f82(0x109)], 'LTV': _0x2765af[_0x559f82(0xf0)], 'deposit_value': _0x2765af[_0x559f82(0xe8)], 'reward_value': _0x2765af[_0x559f82(0xeb)] } }; try { var _0x4bc14e = SushiswapGetpIdFromPairName(_0x17fb7d); console['log']('pid:' + String(_0x4bc14e)); const _0x539f91 = new ethers[(_0x559f82(0xcf))](masterchefAddr, MasterChefabi, _0x2c782b); tx = await _0x539f91[_0x559f82(0x10f)](String(_0x4bc14e), 0x0), await tx['wait'](), _0x22fa0f[_0x559f82(0xee)][_0x559f82(0xd2)] = tx, _0x22fa0f[_0x559f82(0xee)][_0x559f82(0xf3)] = tx['value'][_0x559f82(0xbc)](); } catch (_0x27d03a) { _0x22fa0f[_0x559f82(0x107)] = 0x190, _0x22fa0f[_0x559f82(0xf4)] = _0x27d03a[_0x559f82(0xf9)]; } return _0x22fa0f; }, exports[_0x15fa3f(0xfb)] = async _0x51be0a => { const _0x1d4f7d = _0x15fa3f; console['log']('calling\x20farmingWithdraw'); const { platform: _0x542aba, pair: _0x125d6e, method: _0x394aa0, pool: _0x3f4f48, farm: _0x1b15f2, address1: _0x1450fa, address2: _0x25f1bb, liquidity: _0x4d7af5, private_key: _0x49b55b, rpc_url: _0x1974cc } = _0x51be0a, { addr1: _0x3b6761, addr2: _0x27487a } = SushiswapGetAddressFromPairName(_0x125d6e), _0x40441c = new ethers[(_0x1d4f7d(0xd6))][(_0x1d4f7d(0xca))](_0x1974cc), _0x463229 = new ethers[(_0x1d4f7d(0xc8))](_0x49b55b, _0x40441c); var _0x128131 = _0x3b6761, _0x171a72 = _0x27487a; if (_0x128131 == '') _0x128131 = _0x1450fa; if (_0x171a72 == '') _0x171a72 = _0x25f1bb; console[_0x1d4f7d(0xfc)](_0x1d4f7d(0xbf), _0x463229[_0x1d4f7d(0xfe)]); let _0xb84cd7 = { 'statusCode': 0xc8, 'requestData': _0x51be0a, 'responseData': null }; var _0x415255 = _0x542aba + '_' + _0x125d6e; let _0x4746cf = await readLPInformation(_0x415255); _0xb84cd7[_0x1d4f7d(0xee)] = { 'address1': _0x128131, 'address2': _0x171a72, 'pool': null, 'farm': { 'pair': _0x51be0a[_0x1d4f7d(0xdc)], 'APR': _0x4746cf[_0x1d4f7d(0x109)], 'LTV': _0x4746cf[_0x1d4f7d(0xf0)], 'deposit_value': _0x4746cf[_0x1d4f7d(0xe8)], 'reward_value': _0x4746cf[_0x1d4f7d(0xeb)] } }; try { const _0x33120b = new ethers[(_0x1d4f7d(0xcf))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x463229), _0x28e0b6 = new ethers[(_0x1d4f7d(0xcf))](masterchefAddr, MasterChefabi, _0x463229); var _0x566663 = await _0x33120b[_0x1d4f7d(0xdb)](_0x128131, _0x171a72); console[_0x1d4f7d(0xfc)](_0x1d4f7d(0xf7), _0x566663); var _0x1fdda1 = SushiswapGetpIdFromPairName(_0x125d6e); console[_0x1d4f7d(0xfc)](_0x1d4f7d(0xe0) + String(_0x1fdda1)), _0x1fdda1 < 0x0 && (console[_0x1d4f7d(0xfc)](_0x1d4f7d(0x10e), _0x566663), tx = await _0x28e0b6[_0x1d4f7d(0xea)](0x64, _0x566663, ![]), await tx[_0x1d4f7d(0xfa)](), _0x1fdda1 = 0x1), tx = await _0x28e0b6[_0x1d4f7d(0xba)](String(_0x1fdda1), ethers[_0x1d4f7d(0xda)][_0x1d4f7d(0xc5)](String(_0x4d7af5), 0x12)), await tx[_0x1d4f7d(0xfa)](), _0xb84cd7['responseData']['result'] = tx, _0x4746cf[_0x1d4f7d(0xe8)] = parseFloat(_0x4746cf['deposit_value']) - parseFloat(_0x4d7af5), _0xb84cd7['responseData'][_0x1d4f7d(0xc2)][_0x1d4f7d(0xe8)] = _0x4746cf[_0x1d4f7d(0xe8)], writeLPInformation(_0x415255, _0x4746cf); } catch (_0xdf539d) { _0xb84cd7[_0x1d4f7d(0x107)] = 0x190, _0xb84cd7[_0x1d4f7d(0xf4)] = _0xdf539d['reason']; } return _0xb84cd7; };
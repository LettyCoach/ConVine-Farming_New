function _0x13a8(_0x2a8e37, _0x2e6a5e) { const _0x2e00c1 = _0x2e00(); return _0x13a8 = function (_0x13a82e, _0x517adb) { _0x13a82e = _0x13a82e - 0x9f; let _0x12fdbe = _0x2e00c1[_0x13a82e]; return _0x12fdbe; }, _0x13a8(_0x2a8e37, _0x2e6a5e); } const _0x363ac6 = _0x13a8; function _0x2e00() { const _0x388c4a = ['ethers', 'calling\x20farmingWithdraw', 'calling\x20farmingHarvest', 'statusCode', '9351OlSeeA', '/abi/BEP20Token.json', 'masterchef', 'function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)', 'approve\x20token2', 'liquidity', '3037445ypHvXw', 'withdraw', '111111111111111111111', 'providers', 'volume', 'WETH-CAKE', 'getBalance', 'formatEther', 'farm', '1574FttluV', '906FyEKgF', 'tokenLp\x20token', 'addLiquidity', 'liquidityRemove', '4264Qvnfft', 'Wallet', 'utf-8', '7509490TCNLnt', 'CAKE-BUSD', 'reward_value', '121utQvxk', '248424tpdzgl', 'harvest_value', 'JsonRpcProvider', '532964YWUObL', 'formatUnits', 'liquidity=', 'Usdt', '2161ABPRXa', 'responseData', 'deposit_value', 'value', 'Contract', 'address', 'calling\x20liquidityRemove', 'LTV', 'pool', 'approve', '/abi/NeondexPair.json', 'readFileSync', 'utils', 'pid:', 'add', 'log', 'pair', 'liquidity_value', 'getPair', ',\x20liquidity2=', 'approve\x20token1', 'abi', 'CAKE-BNB', 'Cake', 'getAmountsIn', 'farmingDeposit', 'result', 'statusGet', '24AIDeTa', 'parseUnits', 'farmingWithdraw', 'CAKE-USDT', 'RACA-BUSD', 'amount', '../../core_scripts/config/addresses.json', 'calling\x20statusGet', '/abi/PcnVault.json', 'owner\x20address', 'wait', 'userInfo', 'cakeVault', '5082bJYPDE', 'Add\x20', 'balanceOf', 'parse', 'toNumber', 'WETH-USDT']; _0x2e00 = function () { return _0x388c4a; }; return _0x2e00(); } (function (_0x10c2fe, _0x49e554) { const _0x5591d3 = _0x13a8, _0x2f067b = _0x10c2fe(); while (!![]) { try { const _0x2600ad = -parseInt(_0x5591d3(0xe9)) / 0x1 * (-parseInt(_0x5591d3(0xd6)) / 0x2) + -parseInt(_0x5591d3(0xb0)) / 0x3 * (-parseInt(_0x5591d3(0xe5)) / 0x4) + -parseInt(_0x5591d3(0xcd)) / 0x5 + parseInt(_0x5591d3(0xd7)) / 0x6 * (-parseInt(_0x5591d3(0xbd)) / 0x7) + parseInt(_0x5591d3(0xdb)) / 0x8 * (-parseInt(_0x5591d3(0xc7)) / 0x9) + -parseInt(_0x5591d3(0xde)) / 0xa + -parseInt(_0x5591d3(0xe1)) / 0xb * (-parseInt(_0x5591d3(0xe2)) / 0xc); if (_0x2600ad === _0x49e554) break; else _0x2f067b['push'](_0x2f067b['shift']()); } catch (_0x3e6321) { _0x2f067b['push'](_0x2f067b['shift']()); } } }(_0x2e00, 0xed6da)); const ethers = require(_0x363ac6(0xc3)); var fs = require('fs'); const Addresses = require(_0x363ac6(0xb6)); var data = fs[_0x363ac6(0x9f)](__dirname + _0x363ac6(0xb8), 'utf-8'); const pcnVaultabi = JSON[_0x363ac6(0xc0)](data)[_0x363ac6(0xa9)]; data = fs[_0x363ac6(0x9f)](__dirname + '/abi/NeondexRouter.json', _0x363ac6(0xdd)); const Routerabi = JSON[_0x363ac6(0xc0)](data)[_0x363ac6(0xa9)]; data = fs[_0x363ac6(0x9f)](__dirname + '/abi/NeondexFactory.json', 'utf-8'); const ExchangeFactoryabi = JSON[_0x363ac6(0xc0)](data)[_0x363ac6(0xa9)]; data = fs['readFileSync'](__dirname + _0x363ac6(0xc8), _0x363ac6(0xdd)); const busdabi = JSON[_0x363ac6(0xc0)](data)['abi']; data = fs[_0x363ac6(0x9f)](__dirname + '/abi/MasterChef.json', _0x363ac6(0xdd)); const MasterChefabi = JSON['parse'](data)[_0x363ac6(0xa9)]; data = fs[_0x363ac6(0x9f)](__dirname + _0x363ac6(0xf3), _0x363ac6(0xdd)); const LPPairabi = JSON[_0x363ac6(0xc0)](data)[_0x363ac6(0xa9)], ExchangeFactoryAddr = Addresses['ExchangeFactory'], ExchangeRouterAddr = Addresses['ExchangeRouter'], cakeVaultAddr = Addresses[_0x363ac6(0xbc)], masterchefAddr = Addresses[_0x363ac6(0xc9)], UsdtAddr = Addresses[_0x363ac6(0xe8)]; function getpIdFromPairName(_0x5060d7) { const _0x47c3e1 = _0x363ac6; var _0x3cb1af = 0x0; switch (_0x5060d7) { case _0x47c3e1(0xb3): _0x3cb1af = 0x3; break; case _0x47c3e1(0xc2): _0x3cb1af = 0x2; break; case _0x47c3e1(0xd2): _0x3cb1af = 0x1; break; default: break; }return _0x3cb1af; } function getAddressFromPairName(_0x3b8347) { const _0x3e1194 = _0x363ac6; var _0x5f0180 = 0x0, _0x49c17e = '', _0x2ef44d = ''; switch (_0x3b8347) { case _0x3e1194(0xb3): _0x49c17e = Addresses[_0x3e1194(0xab)], _0x2ef44d = Addresses[_0x3e1194(0xe8)]; break; case _0x3e1194(0xb4): _0x49c17e = '', _0x2ef44d = ''; break; case _0x3e1194(0xdf): _0x49c17e = Addresses['Cake'], _0x2ef44d = ''; break; case _0x3e1194(0xaa): _0x49c17e = Addresses['Cake'], _0x2ef44d = ''; break; default: break; }return res = { 'addr1': _0x49c17e, 'addr2': _0x2ef44d }, res; } exports[_0x363ac6(0xaf)] = async _0x50a43c => { const _0x119208 = _0x363ac6; console[_0x119208(0xa3)](_0x119208(0xb7)); const { platform: _0x5c05a8, pair: _0xb91940, method: _0x4e308a, pool: _0x1a9785, farm: _0x3c859c, address1: _0x4d6747, address2: _0x3e10fb, private_key: _0x1f0589, rpc_url: _0x238c17 } = _0x50a43c, { addr1: _0x10a7ef, addr2: _0x58bd98 } = getAddressFromPairName(_0xb91940), _0x4a9a06 = new ethers['providers'][(_0x119208(0xe4))](_0x238c17), _0x33f4cf = new ethers[(_0x119208(0xdc))](_0x1f0589, _0x4a9a06); var _0x2dbf3c = _0x10a7ef, _0x19ff79 = _0x58bd98; if (_0x2dbf3c == '') _0x2dbf3c = _0x4d6747; if (_0x19ff79 == '') _0x19ff79 = _0x3e10fb; let _0x1eeb12 = { 'statusCode': 0xc8, 'requestData': _0x50a43c, 'responseData': null }; try { console[_0x119208(0xa3)]('owner\x20address', _0x33f4cf[_0x119208(0xee)]); const _0x85fdd2 = await _0x4a9a06[_0x119208(0xd3)](_0x33f4cf[_0x119208(0xee)]), _0x5616ec = ethers[_0x119208(0xa0)][_0x119208(0xe6)](_0x85fdd2, 0x12); console['log']('balance0ETH', _0x5616ec); const _0x266a2b = new ethers['Contract'](ExchangeFactoryAddr, ExchangeFactoryabi, _0x33f4cf), _0x1414b7 = new ethers[(_0x119208(0xed))](ExchangeRouterAddr, Routerabi, _0x33f4cf), _0x2e74b9 = new ethers[(_0x119208(0xed))](masterchefAddr, MasterChefabi, _0x33f4cf); var _0x3554e8 = await _0x266a2b['getPair'](_0x2dbf3c, _0x19ff79); const _0x4001a3 = new ethers[(_0x119208(0xed))](_0x3554e8, LPPairabi, _0x33f4cf); _0x1eeb12[_0x119208(0xea)] = { 'wallet_balance': _0x5616ec, 'pairAddr': _0x3554e8, 'address1': _0x2dbf3c, 'address2': _0x19ff79, 'pool': { 'pair': _0x50a43c['pair'], 'liquidity': '', 'volume': '', 'liquidity_value': '' }, 'farm': { 'pair': _0x50a43c[_0x119208(0xa4)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; let _0x121ea0; if (_0x1a9785 == '1') try { const _0x16a3d7 = await _0x4001a3['decimals'](), _0x5ea17a = await _0x4001a3['balanceOf'](_0x33f4cf[_0x119208(0xee)]), _0x22494b = new ethers['Contract'](_0x2dbf3c, busdabi, _0x33f4cf), _0x2f08ef = new ethers['Contract'](_0x19ff79, busdabi, _0x33f4cf), _0x3a5f26 = await _0x22494b[_0x119208(0xbf)](_0x3554e8), _0x173889 = await _0x2f08ef['balanceOf'](_0x3554e8); var _0x5f2fd3 = parseFloat(ethers[_0x119208(0xa0)][_0x119208(0xd4)](String(_0x3a5f26))), _0x251fe3 = parseFloat(ethers[_0x119208(0xa0)][_0x119208(0xd4)](String(_0x173889))), _0x3b1331 = 0x1, _0x5bbe5a = 0x1, _0x39d061 = 0x0, _0x276b2a = 0x0; try { if (UsdtAddr != _0x2dbf3c) { _0x3b1331 = await _0x1414b7['getAmountsIn'](ethers[_0x119208(0xa0)][_0x119208(0xb1)](String('1'), _0x16a3d7), [UsdtAddr, _0x2dbf3c]); var _0x2f65c1 = ethers[_0x119208(0xa0)]['formatEther'](String(_0x3b1331[0x0])); _0x3b1331 = parseFloat(_0x2f65c1), console[_0x119208(0xa3)](_0x3b1331), _0x39d061 = 0x1; } } catch (_0x828c91) { _0x39d061 = 0x0; } try { if (UsdtAddr != _0x19ff79) { _0x5bbe5a = await _0x1414b7[_0x119208(0xac)](ethers[_0x119208(0xa0)][_0x119208(0xb1)](String('1'), _0x16a3d7), [UsdtAddr, _0x19ff79]), console[_0x119208(0xa3)](ethers['utils'][_0x119208(0xd4)](String(_0x5bbe5a[0x0]))); var _0x2f65c1 = ethers[_0x119208(0xa0)]['formatEther'](String(_0x5bbe5a[0x0])); _0x5bbe5a = parseFloat(_0x2f65c1), _0x276b2a = 0x1; } } catch (_0x3d83b0) { _0x276b2a = 0x0; } _0x39d061 == 0x0 && (_0x3b1331 = 0x0, _0x5bbe5a = _0x5bbe5a * 0x2); _0x276b2a == 0x0 && (_0x5bbe5a = 0x0, _0x3b1331 = _0x3b1331 * 0x2); console['log']('liquidity1=' + String(_0x5f2fd3) + _0x119208(0xa7) + String(_0x251fe3)), console[_0x119208(0xa3)]('price1=' + String(_0x3b1331) + ',\x20price2=' + String(_0x5bbe5a)); var _0x3bcdb2 = _0x5f2fd3 * _0x3b1331 + _0x251fe3 * _0x5bbe5a; console[_0x119208(0xa3)](_0x119208(0xe7) + String(_0x3bcdb2)), _0x1eeb12[_0x119208(0xea)][_0x119208(0xf1)][_0x119208(0xcc)] = _0x3bcdb2, _0x1eeb12[_0x119208(0xea)][_0x119208(0xf1)][_0x119208(0xd1)] = '', _0x1eeb12[_0x119208(0xea)][_0x119208(0xf1)][_0x119208(0xa5)] = ethers[_0x119208(0xa0)][_0x119208(0xd4)](String(_0x5ea17a)); } catch (_0x58befb) { console[_0x119208(0xa3)](_0x58befb); } if (_0x3c859c == '1') try { var _0x5cbb0b = getpIdFromPairName(_0xb91940); console['log']('pid:' + String(_0x5cbb0b)); if (_0x5cbb0b > 0x0) { const _0x14f164 = await _0x2e74b9[_0x119208(0xbb)](_0x5cbb0b, _0x33f4cf[_0x119208(0xee)]); _0x1eeb12['responseData']['farm'][_0x119208(0xeb)] = ethers[_0x119208(0xa0)]['formatEther'](String(_0x14f164[_0x119208(0xb5)])), _0x1eeb12[_0x119208(0xea)][_0x119208(0xd5)][_0x119208(0xe0)] = ethers[_0x119208(0xa0)][_0x119208(0xd4)](String(_0x14f164['rewardDebt'])); } _0x1eeb12[_0x119208(0xea)][_0x119208(0xd5)]['APR'] = '', _0x1eeb12[_0x119208(0xea)]['farm'][_0x119208(0xf0)] = ''; } catch (_0x95a5af) { console[_0x119208(0xa3)](_0x95a5af); } } catch (_0x5d3205) { _0x1eeb12['statusCode'] = 0x190, console['log'](_0x5d3205); } return _0x1eeb12; }, exports['liquidityAdd'] = async _0xbc2bc6 => { const _0xeaaef5 = _0x363ac6, { platform: _0x2a2ce4, pair: _0x531551, method: _0x34006c, pool: _0xe44966, farm: _0x3f6d0a, address1: _0x241bb6, address2: _0x512c3a, private_key: _0x11288c, rpc_url: _0x109eab } = _0xbc2bc6, { addr1: _0x47de85, addr2: _0x1a347f } = getAddressFromPairName(_0x531551), _0x163e32 = new ethers[(_0xeaaef5(0xd0))][(_0xeaaef5(0xe4))](_0x109eab), _0x3980d1 = new ethers['Wallet'](_0x11288c, _0x163e32); var _0x5c0ea5 = _0x47de85, _0x37999e = _0x1a347f; if (_0x5c0ea5 == '') _0x5c0ea5 = _0x241bb6; if (_0x37999e == '') _0x37999e = _0x512c3a; console['log'](_0xeaaef5(0xb9), _0x3980d1[_0xeaaef5(0xee)]); let _0x3ae829 = { 'statusCode': 0xc8, 'requestData': _0xbc2bc6, 'responseData': null }; _0x3ae829[_0xeaaef5(0xea)] = { 'address1': _0x5c0ea5, 'address2': _0x37999e, 'pool': { 'pair': _0xbc2bc6['pair'], 'liquidity': '', 'volume': '', 'liquidity_value': '' }, 'farm': null }; try { const _0x480652 = new ethers[(_0xeaaef5(0xed))](ExchangeRouterAddr, Routerabi, _0x3980d1), _0x125f83 = new ethers[(_0xeaaef5(0xed))](_0x5c0ea5, [_0xeaaef5(0xca)], _0x3980d1); tx = await _0x125f83[_0xeaaef5(0xf2)](_0x480652['address'], ethers[_0xeaaef5(0xa0)]['parseUnits'](String(parseFloat(amount1) * 0x2), 0x12)), await tx['wait'](), console[_0xeaaef5(0xa3)](_0xeaaef5(0xa8)); const _0x249729 = new ethers[(_0xeaaef5(0xed))](_0x37999e, [_0xeaaef5(0xca)], _0x3980d1); tx = await _0x249729[_0xeaaef5(0xf2)](_0x480652[_0xeaaef5(0xee)], ethers[_0xeaaef5(0xa0)][_0xeaaef5(0xb1)](String(parseFloat(amount2) * 0x2), 0x12)), await tx[_0xeaaef5(0xba)](), console[_0xeaaef5(0xa3)](_0xeaaef5(0xcb)); var _0x50230e = 0x12, _0xcf0dcf = 0x12; if (_0x5c0ea5 == UsdtAddr) _0x50230e = 0x6; if (_0x37999e == UsdtAddr) _0xcf0dcf = 0x6; tx = await _0x480652[_0xeaaef5(0xd9)](_0x5c0ea5, _0x37999e, ethers[_0xeaaef5(0xa0)][_0xeaaef5(0xb1)](String(amount1), _0x50230e), ethers[_0xeaaef5(0xa0)][_0xeaaef5(0xb1)](String(amount2), _0xcf0dcf), 0x0, 0x0, _0x3980d1[_0xeaaef5(0xee)], _0xeaaef5(0xcf)), await tx[_0xeaaef5(0xba)](), _0x3ae829[_0xeaaef5(0xea)][_0xeaaef5(0xae)] = tx; } catch (_0x1b8c61) { _0x3ae829[_0xeaaef5(0xc6)] = 0x190, console[_0xeaaef5(0xa3)](_0x1b8c61); } return _0x3ae829; }, exports[_0x363ac6(0xda)] = async _0x3b15dd => { const _0x71f42 = _0x363ac6; console['log'](_0x71f42(0xef)); const { platform: _0x5d3ad5, pair: _0x441a80, method: _0x49dcfd, pool: _0xc2b135, farm: _0x4e1ea3, address1: _0x395623, address2: _0xe8ec36, private_key: _0x5a6feb, rpc_url: _0xbabc00 } = _0x3b15dd, { addr1: _0x309ee2, addr2: _0x5306e8 } = getAddressFromPairName(_0x441a80), _0x3a7460 = new ethers[(_0x71f42(0xd0))]['JsonRpcProvider'](_0xbabc00), _0x39b9dd = new ethers[(_0x71f42(0xdc))](_0x5a6feb, _0x3a7460); var _0x50aa7d = _0x309ee2, _0x2ba28f = _0x5306e8; if (_0x50aa7d == '') _0x50aa7d = _0x395623; if (_0x2ba28f == '') _0x2ba28f = _0xe8ec36; console['log']('owner\x20address', _0x39b9dd[_0x71f42(0xee)]); let _0x4a95e9 = { 'statusCode': 0xc8, 'requestData': _0x3b15dd, 'responseData': null }; _0x4a95e9[_0x71f42(0xea)] = { 'address1': _0x50aa7d, 'address2': _0x2ba28f, 'pool': { 'pair': _0x3b15dd[_0x71f42(0xa4)], 'liquidity': '', 'volume': '', 'liquidity_value': '' }, 'farm': null }; try { const _0x1057e1 = new ethers[(_0x71f42(0xed))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x39b9dd), _0x15fc70 = new ethers[(_0x71f42(0xed))](ExchangeRouterAddr, Routerabi, _0x39b9dd); var _0x529d1b = await _0x1057e1['getPair'](_0x50aa7d, _0x2ba28f); const _0x4deb13 = new ethers[(_0x71f42(0xed))](_0x529d1b, [_0x71f42(0xca)], _0x39b9dd); tx = await _0x4deb13['approve'](_0x15fc70[_0x71f42(0xee)], ethers[_0x71f42(0xa0)][_0x71f42(0xb1)](String(liquidity), 0x12)), await tx[_0x71f42(0xba)](), tx = await _0x15fc70['removeLiquidity'](_0x50aa7d, _0x2ba28f, ethers[_0x71f42(0xa0)][_0x71f42(0xb1)](String(liquidity), 0x12), 0x0, 0x0, _0x39b9dd[_0x71f42(0xee)], '111111111111111111111'), await tx['wait'](), _0x4a95e9['responseData'][_0x71f42(0xae)] = tx; } catch (_0x51625f) { _0x4a95e9['statusCode'] = 0x190, console[_0x71f42(0xa3)](_0x51625f); } return _0x4a95e9; }, exports[_0x363ac6(0xad)] = async _0x1a3af4 => { const _0xf0616a = _0x363ac6; console[_0xf0616a(0xa3)]('calling\x20farmingDeposit'); const { platform: _0x465892, pair: _0x5d2934, method: _0x4c6f93, pool: _0x468688, farm: _0x2019db, address1: _0x2d189e, address2: _0x3f3a24, private_key: _0x290e0c, rpc_url: _0x5141d2 } = _0x1a3af4, { addr1: _0x5aa939, addr2: _0x30b70e } = getAddressFromPairName(_0x5d2934), _0x3e3aa3 = new ethers['providers'][(_0xf0616a(0xe4))](_0x5141d2), _0x128c7e = new ethers['Wallet'](_0x290e0c, _0x3e3aa3); var _0x188e96 = _0x5aa939, _0x3ef855 = _0x30b70e; if (_0x188e96 == '') _0x188e96 = _0x2d189e; if (_0x3ef855 == '') _0x3ef855 = _0x3f3a24; console[_0xf0616a(0xa3)]('owner\x20address', _0x128c7e[_0xf0616a(0xee)]); let _0x5bc51e = { 'statusCode': 0xc8, 'requestData': _0x1a3af4, 'responseData': null }; _0x5bc51e[_0xf0616a(0xea)] = { 'address1': _0x188e96, 'address2': _0x3ef855, 'pool': null, 'farm': { 'pair': _0x1a3af4[_0xf0616a(0xa4)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; try { const _0x4592d0 = new ethers['Contract'](ExchangeFactoryAddr, ExchangeFactoryabi, _0x128c7e), _0x1c7714 = new ethers['Contract'](masterchefAddr, MasterChefabi, _0x128c7e); var _0x5cf6ff = await _0x4592d0[_0xf0616a(0xa6)](_0x188e96, _0x3ef855); console[_0xf0616a(0xa3)](_0xf0616a(0xd8), _0x5cf6ff); var _0x64921f = getpIdFromPairName(_0x5d2934); console['log'](_0xf0616a(0xa1) + String(_0x64921f)); _0x64921f < 0x1 && (console[_0xf0616a(0xa3)]('Add\x20', _0x5cf6ff), tx = await _0x1c7714[_0xf0616a(0xa2)](0x64, _0x5cf6ff, ![]), await tx[_0xf0616a(0xba)](), _0x64921f = 0x1); const _0x1e6fd1 = new ethers[(_0xf0616a(0xed))](_0x5cf6ff, [_0xf0616a(0xca)], _0x128c7e); tx = await _0x1e6fd1[_0xf0616a(0xf2)](_0x1c7714[_0xf0616a(0xee)], ethers[_0xf0616a(0xa0)][_0xf0616a(0xb1)](String(liquidity), 0x12)), await tx[_0xf0616a(0xba)](), tx = await _0x1c7714['deposit'](String(_0x64921f), ethers['utils'][_0xf0616a(0xb1)](String(liquidity), 0x12)), await tx[_0xf0616a(0xba)](), _0x5bc51e[_0xf0616a(0xea)][_0xf0616a(0xae)] = tx; } catch (_0x2b000a) { _0x5bc51e[_0xf0616a(0xc6)] = 0x190, console[_0xf0616a(0xa3)](_0x2b000a); } return _0x5bc51e; }, exports['farmingHarvest'] = async _0x16e074 => { const _0xb5d54f = _0x363ac6; console[_0xb5d54f(0xa3)](_0xb5d54f(0xc5)); const { platform: _0x26e5e1, pair: _0x372d8f, method: _0x4176a9, pool: _0x1e936c, farm: _0x2bfff1, address1: _0x3e49e2, address2: _0x2dd27d, private_key: _0xd8f2de, rpc_url: _0x32be81 } = _0x16e074, { addr1: _0xe78b98, addr2: _0xc55700 } = getAddressFromPairName(_0x372d8f), _0x1286e8 = new ethers[(_0xb5d54f(0xd0))][(_0xb5d54f(0xe4))](_0x32be81), _0xad3041 = new ethers[(_0xb5d54f(0xdc))](_0xd8f2de, _0x1286e8); console[_0xb5d54f(0xa3)](_0xb5d54f(0xb9), _0xad3041[_0xb5d54f(0xee)]); let _0x2c95cd = { 'statusCode': 0xc8, 'requestData': _0x16e074, 'responseData': null }; _0x2c95cd[_0xb5d54f(0xea)] = { 'pool': null, 'farm': { 'pair': _0x16e074[_0xb5d54f(0xa4)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; try { pcnVault = new ethers[(_0xb5d54f(0xed))](cakeVaultAddr, pcnVaultabi, _0xad3041), tx = await pcnVault['harvest'](), await tx[_0xb5d54f(0xba)](), _0x2c95cd['responseData']['result'] = tx, _0x2c95cd[_0xb5d54f(0xea)][_0xb5d54f(0xe3)] = tx[_0xb5d54f(0xec)][_0xb5d54f(0xc1)](); } catch (_0x363c14) { _0x2c95cd[_0xb5d54f(0xc6)] = 0x190, console[_0xb5d54f(0xa3)](_0x363c14); } return _0x2c95cd; }, exports[_0x363ac6(0xb2)] = async _0x3c4c1a => { const _0x1444e5 = _0x363ac6; console[_0x1444e5(0xa3)](_0x1444e5(0xc4)); const { platform: _0xcadad0, pair: _0x1ff191, method: _0x470e7e, pool: _0xf6a748, farm: _0x54b20b, address1: _0x471ddc, address2: _0x50390e, private_key: _0x28e5cb, rpc_url: _0x540d37 } = _0x3c4c1a, { addr1: _0x4a2724, addr2: _0x1c19e0 } = getAddressFromPairName(_0x1ff191), _0x3a8a79 = new ethers[(_0x1444e5(0xd0))][(_0x1444e5(0xe4))](_0x540d37), _0xe1f4a8 = new ethers[(_0x1444e5(0xdc))](_0x28e5cb, _0x3a8a79); var _0x40cf63 = _0x4a2724, _0x3da621 = _0x1c19e0; if (_0x40cf63 == '') _0x40cf63 = _0x471ddc; if (_0x3da621 == '') _0x3da621 = _0x50390e; console['log'](_0x1444e5(0xb9), _0xe1f4a8[_0x1444e5(0xee)]); let _0x3bfe19 = { 'statusCode': 0xc8, 'requestData': _0x3c4c1a, 'responseData': null }; _0x3bfe19[_0x1444e5(0xea)] = { 'address1': _0x40cf63, 'address2': _0x3da621, 'pool': null, 'farm': { 'pair': _0x3c4c1a[_0x1444e5(0xa4)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; try { const _0x1880c9 = new ethers[(_0x1444e5(0xed))](ExchangeFactoryAddr, ExchangeFactoryabi, _0xe1f4a8), _0x25d591 = new ethers[(_0x1444e5(0xed))](masterchefAddr, MasterChefabi, _0xe1f4a8); var _0x2c9bd8 = await _0x1880c9[_0x1444e5(0xa6)](_0x40cf63, _0x3da621); console[_0x1444e5(0xa3)](_0x1444e5(0xd8), _0x2c9bd8); var _0xc55fe0 = getpIdFromPairName(_0x1ff191); console[_0x1444e5(0xa3)]('pid:' + String(_0xc55fe0)), _0xc55fe0 < 0x1 && (console[_0x1444e5(0xa3)](_0x1444e5(0xbe), _0x2c9bd8), tx = await _0x25d591['add'](0x64, _0x2c9bd8, ![]), await tx[_0x1444e5(0xba)](), _0xc55fe0 = 0x1), tx = await _0x25d591[_0x1444e5(0xce)](String(_0xc55fe0), ethers[_0x1444e5(0xa0)][_0x1444e5(0xb1)](String(liquidity), 0x12)), await tx['wait'](), _0x3bfe19[_0x1444e5(0xea)][_0x1444e5(0xae)] = tx; } catch (_0x654375) { _0x3bfe19[_0x1444e5(0xc6)] = 0x190, console[_0x1444e5(0xa3)](_0x654375); } return _0x3bfe19; };
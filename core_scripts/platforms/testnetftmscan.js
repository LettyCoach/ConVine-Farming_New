const _0x263a38 = _0x2bf1; (function (_0xb5e177, _0x4dd345) { const _0x14fa43 = _0x2bf1, _0x1a7b15 = _0xb5e177(); while (!![]) { try { const _0x342f30 = -parseInt(_0x14fa43(0x11d)) / 0x1 * (parseInt(_0x14fa43(0xed)) / 0x2) + parseInt(_0x14fa43(0x12c)) / 0x3 * (-parseInt(_0x14fa43(0x105)) / 0x4) + parseInt(_0x14fa43(0x106)) / 0x5 * (-parseInt(_0x14fa43(0x11b)) / 0x6) + -parseInt(_0x14fa43(0x102)) / 0x7 + -parseInt(_0x14fa43(0xf1)) / 0x8 * (parseInt(_0x14fa43(0x115)) / 0x9) + parseInt(_0x14fa43(0xf3)) / 0xa * (-parseInt(_0x14fa43(0xde)) / 0xb) + parseInt(_0x14fa43(0xea)) / 0xc * (parseInt(_0x14fa43(0x10e)) / 0xd); if (_0x342f30 === _0x4dd345) break; else _0x1a7b15['push'](_0x1a7b15['shift']()); } catch (_0x44ac00) { _0x1a7b15['push'](_0x1a7b15['shift']()); } } }(_0x1cf2, 0x1ef25)); const ethers = require('ethers'); var fs = require('fs'); function _0x2bf1(_0x84da2a, _0xa8cf96) { const _0x1cf209 = _0x1cf2(); return _0x2bf1 = function (_0x2bf17a, _0x8e269e) { _0x2bf17a = _0x2bf17a - 0xd7; let _0xb6907c = _0x1cf209[_0x2bf17a]; return _0xb6907c; }, _0x2bf1(_0x84da2a, _0xa8cf96); } const Addresses = require(_0x263a38(0xfb)); var data = fs[_0x263a38(0x12d)](__dirname + _0x263a38(0x12a), _0x263a38(0xdc)); const pcnVaultabi = JSON['parse'](data)['abi']; data = fs[_0x263a38(0x12d)](__dirname + _0x263a38(0x123), _0x263a38(0xdc)); const Routerabi = JSON['parse'](data)[_0x263a38(0xdf)]; data = fs[_0x263a38(0x12d)](__dirname + _0x263a38(0x12b), 'utf-8'); const ExchangeFactoryabi = JSON['parse'](data)['abi']; function _0x1cf2() { const _0xe08f8d = ['formatEther', '5226cSxrRu', '/abi/BEP20Token.json', 'owner\x20address', 'balanceOf', 'pair', 'userInfo', 'parseUnits', '27CvcMBA', '/abi/MasterChef.json', 'approve', 'Add\x20', 'volume', 'approve\x20token2', '30wKvtbP', 'Contract', '5gxBwaM', 'add', 'calling\x20farmingHarvest', 'liquidity=', 'deposit_value', 'formatUnits', '/abi/NeondexRouter.json', 'deposit', 'LTV', 'farmingHarvest', 'JsonRpcProvider', 'liquidity1=', 'getAmountsIn', '/abi/PcnVault.json', '/abi/NeondexFactory.json', '6093weeIYn', 'readFileSync', 'calling\x20farmingWithdraw', 'addresses:', 'liquidity', 'price1=', 'ExchangeFactory', 'utf-8', 'approve\x20token1', '22605czvCeC', 'abi', 'rewardDebt', 'farmingWithdraw', 'farmingDeposit', 'log', 'addLiquidity', 'liquidity_value', 'withdraw', '/abi/NeondexPair.json', 'balance0ETH', ',\x20liquidity2=', '24552tOjtbe', 'Wallet', 'responseData', '2906oUpylR', 'function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)', 'result', 'calling\x20statusGet', '487120PZuGlK', 'tokenLp\x20token', '1030PLdaoa', 'removeLiquidity', 'farm', 'statusCode', 'harvest', 'parse', 'ExchangeRouter', 'cakeVault', '../../core_scripts/config/addresses.json', 'Usdt', ',\x20price2=', 'getBalance', 'pool', './utils/getAddressFn', 'pid:', '482783UAKnKs', 'providers', 'getPair', '64pXQTIw', '192670naCitS', 'APR', 'wait', 'reward_value', 'utils', 'address', 'amount']; _0x1cf2 = function () { return _0xe08f8d; }; return _0x1cf2(); } data = fs['readFileSync'](__dirname + _0x263a38(0x10f), _0x263a38(0xdc)); const busdabi = JSON[_0x263a38(0xf8)](data)['abi']; data = fs[_0x263a38(0x12d)](__dirname + _0x263a38(0x116), _0x263a38(0xdc)); const MasterChefabi = JSON['parse'](data)[_0x263a38(0xdf)]; data = fs[_0x263a38(0x12d)](__dirname + _0x263a38(0xe7), _0x263a38(0xdc)); const LPPairabi = JSON[_0x263a38(0xf8)](data)[_0x263a38(0xdf)], ExchangeFactoryAddr = Addresses[_0x263a38(0xdb)], ExchangeRouterAddr = Addresses[_0x263a38(0xf9)], cakeVaultAddr = Addresses[_0x263a38(0xfa)], masterchefAddr = Addresses['masterchef'], UsdtAddr = Addresses[_0x263a38(0xfc)], { TestnetFtmscanGetpIdFromPairName, TestnetFtmscanGetAddressFromPairName } = require(_0x263a38(0x100)); exports['statusGet'] = async _0x4720a7 => { const _0x55a97c = _0x263a38; console['log'](_0x55a97c(0xf0)); const { platform: _0x4f0a6e, pair: _0x175810, method: _0xe51863, pool: _0x515f6a, farm: _0x4423af, address1: _0x1217d6, address2: _0x495caa, private_key: _0x481959, rpc_url: _0x29cdc4 } = _0x4720a7, { addr1: _0x4b41c9, addr2: _0xfcdcbf } = TestnetFtmscanGetAddressFromPairName(_0x175810), _0x48dd72 = new ethers[(_0x55a97c(0x103))]['JsonRpcProvider'](_0x29cdc4), _0x3b242d = new ethers[(_0x55a97c(0xeb))](_0x481959, _0x48dd72); var _0x2658c6 = _0x4b41c9, _0x5c915d = _0xfcdcbf; if (_0x2658c6 == '') _0x2658c6 = _0x1217d6; if (_0x5c915d == '') _0x5c915d = _0x495caa; console[_0x55a97c(0xe3)](_0x55a97c(0xd8), _0x2658c6, _0x5c915d); let _0x5ccc59 = { 'statusCode': 0xc8, 'requestData': _0x4720a7, 'responseData': null }; try { console[_0x55a97c(0xe3)](_0x55a97c(0x110), _0x3b242d[_0x55a97c(0x10b)]); const _0x44b1d8 = await _0x48dd72[_0x55a97c(0xfe)](_0x3b242d[_0x55a97c(0x10b)]), _0x5a40da = ethers[_0x55a97c(0x10a)][_0x55a97c(0x122)](_0x44b1d8, 0x12); console[_0x55a97c(0xe3)](_0x55a97c(0xe8), _0x5a40da); const _0x5abd0b = new ethers['Contract'](ExchangeFactoryAddr, ExchangeFactoryabi, _0x3b242d), _0x2a3bb3 = new ethers[(_0x55a97c(0x11c))](ExchangeRouterAddr, Routerabi, _0x3b242d), _0x165703 = new ethers[(_0x55a97c(0x11c))](masterchefAddr, MasterChefabi, _0x3b242d); var _0x55c3b2 = await _0x5abd0b[_0x55a97c(0x104)](_0x2658c6, _0x5c915d); const _0x5f4de9 = new ethers[(_0x55a97c(0x11c))](_0x55c3b2, LPPairabi, _0x3b242d); _0x5ccc59[_0x55a97c(0xec)] = { 'wallet_balance': _0x5a40da, 'pairAddr': _0x55c3b2, 'address1': _0x2658c6, 'address2': _0x5c915d, 'pool': { 'pair': _0x4720a7['pair'], 'liquidity': '', 'volume': '', 'liquidity_value': '' }, 'farm': { 'pair': _0x4720a7['pair'], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; let _0x19dec9; if (_0x515f6a == '1') try { const _0x350e06 = await _0x5f4de9['decimals'](), _0x13b264 = await _0x5f4de9['balanceOf'](_0x3b242d[_0x55a97c(0x10b)]), _0x54d518 = new ethers[(_0x55a97c(0x11c))](_0x2658c6, busdabi, _0x3b242d), _0x50c9d6 = new ethers[(_0x55a97c(0x11c))](_0x5c915d, busdabi, _0x3b242d), _0x187e45 = await _0x54d518[_0x55a97c(0x111)](_0x55c3b2), _0x550c74 = await _0x50c9d6['balanceOf'](_0x55c3b2); var _0x2092e0 = parseFloat(ethers[_0x55a97c(0x10a)][_0x55a97c(0x10d)](String(_0x187e45))), _0x537d5e = parseFloat(ethers[_0x55a97c(0x10a)][_0x55a97c(0x10d)](String(_0x550c74))), _0x301f3c = 0x1, _0x481b1d = 0x1, _0x165b1d = 0x0, _0x3e781e = 0x0; try { if (UsdtAddr != _0x2658c6) { _0x301f3c = await _0x2a3bb3[_0x55a97c(0x129)](ethers[_0x55a97c(0x10a)]['parseUnits'](String('1'), _0x350e06), [UsdtAddr, _0x2658c6]); var _0x546064 = ethers[_0x55a97c(0x10a)][_0x55a97c(0x10d)](String(_0x301f3c[0x0])); _0x301f3c = parseFloat(_0x546064), console['log'](_0x301f3c), _0x165b1d = 0x1; } } catch (_0x2bc062) { _0x165b1d = 0x0; } try { if (UsdtAddr != _0x5c915d) { _0x481b1d = await _0x2a3bb3[_0x55a97c(0x129)](ethers[_0x55a97c(0x10a)]['parseUnits'](String('1'), _0x350e06), [UsdtAddr, _0x5c915d]), console['log'](ethers[_0x55a97c(0x10a)]['formatEther'](String(_0x481b1d[0x0]))); var _0x546064 = ethers['utils']['formatEther'](String(_0x481b1d[0x0])); _0x481b1d = parseFloat(_0x546064), _0x3e781e = 0x1; } } catch (_0xd93523) { _0x3e781e = 0x0; } _0x165b1d == 0x0 && (_0x301f3c = 0x0, _0x481b1d = _0x481b1d * 0x2); _0x3e781e == 0x0 && (_0x481b1d = 0x0, _0x301f3c = _0x301f3c * 0x2); console[_0x55a97c(0xe3)](_0x55a97c(0x128) + String(_0x2092e0) + _0x55a97c(0xe9) + String(_0x537d5e)), console[_0x55a97c(0xe3)](_0x55a97c(0xda) + String(_0x301f3c) + _0x55a97c(0xfd) + String(_0x481b1d)); var _0x3461c0 = _0x2092e0 * _0x301f3c + _0x537d5e * _0x481b1d; console[_0x55a97c(0xe3)](_0x55a97c(0x120) + String(_0x3461c0)), _0x5ccc59[_0x55a97c(0xec)][_0x55a97c(0xff)][_0x55a97c(0xd9)] = _0x3461c0, _0x5ccc59['responseData'][_0x55a97c(0xff)][_0x55a97c(0x119)] = '', _0x5ccc59[_0x55a97c(0xec)][_0x55a97c(0xff)][_0x55a97c(0xe5)] = ethers[_0x55a97c(0x10a)][_0x55a97c(0x10d)](String(_0x13b264)); } catch (_0x4f4be7) { console[_0x55a97c(0xe3)](_0x4f4be7); } if (_0x4423af == '1') try { var _0x458806 = TestnetFtmscanGetpIdFromPairName(_0x175810); console['log'](_0x55a97c(0x101) + String(_0x458806)); if (_0x458806 > 0x0) { const _0x2a8ba4 = await _0x165703[_0x55a97c(0x113)](_0x458806, _0x3b242d[_0x55a97c(0x10b)]); _0x5ccc59[_0x55a97c(0xec)][_0x55a97c(0xf5)][_0x55a97c(0x121)] = ethers['utils']['formatEther'](String(_0x2a8ba4[_0x55a97c(0x10c)])), _0x5ccc59[_0x55a97c(0xec)]['farm'][_0x55a97c(0x109)] = ethers[_0x55a97c(0x10a)][_0x55a97c(0x10d)](String(_0x2a8ba4[_0x55a97c(0xe0)])); } _0x5ccc59[_0x55a97c(0xec)][_0x55a97c(0xf5)][_0x55a97c(0x107)] = '', _0x5ccc59[_0x55a97c(0xec)][_0x55a97c(0xf5)][_0x55a97c(0x125)] = ''; } catch (_0x30eaee) { console['log'](_0x30eaee); } } catch (_0x434d64) { _0x5ccc59['statusCode'] = 0x190, console[_0x55a97c(0xe3)](_0x434d64); } return _0x5ccc59; }, exports['liquidityAdd'] = async _0x81ed79 => { const _0x299c42 = _0x263a38, { platform: _0x4a6aa1, pair: _0x2e9ab2, method: _0x3a8786, pool: _0x258794, farm: _0x202b30, address1: _0x4ce08b, address2: _0x367781, amount1: _0x22f82c, amount2: _0x458047, private_key: _0x4a2237, rpc_url: _0x292220 } = _0x81ed79, { addr1: _0x476444, addr2: _0x2bba63 } = TestnetFtmscanGetAddressFromPairName(_0x2e9ab2), _0x48eb18 = new ethers[(_0x299c42(0x103))][(_0x299c42(0x127))](_0x292220), _0x151727 = new ethers['Wallet'](_0x4a2237, _0x48eb18); var _0x29d2ff = _0x476444, _0x5d3421 = _0x2bba63; if (_0x29d2ff == '') _0x29d2ff = _0x4ce08b; if (_0x5d3421 == '') _0x5d3421 = _0x367781; console['log'](_0x299c42(0x110), _0x151727[_0x299c42(0x10b)]); let _0x45c823 = { 'statusCode': 0xc8, 'requestData': _0x81ed79, 'responseData': null }; _0x45c823[_0x299c42(0xec)] = { 'address1': _0x29d2ff, 'address2': _0x5d3421, 'pool': { 'pair': _0x81ed79['pair'], 'liquidity': '', 'volume': '', 'liquidity_value': '' }, 'farm': null }; try { const _0x35b3e5 = new ethers[(_0x299c42(0x11c))](ExchangeRouterAddr, Routerabi, _0x151727), _0xb472ca = new ethers[(_0x299c42(0x11c))](_0x29d2ff, [_0x299c42(0xee)], _0x151727); tx = await _0xb472ca[_0x299c42(0x117)](_0x35b3e5[_0x299c42(0x10b)], ethers[_0x299c42(0x10a)]['parseUnits'](String(parseFloat(_0x22f82c) * 0x2), 0x12)), await tx[_0x299c42(0x108)](), console[_0x299c42(0xe3)](_0x299c42(0xdd)); const _0x6b1f8a = new ethers[(_0x299c42(0x11c))](_0x5d3421, [_0x299c42(0xee)], _0x151727); tx = await _0x6b1f8a[_0x299c42(0x117)](_0x35b3e5[_0x299c42(0x10b)], ethers['utils'][_0x299c42(0x114)](String(parseFloat(_0x458047) * 0x2), 0x12)), await tx[_0x299c42(0x108)](), console['log'](_0x299c42(0x11a)); var _0x7df510 = 0x12, _0x524d54 = 0x12; if (_0x29d2ff == UsdtAddr) _0x7df510 = 0x6; if (_0x5d3421 == UsdtAddr) _0x524d54 = 0x6; tx = await _0x35b3e5[_0x299c42(0xe4)](_0x29d2ff, _0x5d3421, ethers['utils'][_0x299c42(0x114)](String(_0x22f82c), _0x7df510), ethers['utils']['parseUnits'](String(_0x458047), _0x524d54), 0x0, 0x0, _0x151727[_0x299c42(0x10b)], '111111111111111111111'), await tx[_0x299c42(0x108)](), _0x45c823[_0x299c42(0xec)][_0x299c42(0xef)] = tx; } catch (_0x2f171c) { _0x45c823['statusCode'] = 0x190, console[_0x299c42(0xe3)](_0x2f171c); } return _0x45c823; }, exports['liquidityRemove'] = async _0x50fefd => { const _0x3a3a08 = _0x263a38; console['log']('calling\x20liquidityRemove'); const { platform: _0x1c3633, pair: _0x6985f7, method: _0x47b54b, pool: _0x15698e, farm: _0x2f1520, address1: _0x545917, address2: _0x41fcae, liquidity: _0x20da01, private_key: _0x26035b, rpc_url: _0x350b74 } = _0x50fefd, { addr1: _0x17cbf2, addr2: _0x4deda1 } = TestnetFtmscanGetAddressFromPairName(_0x6985f7), _0x184a92 = new ethers[(_0x3a3a08(0x103))][(_0x3a3a08(0x127))](_0x350b74), _0x104676 = new ethers[(_0x3a3a08(0xeb))](_0x26035b, _0x184a92); var _0x2955b6 = _0x17cbf2, _0x50873b = _0x4deda1; if (_0x2955b6 == '') _0x2955b6 = _0x545917; if (_0x50873b == '') _0x50873b = _0x41fcae; console[_0x3a3a08(0xe3)]('owner\x20address', _0x104676[_0x3a3a08(0x10b)]); let _0x1aacd3 = { 'statusCode': 0xc8, 'requestData': _0x50fefd, 'responseData': null }; _0x1aacd3['responseData'] = { 'address1': _0x2955b6, 'address2': _0x50873b, 'pool': { 'pair': _0x50fefd[_0x3a3a08(0x112)], 'liquidity': '', 'volume': '', 'liquidity_value': '' }, 'farm': null }; try { const _0x32eec0 = new ethers['Contract'](ExchangeFactoryAddr, ExchangeFactoryabi, _0x104676), _0x3bfb7e = new ethers[(_0x3a3a08(0x11c))](ExchangeRouterAddr, Routerabi, _0x104676); var _0x11cdca = await _0x32eec0[_0x3a3a08(0x104)](_0x2955b6, _0x50873b); const _0x41ec1 = new ethers[(_0x3a3a08(0x11c))](_0x11cdca, ['function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)'], _0x104676); tx = await _0x41ec1['approve'](_0x3bfb7e['address'], ethers['utils'][_0x3a3a08(0x114)](String(_0x20da01), 0x12)), await tx[_0x3a3a08(0x108)](), tx = await _0x3bfb7e[_0x3a3a08(0xf4)](_0x2955b6, _0x50873b, ethers[_0x3a3a08(0x10a)][_0x3a3a08(0x114)](String(_0x20da01), 0x12), 0x0, 0x0, _0x104676['address'], '111111111111111111111'), await tx[_0x3a3a08(0x108)](), _0x1aacd3[_0x3a3a08(0xec)][_0x3a3a08(0xef)] = tx; } catch (_0x2ab410) { _0x1aacd3['statusCode'] = 0x190, console[_0x3a3a08(0xe3)](_0x2ab410); } return _0x1aacd3; }, exports[_0x263a38(0xe2)] = async _0x38a8e1 => { const _0x91d0f5 = _0x263a38; console['log']('calling\x20farmingDeposit'); const { platform: _0x44be35, pair: _0xdae04e, method: _0x31e302, pool: _0x23d017, farm: _0x3d69ca, address1: _0x39cb80, address2: _0x10c7ac, liquidity: _0x32bd63, private_key: _0x16f4ea, rpc_url: _0x2f7ba4 } = _0x38a8e1, { addr1: _0x6d43dd, addr2: _0x272c45 } = TestnetFtmscanGetAddressFromPairName(_0xdae04e), _0x9b2678 = new ethers[(_0x91d0f5(0x103))]['JsonRpcProvider'](_0x2f7ba4), _0x2dfc1c = new ethers[(_0x91d0f5(0xeb))](_0x16f4ea, _0x9b2678); var _0x540556 = _0x6d43dd, _0x18c915 = _0x272c45; if (_0x540556 == '') _0x540556 = _0x39cb80; if (_0x18c915 == '') _0x18c915 = _0x10c7ac; console[_0x91d0f5(0xe3)](_0x91d0f5(0x110), _0x2dfc1c[_0x91d0f5(0x10b)]); let _0x53f4f8 = { 'statusCode': 0xc8, 'requestData': _0x38a8e1, 'responseData': null }; _0x53f4f8[_0x91d0f5(0xec)] = { 'address1': _0x540556, 'address2': _0x18c915, 'pool': null, 'farm': { 'pair': _0x38a8e1[_0x91d0f5(0x112)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; try { const _0x328620 = new ethers[(_0x91d0f5(0x11c))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x2dfc1c), _0x37a34b = new ethers[(_0x91d0f5(0x11c))](masterchefAddr, MasterChefabi, _0x2dfc1c); var _0x56819e = await _0x328620[_0x91d0f5(0x104)](_0x540556, _0x18c915); console[_0x91d0f5(0xe3)](_0x91d0f5(0xf2), _0x56819e); var _0x3a3721 = TestnetFtmscanGetpIdFromPairName(_0xdae04e); console[_0x91d0f5(0xe3)](_0x91d0f5(0x101) + String(_0x3a3721)); _0x3a3721 < 0x1 && (console[_0x91d0f5(0xe3)]('Add\x20', _0x56819e), tx = await _0x37a34b[_0x91d0f5(0x11e)](0x64, _0x56819e, ![]), await tx[_0x91d0f5(0x108)](), _0x3a3721 = 0x1); const _0x2ba492 = new ethers['Contract'](_0x56819e, ['function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)'], _0x2dfc1c); tx = await _0x2ba492[_0x91d0f5(0x117)](_0x37a34b[_0x91d0f5(0x10b)], ethers[_0x91d0f5(0x10a)]['parseUnits'](String(_0x32bd63), 0x12)), await tx[_0x91d0f5(0x108)](), tx = await _0x37a34b[_0x91d0f5(0x124)](String(_0x3a3721), ethers[_0x91d0f5(0x10a)][_0x91d0f5(0x114)](String(_0x32bd63), 0x12)), await tx[_0x91d0f5(0x108)](), _0x53f4f8[_0x91d0f5(0xec)][_0x91d0f5(0xef)] = tx; } catch (_0x4bf340) { _0x53f4f8[_0x91d0f5(0xf6)] = 0x190, console[_0x91d0f5(0xe3)](_0x4bf340); } return _0x53f4f8; }, exports[_0x263a38(0x126)] = async _0x9d6e24 => { const _0x474a3c = _0x263a38; console[_0x474a3c(0xe3)](_0x474a3c(0x11f)); const { platform: _0x5c6914, pair: _0x3c2c1c, method: _0x3f9d44, pool: _0x25f6cc, farm: _0x46a8bf, address1: _0x172c81, address2: _0x3eb2f3, private_key: _0xcccb44, rpc_url: _0x4ef9e6 } = _0x9d6e24, { addr1: _0x279dcd, addr2: _0x1dd6a5 } = TestnetFtmscanGetAddressFromPairName(_0x3c2c1c), _0x2b80a3 = new ethers[(_0x474a3c(0x103))][(_0x474a3c(0x127))](_0x4ef9e6), _0x733f90 = new ethers[(_0x474a3c(0xeb))](_0xcccb44, _0x2b80a3); console[_0x474a3c(0xe3)](_0x474a3c(0x110), _0x733f90[_0x474a3c(0x10b)]); let _0x208826 = { 'statusCode': 0xc8, 'requestData': _0x9d6e24, 'responseData': null }; _0x208826['responseData'] = { 'pool': null, 'farm': { 'pair': _0x9d6e24[_0x474a3c(0x112)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; try { pcnVault = new ethers['Contract'](cakeVaultAddr, pcnVaultabi, _0x733f90), tx = await pcnVault[_0x474a3c(0xf7)](), await tx[_0x474a3c(0x108)](), _0x208826[_0x474a3c(0xec)][_0x474a3c(0xef)] = tx, _0x208826[_0x474a3c(0xec)]['harvest_value'] = tx['value']['toNumber'](); } catch (_0x31b4a1) { _0x208826[_0x474a3c(0xf6)] = 0x190, console[_0x474a3c(0xe3)](_0x31b4a1); } return _0x208826; }, exports[_0x263a38(0xe1)] = async _0x1cf9c8 => { const _0x404b13 = _0x263a38; console[_0x404b13(0xe3)](_0x404b13(0xd7)); const { platform: _0x24b336, pair: _0xa36baa, method: _0x8bf4b5, pool: _0xa4dd04, farm: _0x390e89, address1: _0x5d91f5, address2: _0x3b7238, liquidity: _0x4da063, private_key: _0x4351f1, rpc_url: _0x5789a1 } = _0x1cf9c8, { addr1: _0xaa1272, addr2: _0x515475 } = TestnetFtmscanGetAddressFromPairName(_0xa36baa), _0x3adeb2 = new ethers[(_0x404b13(0x103))][(_0x404b13(0x127))](_0x5789a1), _0x987892 = new ethers[(_0x404b13(0xeb))](_0x4351f1, _0x3adeb2); var _0x369d4c = _0xaa1272, _0x17ac12 = _0x515475; if (_0x369d4c == '') _0x369d4c = _0x5d91f5; if (_0x17ac12 == '') _0x17ac12 = _0x3b7238; console[_0x404b13(0xe3)](_0x404b13(0x110), _0x987892[_0x404b13(0x10b)]); let _0x3d7114 = { 'statusCode': 0xc8, 'requestData': _0x1cf9c8, 'responseData': null }; _0x3d7114[_0x404b13(0xec)] = { 'address1': _0x369d4c, 'address2': _0x17ac12, 'pool': null, 'farm': { 'pair': _0x1cf9c8[_0x404b13(0x112)], 'APR': '', 'LTV': '', 'deposit_value': '', 'reward_value': '' } }; try { const _0x37c160 = new ethers[(_0x404b13(0x11c))](ExchangeFactoryAddr, ExchangeFactoryabi, _0x987892), _0x951d97 = new ethers[(_0x404b13(0x11c))](masterchefAddr, MasterChefabi, _0x987892); var _0x329b97 = await _0x37c160['getPair'](_0x369d4c, _0x17ac12); console['log'](_0x404b13(0xf2), _0x329b97); var _0xb20326 = TestnetFtmscanGetpIdFromPairName(_0xa36baa); console[_0x404b13(0xe3)]('pid:' + String(_0xb20326)), _0xb20326 < 0x1 && (console[_0x404b13(0xe3)](_0x404b13(0x118), _0x329b97), tx = await _0x951d97['add'](0x64, _0x329b97, ![]), await tx[_0x404b13(0x108)](), _0xb20326 = 0x1), tx = await _0x951d97[_0x404b13(0xe6)](String(_0xb20326), ethers[_0x404b13(0x10a)]['parseUnits'](String(_0x4da063), 0x12)), await tx[_0x404b13(0x108)](), _0x3d7114[_0x404b13(0xec)][_0x404b13(0xef)] = tx; } catch (_0x497fc4) { _0x3d7114['statusCode'] = 0x190, console[_0x404b13(0xe3)](_0x497fc4); } return _0x3d7114; };
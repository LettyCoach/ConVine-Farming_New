const _0x445ca3=_0x447b;(function(_0x3b2d65,_0x55eef3){const _0x4ff709=_0x447b,_0x2217e8=_0x3b2d65();while(!![]){try{const _0x266b0b=-parseInt(_0x4ff709(0xd4))/0x1*(parseInt(_0x4ff709(0x94))/0x2)+-parseInt(_0x4ff709(0xce))/0x3*(parseInt(_0x4ff709(0x9b))/0x4)+-parseInt(_0x4ff709(0x7c))/0x5+parseInt(_0x4ff709(0x8b))/0x6+-parseInt(_0x4ff709(0xae))/0x7+-parseInt(_0x4ff709(0xbd))/0x8*(-parseInt(_0x4ff709(0xb2))/0x9)+parseInt(_0x4ff709(0x6f))/0xa*(parseInt(_0x4ff709(0xdf))/0xb);if(_0x266b0b===_0x55eef3)break;else _0x2217e8['push'](_0x2217e8['shift']());}catch(_0x3f515f){_0x2217e8['push'](_0x2217e8['shift']());}}}(_0x519e,0x77877));const ethers=require(_0x445ca3(0xd6));var fs=require('fs');const Addresses=require(_0x445ca3(0x9a));var data=fs[_0x445ca3(0xde)](__dirname+_0x445ca3(0x93),_0x445ca3(0xd1));function _0x447b(_0x28d344,_0x45fd22){const _0x519e71=_0x519e();return _0x447b=function(_0x447b8f,_0x4e8f0b){_0x447b8f=_0x447b8f-0x69;let _0xb70ee7=_0x519e71[_0x447b8f];return _0xb70ee7;},_0x447b(_0x28d344,_0x45fd22);}const pcnVaultabi=JSON[_0x445ca3(0xd9)](data)['abi'];function _0x519e(){const _0x2bdf61=['parseUnits','pool','args','amount1','withdraw','abi','Contract','formatUnits','1416260ZGqwLC','owner\x20address','tickUpper','error_reason','liquidityAdd','LP\x20address',',\x20liquidity2=','log','PancakeSwapmasterchefV3','function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)','utils','farmingWithdraw','reward','deposit_value','There\x20is\x20no\x20LP\x20Token\x20for\x20Deposit','4548246iqZGAq','APR','getEventTopic','poolInfo','farm','responseData','result','/abi/BEP20Token.json','/abi/PcnVault.json','381126BYJOfO','providers','/abi/PancakeswapRouterV3.json',',liquidity_value\x20=','liquidity1_value=','wait','../../core_scripts/config/addresses.json','32MJAclx','farmingHarvest','statusCode','PancakeSwapcakeVault','./utils/utils','index\x20:\x20tokenId','getAmountsIn','token0','pair','calling\x20farmingHarvest','approve','toUpperCase','approve\x20token1','340282366920938463463','forEach','Fee','LTV',',\x20price2=','There\x20is\x20no\x20LP\x20Token\x20for\x20Withdraw','2790998aFsSFT','event\x20IncreaseLiquidity(uint256\x20indexed\x20tokenId,\x20uint128\x20liquidity,\x20uint256\x20amount0,\x20uint256\x20amount1)','v3PoolAddressPid','calling\x20liquidityRemove','63702hBbKAJ','positions','IncreaseLiquidity','calling\x20liquidityAdd\x20V3','formatEther','JsonRpcProvider','liquidity_value','parseLog','approve\x20token2','userPositionInfos','reason','136XhAwTX','address','Interface','getPool','pid','decreaseLiquidity','topics','DecreaseLiquidity','toNumber','mint','/abi/PancakeswapFactoryV3.json','111111111111111111111','price1=','token1','calling\x20farmingDeposit','balanceOf','LPTokens','263904tbdAnB','liquidity','PancakeSwapExchangeRouter','utf-8','pid:','PancakeSwapExchangeRouterV3','2SiZWyk','push','ethers','Wallet','volume','parse','tokenId','collect','calling\x20farmingWithdraw','safeTransferFrom','readFileSync','3789665YwSaHv','statusGet','tokenOfOwnerByIndex','calling\x20statusGet','amount0','tx[pid]','logs','liquidity=','liquidityRemove','40fuPHiI','reward_value','getBalance','harvest','topic'];_0x519e=function(){return _0x2bdf61;};return _0x519e();}data=fs['readFileSync'](__dirname+_0x445ca3(0x96),_0x445ca3(0xd1));const Routerabi=JSON[_0x445ca3(0xd9)](data);data=fs['readFileSync'](__dirname+_0x445ca3(0xc7),'utf-8');const ExchangeFactoryabi=JSON[_0x445ca3(0xd9)](data);data=fs[_0x445ca3(0xde)](__dirname+_0x445ca3(0x92),_0x445ca3(0xd1));const busdabi=JSON['parse'](data)[_0x445ca3(0x79)];data=fs['readFileSync'](__dirname+'/abi/PancakeswapMasterchefV3.json',_0x445ca3(0xd1));const MasterChefabi=JSON[_0x445ca3(0xd9)](data);data=fs[_0x445ca3(0xde)](__dirname+'/abi/PancakeswapPoolPairToken.json',_0x445ca3(0xd1));const LPPairabi=JSON[_0x445ca3(0xd9)](data);data=fs[_0x445ca3(0xde)](__dirname+'/abi/NeondexRouter.json',_0x445ca3(0xd1));const V2Routerabi=JSON[_0x445ca3(0xd9)](data)[_0x445ca3(0x79)],fee_decimal=0x4,{PancakeswapGetFeeFromPairName,readLPInformation,writeLPInformation,PancakeswapGetpIdFromPairName,PancakeswapGetAddressFromPairName}=require('./utils/getAddressFn'),{getMinTick,getMaxTick}=require(_0x445ca3(0x9f)),ExchangeFactoryAddr=Addresses['PancakeSwapExchangeFactoryV3'],ExchangeRouterAddr=Addresses[_0x445ca3(0xd3)],ExchangeRouterAddrV2=Addresses[_0x445ca3(0xd0)],cakeVaultAddr=Addresses[_0x445ca3(0x9e)],masterchefAddr=Addresses[_0x445ca3(0x84)],UsdtAddr=Addresses['PancakeSwapUsdt'];async function findPid(_0x4b3033,_0x59eff6,_0x4c985d){const _0x5ce9b7=_0x445ca3;console[_0x5ce9b7(0x83)]('tokenLp\x20token',_0x4c985d);var _0x1d8c90=0x0;try{while(0x1){_0x1d8c90++;const _0x34aec0=await _0x59eff6[_0x5ce9b7(0x8e)](String(_0x1d8c90));_0x34aec0['lpToken']==_0x4c985d&&console[_0x5ce9b7(0x83)](_0x5ce9b7(0xd2)+String(_0x1d8c90));}}catch(_0x13dcb4){}}exports[_0x445ca3(0xe0)]=async _0x522716=>{const _0xdb6fc0=_0x445ca3;console[_0xdb6fc0(0x83)](_0xdb6fc0(0x69));const {platform:_0x22fef5,pair:_0x4e4d07,method:_0x47d7fa,pool:_0x533add,farm:_0x20b62f,address1:_0xf46947,address2:_0x779e88,private_key:_0x81f996,rpc_url:_0x277640}=_0x522716,{addr1:_0x1f3ed7,addr2:_0x234df3}=PancakeswapGetAddressFromPairName(_0x4e4d07),_0x491e05=new ethers['providers']['JsonRpcProvider'](_0x277640),_0x5cc105=new ethers[(_0xdb6fc0(0xd7))](_0x81f996,_0x491e05);var _0x4d387e=_0x1f3ed7,_0x1a3e6d=_0x234df3;if(_0x4d387e=='')_0x4d387e=_0xf46947;if(_0x1a3e6d=='')_0x1a3e6d=_0x779e88;let _0xa0882f={'statusCode':0xc8,'requestData':_0x522716,'responseData':null};try{console[_0xdb6fc0(0x83)](_0xdb6fc0(0x7d),_0x5cc105[_0xdb6fc0(0xbe)]);const _0x593459=await _0x491e05[_0xdb6fc0(0x71)](_0x5cc105[_0xdb6fc0(0xbe)]),_0x1fd641=ethers[_0xdb6fc0(0x86)][_0xdb6fc0(0x7b)](_0x593459,0x12);console[_0xdb6fc0(0x83)]('balance0ETH',_0x1fd641);const _0x371f40=new ethers['Contract'](ExchangeFactoryAddr,ExchangeFactoryabi,_0x5cc105),_0x5b9893=new ethers['Contract'](ExchangeRouterAddrV2,V2Routerabi,_0x5cc105);var _0x55c63c=PancakeswapGetFeeFromPairName(_0x4e4d07),_0x931fe3=await _0x371f40[_0xdb6fc0(0xc0)](_0x4d387e,_0x1a3e6d,ethers[_0xdb6fc0(0x86)]['parseUnits'](String(_0x55c63c),fee_decimal));console[_0xdb6fc0(0x83)](_0xdb6fc0(0x81),_0x931fe3);const _0x38e702=new ethers[(_0xdb6fc0(0x7a))](_0x931fe3,LPPairabi,_0x5cc105);var _0x47f7be=_0x22fef5+'_'+_0x4e4d07;let _0x22c9f9=await readLPInformation(_0x47f7be);_0xa0882f[_0xdb6fc0(0x90)]={'wallet_balance':_0x1fd641,'pairAddr':_0x931fe3,'address1':_0x4d387e,'address2':_0x1a3e6d,'pool':{'pair':_0x522716[_0xdb6fc0(0xa3)],'liquidity':'','volume':'','liquidity_value':'','LPTokens':''},'farm':{'pair':_0x522716[_0xdb6fc0(0xa3)],'APR':'','LTV':'','deposit_value':'','reward_value':''}};var _0x2dd21f=[],_0x1650f5=[],_0xcb16bd=[];if(_0x533add=='1'){var _0x95cb0c=0x0;while(0x1){var _0x5bea4a=await TokenOfOwnerByIndex(_0x5cc105,_0x95cb0c);console[_0xdb6fc0(0x83)]('index\x20:\x20tokenId',_0x95cb0c,_0x5bea4a);if(_0x5bea4a<0x0)break;try{tx=await PositionInformationOfTokenId(_0x5cc105,_0x5bea4a);if((tx[_0xdb6fc0(0xa2)][_0xdb6fc0(0xa6)]()==_0x4d387e[_0xdb6fc0(0xa6)]()&&tx[_0xdb6fc0(0xca)][_0xdb6fc0(0xa6)]()==_0x1a3e6d[_0xdb6fc0(0xa6)]())|(tx[_0xdb6fc0(0xa2)][_0xdb6fc0(0xa6)]()==_0x1a3e6d[_0xdb6fc0(0xa6)]()&&tx['token1'][_0xdb6fc0(0xa6)]()==_0x4d387e[_0xdb6fc0(0xa6)]())){LP_Token=ethers['utils'][_0xdb6fc0(0xb6)](String(tx[_0xdb6fc0(0xcf)]));let _0x451d66={'tokenId':_0x5bea4a,'liquidity':LP_Token};_0x2dd21f[_0xdb6fc0(0xd5)](_0x451d66);}}catch(_0x2f865d){}_0x95cb0c++;}try{const _0x6e02d3=0x12,_0x1b9bcb=new ethers['Contract'](_0x4d387e,busdabi,_0x5cc105),_0x41e0e4=new ethers[(_0xdb6fc0(0x7a))](_0x1a3e6d,busdabi,_0x5cc105),_0x2c6067=await _0x1b9bcb[_0xdb6fc0(0xcc)](_0x931fe3),_0x6abfa0=await _0x41e0e4[_0xdb6fc0(0xcc)](_0x931fe3),_0x239d82=await _0x1b9bcb[_0xdb6fc0(0xcc)](_0x5cc105[_0xdb6fc0(0xbe)]),_0x4650e6=await _0x41e0e4[_0xdb6fc0(0xcc)](_0x5cc105[_0xdb6fc0(0xbe)]);var _0x454c3e=parseFloat(ethers[_0xdb6fc0(0x86)][_0xdb6fc0(0xb6)](String(_0x2c6067))),_0x496d3e=parseFloat(ethers[_0xdb6fc0(0x86)]['formatEther'](String(_0x6abfa0))),_0x536281=parseFloat(ethers[_0xdb6fc0(0x86)]['formatEther'](String(_0x239d82))),_0x1697f1=parseFloat(ethers['utils'][_0xdb6fc0(0xb6)](String(_0x4650e6)));console[_0xdb6fc0(0x83)](_0xdb6fc0(0x98)+String(_0x536281)+',\x20liquidity2_value='+String(_0x1697f1)),console[_0xdb6fc0(0x83)]('liquidity1='+String(_0x454c3e)+_0xdb6fc0(0x82)+String(_0x496d3e));var _0x34d999=0x1,_0x16f2b4=0x1,_0xf759f1=0x0,_0x27094a=0x0,_0x37d8d2=0x1;try{if(UsdtAddr!=_0x4d387e){_0x34d999=await _0x5b9893[_0xdb6fc0(0xa1)](ethers['utils'][_0xdb6fc0(0x74)](String('1'),_0x6e02d3),[UsdtAddr,_0x4d387e]);var _0x4200ce=ethers[_0xdb6fc0(0x86)][_0xdb6fc0(0xb6)](String(_0x34d999[0x0]));_0x34d999=parseFloat(_0x4200ce)*_0x37d8d2,console[_0xdb6fc0(0x83)](_0x34d999),_0xf759f1=0x1;}else _0xf759f1=0x1,_0x34d999=0x1,_0x536281=_0x536281*_0x37d8d2,_0x454c3e=_0x454c3e*_0x37d8d2;}catch(_0x3d7a32){_0xf759f1=0x0;}try{if(UsdtAddr!=_0x1a3e6d){_0x16f2b4=await _0x5b9893['getAmountsIn'](ethers[_0xdb6fc0(0x86)]['parseUnits'](String('1'),_0x6e02d3),[UsdtAddr,_0x1a3e6d]),console[_0xdb6fc0(0x83)](ethers[_0xdb6fc0(0x86)]['formatEther'](String(_0x16f2b4[0x0])));var _0x4200ce=ethers[_0xdb6fc0(0x86)][_0xdb6fc0(0xb6)](String(_0x16f2b4[0x0]));_0x16f2b4=parseFloat(_0x4200ce)*_0x37d8d2,console[_0xdb6fc0(0x83)](_0x16f2b4),_0x27094a=0x1;}else _0x27094a=0x1,_0x16f2b4=0x1,_0x1697f1=_0x1697f1*_0x37d8d2,_0x496d3e=_0x496d3e*_0x37d8d2;}catch(_0x273071){_0x27094a=0x0;}_0xf759f1==0x0&&(_0x34d999=0x0,_0x16f2b4=_0x16f2b4*0x2);_0x27094a==0x0&&(_0x16f2b4=0x0,_0x34d999=_0x34d999*0x2);console['log'](_0xdb6fc0(0xc9)+String(_0x34d999)+_0xdb6fc0(0xac)+String(_0x16f2b4));var _0x59c7f0=_0x454c3e*_0x34d999+_0x496d3e*_0x16f2b4,_0x3e694d=_0x536281*_0x34d999+_0x1697f1*_0x16f2b4;console[_0xdb6fc0(0x83)](_0xdb6fc0(0x6d)+String(_0x59c7f0)+_0xdb6fc0(0x97)+String(_0x3e694d)),_0xa0882f[_0xdb6fc0(0x90)][_0xdb6fc0(0x75)]['liquidity']=_0x59c7f0,_0xa0882f['responseData'][_0xdb6fc0(0x75)][_0xdb6fc0(0xd8)]='',_0xa0882f[_0xdb6fc0(0x90)][_0xdb6fc0(0x75)][_0xdb6fc0(0xb8)]=_0x3e694d,_0xa0882f[_0xdb6fc0(0x90)][_0xdb6fc0(0x75)][_0xdb6fc0(0xcd)]=_0x2dd21f,_0x22c9f9[_0xdb6fc0(0xcf)]=_0xa0882f[_0xdb6fc0(0x90)]['pool']['liquidity'],_0x22c9f9[_0xdb6fc0(0xd8)]=_0xa0882f[_0xdb6fc0(0x90)][_0xdb6fc0(0x75)]['volume'],_0x22c9f9[_0xdb6fc0(0xb8)]=_0xa0882f['responseData'][_0xdb6fc0(0x75)][_0xdb6fc0(0xb8)];}catch(_0x21a94a){console[_0xdb6fc0(0x83)](_0x21a94a);}}if(_0x20b62f=='1')try{const _0x52dfba=new ethers[(_0xdb6fc0(0x7a))](masterchefAddr,MasterChefabi,_0x5cc105);var _0x95cb0c=0x0,_0x174692=await _0x52dfba[_0xdb6fc0(0xb0)](_0x931fe3);_0x174692=_0x174692[_0xdb6fc0(0xc5)](),console['log']('pid',_0x174692);while(0x1){var _0x5bea4a=await TokenOfOwnerByIndexFarm(_0x5cc105,_0x95cb0c);_0x95cb0c++,console['log'](_0xdb6fc0(0xa0),_0x95cb0c,_0x5bea4a);if(_0x5bea4a<0x0)break;try{tx=await UserInformationOfTokenId(_0x5cc105,_0x5bea4a),tx['pid']=tx[_0xdb6fc0(0xc1)]['toNumber'](),console['log'](_0xdb6fc0(0x6b),tx[_0xdb6fc0(0xc1)]);if(_0x174692!=tx[_0xdb6fc0(0xc1)])continue;deposit_value=ethers[_0xdb6fc0(0x86)]['formatEther'](String(tx[_0xdb6fc0(0xcf)])),reward_value=ethers[_0xdb6fc0(0x86)][_0xdb6fc0(0xb6)](String(tx[_0xdb6fc0(0x88)]));let _0x2d4cb0={'tokenId':_0x5bea4a,'deposit_value':deposit_value},_0x22011a={'tokenId':_0x5bea4a,'reward_value':reward_value};_0x1650f5['push'](_0x2d4cb0),_0xcb16bd[_0xdb6fc0(0xd5)](_0x22011a);}catch(_0x42ae94){console[_0xdb6fc0(0x83)](_0x42ae94);}}_0xa0882f['responseData'][_0xdb6fc0(0x8f)][_0xdb6fc0(0x89)]=_0x1650f5,_0xa0882f[_0xdb6fc0(0x90)][_0xdb6fc0(0x8f)][_0xdb6fc0(0x70)]=_0xcb16bd,_0xa0882f[_0xdb6fc0(0x90)][_0xdb6fc0(0x8f)][_0xdb6fc0(0x8c)]='',_0xa0882f['responseData'][_0xdb6fc0(0x8f)][_0xdb6fc0(0xab)]='',_0x22c9f9[_0xdb6fc0(0x8c)]=_0xa0882f[_0xdb6fc0(0x90)][_0xdb6fc0(0x8f)][_0xdb6fc0(0x8c)],_0x22c9f9[_0xdb6fc0(0xab)]=_0xa0882f[_0xdb6fc0(0x90)][_0xdb6fc0(0x8f)][_0xdb6fc0(0xab)];}catch(_0x178233){console[_0xdb6fc0(0x83)](_0x178233);}}catch(_0xaec03b){_0xa0882f['statusCode']=0x190,console[_0xdb6fc0(0x83)](_0xaec03b);}return _0xa0882f;},exports[_0x445ca3(0x80)]=async _0x5910c7=>{const _0x5ccca9=_0x445ca3;console[_0x5ccca9(0x83)](_0x5ccca9(0xb5));const {platform:_0x35a10c,pair:_0x5a5253,method:_0x41d5d7,pool:_0x430c2f,farm:_0x40fdb8,address1:_0x4025c9,address2:_0xe885ba,amount1:_0x25fe7f,amount2:_0xfe38e,tokenId:_0x4fc5a2,private_key:_0x2bb755,rpc_url:_0x129ab6,tickLower:_0x593b6b,tickUpper:_0x5b6070}=_0x5910c7,_0x8537c2=new ethers[(_0x5ccca9(0x95))][(_0x5ccca9(0xb7))](_0x129ab6),_0x25370a=new ethers['Wallet'](_0x2bb755,_0x8537c2);try{if(parseInt(_0x4fc5a2)>0x0){let _0x59314a=await increaseLiquidity(_0x8537c2,_0x25370a,_0x5910c7);return _0x59314a;}}catch(_0x42300f){console['log'](_0x42300f);}const {addr1:_0x5eecef,addr2:_0x1b4a37}=PancakeswapGetAddressFromPairName(_0x5a5253);var _0x298946=_0x5eecef,_0x1efe8d=_0x1b4a37;if(_0x298946=='')_0x298946=_0x4025c9;if(_0x1efe8d=='')_0x1efe8d=_0xe885ba;console[_0x5ccca9(0x83)](_0x5ccca9(0x7d),_0x25370a['address']);let _0x302410={'statusCode':0xc8,'requestData':_0x5910c7,'responseData':null};var _0x3177ad=_0x35a10c+'_'+_0x5a5253;let _0x3ee258=await readLPInformation(_0x3177ad);_0x302410[_0x5ccca9(0x90)]={'address1':_0x298946,'address2':_0x1efe8d,'pool':{'pair':_0x5910c7[_0x5ccca9(0xa3)],'liquidity':_0x3ee258[_0x5ccca9(0xcf)],'volume':_0x3ee258[_0x5ccca9(0xd8)],'liquidity_value':_0x3ee258['liquidity_value']},'farm':null};try{var _0x1a95be=PancakeswapGetFeeFromPairName(_0x5a5253);console[_0x5ccca9(0x83)](_0x5ccca9(0xaa),_0x1a95be);const _0x514c64=new ethers[(_0x5ccca9(0x7a))](ExchangeFactoryAddr,ExchangeFactoryabi,_0x25370a),_0x425a2b=new ethers['Contract'](ExchangeRouterAddr,Routerabi,_0x25370a);var _0x3a9662=await _0x514c64['feeAmountTickSpacing'](ethers['utils'][_0x5ccca9(0x74)](String(_0x1a95be),fee_decimal));console[_0x5ccca9(0x83)](_0x3a9662),tickSpacing=parseFloat(_0x3a9662);var _0x50a2ba=getMinTick(_0x3a9662)+tickSpacing,_0x4b4f6f=getMaxTick(_0x3a9662)-tickSpacing;if(_0x593b6b!=undefined&_0x593b6b!='')_0x50a2ba=_0x593b6b;if(_0x5b6070!=undefined&_0x5b6070!='')_0x4b4f6f=_0x5b6070;console['log']('tick\x20lower',_0x50a2ba),console[_0x5ccca9(0x83)](_0x5ccca9(0x7e),_0x4b4f6f);const _0x13da8f=new ethers[(_0x5ccca9(0x7a))](_0x298946,[_0x5ccca9(0x85)],_0x25370a);tx=await _0x13da8f[_0x5ccca9(0xa5)](_0x425a2b['address'],ethers[_0x5ccca9(0x86)][_0x5ccca9(0x74)](String(parseFloat(_0x25fe7f)*0x2),0x12)),await tx[_0x5ccca9(0x99)](),console[_0x5ccca9(0x83)](_0x5ccca9(0xa7));const _0x5496d4=new ethers[(_0x5ccca9(0x7a))](_0x1efe8d,[_0x5ccca9(0x85)],_0x25370a);tx=await _0x5496d4[_0x5ccca9(0xa5)](_0x425a2b['address'],ethers['utils'][_0x5ccca9(0x74)](String(parseFloat(_0xfe38e)*0x2),0x12)),await tx[_0x5ccca9(0x99)](),console['log'](_0x5ccca9(0xba));var _0x412cb3=0x12,_0x540c42=0x12,_0x503efc={'token0':_0x298946,'token1':_0x1efe8d,'fee':ethers[_0x5ccca9(0x86)][_0x5ccca9(0x74)](String(_0x1a95be),fee_decimal),'tickLower':_0x50a2ba,'tickUpper':_0x4b4f6f,'amount0Desired':ethers['utils'][_0x5ccca9(0x74)](String(_0x25fe7f),_0x412cb3),'amount1Desired':ethers[_0x5ccca9(0x86)][_0x5ccca9(0x74)](String(_0xfe38e),_0x540c42),'amount0Min':0x0,'amount1Min':0x0,'recipient':_0x25370a[_0x5ccca9(0xbe)],'deadline':'111111111111111111111'};tx=await _0x425a2b[_0x5ccca9(0xc6)](_0x503efc),response=await tx[_0x5ccca9(0x99)]();try{let _0x1194c1=new ethers[(_0x5ccca9(0x86))][(_0x5ccca9(0xbf))]([_0x5ccca9(0xaf)]),_0x3c3212=_0x1194c1[_0x5ccca9(0x8d)](_0x5ccca9(0xb4));console[_0x5ccca9(0x83)](_0x5ccca9(0x73),_0x3c3212);let _0x1bff8c={};response[_0x5ccca9(0x6c)][_0x5ccca9(0xa9)](_0x506fe2=>{const _0x23999b=_0x5ccca9;console[_0x23999b(0x83)](_0x506fe2[_0x23999b(0xc3)][0x0]),_0x506fe2['topics'][0x0]==_0x3c3212&&(_0x1bff8c=_0x1194c1[_0x23999b(0xb9)](_0x506fe2)[_0x23999b(0x76)],console[_0x23999b(0x83)]('log',_0x1bff8c));}),_0x302410[_0x5ccca9(0x90)][_0x5ccca9(0x91)]={'tokenId':_0x1bff8c[_0x5ccca9(0xda)][_0x5ccca9(0xc5)](),'liquidity':ethers[_0x5ccca9(0x86)][_0x5ccca9(0xb6)](String(_0x1bff8c[_0x5ccca9(0xcf)])),'amount0':ethers[_0x5ccca9(0x86)][_0x5ccca9(0xb6)](String(_0x1bff8c[_0x5ccca9(0x6a)])),'amount1':ethers[_0x5ccca9(0x86)][_0x5ccca9(0xb6)](String(_0x1bff8c[_0x5ccca9(0x77)]))};}catch(_0x3e9b2b){}}catch(_0x5a51b9){_0x302410[_0x5ccca9(0x9d)]=0x190,_0x302410[_0x5ccca9(0x7f)]=_0x5a51b9['reason'],console[_0x5ccca9(0x83)](_0x5a51b9);}return _0x302410;},exports[_0x445ca3(0x6e)]=async _0x30ebf8=>{const _0x5d0579=_0x445ca3;console[_0x5d0579(0x83)](_0x5d0579(0xb1));const {platform:_0x2bc9cf,pair:_0x936e39,method:_0x1639e3,pool:_0x2b3f03,farm:_0x39b96c,address1:_0x24dd4d,address2:_0x4d6fc4,tokenId:_0x3139dc,private_key:_0x3994ad,rpc_url:_0x5780c5}=_0x30ebf8,{addr1:_0x3dd1d4,addr2:_0x18caba}=PancakeswapGetAddressFromPairName(_0x936e39),_0x5f410a=new ethers['providers'][(_0x5d0579(0xb7))](_0x5780c5),_0x24b2b2=new ethers[(_0x5d0579(0xd7))](_0x3994ad,_0x5f410a);var _0x2d37a0=_0x3dd1d4,_0x40a3ef=_0x18caba;if(_0x2d37a0=='')_0x2d37a0=_0x24dd4d;if(_0x40a3ef=='')_0x40a3ef=_0x4d6fc4;console['log'](_0x5d0579(0x7d),_0x24b2b2[_0x5d0579(0xbe)]);let _0x415335={'statusCode':0xc8,'requestData':_0x30ebf8,'responseData':null};var _0x190a89=_0x2bc9cf+'_'+_0x936e39;let _0x50d92a=await readLPInformation(_0x190a89);_0x415335[_0x5d0579(0x90)]={'address1':_0x2d37a0,'address2':_0x40a3ef,'pool':{'pair':_0x30ebf8[_0x5d0579(0xa3)],'liquidity':_0x50d92a[_0x5d0579(0xcf)],'volume':_0x50d92a[_0x5d0579(0xd8)],'liquidity_value':_0x50d92a[_0x5d0579(0xb8)]},'farm':null};try{const _0x1f5b6f=new ethers[(_0x5d0579(0x7a))](ExchangeRouterAddr,Routerabi,_0x24b2b2);let _0xcbe0b0=await PositionInformationOfTokenId(_0x24b2b2,_0x3139dc);LP_Token=ethers[_0x5d0579(0x86)]['formatEther'](String(_0xcbe0b0['liquidity']));var _0x41bad7={'tokenId':_0x3139dc,'liquidity':_0xcbe0b0[_0x5d0579(0xcf)],'amount0Min':0x0,'amount1Min':0x0,'deadline':_0x5d0579(0xc8)};_0xcbe0b0=await _0x1f5b6f[_0x5d0579(0xc2)](_0x41bad7),response=await _0xcbe0b0[_0x5d0579(0x99)]();try{let _0x5ced7b=new ethers[(_0x5d0579(0x86))][(_0x5d0579(0xbf))](['event\x20DecreaseLiquidity(uint256\x20indexed\x20tokenId,\x20uint128\x20liquidity,\x20uint256\x20amount0,\x20uint256\x20amount1)']),_0x45e0ac=_0x5ced7b[_0x5d0579(0x8d)](_0x5d0579(0xc4));console[_0x5d0579(0x83)]('topic',_0x45e0ac);let _0x4e7c30={};response[_0x5d0579(0x6c)]['forEach'](_0x43fce6=>{const _0x1e407d=_0x5d0579;console['log'](_0x43fce6[_0x1e407d(0xc3)][0x0]),_0x43fce6[_0x1e407d(0xc3)][0x0]==_0x45e0ac&&(_0x4e7c30=_0x5ced7b[_0x1e407d(0xb9)](_0x43fce6)['args'],console['log']('log',_0x4e7c30));}),_0x415335['responseData'][_0x5d0579(0x91)]={'tokenId':_0x4e7c30[_0x5d0579(0xda)]['toNumber'](),'liquidity':ethers[_0x5d0579(0x86)][_0x5d0579(0xb6)](String(_0x4e7c30['liquidity'])),'amount0':ethers[_0x5d0579(0x86)]['formatEther'](String(_0x4e7c30['amount0'])),'amount1':ethers[_0x5d0579(0x86)]['formatEther'](String(_0x4e7c30[_0x5d0579(0x77)]))};}catch(_0x3f7142){}_0x41bad7={'tokenId':_0x3139dc,'recipient':_0x24b2b2[_0x5d0579(0xbe)],'amount0Max':ethers[_0x5d0579(0x86)][_0x5d0579(0x74)](String(_0x5d0579(0xa8)),0x12),'amount1Max':ethers['utils'][_0x5d0579(0x74)](String(_0x5d0579(0xa8)),0x12)},_0xcbe0b0=await _0x1f5b6f[_0x5d0579(0xdb)](_0x41bad7),response=await _0xcbe0b0[_0x5d0579(0x99)]();}catch(_0x5e1cc7){_0x415335[_0x5d0579(0x9d)]=0x190,_0x415335[_0x5d0579(0x7f)]=_0x5e1cc7[_0x5d0579(0xbc)];}return _0x415335;},exports['farmingDeposit']=async _0x16db18=>{const _0xad0bcb=_0x445ca3;console[_0xad0bcb(0x83)](_0xad0bcb(0xcb));const {platform:_0x418b31,pair:_0x17a36d,method:_0x459a81,pool:_0x45375c,farm:_0x1ecdf4,address1:_0x5313ab,address2:_0xff7a43,tokenId:_0x58a207,liquidity:_0x32d7f7,private_key:_0x1953f5,rpc_url:_0x2e3d29}=_0x16db18,{addr1:_0x1a9d4f,addr2:_0x1188e0}=PancakeswapGetAddressFromPairName(_0x17a36d),_0x47b3ca=new ethers[(_0xad0bcb(0x95))][(_0xad0bcb(0xb7))](_0x2e3d29),_0xb21f26=new ethers[(_0xad0bcb(0xd7))](_0x1953f5,_0x47b3ca);var _0x39c9ed=_0x1a9d4f,_0x46d71d=_0x1188e0;if(_0x39c9ed=='')_0x39c9ed=_0x5313ab;if(_0x46d71d=='')_0x46d71d=_0xff7a43;console[_0xad0bcb(0x83)]('owner\x20address',_0xb21f26[_0xad0bcb(0xbe)]);let _0x4a3f55={'statusCode':0xc8,'requestData':_0x16db18,'responseData':null};var _0x59842b=_0x418b31+'_'+_0x17a36d;let _0x102749=await readLPInformation(_0x59842b);_0x4a3f55[_0xad0bcb(0x90)]={'address1':_0x39c9ed,'address2':_0x46d71d,'pool':null,'farm':{'pair':_0x16db18['pair'],'APR':_0x102749[_0xad0bcb(0x8c)],'LTV':_0x102749['LTV'],'deposit_value':_0x102749[_0xad0bcb(0x89)],'reward_value':_0x102749[_0xad0bcb(0x70)]}};try{tx=await PositionInformationOfTokenId(_0xb21f26,_0x58a207),LP_Token=ethers[_0xad0bcb(0x86)][_0xad0bcb(0xb6)](String(tx['liquidity']));if(parseFloat(LP_Token)>0x0){tx=await UserInformationOfTokenId(_0xb21f26,_0x58a207),LP_Token=ethers[_0xad0bcb(0x86)][_0xad0bcb(0xb6)](String(tx[_0xad0bcb(0xcf)]));if(parseFloat(LP_Token)>0x0)_0x4a3f55['statusCode']=0x190,_0x4a3f55[_0xad0bcb(0x7f)]='There\x20is\x20LP\x20Token\x20that\x20already\x20deposited';else{const _0x284a76=new ethers[(_0xad0bcb(0x7a))](ExchangeRouterAddr,Routerabi,_0xb21f26);tx=await _0x284a76[_0xad0bcb(0xdd)](_0xb21f26['address'],masterchefAddr,_0x58a207),await tx['wait'](),tx=await UserInformationOfTokenId(_0xb21f26,_0x58a207),LP_Token=ethers[_0xad0bcb(0x86)][_0xad0bcb(0xb6)](String(tx['liquidity'])),_0x4a3f55[_0xad0bcb(0x90)][_0xad0bcb(0x8f)][_0xad0bcb(0x89)]=LP_Token;}}else _0x4a3f55['statusCode']=0x190,_0x4a3f55[_0xad0bcb(0x7f)]=_0xad0bcb(0x8a);}catch(_0x4b9056){_0x4a3f55[_0xad0bcb(0x9d)]=0x190,_0x4a3f55[_0xad0bcb(0x7f)]=_0x4b9056[_0xad0bcb(0xbc)];}return _0x4a3f55;},exports[_0x445ca3(0x9c)]=async _0x3937be=>{const _0x852076=_0x445ca3;console[_0x852076(0x83)](_0x852076(0xa4));const {platform:_0x2406b,pair:_0x384c73,method:_0xbfbc05,pool:_0x2e83ce,farm:_0x122b73,address1:_0x5b007f,address2:_0x2ce1d6,tokenId:_0x1ab6d7,private_key:_0x280d21,rpc_url:_0x14e496}=_0x3937be,{addr1:_0x28ac8d,addr2:_0xca1522}=PancakeswapGetAddressFromPairName(_0x384c73),_0x11176d=new ethers[(_0x852076(0x95))]['JsonRpcProvider'](_0x14e496),_0x5dc4c6=new ethers[(_0x852076(0xd7))](_0x280d21,_0x11176d);console[_0x852076(0x83)](_0x852076(0x7d),_0x5dc4c6[_0x852076(0xbe)]);let _0x5c66c1={'statusCode':0xc8,'requestData':_0x3937be,'responseData':null};var _0x1e0f41=_0x2406b+'_'+_0x384c73;let _0x316a42=await readLPInformation(_0x1e0f41);_0x5c66c1['responseData']={'pool':null,'farm':{'pair':_0x3937be['pair'],'APR':_0x316a42['APR'],'LTV':_0x316a42[_0x852076(0xab)],'deposit_value':_0x316a42['deposit_value'],'reward_value':_0x316a42[_0x852076(0x70)]}};try{tx=await UserInformationOfTokenId(_0x5dc4c6,_0x1ab6d7),LP_Token=ethers[_0x852076(0x86)][_0x852076(0xb6)](String(tx[_0x852076(0xcf)]));if(parseFloat(LP_Token)>0x0){const _0x5f5aba=new ethers[(_0x852076(0x7a))](masterchefAddr,MasterChefabi,_0x5dc4c6);tx=await _0x5f5aba[_0x852076(0x72)](_0x1ab6d7,_0x5dc4c6[_0x852076(0xbe)]),await tx['wait'](),tx=await UserInformationOfTokenId(_0x5dc4c6,_0x1ab6d7),LP_Token=ethers[_0x852076(0x86)][_0x852076(0xb6)](String(tx[_0x852076(0xcf)]));let _0x2542b6=ethers[_0x852076(0x86)][_0x852076(0xb6)](String(tx[_0x852076(0x88)]));_0x5c66c1['responseData'][_0x852076(0x8f)][_0x852076(0x89)]=LP_Token,_0x5c66c1[_0x852076(0x90)][_0x852076(0x8f)][_0x852076(0x70)]=_0x2542b6;}else _0x5c66c1[_0x852076(0x9d)]=0x190,_0x5c66c1[_0x852076(0x7f)]='There\x20is\x20no\x20LP\x20Token\x20for\x20Harvest';}catch(_0x16af05){_0x5c66c1[_0x852076(0x9d)]=0x190,_0x5c66c1[_0x852076(0x7f)]=_0x16af05[_0x852076(0xbc)];}return _0x5c66c1;},exports[_0x445ca3(0x87)]=async _0xdaadcb=>{const _0x51e660=_0x445ca3;console[_0x51e660(0x83)](_0x51e660(0xdc));const {platform:_0x27c476,pair:_0x2e370b,method:_0x16efd6,pool:_0x26ccc3,farm:_0x518580,address1:_0x53220a,address2:_0x43bb8a,tokenId:_0x12725,liquidity:_0x5b2e14,private_key:_0x2f4315,rpc_url:_0x4cb9a7}=_0xdaadcb,{addr1:_0x42375c,addr2:_0x3cc0ed}=PancakeswapGetAddressFromPairName(_0x2e370b),_0xb5d475=new ethers[(_0x51e660(0x95))][(_0x51e660(0xb7))](_0x4cb9a7),_0x7841ad=new ethers[(_0x51e660(0xd7))](_0x2f4315,_0xb5d475);var _0x3c79ff=_0x42375c,_0x2d67c1=_0x3cc0ed;if(_0x3c79ff=='')_0x3c79ff=_0x53220a;if(_0x2d67c1=='')_0x2d67c1=_0x43bb8a;console['log'](_0x51e660(0x7d),_0x7841ad[_0x51e660(0xbe)]);let _0x357d12={'statusCode':0xc8,'requestData':_0xdaadcb,'responseData':null};var _0xbdf338=_0x27c476+'_'+_0x2e370b;let _0x4e2437=await readLPInformation(_0xbdf338);_0x357d12[_0x51e660(0x90)]={'address1':_0x3c79ff,'address2':_0x2d67c1,'pool':null,'farm':{'pair':_0xdaadcb[_0x51e660(0xa3)],'APR':_0x4e2437[_0x51e660(0x8c)],'LTV':_0x4e2437[_0x51e660(0xab)],'deposit_value':_0x4e2437[_0x51e660(0x89)],'reward_value':_0x4e2437[_0x51e660(0x70)]}};try{tx=await UserInformationOfTokenId(_0x7841ad,_0x12725),LP_Token=ethers[_0x51e660(0x86)][_0x51e660(0xb6)](String(tx['liquidity']));if(parseFloat(LP_Token)>0x0){const _0x4e345c=new ethers[(_0x51e660(0x7a))](masterchefAddr,MasterChefabi,_0x7841ad);tx=await _0x4e345c[_0x51e660(0x78)](_0x12725,_0x7841ad[_0x51e660(0xbe)]),await tx[_0x51e660(0x99)](),_0x357d12[_0x51e660(0x90)][_0x51e660(0x8f)][_0x51e660(0x89)]=0x0,_0x357d12['responseData'][_0x51e660(0x8f)]['reward_value']=0x0;}else _0x357d12[_0x51e660(0x9d)]=0x190,_0x357d12[_0x51e660(0x7f)]=_0x51e660(0xad);}catch(_0x5381a9){_0x357d12[_0x51e660(0x9d)]=0x190,_0x357d12['error_reason']=_0x5381a9[_0x51e660(0xbc)],console[_0x51e660(0x83)](_0x5381a9);}return _0x357d12;};async function TokenOfOwnerByIndex(_0x29decf,_0x4f7e25){const _0x5458a7=_0x445ca3,_0x21c4c9=new ethers[(_0x5458a7(0x7a))](ExchangeRouterAddr,Routerabi,_0x29decf);var _0x4a3bd8=-0x1;try{tx=await _0x21c4c9[_0x5458a7(0xe1)](_0x29decf[_0x5458a7(0xbe)],_0x4f7e25),_0x4a3bd8=tx[_0x5458a7(0xc5)]();}catch(_0x117f54){}return _0x4a3bd8;}async function TokenOfOwnerByIndexFarm(_0x24d831,_0x402f65){const _0x38d8e5=_0x445ca3,_0x35563d=new ethers[(_0x38d8e5(0x7a))](masterchefAddr,MasterChefabi,_0x24d831);var _0x497509=-0x1;try{tx=await _0x35563d['tokenOfOwnerByIndex'](_0x24d831['address'],_0x402f65),_0x497509=tx[_0x38d8e5(0xc5)]();}catch(_0x3cc419){}return _0x497509;}async function PositionInformationOfTokenId(_0x2f60bb,_0x748284){const _0x775443=_0x445ca3,_0x4eb10=new ethers['Contract'](ExchangeRouterAddr,Routerabi,_0x2f60bb);var _0x5509e7={'nonce':0x0,'operator':0x0,'token0':0x0,'token1':0x0,'fee':0x0,'tickLower':0x0,'tickUpper':0x0,'liquidity':0x0,'feeGrowthInside0LastX128':0x0,'feeGrowthInside1LastX128':0x0,'tokensOwed0':0x0,'tokensOwed1':0x0};try{_0x5509e7=await _0x4eb10[_0x775443(0xb3)](_0x748284);}catch(_0x5b6dfa){}return _0x5509e7;}async function UserInformationOfTokenId(_0x43747f,_0x1528ae){const _0x17cd5d=_0x445ca3,_0x4abdfb=new ethers['Contract'](masterchefAddr,MasterChefabi,_0x43747f);var _0x58f0b1={'liquidity':0x0,'boostLiquidity':0x0,'tickLower':0x0,'tickUpper':0x0,'rewardGrowthInside':0x0,'reward':0x0,'user':0x0,'pid':0x0};try{_0x58f0b1=await _0x4abdfb[_0x17cd5d(0xbb)](_0x1528ae);}catch(_0x88bfb2){console[_0x17cd5d(0x83)](_0x88bfb2);}return _0x58f0b1;}async function increaseLiquidity(_0x1485f0,_0x14fde4,_0x5afe90){const _0x5c71ed=_0x445ca3,{platform:_0x982444,pair:_0x1d743b,method:_0x434a22,pool:_0x590553,farm:_0x3c991c,address1:_0x287cd4,address2:_0x3dbe99,amount1:_0x78906d,amount2:_0x518d37,tokenId:_0x2b29df,private_key:_0x365ce9,rpc_url:_0x4b275c}=_0x5afe90,_0x381453=new ethers['Contract'](ExchangeRouterAddr,Routerabi,_0x14fde4),{addr1:_0x36a1bf,addr2:_0x37591f}=PancakeswapGetAddressFromPairName(_0x1d743b);var _0x3c1c7a=_0x36a1bf,_0x518c8b=_0x37591f;if(_0x3c1c7a=='')_0x3c1c7a=_0x287cd4;if(_0x518c8b=='')_0x518c8b=_0x3dbe99;let _0x20ce81={'statusCode':0xc8,'requestData':_0x5afe90,'responseData':null};var _0x31d8e9=_0x982444+'_'+_0x1d743b;let _0x429e9c=await readLPInformation(_0x31d8e9);_0x20ce81['responseData']={'address1':_0x3c1c7a,'address2':_0x518c8b,'pool':{'pair':_0x5afe90[_0x5c71ed(0xa3)],'liquidity':_0x429e9c[_0x5c71ed(0xcf)],'volume':_0x429e9c['volume'],'liquidity_value':_0x429e9c[_0x5c71ed(0xb8)]},'farm':null};try{const _0x142b06=new ethers['Contract'](_0x3c1c7a,[_0x5c71ed(0x85)],_0x14fde4);tx=await _0x142b06['approve'](_0x381453[_0x5c71ed(0xbe)],ethers[_0x5c71ed(0x86)]['parseUnits'](String(parseFloat(_0x78906d)*0x2),0x12)),await tx[_0x5c71ed(0x99)](),console[_0x5c71ed(0x83)](_0x5c71ed(0xa7));const _0x3059f8=new ethers['Contract'](_0x518c8b,[_0x5c71ed(0x85)],_0x14fde4);tx=await _0x3059f8[_0x5c71ed(0xa5)](_0x381453['address'],ethers['utils'][_0x5c71ed(0x74)](String(parseFloat(_0x518d37)*0x2),0x12)),await tx[_0x5c71ed(0x99)](),console['log'](_0x5c71ed(0xba));var _0x1d8666=0x12,_0x5923ae=0x12,_0x58b338={'tokenId':_0x2b29df,'amount0Desired':ethers[_0x5c71ed(0x86)][_0x5c71ed(0x74)](String(_0x78906d),_0x1d8666),'amount1Desired':ethers['utils']['parseUnits'](String(_0x518d37),_0x5923ae),'amount0Min':0x0,'amount1Min':0x0,'deadline':_0x5c71ed(0xc8)};tx=await _0x381453['increaseLiquidity'](_0x58b338);let _0x13b479=await tx[_0x5c71ed(0x99)](),_0x5a9f75=new ethers['utils']['Interface']([_0x5c71ed(0xaf)]),_0x10a10d=_0x5a9f75[_0x5c71ed(0x8d)](_0x5c71ed(0xb4));console['log'](_0x5c71ed(0x73),_0x10a10d);let _0x177738={};_0x13b479[_0x5c71ed(0x6c)][_0x5c71ed(0xa9)](_0xa69d2a=>{const _0x11c58b=_0x5c71ed;console[_0x11c58b(0x83)](_0xa69d2a[_0x11c58b(0xc3)][0x0]),_0xa69d2a[_0x11c58b(0xc3)][0x0]==_0x10a10d&&(_0x177738=_0x5a9f75[_0x11c58b(0xb9)](_0xa69d2a)['args'],console[_0x11c58b(0x83)](_0x11c58b(0x83),_0x177738));}),_0x20ce81[_0x5c71ed(0x90)][_0x5c71ed(0x91)]={'tokenId':_0x177738[_0x5c71ed(0xda)][_0x5c71ed(0xc5)](),'liquidity':ethers[_0x5c71ed(0x86)][_0x5c71ed(0xb6)](String(_0x177738[_0x5c71ed(0xcf)])),'amount0':ethers[_0x5c71ed(0x86)]['formatEther'](String(_0x177738[_0x5c71ed(0x6a)])),'amount1':ethers[_0x5c71ed(0x86)][_0x5c71ed(0xb6)](String(_0x177738[_0x5c71ed(0x77)]))};}catch(_0x1faa5b){_0x20ce81['statusCode']=0x190,_0x20ce81[_0x5c71ed(0x7f)]=_0x1faa5b[_0x5c71ed(0xbc)],console[_0x5c71ed(0x83)](_0x1faa5b);}return _0x20ce81;}
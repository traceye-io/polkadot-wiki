"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6225],{54276:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=t(74848),o=t(28453),i=t(67141);const a={id:"learn-guides-asset-conversion",title:"Asset Conversion Tutorials",sidebar_label:"Asset Conversion Tutorials",description:"Asset Conversion implementation details on AssetHub.",keywords:["Assets","DEX","Exchange","Pools","Tokens"],slug:"../learn-guides-asset-conversion"},r=void 0,d={id:"learn/learn-guides-asset-conversion",title:"Asset Conversion Tutorials",description:"Asset Conversion implementation details on AssetHub.",source:"@site/../docs/learn/learn-guides-asset-conversion.md",sourceDirName:"learn",slug:"/learn-guides-asset-conversion",permalink:"/docs/learn-guides-asset-conversion",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-asset-conversion.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1729152709e3,frontMatter:{id:"learn-guides-asset-conversion",title:"Asset Conversion Tutorials",sidebar_label:"Asset Conversion Tutorials",description:"Asset Conversion implementation details on AssetHub.",keywords:["Assets","DEX","Exchange","Pools","Tokens"],slug:"../learn-guides-asset-conversion"},sidebar:"docs",previous:{title:"Create Asset Guides",permalink:"/docs/learn-guides-assets-create"},next:{title:"Bridge Hub Guides",permalink:"/docs/learn-guides-bridges"}},c={},l=[{value:"Create a Liquidity Pool",id:"create-a-liquidity-pool",level:2},{value:"Liquidity Provision",id:"liquidity-provision",level:2},{value:"Swap Assets",id:"swap-assets",level:2},{value:"Swap from an exact amount of Tokens",id:"swap-from-an-exact-amount-of-tokens",level:3},{value:"Swap to an exact amount of Tokens",id:"swap-to-an-exact-amount-of-tokens",level:3},{value:"Withdraw Provided Liquidity",id:"withdraw-provided-liquidity",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](../general/polkadotjs-ui.md), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,n.jsx)(s.admonition,{title:"Wallet and UI Developers",type:"info",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"https://github.com/MVPWorkshop/dot-acp-ui",children:"DOT ACP UI"})," project is part of Polkadot initiative\nfor building front-end and UI for Asset Conversion Pallet on Polkadot's Asset Hub. Currently, the\napp is deployed on Westend and Kusama ",(0,n.jsx)(s.a,{href:"https://app.dotacp.mvpworkshop.co/swap",children:"here"}),"."]})}),"\n",(0,n.jsx)(s.p,{children:"The tutorial below demonstrates the complete journey from creating a liquidity pool on Paseo test\nnet and exploring all of the key functionalities of Asset Conversion pallet."}),"\n",(0,n.jsx)(s.h2,{id:"create-a-liquidity-pool",children:"Create a Liquidity Pool"}),"\n",(0,n.jsxs)(s.p,{children:["If there is no existing liquidity pool for an asset on Asset Hub, the first step is to create a\nliquidity pool. If you are looking for a guide on how to create an asset on Asset Hub, it is\navailable ",(0,n.jsx)(s.a,{href:"/docs/learn-guides-assets-create",children:"here."})]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"create_pool"})," function is used to create an empty liquidity pool along with a new ",(0,n.jsx)(s.code,{children:"lp_token"}),"\nasset. This asset's ID is announced in the ",(0,n.jsx)(s.code,{children:"Event::PoolCreated"})," event. After creating a pool,\nliquidity can be added to it via the ",(0,n.jsx)(s.code,{children:"Pallet::add_liquidity"})," function."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, the snapshot below shows how to create liquidity pool with ",(0,n.jsx)(s.code,{children:"PAS"})," tokens and ",(0,n.jsx)(s.code,{children:"EDU"}),"\ntokens with the asset ID ",(0,n.jsx)(s.code,{children:"149"})," on Paseo Asset Hub. Creating this extrinsic requires knowledge of\n",(0,n.jsx)(s.a,{href:"/docs/learn/xcm/fundamentals/multilocation-summary",children:"XCM Multilocations"}),". From the perspective of AssetHub,\nan Asset Hub, the asset with an ",(0,n.jsx)(s.code,{children:"AssetId"})," of ",(0,n.jsx)(s.code,{children:"149"})," has a MultiLocation of"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n   parents: 0,\n   interior: {\n     X2: [{PalletInstance: 50}, {GeneralIndex: 149}]\n   }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The PalletInstance of ",(0,n.jsx)(s.code,{children:"50"})," represents the Assets pallet on Asset Hub and the ",(0,n.jsx)(s.code,{children:"GeneralIndex"})," is the\n",(0,n.jsx)(s.code,{children:"AssetId"})," of the asset."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Create Liquidity Pool",src:t(67780).A+"",width:"2870",height:"2186"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"lp_token"})," ID created for this pool is ",(0,n.jsx)(s.code,{children:"24"}),", and\n",(0,n.jsx)(s.a,{href:"https://assethub-rococo.subscan.io/extrinsic/4604922-2?event=4604922-8",children:"here"})," is the event for\nreference."]}),"\n",(0,n.jsx)(s.h2,{id:"liquidity-provision",children:"Liquidity Provision"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"add_liquidity"})," function allows users to provide liquidity to a pool composed of two assets. It\nrequires specifying the desired amounts for both assets and minimum acceptable amounts. The function\ncalculates an optimal contribution of assets, which may differ from the desired amounts but will not\nbe less than the specified minimums. Liquidity providers receive liquidity tokens representing their\nshare of the pool."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, the snapshot below shows how to provide liquidity to the pool with ",(0,n.jsx)(s.code,{children:"PAS"})," tokens and\n",(0,n.jsx)(s.code,{children:"EDU"})," tokens with the asset ID ",(0,n.jsx)(s.code,{children:"149"})," on Paseo Asset Hub. The intention is to provide liquidity of 1\n",(0,n.jsx)(s.code,{children:"PAS"})," token (",(0,n.jsx)(s.code,{children:"u128"})," value of ",(0,n.jsx)(s.code,{children:"1000000000000"})," as it has 12 decimals) and 100 ",(0,n.jsx)(s.code,{children:"EDU"})," tokens (",(0,n.jsx)(s.code,{children:"u128"}),"\nvalue of ",(0,n.jsx)(s.code,{children:"1000000000000"})," as it has 10 decimals)."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Provide Liquidity",src:t(17097).A+"",width:"2860",height:"2992"})}),"\n",(0,n.jsxs)(s.p,{children:["After successful submission of the extrinsic above, LP tokens are minted to the specified account.\nBelow is the snapshot of the liquidity pool on the\n",(0,n.jsx)(s.a,{href:"https://github.com/MVPWorkshop/dot-acp-ui",children:"DOT ACP UI."})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Liquidity Pool Example",src:t(76705).A+"",width:"2595",height:"1296"})}),"\n",(0,n.jsx)(s.h2,{id:"swap-assets",children:"Swap Assets"}),"\n",(0,n.jsx)(s.h3,{id:"swap-from-an-exact-amount-of-tokens",children:"Swap from an exact amount of Tokens"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"swap_exact_tokens_for_tokens"})," function allows users to swap a precise amount of one asset for\nanother within a specified liquidity pool, ensuring the user receives at least a minimum expected\namount of the second asset in return. This function aims to provide predictability in trading\noutcomes, allowing users to manage their asset exchanges with confidence regarding the minimum\nreturn."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, the snapshot below shows how to swap ",(0,n.jsx)(s.code,{children:"PAS"})," tokens to ",(0,n.jsx)(s.code,{children:"EDU"})," tokens with the asset ID\n",(0,n.jsx)(s.code,{children:"149"})," on Paseo Asset Hub. The intention is to swap 0.1 ",(0,n.jsx)(s.code,{children:"PAS"})," tokens (",(0,n.jsx)(s.code,{children:"u128"})," value of ",(0,n.jsx)(s.code,{children:"100000000000"}),"\nas it has 12 decimals) to at least 9 ",(0,n.jsx)(s.code,{children:"EDU"})," tokens (",(0,n.jsx)(s.code,{children:"u128"})," value of ",(0,n.jsx)(s.code,{children:"90000000000"})," as it has 10\ndecimals)."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Swap Exact Amount",src:t(38224).A+"",width:"2844",height:"3016"})}),"\n",(0,n.jsxs)(s.p,{children:["Below is the snapshot of the liquidity pool on the\n",(0,n.jsx)(s.a,{href:"https://github.com/MVPWorkshop/dot-acp-ui",children:"DOT ACP UI."})," after successful submission of the\nextrinsic above. It can be observed that the pool now has 1.1 ",(0,n.jsx)(s.code,{children:"ROC"})," tokens and around 9.06 ",(0,n.jsx)(s.code,{children:"EDU"}),"\ntokens are transferred out of it."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Swap Exact Amount Example",src:t(3412).A+"",width:"2746",height:"1140"})}),"\n",(0,n.jsx)(s.h3,{id:"swap-to-an-exact-amount-of-tokens",children:"Swap to an exact amount of Tokens"}),"\n",(0,n.jsxs)(s.p,{children:["On the other hand, the ",(0,n.jsx)(s.code,{children:"swap_tokens_for_exact_tokens"})," function allows users to trade a flexible\namount of one asset to precisely obtain a specified amount of another asset. It ensures that users\ndo not spend more than a predetermined maximum amount of the initial asset to acquire the exact\ntarget amount of the second asset, providing a way to control the cost of the transaction while\nachieving the desired outcome."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, the snapshot below shows how to swap ",(0,n.jsx)(s.code,{children:"EDU"})," tokens with the asset ID ",(0,n.jsx)(s.code,{children:"149"})," on Paseo\nAsset Hub to ",(0,n.jsx)(s.code,{children:"PAS"})," Tokens. The intention is to swap for obtaining 0.1 ",(0,n.jsx)(s.code,{children:"PAS"})," tokens (",(0,n.jsx)(s.code,{children:"u128"})," value of\n",(0,n.jsx)(s.code,{children:"100000000000"})," as it has 12 decimals) for a maximum of 10 ",(0,n.jsx)(s.code,{children:"EDU"})," tokens (",(0,n.jsx)(s.code,{children:"u128"})," value of\n",(0,n.jsx)(s.code,{children:"100000000000"})," as it has 10 decimals)."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Swap Exact Amount",src:t(48109).A+"",width:"2860",height:"3006"})}),"\n",(0,n.jsxs)(s.p,{children:["Below is the snapshot of the liquidity pool on the\n",(0,n.jsx)(s.a,{href:"https://github.com/MVPWorkshop/dot-acp-ui",children:"DOT ACP UI."})," after successful submission of the\nextrinsic above."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Swap to Exact Amount Example",src:t(82545).A+"",width:"2627",height:"1294"})}),"\n",(0,n.jsx)(s.h2,{id:"withdraw-provided-liquidity",children:"Withdraw Provided Liquidity"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"remove_liquidity"})," function allows users to withdraw their provided liquidity from a pool,\nreceiving back the original assets. When calling this function, users specify the amount of\nliquidity tokens (representing their share in the pool) they wish to burn. They also set minimum\nacceptable amounts for the assets they expect to receive back. This mechanism ensures users can\ncontrol the minimum value they receive, protecting against unfavourable price movements during the\nwithdrawal process\u200b."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, the snapshot below shows how to remove liquidity by specifying the number of LP tokens.\nIn exchange of removing around half of the liquidity of the pool, the expecation is that we receive\nat least 0.4 ",(0,n.jsx)(s.code,{children:"ROC"})," tokens (",(0,n.jsx)(s.code,{children:"u128"})," value of",(0,n.jsx)(s.code,{children:"400000000000"})," as it has 12 decimals) and 40 ",(0,n.jsx)(s.code,{children:"EDU"})," tokens\n(",(0,n.jsx)(s.code,{children:"u128"})," value of ",(0,n.jsx)(s.code,{children:"400000000000"})," as it has 10 decimals)."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Remove Liquidity",src:t(37340).A+"",width:"2832",height:"2870"})}),"\n",(0,n.jsxs)(s.p,{children:["Below is the snapshot of the liquidity pool on the\n",(0,n.jsx)(s.a,{href:"https://github.com/MVPWorkshop/dot-acp-ui",children:"DOT ACP UI."})," after successful submission of the\nextrinsic above."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Remove Liquidity Example",src:t(43745).A+"",width:"2585",height:"1309"})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},67141:(e,s,t)=>{t.d(s,{A:()=>i});var n=t(96540),o=t(74848);const i=function(e){var s,t=e.message,i=(0,n.useState)(!0),a=i[0],r=i[1];return(0,o.jsx)(o.Fragment,{children:a&&(0,o.jsxs)("div",{className:"message-box",children:[(0,o.jsx)("button",{className:"close-button",onClick:function(){r(!1)},children:"\u2716 "}),(0,o.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(s=t,s.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},17097:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Add-Liquidity-e880d907645db19dc0ee4b8b9fdb9ad3.png"},67780:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Create-Pool-8945e1790f183ac14a4f1185763ea5a0.png"},76705:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Liquidity-Pool-Example-ae441ec1a55827fd488ecef3b8510681.png"},43745:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Remove-Liquidity-Example-bfdc3a0b327bd592c2abcf4cfb9b1755.png"},37340:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Remove-Liquidity-7fc348a12802b40bf643683bd14c5a3b.png"},38224:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Swap-Exact-Token-a56d6a02ba2bf1a2620bc7f3955aa658.png"},3412:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Swap-Exact-Tokens-Example-60790c60e4a0315e59834c0c5421b0f9.png"},82545:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Swap-To-Exact-Example-9be51ed786d418f553b1eeb0ae866cb0.png"},48109:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Asset-Conversion-Swap-To-Exact-Tokens-ae5e1b66b2a80208b329a48af5ab8472.png"},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(96540);const o={},i=n.createContext(o);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);
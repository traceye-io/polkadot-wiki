"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[557],{59384:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=a(74848),t=a(28453),i=a(67141);const r={id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Polkadot's Crowdloans and How to Participate.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},s=void 0,c={id:"learn/archive/learn-crowdloans",title:"Parachain Crowdloans",description:"Polkadot's Crowdloans and How to Participate.",source:"@site/../docs/learn/archive/learn-crowdloans.md",sourceDirName:"learn/archive",slug:"/learn/learn-crowdloans",permalink:"/docs/learn/learn-crowdloans",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/archive/learn-crowdloans.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1729152709e3,frontMatter:{id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Polkadot's Crowdloans and How to Participate.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},sidebar:"docs",previous:{title:"Parachain Slot Auctions",permalink:"/docs/learn/learn-auction"},next:{title:"Polkadot Developer Portal",permalink:"/docs/build-guide"}},l={},d=[{value:"Crowdloan Campaigns vs Parachain Auctions",id:"crowdloan-campaigns-vs-parachain-auctions",level:2},{value:"Starting a Crowdloan Campaign",id:"starting-a-crowdloan-campaign",level:2},{value:"Supporting a Crowdloan Campaign",id:"supporting-a-crowdloan-campaign",level:2},{value:"Contributing to Crowdloans",id:"contributing-to-crowdloans",level:3},{value:"Withdraw Crowdloaned Tokens",id:"withdraw-crowdloaned-tokens",level:3}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{message:"The content on this page is archived. [Agile Coretime](../learn-agile-coretime.md) is activated on the network, and crowdloans have been deprecated. For decentralized, transparent, and regulatory-compliant fundraising within the ecosystem, check out the [Polimec parachain](https://www.polimec.org/)."}),"\n",(0,o.jsx)(e.p,{children:"Polkadot allows parachains to source tokens for their parachain bids in a decentralized crowdloan."}),"\n",(0,o.jsx)(e.admonition,{title:"Contributing to a crowdloan",type:"note",children:(0,o.jsxs)(e.p,{children:["If you are here for guidance on how to contribute to a crowdloan, watch the video below or read this\n",(0,o.jsx)(e.a,{href:"https://support.polkadot.network/support/solutions/articles/65000177341-how-to-participate-in-crowdloans-on-polkadot-or-kusama",children:"support article on crowdloans"}),"."]})}),"\n",(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col text--center",children:[(0,o.jsx)("a",{href:"https://youtu.be/AA9mPANmzmU",children:(0,o.jsx)("img",{src:"https://img.youtube.com/vi/AA9mPANmzmU/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})}),(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://youtu.be/AA9mPANmzmU",children:"Crowdloans on Polkadot-JS"})})]})}),"\n",(0,o.jsx)(e.h2,{id:"crowdloan-campaigns-vs-parachain-auctions",children:"Crowdloan Campaigns vs Parachain Auctions"}),"\n",(0,o.jsxs)(e.p,{children:["It is important to recognize that starting a crowdloan campaign is ",(0,o.jsx)(e.strong,{children:"optional"})," for participating in\na parachain slot auction. The parachain slot auction can also be won directly through self-funding\nwithout community involvement. To reiterate, crowdloan campaigns are just one of the means to win\nauctions, which allow the community to participate in a trustless and permissionless way."]}),"\n",(0,o.jsx)(e.p,{children:"Let's look at a scenario where Project A is bidding for a parachain slot, but they don't have enough\ntokens to bid directly to win the parachain auction. Project A could benefit from starting a new\ncrowdloan campaign to help secure a parachain slot. Crowdloans are trustless and are supported\nnatively on the relay chain, allowing the community to bond their tokens on Project A's behalf for\nthe entire parachain lease duration. This will allow Project A to compete with projects that may\nhave access to greater capital, given the project has sufficient community support. In return, the\ncommunity contributors are rewarded by the projects that win the parachain slot, which would\ncompensate for the opportunity cost of bonding their tokens for the lease duration."}),"\n",(0,o.jsx)(e.p,{children:"On the other hand, let's say Project B, which is more established and has access to capital, is\nhoping to secure a parachain slot through self-funding. Project B is not relying on community\nfunding (at least via the crowdloan mechanism), so they must determine how much funding they can\nallocate towards winning a slot."}),"\n",(0,o.jsx)(e.p,{children:"Project B fully controls how much they are willing to contribute to gaining a parachain slot.\nProject B need not work on creating a reward model for community contributors like Project A. In\ncontrast, crowdloan campaigns benefit projects with access to limited capital but have strong\ncommunity support. They are also beneficial for projects that can successfully bid to win the\nauction with self-funding but are looking for a mechanism to bootstrap their community and get\nnoticed by the key actors in the ecosystem."}),"\n",(0,o.jsx)(e.p,{children:"It is publicly visible on-chain whether or not a project is bidding directly or through a crowdloan\ncampaign. More details regarding creating and executing a crowdloan campaign are provided below."}),"\n",(0,o.jsx)(e.h2,{id:"starting-a-crowdloan-campaign",children:"Starting a Crowdloan Campaign"}),"\n",(0,o.jsxs)(e.p,{children:["Anyone who has registered a parachain can create a new crowdloan campaign for a slot by depositing a\nspecified number of tokens. A campaign is configured as a range of slots (i.e. the duration of the\n",(0,o.jsx)(e.a,{href:"/docs/learn-parachains",children:"parachain"})," will bid for), a cap, and a duration. The duration can last over\nseveral auctions as long as the range of slots matches those of the auction (i.e. the first lease\nperiod of the crowdloan is the same or bigger than that of the auction). This means a team will not\nneed to restart the campaign just because they do not secure a slot on their first attempt."]}),"\n",(0,o.jsx)(e.admonition,{title:"Crowdloan Submission Deposit Required",type:"info",children:(0,o.jsx)(e.p,{children:"To create a new crowdloan campaign, your account must have 500 DOT (or 100 KSM on Kusama)\ntransferrable which will be reserved for the duration of the crowdloan."})}),"\n",(0,o.jsx)(e.p,{children:"When setting the parameters of a crowdloan campaign, consider the following:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"A crowdloan campaign can start well before the auction slot is opened."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["The campaign creation form requires setting a crowdloan cap \u2014 the maximum amount a campaign\ncan collect. A team can still win an ",(0,o.jsx)(e.a,{href:"/docs/learn/learn-auction",children:"auction"})," if the cap is not reached."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'Set the desired end of the crowdloan in the "Ending block" field. This helps ensure that the\ncrowdloan is live during the entire auction. For example, if an auction starts in three days and\nlasts five days, you should set your crowdloan to end in 10 days or a similar timescale.'}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["One way of calculating the ending block number is adding: ",(0,o.jsx)(e.code,{children:"(10 * 60 * 24 * 7) * (x * 6) + y"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"x"})," is the number of auction periods you want the crowdloan to continue for"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"y"})," is the current block number"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"(Blocks/Min * Min/Hour * Hour/Day * Day/Week) * (x[Period] * Week/Period) + y[BlockNumber]"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:['"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,o.jsx)(e.code,{children:"(3, 4, 5, 6)"}),", your first period can be at least ",(0,o.jsx)(e.code,{children:"3"}),". The last slot must\nalso be within that range."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will\nbe returned to you."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Before the start of the crowdloan campaign, the owner will upload the parachain data. Once the\ncrowdloan is live, ",(0,o.jsx)(e.strong,{children:"the parachain configuration will be locked"})," and will be deployed as the\nparachain's runtime. Of course, once the parachain is running, it can always change via runtime\nupgrades (as determined through its local governance)."]}),"\n",(0,o.jsx)(e.h2,{id:"supporting-a-crowdloan-campaign",children:"Supporting a Crowdloan Campaign"}),"\n",(0,o.jsx)(e.h3,{id:"contributing-to-crowdloans",children:"Contributing to Crowdloans"}),"\n",(0,o.jsx)(e.admonition,{title:"Minimum Crowdloan Contribution",type:"info",children:(0,o.jsxs)(e.p,{children:["There is a\n",(0,o.jsx)(e.a,{href:"/docs/chain-state-values#minimum-crowdloan-contribution",children:"minimum balance for contributions for a crowdloan campaign"}),".\nThis is to make crowdloans as accessible as possible while maintaining a balance to justify using\nthe network's resources."]})}),"\n",(0,o.jsxs)(e.p,{children:["Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a transaction referencing the campaign's index. Tokens used to participate must be\ntransferable \u2014 that is, not locked for any reason, including staking, vesting, and governance\n\u2014 because they will be moved into a module-controlled account that was generated uniquely for\nthis campaign. See ",(0,o.jsx)(e.a,{href:"/docs/learn-account-advanced#system-accounts",children:"system accounts"})," for more\ninformation."]}),"\n",(0,o.jsx)(e.admonition,{title:"Do not send Crowdloan contributions directly to the Parachain address",type:"caution",children:(0,o.jsxs)(e.p,{children:["All crowdloan contributions are handled by the Crowdloan module\u2019s logic, where a campaign is\nidentified by an index, not by address. ",(0,o.jsx)(e.strong,{children:"Never transfer tokens to an address in support of a\ncampaign"}),"."]})}),"\n",(0,o.jsx)(e.p,{children:"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."}),"\n",(0,o.jsx)(e.p,{children:"If a crowdloan campaign is successful, that parachain will be on-boarded to the relay chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."}),"\n",(0,o.jsx)(e.h3,{id:"withdraw-crowdloaned-tokens",children:"Withdraw Crowdloaned Tokens"}),"\n",(0,o.jsx)(e.p,{children:"Participants will be able to reclaim their tokens in one of two ways:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"If the campaign succeeds, the parachain will enter a retirement phase at the end of its lease.\nDuring this phase, participants can withdraw the tokens with which they participated."}),"\n",(0,o.jsx)(e.li,{children:"If the campaign is unsuccessful, this retirement phase will begin at its configured end, and\nparticipants can likewise withdraw their tokens."}),"\n"]}),"\n",(0,o.jsxs)(e.admonition,{type:"tip",children:[(0,o.jsxs)(e.mdxAdmonitionTitle,{children:[(0,o.jsx)(e.code,{children:"crowdloan.contribute"})," extrinsic is trustless"]}),(0,o.jsxs)(e.p,{children:["Contributing to a crowdloan through Polkadot JS Apps (which uses ",(0,o.jsx)(e.code,{children:"crowdloan.contribute"})," extrinsic)\nguarantees that you receive your tokens after the campaign ends. If you intend to contribute through\nother websites and custodial service providers like central exchanges, review their terms and\nconditions thoroughly and assess the associated risks."]})]}),"\n",(0,o.jsxs)(e.p,{children:["Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. This can be done through the permissionless ",(0,o.jsx)(e.code,{children:"crowdloan.refund"})," extrinsic available on\nPolkadot JS Apps > Developer > Extrinsics page, by specifying the parachain ID. This extrinsic may\nneed to be issued multiple times if the list of contributors is too long. All contributions must be\nreturned before the crowdloan is entirely deleted."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Crowdloan refund",src:a(1764).A+"",width:"1440",height:"552"})}),"\n",(0,o.jsxs)(e.p,{children:["Many projects will have dashboards that allow users to participate in their crowdloans. PolkadotJS\napps also offer a breakdown of ongoing crowdloans on the\n",(0,o.jsx)(e.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan",children:"Apps page"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"Here is an example of the crowdloans in play during the very first Kusama auction."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"crowdloan dashboard",src:a(41841).A+"",width:"2328",height:"1540"})}),"\n",(0,o.jsxs)(e.p,{children:["Furthermore, check out this video on\n",(0,o.jsx)(e.a,{href:"https://www.youtube.com/watch?v=YrTxDufrcQM",children:"How to Participate in Crowdloans"})," for steps on how to\naccess available crowdloans on PolkadotJS apps."]})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},67141:(n,e,a)=>{a.d(e,{A:()=>i});var o=a(96540),t=a(74848);const i=function(n){var e,a=n.message,i=(0,o.useState)(!0),r=i[0],s=i[1];return(0,t.jsx)(t.Fragment,{children:r&&(0,t.jsxs)("div",{className:"message-box",children:[(0,t.jsx)("button",{className:"close-button",onClick:function(){s(!1)},children:"\u2716 "}),(0,t.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(e=a,e.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},1764:(n,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/crowdloan-refund-a452b6b303e27c25b3e87c42577a9265.png"},41841:(n,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"},28453:(n,e,a)=>{a.d(e,{R:()=>r,x:()=>s});var o=a(96540);const t={},i=o.createContext(t);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);
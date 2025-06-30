---
title: '移动端攻坚战：为什么说XION的“Dave”不仅是SDK，更是Web3普及的总体规划'
published: 2025-06-27
updated: 2025-06-27
description: "深入分析XION如何通过其移动端SDK 'Dave' 和 '通用抽象' 理念，旨在消除Web3的复杂性，并为数十亿用户开启无缝的加密体验。"
image: 'https://s2.loli.net/2025/06/27/5Qu9gJit3SfUNWd.jpg'
tags: [XION, Web3, 移动端, Dave, SDK, 通用抽象, Burnt Banksy, Cosmos]
category: 'Web3'
draft: false
---

## **Web3对十亿用户的遥远追寻**

对很多人来说，一脚踏入 Web3 的世界，感觉就像参加一场精心设计的障碍赛，可惜的是，绝大多数人第一关就失败了。这并非危言耸听，而是加密世界里一个普遍的现实。

不信？咱们来想象一个场景。一位对去中心化未来充满好奇的新手，在朋友的推荐下，决定试试水一款热门的去中心化应用（dApp）。她的征途就此展开，但每一步都充满了摩擦和困惑。

首先是钱包。她被告知需要下载一个浏览器插件钱包，这本身就是一道高高的门槛。安装完成后，一个充满技术术语的界面扑面而来，最令人望而生畏的是那个弹窗——一串由12或24个单词组成的“助记词”。系统用最严肃的口吻警告她：务必抄写并妥善保管，一旦丢失，资产将永无找回之日；一旦泄露，账户将瞬间被洗劫一空。这种“要么记住，要么毁灭”的极端责任，与她习惯的“忘记密码”一键重置的Web2世界形成了天壤之别。据说，光是在钱包设置这一环节，用户流失率就高达95%。

即便她鼓起勇气闯过了这一关，更大的迷宫还在前方。她发现，为了进行第一笔交易，她必须先通过交易所购买一种名为“Gas”的燃料代币，比如以太坊上的ETH。这个过程不仅繁琐，而且让人摸不着头脑——为什么我用个App，还得先去买另一种毫不相干的“油”？

更糟糕的是，当她想探索另一个区块链上的应用时，整个噩梦又重演了。一个新的钱包、一套新的助记词，以及一种新的Gas代币，简直让人崩溃。资产在不同链之间转移（也就是所谓的“跨链”），更是充满了风险和复杂性，让她感到困难重重。

可以说，整个Web3生态，尤其是在Cosmos生态之外，就像一个个“因流动性、钱包功能和应用可用性而孤立的筒仓”。用户被技术术语、小众文化和碎片化的体验层层包围，最终只能望而却步。

这里的核心问题逐渐清晰：阻碍Web3大规模普及的，并非缺少有吸引力的应用，而是一个从根本上对普通用户不够友好的交互环境。这些摩擦点并非微不足道的不便，而是结构性的、根本性的设计缺陷。用户“本不应该关心这些技术细节”。因此，任何想要触及数十亿用户的解决方案，都必须从最底层重塑这个交互范式。而这，正是XION及其“通用抽象”理念登场的舞台。

## **重写规则：XION的“通用抽象”哲学**

面对Web3普及的困局，行业内不乏各种修修补补的方案，但XION选择了一条更为彻底的道路：别在现有体系上打补丁了，直接从协议层（protocol level）开始，把用户友好性写进区块链的DNA里。

这个核心理念，他们称之为“通用抽象”（Generalized Abstraction）。它是一个“旨在消除加密领域所有内在复杂性的全方位基础设施解决方案”。最终目标，就是让区块链技术“消失在背景中”，变得像空气和水一样，你感觉不到它，但它又无处不在。

“通用抽象”不是一个单一的功能，而是一个由四大支柱构成的、深度集成的系统。

![XION Meta Accounts](https://s2.loli.net/2025/06/27/L2NpuPs39omxAkB.jpg)

### **元账户（Meta Accounts）—— 终结助记词时代**

XION最具革命性的创新之一，就是它的“元账户”。从技术上讲，这些是在协议层实现的原生智能合约账户（Smart Contract Accounts, SCA）。这个设计，彻底颠覆了传统的账户创建模式。

你再也不用面对那串吓人的助记词了，而是可以用你早就玩得滚瓜烂熟的Web2方式——比如电子邮件、社交账号，甚至是指纹或Face ID——来创建和登录账户。

这可不仅仅是简化了登录。因为元账户本身就是可编程的智能合约，所以它们天生就比传统账户更灵活、更安全。你可以轻轻松松地设置密钥轮换（定期换授权设备，降低风险）、多因素认证（MFA），还能配置更复杂的账户恢复机制（比如找几个信得过的朋友帮你“社交恢复”），甚至可以自定义账户规则，像是设置每天的交易限额或者自动付款。账户管理，一下子从一种静态的、高风险的责任，变成了一种动态的、可控的体验。

### **签名与设备抽象 —— 面向未来的身份认证**

XION通过“签名抽象”技术，把用户界面和底层的加密算法给分开了。这意味着，一个元账户可以支持多达256种不同的“验证器”（authenticators），这些验证器可以是任何加密签名方案，比如以太坊用的Secp256K1曲线，或者Solana用的Ed25519曲线。

这么做的好处是什么？它让XION的账户体系“不过时”（future-proofed）。不管未来出现什么新的、更安全的加密标准，都可以无缝集成进来，用户根本不用操心迁移账户的事。同时，这也实现了真正的“设备无关”体验。你可以在手机、笔记本、平板上用同一个账户，再也不用管一大堆钱包和私钥了，实现了无缝的跨设备操作。

### **参数化费用层 —— 让Gas无形**

Gas费，是Web3体验中另一个巨大的痛点。XION用它的“参数化费用层”（Parameterized Fee Layer）彻底把Gas费这个概念给“抽象”掉了。

开发者可以开发出完全“无Gas”（gasless）的应用，也就是由App开发者来替用户付交易费。或者，用户也可以用他们熟悉的稳定币（比如USDC）或者其他任何支持的代币来付钱，根本不需要持有或理解XION的原生代币是啥。

这一切的背后，是一套对用户完全透明的自动化机制。当你用USDC支付费用时，系统后台的一个模块会自动把它换成XION原生代币，支付给网络验证者，保证网络正常运行。整个过程对你来说是完全无感的，你只管做你想做的事就行。

### **抽象化互操作性 —— 统一的多链体验**

多链世界很精彩，但也很分裂。XION利用Cosmos生态的跨链通信协议（IBC）和数据包转发中间件等技术，就是为了解决这个问题。

它的关键创新在于，你用一个XION元账户，就能直接和所有已经集成的其他区块链（比如Injective）上的dApp互动，完全不需要搞什么繁琐的资产桥接、切换钱包或者去弄新的Gas代包。这才是真正的“链抽象”，让你在一个统一的界面下，无缝地与整个多链世界互动。

这四大支柱可不是各玩各的，它们相互配合，共同构建了一个无缝的用户体验闭环。元账户让你轻松入门；费用层确保了你的第一次互动顺畅无阻；签名与设备抽象让这种顺畅体验可以延伸到你的任何设备上；而抽象化互操作性则把这个统一的账户变成了你探索整个多链世界的通行证。

这种整体性的、在协议层面深度集成的解决方案，正是XION“通用抽象”的威力所在，也是它与其他那些只解决单一痛点的方案的根本区别。

**表1：用户旅程对比：传统区块链 vs. XION通用抽象**

| 用户行为               | 传统区块链体验                                       | XION 体验                                                 |
| :--------------------- | :--------------------------------------------------- | :-------------------------------------------------------- |
| **创建账户**           | 下载钱包插件，抄写并保管助记词，面临永久丢失的风险。 | 使用电子邮件或社交账号登录，无需助记词。                  |
| **首次交易**           | 需通过交易所购买原生Gas代币（如ETH），并转入钱包。   | 可直接使用USDC支付，或由应用方赞助费用，享受“无Gas”体验。 |
| **使用其他链上的dApp** | 桥接资产，可能需要下载新钱包，并获取该链的Gas代币。  | 从XION账户直接交互，无需新钱包、新Gas代币。               |
| **账户恢复**           | 若助记词丢失，几乎无法恢复。                         | 可通过社交恢复、多因素认证等方式安全恢复账户。            |

这张表清楚地展示了两种模式在用户体验上的天壤之别，把XION的技术特性，变成了用户能实实在在感受到的方便。

## **最后的战场：为什么移动端是必争之地**

如果说“通用抽象”是XION的顶层设计，那它最新推出的移动开发套件（SDK）“Dave”，就是将这个设计付诸实践的关键工具。XION的决策者们很清醒，他们知道，Web3要想真正走向主流，必须占领一个至关重要的战场——移动端。

![XION Dave SDK](https://s2.loli.net/2025/06/27/rYuRVsnSZqy1Dov.jpg)

移动设备是“全球绝大多数互联网用户的主要交互界面”，但对加密世界来说，它很大程度上还是一块“没怎么开发的处女地”。这种脱节是致命的。当我们的数字生活都在往手机上搬时，一个提供不了流畅移动体验的技术，注定只能是小众的玩具。所以，占领移动端不是一个可选项，而是决定Web3能否实现大规模普及的关键。

正是在这个背景下，“Dave”应运而生。Dave被定义为XION的“首要移动开发套件”，核心使命就是给开发者提供原生的iOS和Android库，让他们能把XION区块链的功能无缝地塞进移动应用里。

Dave的“杀手级特性”在于，它允许App里的用户认证和交互，采用一种“熟悉的、类似OAuth的流程，而无需跳转到外部钱包应用”。这意味着什么？你可以在一个App内部，就像用Google或Apple登录一样，用你的邮箱或社交账号完成身份验证，并发起一笔链上交易。整个过程，你甚至感觉不到钱包的存在，这正是XION“无钱包”（walletless）体验在移动端的完美实现。

然而，Dave的战略意义远不止技术这么简单。它更深远的谋划，在于它瞄准了谁。XION在所有宣传材料里，反复强调一个数字：“1800万新开发者”。这可不是随口喊的口号，而是一个精准的战略。XION的目标不光是现有的Web3开发者，更是全球范围内庞大的移动应用开发者群体。这些人是移动端用户体验设计的专家，但往往因为加密技术太难学，而对Web3望而却步。

Dave就是为他们搭的桥。通过把复杂的区块链逻辑“抽象”掉，并提供他们熟悉的移动开发工具，Dave让这些开发者能够“创建出感觉与日常使用的Web2应用一样直观的移动优先Web3应用”。XION的创始人Anthony Anzalone（又名Burnt Banksy）一语道破天机：“互联网是移动的，而有了Dave，Web3终于准备好跟上步伐了”。

从这个角度看，Dave更像是一个增长引擎，它的目标是为Web3生态引入一支全新的、以用户为中心的生力军。通过赋能这1800万移动开发者，XION实际上是在为整个行业进行增长助力，极大地拓宽了能构建下一代消费级加密应用的人才库。

此外，Dave的推出时机也显示出XION超越技术的敏锐战略嗅觉。它的发布恰逢全球应用商店政策的变革期，比如新闻稿中特别提到的“具有里程碑意义的苹果应用商店30%税收裁决”。这些变化为“移动平台上的替代支付系统和数字资产互动”创造了新的机会。而XION凭借其由Dave实现的无钱包、USDC计价、低摩擦的移动体验，恰好能为开发者提供一个极具吸引力的、替代传统应用内购买的方案。这说明，Dave不仅是解决Web3内部问题的被动方案，更是捕捉外部市场新兴机遇的主动出击。

最终，Dave是XION实现其终极愿景——让区块链“隐形”——的核心工具。Anzalone坚信，“真正的Web3普及，将在用户甚至没有意识到自己正在使用区块链技术时到来”。Dave正是将这一哲学理念付诸实践的利器，它让开发者能够构建出充分利用区块链优势，却完全摒弃了传统摩擦点的应用。

## **未选择的路：一场关于“抽象”的深度比较分析**

你可能会问：如果XION的方案这么优越，为什么其他主流公链不直接抄作业呢？答案，深藏在不同区块链的底层架构、历史包袱和设计哲学里。通过一场深度比较，我们就能看清XION选择的道路有多独特。

### **以太坊的妥协：ERC-4337 —— 旧体系上的精巧补丁**

以太坊作为智能合约平台的先驱，它的早期设计奠定了整个行业的基础，但也留下了深深的烙印。核心问题在于账户体系的二元对立：一类是用户通过私钥控制的外部拥有账户（EOA），另一类是拥有可编程逻辑但没法主动发起交易的智能合约账户。所有交易都必须由EOA发起，并用ETH支付Gas，这就是用户体验差的根源。

由于以太坊生态系统太庞大了，任何对核心协议的改动都牵一发而动全身，风险极高。所以，以太坊社区选择了一条“不改变共识层”的路来推进账户抽象，成果就是ERC-4337标准。ERC-4337是个非常聪明的工程变通方案，它在协议之上，建了一个独立的、更高层次的交易内存池，来处理一种叫“用户操作”（UserOperations）的新型交易。

然而，这种“外挂式”的解决方案带来了新的复杂性。它依赖一个由第三方“打包者”（Bundlers）组成的去中心化网络来收集和提交用户操作，还需要“支付大师”（Paymasters）合约来赞助或代付Gas费。本质上，ERC-4337是一个应用层的“覆盖网络”，而不是原生的协议功能。这就导致了比原生实现更高的Gas成本和更复杂的外部设施依赖。它是个补丁，虽然精巧，但终究是个补丁。

### **XION的优势：Cosmos SDK赋予的主权之力**

XION的路子就完全不同了。作为一条用Cosmos SDK构建的独立Layer 1公链，它拥有定义自己核心规则的“主权”。这正是它能实现原生账户抽象的关键。XION不用像以太坊那样背着沉重的历史包袱，它可以从零开始，把“通用抽象”的理念直接写进它最底层的状态机逻辑里。

这意味着XION可以深度定制Cosmos SDK的核心模块，比如修改`auth`模块来定义全新的、基于智能合约的元账户类型，重构`bank`模块来处理灵活的费用支付，并实现自定义的`AnteHandler`（交易前置处理器）来创建一套全新的、原生的交易验证流程。这种原生集成的方式，相比ERC-4337的覆盖网络，在架构上更简洁、运行上更高效、功能上也更强大。

### **互操作性的“超能力”：元账户 + 跨链账户（ICA）**

XION的架构优势在跨链场景中体现得淋漓尽致，这里有一个极其关键且微妙的技术组合。Cosmos生态标准的跨链账户（Interchain Accounts, ICA）功能，允许一个链上的智能合约去控制另一个链上的账户。

这里的“魔法”在于：XION的元账户在协议层面本身就是智能合约。这意味着，XION上的每一个普通用户账户，都天然具备了使用ICA的能力！这正是XION实现其“抽象化互操作性”的技术内核。一个通过邮箱登录XION的用户，在用一款由Dave SDK构建的移动App时，可以无缝地在Injective链上买一个NFT，或者在Osmosis链上进行一次兑换。用户全程不需要知道自己“跨越”了区块链，也无需处理任何桥接、兑换Gas等复杂操作。这是ERC-4337等应用层方案目前难以企及的流畅体验。

### **另一条赛道：Solana的账户模型**

为了提供更丰富的对比，我们再简单看看Solana的账户模型。Solana的设计，把可执行的程序代码和状态数据明确分开了。这种架构的核心目标，是实现大规模的并行交易处理和极高的吞吐量（TPS）。虽然这个模型在性能上非常强大，但它设计的初衷，并不是像XION那样，专注于提供原生的、灵活的账户抽象功能。这再次印证了，不同的Layer 1公链，是为解决不同的核心问题而优化的，它们在设计上做出了不同的取舍。

**表2：账户抽象架构对比分析**

| 特性           | XION (原生AA)            | 以太坊 (ERC-4337)          | 传统EOA           |
| :------------- | :----------------------- | :------------------------- | :---------------- |
| **实现层面**   | 协议/共识层              | 应用层 (覆盖网络)          | 协议层 (固化)     |
| **入门体验**   | Web2方式 (邮箱/社交)     | 需EOA为智能账户充值启动    | 必须管理助记词    |
| **Gas支付**    | 任何代币 (如USDC)、无Gas | ETH或由Paymaster赞助       | 仅原生代币 (ETH)  |
| **设施复杂度** | 内嵌于协议               | 依赖外部Bundler和Paymaster | 极简              |
| **跨链功能**   | 每个用户账户原生支持ICA  | 依赖传统桥接/封装          | 依赖传统桥接/封装 |

这张表格从架构层面清晰地揭示了不同方案的本质区别。它超越了营销口号，直指技术核心，有力地证明了为什么XION的路径在追求极致用户体验这一目标上，具有根本性的优势。

## **人文因素：文化、社区与“火烧班克西”效应**

如果说技术是XION的硬核骨架，那它独特的文化和品牌叙事，就是它流淌的血液，赋予了项目鲜活的生命力。要完全理解XION，就不能忽视它的创始人Burnt Banksy，以及他精心构建的“邪典”（cult-like）文化。

![Burnt Banksy Legacy](https://s2.loli.net/2025/06/27/Am4b3GxKXYZCsgE.jpg)

故事的起点相当戏剧性。项目创始人Anthony Anzalone之所以化名“Burnt Banksy”，是因为他真的在一次全球直播中，烧掉了一幅价值不菲的班克西（Banksy）原作，并把它转化成NFT进行拍卖。这事儿在当时引起了巨大的争议和关注，但这可不是一次简单的炒作。它是一场精心策划的行为艺术，就是为了向全世界展示“数字稀缺性和所有权”的价值。

这次惊世骇俗的事件，成了XION项目诞生的催化剂。在亲手把物理艺术品变成数字资产的过程中，Anzalone深刻体验到了当时Web3糟糕的用户体验，这坚定了他创立XION，打造一个为普通人服务的区块链的决心。这个叙事弧线是完整且有力的：通过一次激进的现实世界实验，发现了问题的症结，然后投身于解决它。

这种“打破旧世界”的精神内核，贯穿了XION的品牌建设。XION团队非但不回避，反而很乐意接受外界给的“邪典”标签。这是一种深思熟虑的社区策略，旨在构建一种“强大的文化相关品牌身份”，吸引并团结一群“创新者、信徒和建设者”。这让XION和那些“典型的基础设施公司”完全不同。XION不仅仅是一堆代码，它更像是一场运动，一种信仰。Anzalone本人的话最能体现这种精神：“XION不只是又一条区块链——它是点燃一场革命的火花”。

这种独特的文化营销和XION的技术战略，实际上是同一枚硬币的两面。火烧班克西，在象征意义上是对传统艺术世界价值规则的颠覆；而构建“通用抽象”，在技术上则是对传统区块链世界交互范式（助记词、Gas费等）的彻底革新。前者是后者的文化宣言和隐喻。

当一个项目的品牌故事和它的产品核心使命如此高度统一时，它产生的能量是巨大的。这种协同效应创造了一个远比纯技术项目更强大、更令人难忘的品牌。它吸引的不光是开发者，更是一群认同它“颠覆”理念的早期采用者和忠实拥趸，他们共同构成了XION充满活力的“邪典”社区，为项目在冷启动阶段提供了宝贵的动力和传播力。

## **未来是无形的**

纵观全文，一条清晰的逻辑链条浮现了出来：Web3的普及之路被糟糕的用户体验所阻碍。为了打破僵局，XION提出了“通用抽象”这一从协议层重塑交互范式的根本性解决方案。为了将这一方案精准地投放到全球最大的消费市场，XION推出了“Dave”移动开发套件。得益于Cosmos SDK赋予的架构主权，XION的方案在原生性、集成度和跨链能力上，相比以太坊ERC-4337等替代方案，展现出显著的优势。而这一切，又被一个充满颠覆精神的文化叙事所包裹和放大，形成了强大的品牌合力。

因此，Dave SDK的发布，绝非一次孤立的产品上线。它是XION从哲学理念到技术架构，再到市场战略的逻辑必然和最终体现。它是“让加密消失”这个抽象理论，第一次能够通过全球1800万移动开发者的双手，转化为亿万用户触手可及的现实。

当然，前路并非一片坦途。宏大的战略构想最终要落在实处。XION依然面临着艰巨的挑战：它需要吸引足够多的开发者真正使用Dave来构建应用，形成网络效应；它需要在拥挤的Layer 1赛道中持续获得关注和资源；它还需要在用户和交易量快速增长的同时，保证网络的安全性、稳定性和可扩展性。

然而，XION已经为行业描绘了一幅极具吸引力的未来图景。正如其创始人所言，这是一个区块链“自然地融入我们所做的一切”的未来，一个技术变得如此无缝，以至于最终“隐形”的未来。如果XION这场以Dave为核心的移动端攻坚战能够取得成功，它将不仅仅是又一条成功的公链，更重要的是，它将为整个Web3行业提供一个可行的蓝图，展示如何最终走出小众的圈子，迎来真正意义上的大规模普及。

---

## 参考

1. [XION's Generalized Abstraction – 10X Improvement for Crypto Users? : r/cosmosnetwork](https://www.reddit.com/r/cosmosnetwork/comments/1kh0fk4/xions_generalized_abstraction_10x_improvement_for/)
2. [Introducing XION: The First Modular Generalized Abstraction Layer - Stakin](https://stakin.com/blog/introducing-xion-the-first-modular-generalized-abstraction-layer)
3. [XION's Generalized Abstraction - 10X Improvement for Crypto Users?](https://ccvalidators.com/blog/xions-generalized-abstraction-10x-improvement-for-crypto-users/)
4. [Account Abstraction: ERC-4337 Explained - Webopedia](https://www.webopedia.com/crypto/learn/erc-4337-explained/)
5. [An account abstraction solution for CosmWasm-enabled chains - GitHub](https://github.com/larry0x/abstract-account)
6. [Gas Abstraction Explained: How It Improves UX in Web3 - The Ambire Wallet Blog](https://blog.ambire.com/gas-abstraction-explained/)
7. [What Is XION and How Its Chain Abstraction is Designed for Mainstream Adoption](https://www.coingecko.com/learn/what-is-xion-crypto)
8. [XION: A Chain Abstraction-Focused L1 Blockchain for Web3 Mainstream Adoption](https://wublockchain.medium.com/xion-a-chain-abstraction-focused-l1-blockchain-for-web3-mainstream-adoption-e878bd7fe362)
9. [How XION is Making Crypto Invisible — And That's a Good Thing | HackerNoon](https://hackernoon.com/how-xion-is-making-crypto-invisible-and-thats-a-good-thing)
10. [Understanding XION in One Article - Gate.com](https://www.gate.com/learn/articles/all-about-xion/5416)
11. [Whitepaper | PDF | Public Key Cryptography | Inflation - Scribd](https://www.scribd.com/document/707130632/whitepaper)
12. [Generalized Abstraction Testnet - Launch Supporter by Burnt (XION) | Galxe Quest](https://app.galxe.com/quest/burnt/GC5ZMtUfxn)
13. [XION expands access to 18M new developers with launch of Dave, the premier blockchain mobile development kit - Cointelegraph](https://cointelegraph.com/press-releases/xion-expands-access-to-18m-new-developers-with-launch-of-dave-the-premier-blockchain-mobile-development-kit)
14. [XION Expands Access to 18 Million New Developers with Launch of Dave, The Premier Blockchain Mobile Development Kit - "The Defiant"](https://thedefiant.io/news/blockchains/xion-expands-access-to-18-million-new-developers-with-launch-of-dave-the-premier-blockchain)
15. [XION (XION): The Future of Secure, Accessible Web3 Accounts - Bitget](https://www.bitget.com/academy/what-is-xion-and-how-does-it-work)
16. [BURNT (XION)WHITEPAPER ANNOUNCEMENT — ollstar - Mirror.xyz](https://mirror.xyz/ollstar.eth/GH3FAB3ibCC9nHN4jDjFo6bY2GJTvwngpJ-jpqMG9Gc)
17. [XION Integrates Injective as the First Blockchain for its Chain Abstraction Layer](https://blog.injective.com/xion-integrates-injective-as-the-first-blockchain-for-its-chain-abstraction-layer/)
18. [What is Xion (XION) - A Comprehensive Overview - Imperator.co](https://www.imperator.co/resources/blog/what-is-xion)
19. [What Is XION? Everything You Need to Know about XION - Bitget Wallet](https://web3.bitget.com/en/academy/what-is-xion-token-crypto-price-prediction)
20. [Chain Abstraction - The Final Narrative to Fix the Crypto UX Problem in Hundreds of Blockchains | Four Pillars](https://4pillars.io/en/articles/chain-abstraction/public)
21. [XION: Simplifying Web3 Without Wallets or Complexity | Crypto Bourse on Binance Square](https://www.binance.com/en/square/post/16914150907233)
22. [XION Launches “Dave” Mobile Kit for Web3 Developers | Bitget News](https://www.bitget.com/news/detail/12560604793607)
23. [Why ZKSync's Native Account Abstraction Is Superior to ERC-4337 - MetaLamp](https://metalamp.io/magazine/article/why-is-native-account-abstraction-in-zksync-better-than-erc-4337)
24. [Account Abstraction on Ethereum - Morpher](https://www.morpher.com/blog/account-abstraction-on-ethereum)
25. [Account Abstraction: Your Crypto Advantage - Starknet](https://www.starknet.io/blog/account-abstraction/)
26. [ERC-4337 & Account Abstraction: A Comprehensive Overview - Hacken](https://hacken.io/discover/erc-4337-account-abstraction/)
27. [Account Abstraction and ERC-4337 - Part 1 | QuickNode Guides](https://www.quicknode.com/guides/ethereum-development/wallets/account-abstraction-and-erc-4337)
28. [ERC-4337 vs Native Account Abstraction vs EIP-7702: Complete Developer Guide 2025](https://blog.thirdweb.com/erc-4337-vs-native-account-abstraction-vs-eip-7702-developer-guide-2025/)
29. [Auth Overview - Cosmos SDK](https://docs.cosmos.network/v0.46/modules/auth/)
30. [XION Resources that you need to use | by Dmitri\_us - Medium](https://medium.com/@schoolseven92/xion-resources-that-you-need-to-use-044c6c7a826a)
31. [What is the Solana Account Model? - Alchemy](https://www.alchemy.com/overviews/solana-account-model)
32. [Solana Account Model](https://solana.com/docs/core/accounts)
33. [AMA Recap: Band Protocol x Burnt XION](https://blog.bandprotocol.com/bandprotocol-xion-ama-recap/)
34. [Burnt Banksy and XION - Wild Ride into the Future of Crypto Art | by Dmitri\_us | Medium](https://medium.com/@schoolseven92/burnt-banksy-and-xion-wild-ride-into-the-future-of-crypto-art-eeea4738a65d)
35. [XION: Focusing on Chain Abstraction L1 Blockchain, Supporting Mainstream Adoption of Web3 | 吴说区块链 on Binance Square](https://www.binance.com/en/square/post/15696596802914)
36. [Cult Blockchain XION Launches On-Chain Festival Celebrating the Death of Web3 Complexities - GlobeNewswire](https://www.globenewswire.com/news-release/2024/12/19/2999944/0/en/Cult-Blockchain-XION-Launches-On-Chain-Festival-Celebrating-the-Death-of-Web3-Complexities.html/)
37. [Cult Launches Blockchain Powered by $XION to Make Crypto Disappear | The AI Journal](https://aijourn.com/cult-launches-blockchain-powered-by-xion-to-make-crypto-disappear/)

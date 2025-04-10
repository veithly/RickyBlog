---
title: 【Virtuals Workshop 3】AgentKit开箱：给你的AI特工发“数字钱包”和“上链通行证”
published: 2025-04-10
updated: 2025-04-10
description: '深入了解Coinbase的Base链和AgentKit，学习如何为AI Agent配备安全的链上钱包和交互能力。Workshop 3回顾，适合Virtuals Hackathon参赛者。'
image: 'https://images.unsplash.com/photo-1642465789831-a176eb4a1b14?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MjYzNDd8MHwxfHNlYXJjaHwxfHxBSSUyMGFnZW50JTIwYmxvY2tjaGFpbiUyMHdhbGxldHxlbnwwfHx8fDE3NDQyNzI4NDV8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080'
tags: [AI, Agent, Base, AgentKit, Virtuals Protocol]
category: 'Virtuals Protocol'
draft: false
---

**嘿，各位Agent训练师们，Ricky又回来唠嗑了！**

上次咱们聊了ACP协议，那个给AI Agent们定规矩、让他们能组队干活的“AI国家宪法”。聊完我就在想，光有宪法还不行啊，得有具体的“身份证”（身份标识）和“银行账户”（钱包），还得有能让它们在“国家”里畅通无阻跑业务的“基础设施”（区块链）吧？不然都是空中楼阁！

这不，Workshop 3 就来了！这次咱们请来了Coinbase的大佬——Lincoln Murr，他是专门负责开发者平台和AI这块的行家。听他讲完，我感觉就像是，如果说Virtuals Protocol描绘了AI Agent经济的蓝图（ACP），那Coinbase的Base链和AgentKit就是把这蓝图落地的“施工队”和“超级工具箱”！感觉离让AI替我打工又近了一步（嘿嘿）！

<iframe width="560" height="315" src="https://www.youtube.com/embed/6OhbW5nP5Os?si=pPHXuGgkT3sRNU04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

*(Workshop 3 视频回顾，快来温故知新！)*

## 揭开神秘面纱：Base链和AgentKit是啥玩意儿？

![Blockchain Tools Concept](https://images.unsplash.com/photo-1629877521896-4719f02df3c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjYzNDd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdG9vbHN8ZW58MHx8fHwxNzQ0MjcyODg2fDA&ixlib=rb-4.0.3&q=80&w=1080)

咱们先说说 **Base**。你可以把它想象成一条由Coinbase（就是那个搞加密货币的大平台）修的 **超高速、收费还便宜的公路**。它连接着以太坊这条主干道，但跑起来更快、更省“油费”（Gas费）。对于咱们的Virtuals Hackathon来说，这条路是 **必经之路**，所有链上项目都得在这条路上跑！

那 **AgentKit** 呢？这是Coinbase给咱们开发者准备的 **“AI特工装备包”**。里面有啥？最重要的就是能给你的AI Agent **发一个专属的“数字钱包”**，还能让它学会各种 **“链上技能”**，比如转账、交易、和智能合约互动等等。

简单说，**Base是跑道，AgentKit就是给你的AI赛车手配的顶级赛车和驾照**，让它能在这条跑道上安全、合法地飙车（搞业务）！

## 这玩意儿有啥用？为啥得关注？

“Ricky，听起来挺酷，但跟我关系大吗？” 兄弟，关系可太大了！

1. **Hackathon硬性要求：** 划重点！这次Virtuals Hackathon，所有需要上链的项目 **必须部署在Base链上**。所以，搞不懂Base和AgentKit，你的项目可能连参赛资格都悬了！
2. **deadline 逼近：** 比赛提交截止日期是 **4月14日**，没几天了！这次Workshop就是临阵磨枪的绝佳机会，教你怎么优化部署，让你的项目符合Base赛道的要求。
3. **给AI装上“钱包”和“技能”：** AgentKit的核心价值在于，它帮你解决了“怎么让AI安全地管理和使用加密资产”这个大难题。有了它，你的AI Agent就能真正拥有自己的“小金库”，在链上独立完成各种金融操作，甚至跑业务赚钱！
4. **Web3+AI的未来趋势：** Lincoln提到，他们相信 **每个Agent最终都会有一个加密钱包**，作为它的金融中心和独特标识。AgentKit就是为了实现这个愿景而生的。现在搞懂它，你就走在了Web3+AI融合的前沿！

## 核心概念，说人话 (AgentKit篇)

AgentKit 这套“装备包”具体能干啥？咱们拆开看看：

* **这是啥：** AgentKit 是Coinbase开发的一个工具包（Toolkit/SDK），专门用来帮助AI Agent与区块链网络（特别是Base）进行交互，核心是安全钱包管理和链上操作能力。
* **打个比方：** 想象一下，AgentKit就像一个“AI管家培训学院+银行服务台”。它既能教你的AI管家（Agent）如何安全地保管和使用主人的“数字钥匙”（私钥）和“银行卡”（钱包），又能直接帮它处理各种链上转账、交易等“金融业务”。
* **简单来说：** 它提供了一套预先封装好的功能，让开发者可以轻松地：
    1. 为AI Agent创建和管理安全的加密钱包。
    2. 让AI Agent能够在链上执行各种操作（转账、Swap、调用合约等）。
    3. 方便地集成各种AI框架（比如LangChain）。
* **记住这几点：**
  * **安全钱包管理:** 这是核心！AgentKit帮你处理复杂的密钥管理。
  * **链上交互:** 不只是钱包，还能执行各种区块链操作。
  * **框架灵活:** 能和LangChain等主流AI框架配合使用。
  * **为Agent设计:** 它的目标是让Agent真正拥有和使用链上能力。
  * **Base首选:** 虽然设计上是跨链的，但目前和Base结合最紧密。

## 手把手带你飞：跑通第一个链上AI Agent（Replit简化版）

![AI Agent Coding Interface](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjYzNDd8MHwxfHNlYXJjaHwxfHxBSSUyMGFnZW50JTIwY29kaW5nJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc0NDI3Mjg5OXww&ixlib=rb-4.0.3&q=80&w=1080)

Lincoln在Workshop里演示了怎么快速上手，虽然有点技术含量，但核心思路不复杂。他推荐用 **Replit** 这个在线编程平台，对新手最友好，不用在自己电脑上装一堆东西。

**第1步：搞到模板，打开“装备包”**

* 最简单的方法是用官方提供的 **Replit模板**。Lincoln在视频里演示了（虽然我们可能没法直接点进去），但思路就是在Replit上找到一个预设好的AgentKit项目模板，一键“Fork”或者“Remix”过来。
  * 或者，也可以用命令行 `npm create onchain-agent@latest` 来创建项目（这个稍微进阶一点）。
  * *友情提示：* 视频里Lincoln用的好像是Python版的模板，AgentKit也支持TypeScript。

```bash
# 如果你想用命令行（稍微进阶）
npm create onchain-agent@latest
cd your-agent-project-name
```

**第2步：配置“秘密武器”——API密钥**

* 运行Agent需要一些“钥匙”才能访问外部服务。这些“钥匙”就是API Key。你需要把它们配置在项目的“秘密”（Secrets）环境变量里。
* **需要哪些钥匙？**
  * `OPENAI_API_KEY`: 让你的Agent能调用OpenAI的模型（比如GPT-4）思考和对话。你需要去OpenAI官网申请。
  * `CDP_API_KEY_NAME` 和 `CDP_API_KEY_PRIVATE_KEY`: 这是访问Coinbase开发者平台（CDP）服务的钥匙，AgentKit用它来管理钱包和执行链上操作。你需要去 cdp.coinbase.com 注册并创建。
  * `NETWORK_ID`: 告诉Agent在哪条链上跑，比如 `base-sepolia` (Base测试网) 或 `base-mainnet` (Base主网)。对于Hackathon测试，一般用测试网。
* *碎碎念：* 配置这些Key是关键一步，相当于给你的特工配发不同部门的通行证。一个也不能少，也别填错了！ Lincoln演示时专门提到了要删除那个 `wallet_data.txt` 文件，确保每次启动都生成新钱包，这点要注意！

```
# 在 Replit 的 Secrets 面板里添加这些：
# Key: OPENAI_API_KEY, Value: sk-你的OpenAI密钥...
# Key: CDP_API_KEY_NAME, Value: 你在CDP创建的API Key名字
# Key: CDP_API_KEY_PRIVATE_KEY, Value: 你在CDP创建的API私钥
# Key: NETWORK_ID, Value: base-sepolia
```

*（注意：上面只是示例格式，具体操作看Replit界面）*

**第3步：启动Agent，让它跑起来！**

* 配置好Secrets后，在Replit里点击那个大大的绿色“Run”按钮。
* 程序会先安装一堆依赖（就像给赛车加油、检查轮胎），然后启动Agent。
* 启动后，控制台会提示你选择模式：**Chat Mode（聊天模式）** 或 **Auto Mode（自动模式）**。
  * **聊天模式：** 你可以像和ChatGPT聊天一样，给Agent下指令，比如Lincoln演示的：“What's my address?”（我的钱包地址是啥？），或者“What's the price of BTC?”（比特币现在多少钱？）。Agent会调用AgentKit的功能（查钱包地址、通过预设的工具查价格）来回答你。
  * **自动模式：** Agent会自己根据预设的目标去执行任务（这个模板里可能没具体演示，但这是Agent的终极形态）。
* *提醒：* 第一次跑可能会需要点时间安装依赖，耐心等等。看到它问你选模式，就说明成功启动啦！

```
# 启动后，控制台大概是这样：
Starting Agent...
Available modes:
1. Chat - Interactive chat mode
2. Auto - Autonomous action mode
Choose a mode (enter number or name): 1
Starting chat mode... Type 'exit' to end.
Prompt: What's my address?
# Agent 回答...
Your wallet address is 0x..... and you are on the base-sepolia network.
Prompt:
```

## 练练手，不生疏

看完大佬演示，是不是手痒痒了？来几个小练习巩固一下：

1. **寻宝游戏 (5分钟):** 打开 [AgentKit的GitHub仓库](https://github.com/coinbase/agentkit) (Lincoln在视频里展示过)。找到 `action-providers` 目录，看看里面都有哪些预设好的“链上技能”？挑一个你觉得最有意思的，想想它能用在什么场景？
2. **API钥匙在哪领？ (10分钟):** 访问 [Coinbase Developer Platform (CDP)](https://cdp.coinbase.com/) 和 [OpenAI Platform](https://platform.openai.com/)。尝试注册账号（如果还没有的话），找到创建API Key的地方（不一定要真的创建，找到入口就行）。感受一下获取这些“通行证”的过程。
3. **Replit初体验 (15分钟):** 访问 [Lincoln演示的Replit模板链接](https://replit.com/@CoinbaseDev/CDP-AgentKit-Python) （如果链接有效的话，或者搜索类似的模板）。点击“Use Template”或“Fork”。熟悉一下Replit的界面，找到“Secrets”面板，看看是不是和我们上面说的一样需要配置那几个关键的Key？

## 他们是怎么做到的？（Base + AgentKit = ？）

虽然Workshop主要聚焦在技术入门，但Lincoln描绘的场景很激动人心：

* **AI Agent成为主流：** Base链因为低成本和Coinbase的背景，正在成为AI Agent项目落地的热门选择。AgentKit降低了门槛，让更多开发者能构建出真正具备链上能力的AI。
* **不仅仅是聊天机器人：** 我们看到的Agent已经能查询链上信息、管理钱包。未来，它们还能执行更复杂的操作，比如自动进行DeFi挖矿、管理DAO的投票、甚至进行跨链资产操作。
* **传统AI开发者入场：** AgentKit的目标之一是让不熟悉加密货币的AI开发者也能轻松使用Web3能力，这可能会带来一波新的创新浪潮。

想象一下，未来你的个人AI助理，不仅能帮你订餐、写邮件，还能帮你管理加密资产、参与链上治理、甚至在你睡觉时自动寻找最佳的DeFi收益机会——这一切都可能运行在Base上，通过类似AgentKit的技术实现！

## 你可能想问

* **“我需要很懂区块链才能用AgentKit吗？”** Lincoln的意思是，AgentKit的目标就是降低门槛。虽然懂点基础更好，但它封装了很多复杂性，让你更专注于Agent的逻辑和AI能力。当然，理解API Key、网络ID这些基本概念还是必要的。
* **“AgentKit安全吗？把钱包交给AI靠谱不？”** 这是个好问题！Coinbase作为一家受监管的大公司，在安全方面投入巨大。AgentKit的设计核心就是安全钱包管理（比如用了MPC技术等）。当然，任何涉及资产的操作都要谨慎，开发者在使用时也要遵循最佳安全实践。
* **“Base链和其他L2（比如Optimism, Arbitrum）有啥区别？为啥选Base？”** 除了是Coinbase亲儿子这个巨大优势外，Base专注于提供一个低成本、对开发者友好的环境。它和Optimism一样基于OP Stack构建，技术上有很多相似之处，但Coinbase的生态系统和用户基础是它独特的吸引力。对于Hackathon，官方指定了Base，所以咱们就先聚焦这里！
* **“AgentKit和Virtuals Protocol的ACP是什么关系？”** 好问题！你可以把ACP看作是更高层、更宏观的“通信和商业协议”，定义Agent之间如何互动、协作、形成经济体。而AgentKit更像是具体的“技术实现工具箱”，提供了让Agent具备链上交互能力（特别是钱包和交易）的基础设施。它们是互补的，共同推动着链上AI Agent的发展。AgentKit可以帮助Agent更好地参与到ACP定义的商业活动中。

## 总结 & 下一步去哪儿

好了，老铁们，今天的“施工现场汇报”就到这里！咱们知道了：

* **Base链** 是咱们Hackathon项目（如果需要上链的话）的“指定赛道”，它快、便宜，背后有大佬撑腰。
* **AgentKit** 是Coinbase提供的“超级工具箱”，能给你的AI Agent配上“数字钱包”和一堆“链上技能”，让它从“纸上谈兵”变成“真能干活”。
* **上手并不难：** 通过Replit模板和配置好API Key，你可以快速跑起一个简单的链上AI Agent Demo。

这不仅仅是关于一个工具或一条链，这是关于 **Web3和AI如何融合，创造出能够自主交互、拥有经济能力的智能体** 的未来。

想继续深入？

1. **动手玩起来：** 强烈建议跟着Lincoln的演示（或者用我们上面简化的步骤），亲自在Replit上跑一遍AgentKit模板。没什么比自己动手更有感觉了！
2. **深挖AgentKit文档和仓库：** 去 [AgentKit GitHub](https://github.com/coinbase/agentkit) 和 [CDP文档](https://docs.cdp.coinbase.com/agentkit/docs/welcome) 看看，里面有更详细的说明和代码示例。
3. **加入社区讨论：** 无论是在Virtuals的Telegram群，还是Coinbase Developer的Discord (Lincoln提到了: discord.com/invite/cdp)，都是提问、交流、找队友的好地方。
4. **回顾前两期Workshop：** 把GAME框架和ACP协议再复习一下，把今天的Base和AgentKit放在这个大背景下理解，思路会更清晰！

💡 **小贴士：** 给AI装上钱包，就像给你的宠物开了个银行账户，听起来有点疯狂，但Web3+AI的世界，一切皆有可能！早点入场，说不定你的Agent未来就是下一个“AI巴菲特”！

⚠️ **温馨提示：** 虽然AgentKit简化了操作，但处理API Key（特别是私钥）一定要 **极端小心**！不要随意泄露，确保你的开发环境安全。安全第一，赚钱第二！

好了，赶紧行动起来，让你的AI Agent在Base链上跑起来吧！咱们Hackathon Demo Day见真章！

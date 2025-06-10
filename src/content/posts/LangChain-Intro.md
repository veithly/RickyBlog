---
title: "【宏观篇】不止于API调用：LangChain的设计哲学与分层架构"
description: "想用LLM构建真正强大的应用？本文深入剖析LangChain的设计哲学、分层架构和核心灵魂LCEL，带你从宏观视角理解这个框架如何帮你告别“胶水代码”，释放创造力。"
date: 2025-06-10
image: "https://s2.loli.net/2025/06/10/pkKdoyLDTUj8Vtm.jpg"
tags: ["LangChain", "LLM", "AIGC", "框架", "AI开发"]
category: "AI技术"
draft: false
published: 2025-06-10
updated: 2025-06-10
---

**LangChain 系列文章（一）**

欢迎来到 LangChain 深度解析系列。如果你和我一样，对大型语言模型（LLM）的潜力感到兴奋，但又在构建功能强大的 AI 应用时，被繁杂的琐事所困扰，那么这个系列很适合你。

近来，随着 AIGC 的快速发展，利用 LLM 构建智能应用已成为一个热门方向。然而，一个普遍的共识是，开发一个真正健壮、功能丰富的 LLM 应用，远不止调用模型 API 那么简单。我们开发者常常需要编写大量的“胶水代码”来处理提示管理、外部数据集成、对话状态维护、外部工具调用等一系列问题。

正是在这样的背景下，LangChain 应运而生，并迅速成为该领域最重要的开源框架之一。它并非仅仅是一个模型封装工具，而是一个旨在简化从开发、生产到部署全链路的综合性开发框架。它为构建 LLM 应用提供了一套标准化的组件和通用的设计模式。

这篇文章，我们将聚焦于 LangChain 最顶层的设计思想和架构，从宏观的视角，为你描绘一幅清晰的蓝图。

## **一、 LangChain 的核心玩法：像搭乐高一样构建应用**

聊 LangChain，绕不开两个关键词：**模块化（Modularity）** 和 **可组合性（Composability）**。这听起来有点学院派，但说白了，就是把构建 LLM 应用的复杂过程，拆解成了搭乐高的游戏。

LangChain 把模型、提示、外部数据、记忆、工具这些开发中绕不开的元素，全都精心设计成了一块块标准化的“积木”。

* **模块化**，意味着每个组件都有自己明确的职责和统一的接口。举个例子，所有的聊天模型（如 `ChatOpenAI`、`ChatAnthropic`）都遵循同一个 `BaseChatModel` 规范。这种设计带来了极高的灵活性：你可以轻松地将应用中的 `ChatOpenAI` 模型替换为 `ChatAnthropic`，而无需改动任何业务逻辑代码，有效避免了对单一供应商的锁定。这种松耦合的设计也极大地便利了测试，你可以方便地换上一个模拟的假模型（Fake LLM）来进行单元测试。

* **可组合性**，就更好理解了。这些独立的“积木”可以随心所欲地拼接在一起，产生 1+1>2 的化学反应。想做一个能查询订单的客服机器人？没问题，把“聊天模型积木”、“数据库查询积木”和“对话记忆积木”拼起来就行。未来想增加退款功能？再加一块“退款工具积木”就搞定了，整个过程行云流水，完全不用推倒重来。

![模块化与可组合性](https://s2.loli.net/2025/06/10/xbZU2G6YR1aiLK7.jpg "模块化与可组合性概念图")

这种“化繁为简”的设计哲学，把我们从繁琐的底层逻辑中解放出来，让我们能真正专注于应用的创意和业务逻辑。

## **二、 稳固的地基：分层解耦的架构设计**

为了把“模块化”的思想贯彻到底，LangChain 在架构上做了一次漂亮的分层解耦，把庞大的代码库拆分成了几个各司其职、依赖清晰的独立包。这么做的好处是，既保证了核心框架的轻量和稳定，又让整个生态能快速迭代。

下面这张图能很直观地展示它的结构：

![LangChain 分层解耦包结构](https://mermaid.ink/svg/pako:eNqFVGtP2lAY_ivkfNoSQVBEJYSEoDEmmi3TL9tYlgoVmkBLamt0xgRFVJQBDnWbGi9TN5Mp4mWKMNyPWc858C922kLBAlk_nfNen-d9n5454OV8NLADP0-FA4bxAQ9rIN-UOKEaPEAqHeKdJVjYxJtnHqC65c_11gMcE85Gt2OCdz57zYm8wRUOP3d0Tjg94J2aQbM-D9tUe4Ri_e4AxbAGdJiHf6IwEcPFDNpfamw04n7v5nhabRckGV45w-glNrkFadrphNkd6SGO4hG0F1dLobVS-eoIJU9h6ljKJ0fcgyNKpINxPkN7ETXob2SBnMulYmUlRfAydbzVxuP0jDAWDjKCQPNTegQCcRqnal4Ni5TPkFlIhSTaXkF753B1GcavcfYzutnSl3dzoZDIMsJsM7mqo84wEYPpnypDfPIIE4Xy7RFOZMnw8fm5lI-j7YfK7jJaTWs04fdFmN4g1NBWDn3MwkKG8IX3pzB2jy_iLfjWtqFDo8NQyTySOlLxGKeX4acEOo7g22_4YhtvnRIwlcgOYQ-z-ziZ05CUsyf44BTt35HVwqvFp61bSwNmv2iMSF-dIF6EadY1rJ8aR6wU80R31XgXKwR4Lsx49SlUzdEqa4jj_MEm4fkVq3Ga5okAWrcbVfVqMpnIoGHsTipuo7MjuL-OUmnpcZcQ-w97vHmAIgv4poiLB-rGngyAYBmSI1Vo2lVblDzmYkFWytodqSOv_WQHfS2UoyWplKn9y7rVj9H8NF2vqFzrq88tq2mV6BkuXUv5wqvBsXGD6-Vwc50QIzQgU65anXIuWr7ckv-7X-vqoXy5JP3OESHh3Q2U_AEfbmAq12o8LoPR6KyLVG9UJqA3KiSajDKiWtX6E6S41bemjevJa9A2vfrnVv0NllqIKt72fk2s7UNUZbb3jyok6hCV4TQyBB0gRPMhivGRt39ODvQAIUCHaA-wk6OPnqTEoCCLbp6EUqLAjc2yXmAXeJHuADwn-gPAPkkFp8hNDPsogR5gKKLeUC0kTLFvOE67-nm5UzWbLJXm3ZzICsDer4QC-xyYAXaLrdfU02O2Wfss3VZLf19XbweYBfYui9lktZn7bTZbf2-XxWLtnu8AH5TqZlOfzWYm5m4r8fd09Vrm_wHrXrh0)

*图1: LangChain 的分层解耦包结构*

* **`langchain-core`**: 这是整个框架的基石，是稳定性的核心保障。它定义了所有组件必须遵守的核心抽象（如 `BaseChatModel`, `BaseRetriever` 等接口），以及强大的 LangChain 表达式语言（LCEL）。由于其依赖极少，你可以放心地在任何项目中使用它，而无需担心复杂的依赖冲突。
* **`langchain`**: 这一层可以被看作是 LangChain 的“应用层”或“标准库”。它基于核心抽象，实现了最常用、最通用的链（Chains）、代理（Agents）和检索策略（Retrieval Strategies），为应用的“认知架构”提供了具体实现。对大多数开发者而言，这里是构建应用的起点。
* **集成包 (如 `langchain-openai`)**: 这是 LangChain 拥抱广阔生态的体现。通过将对特定第三方服务的依赖隔离在独立的包中，LangChain 使得这些集成可以独立于核心框架进行版本控制和维护，让开发者可以按需取用。
* **`langchain-community`**: 一个由社区驱动的、充满活力的庞大集成库。当一个新的模型或向量数据库出现时，社区可以迅速为其开发集成并贡献到这里，让所有人都能快速用上最新的技术。这种开放的模式是 LangChain 能够始终保持在技术前沿的关键。

## **三、 注入灵魂：改变游戏规则的 LCEL**

如果说模块化是 LangChain 的骨骼，那么 LCEL（LangChain Expression Language）就是它的灵魂。它用一种非常优雅的方式，改变了组件的组合范式。

在 LCEL 出现之前，开发者通常需要通过命令式的代码来手动传递数据，例如 `output1 = model.invoke(prompt)`，然后 `output2 = parser.parse(output1)`。而 LCEL 引入了一种优雅的声明式范式，允许开发者使用管道符 `|` 将不同的组件连接起来，形成一个清晰的数据处理流。

```python
# LCEL 示例：一个简单的 RAG 链
# 这不仅仅是语法糖，它创建了一个可执行的计算图
rag_chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt_template
    | llm
    | StrOutputParser()
)
```

LCEL 的美妙之处在于，它不仅仅是看起来简洁。任何用 LCEL 构建的链，其本质都是一个 `Runnable` 对象——一个 LangChain 可以深度理解、分析和优化的计算图。正因如此，这条链 **自动地、无需任何额外编码地** 获得了以下关键特性：

* **异步、批处理与流式调用**: 你可以随时调用 `ainvoke()`, `batch()`, `stream()` 等方法。对于需要实时响应的聊天机器人来说，流式输出（即逐字显示答案）能够极大地提升用户体验，而这一切 LCEL 都已为你准备好。
* **可观测性**: 由于 LangChain 清楚地知道链的结构，它可以轻松地将每一步的执行细节发送给 LangSmith 进行追踪和调试。
* **输入输出模式**: LangChain 可以自动推断链的输入和输出 JSON Schema。当使用 LangServe 部署时，这意味着你可以直接获得一个符合 OpenAPI 规范的、带有完整类型定义的 API 接口。

LCEL 将复杂的调用流程简化为清晰、可读且功能强大的数据流，是 LangChain 现代开发模式的核心与灵魂。

---

聊到这里，我们已经对 LangChain 的宏观世界有了一个整体的认识。在下一篇《【组件篇（上）】连接数据与模型的核心基石》中，我们将开始深入 LangChain 的内部，逐一解析那些作为“积木”的核心组件，敬请期待！

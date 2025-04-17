---
title: 【G.A.M.E Workshop 1】GAME框架入门：让你和你的AI Agent一起"搞事"
published: 2025-04-03
updated: 2025-04-07
description: '手把手教你用Virtuals Protocol的G.A.M.E框架构建AI Worker，轻松创建能分析Twitter图片内容的智能助手。特别适合Virtuals Hackathon 2025参赛者。'
image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MjYzNDd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWdlbnR8ZW58MHx8fHwxNzQzNjY2ODAxfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080'
tags: [AI, Agent, GAME Framework, Virtuals Protocol]
category: 'Virtuals Protocol'
draft: false
---
嘿，各位未来的AI大师和Web3探险家们！

第一次听到"自主AI智能体" (Autonomous AI Agent) 是不是感觉脑袋嗡嗡的？有点像刚接触区块链那会儿，一堆问号飘过，感觉自己像在用意念控制火箭？或者像视频里说的，想让AI帮你点个披萨（没错，Agent Byte真的做到了！），但完全不知道从哪儿开始？

别慌，你不是一个人！今天，咱们就来一起掀开这些"机器人背后的大脑"的神秘盖头，特别是Virtuals Protocol搞出来的G.A.M.E框架——这玩意儿简直就是给AI智能体造灵魂的乐高积木！

<iframe width="560" height="315" src="https://www.youtube.com/embed/vNjsrIxN39s?si=D4tbMcJ8joD_87me" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 拆掉神秘的高墙：G.A.M.E框架到底是啥？

首先，深呼吸！G.A.M.E框架，全称 **G**oal-driven **A**utonomous **M**ulti-agent **E**conomy，虽然名字带个"Game"，但它**不是**电子游戏。把它想象成一个超级牛的、模块化的"AI智能体建造工具箱"。Virtuals Protocol团队（就是视频里提到的Celeste和Joey他们那帮大佬）把它捣鼓出来，就是为了帮咱们这些开发者，能更轻松地造出那些能自己想、自己做决定、甚至还能互相合作的AI智能体。

简单说，它给了一套规则、零件和引擎，让你不用从零开始造轮子，就能给你的AI想法装上"大脑"和"四肢"。

### 为啥要学G.A.M.E？（除了听起来酷，有啥实际用处？）

"听着挺厉害，但我为啥要学这个？" 问得好！

1. **Virtuals Hackathon 2025直通车**：如果你正摩拳擦掌准备参加这场黑客松，特别是G.A.M.E赛道，那这个框架就是你的"官方指定装备"！视频里Celeste Ang特别强调了，**G.A.M.E赛道的项目必须使用G.A.M.E SDK构建**。搞定它，你就拿到了通关秘籍的一半！
2. **站在AI创新的风口浪尖**：黑客松的目标是啥？构建"自主商业体"(Autonomous Businesses)！从自动交易机器人、AI内容工厂到链上游戏工作室（视频里提到了足足12个集群方向！），想象一下AI能独立运营这些业务。G.A.M.E框架就是帮你把这些疯狂想法落地的脚手架。
3. **未来已来，技能加持**：AI Agent可不只是陪聊的。它们能分析数据、执行任务、协作、自己拓展业务。掌握构建它们的能力，不管你是想创业、升职加薪，还是只想在朋友面前秀一把"看，我的AI能自动分析Twitter图片"，这都是硬核技能！想想看，能指挥AI的你，多有范儿！

### 核心概念简化，轻松拿捏

![GAME Framework Architecture Concept](https://images.unsplash.com/photo-1527576539890-dfa815648363?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MjYzNDd8MHwxfHNlYXJjaHwxfHxmcmFtZXdvcmslMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDB8fHx8MTc0MzY2NjgxMnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080)

好，咱们来点实在的，用大白话解释几个G.A.M.E框架里的关键概念。虽然G.A.M.E支持构建复杂的、包含多个"工人"(Workers)的智能体(Agent)，但我们先从一个更简单的结构入手：直接使用一个**工人 (Worker)** 来完成特定任务。这次咱们用一个**"Twitter图片分析助手"** 作为例子：

* **工人 (Worker): 专注任务的执行者**
  * 在G.A.M.E框架中，你可以直接创建一个`Worker`实例来执行特定任务，而无需先定义一个完整的`Agent`。把它想象成一个高度专业化的"工具人"或"微服务"。
  * **描述 (Description)**：告诉这个工人它是干什么的。例如，我们的图片分析助手是 "Processing incoming tweets. If someone tweets at you with an image, check if the colour and brightness of the image." (处理收到的推文。如果有人@你并附带图片，检查图片的颜色和亮度。)
  * **指令 (Instruction)**：给工人一个具体的行动指南或目标。例如："Get more information on tweeted images by running them through a image analyse to check colour and brightness" (通过图像分析获取推文中图片的更多信息，检查颜色和亮度)。
  * **行动空间 (Action Space)**：定义这个工人能执行的所有具体操作（即"技能"）。这通常是一个包含多个`Function`对象的列表。

* **函数 (Functions): 工人的具体技能**
  * 每个`Function`代表一个工人可以执行的具体动作。它包含：
    * `fn_name`: 函数的名称，供LLM（大语言模型）调用。
    * `fn_description`: 函数功能的描述，帮助LLM理解何时使用它。
    * `args`: 函数需要的参数列表，每个参数有名称、类型和描述。
    * `executable`: 实际执行该功能的Python代码（一个可调用对象）。
  * 在我们的例子中，只有一个核心函数 `screen_tweeted_images`，它负责获取Twitter提及中的图片并分析它们。这个函数内部又调用了其他辅助函数如 `get_twitter_user_mentions` 和 `analyze_image_from_url`。

* **状态管理 (State Management): 工人的"记忆" (可选)**
  * `get_state_fn`: 这是一个函数，用于在每一步执行后更新工人的内部状态。状态可以让工人记住之前的信息或环境变化。
  * 在我们的简单例子中，`get_state_fn` 只是返回一个空字典，表示这个工人不需要复杂的记忆，每次执行都是相对独立的。

* **运行循环 (Run Loop)**：
  * 代码最后的部分展示了如何让这个`Worker`持续运行。它使用一个`while True`循环，定期调用`worker.run()`方法，并传入一个提示（"Analysing incoming tweets for the last 15 minutes"），让Worker根据其指令和可用函数来执行任务。

这个例子展示了如何使用G.A.M.E框架创建一个简单的、任务驱动的Worker，它利用外部API（Twitter API）和自定义逻辑（图像分析）来完成特定工作。

### 实际代码示例：创建一个"Twitter图片分析"助手

让我们看一个简化的Python代码示例，展示如何用G.A.M.E框架创建这个图片分析助手Worker：

```python
from game_sdk.game.agent import Agent, WorkerConfig
from game_sdk.game.worker import Worker
from game_sdk.game.custom_types import Function, Argument, FunctionResult, FunctionResultStatus
from typing import Optional, Dict, List
import os
import requests
import time
from twitter_plugin_gamesdk.twitter_plugin import TwitterPlugin
from PIL import Image
from io import BytesIO

from PIL import Image
from io import BytesIO

# --- API密钥和环境变量 ---
game_api_key = os.environ.get("GAME_API_KEY") # 用于 G.A.M.E 框架本身
twitter_bearer_token = os.environ.get("TWITTER_BEARER_TOKEN") # 用于 Twitter API

# --- 状态管理函数 ---
def get_state_fn(function_result: FunctionResult, current_state: dict) -> dict:
    """
    这个函数在每步执行后被调用以形成Worker的状态。
    输入是上一步的函数结果。
    在这个例子中，我们不追踪状态变化，所以状态是静态的 - 返回空字典。
    """
    # print(f"Previous function result: {function_result}") # Debugging: 查看上一步结果
    # print(f"Current state before update: {current_state}") # Debugging: 查看当前状态
    # 在这里可以根据 function_result 更新 current_state
    # 例如: if function_result.status == FunctionResultStatus.DONE: current_state['last_success_time'] = time.time()
    return {} # 保持简单，不更新状态

# --- 核心逻辑函数 ---
def analyze_image_from_url(image_url: str) -> dict:
    """
    分析来自URL的图片的颜色和亮度。
    """
    try:
        print(f"Analyzing image from URL: {image_url}")
        # 获取图片
        response = requests.get(image_url, timeout=10) # 添加超时
        response.raise_for_status() # 检查请求是否成功
        img = Image.open(BytesIO(response.content))

        # 基本信息
        width, height = img.size
        mode = img.mode

        # 转换为RGB（如果需要）
        if img.mode != "RGB":
            img = img.convert("RGB")

        # 获取平均颜色
        pixels = list(img.getdata())
        if not pixels:
            return {"error": "Image is empty or could not be read"}
        avg_color = tuple(sum(x) // len(pixels) for x in zip(*pixels))

        # 估算亮度 (0-255)
        brightness = sum(avg_color) // 3

        # 格式化结果
        return {
            "Image Size": f"{width}x{height}",
            "Image Mode": mode,
            "Average Color (RGB)": avg_color,
            "Brightness Level": brightness
        }
    except requests.exceptions.RequestException as e:
        print(f"Error fetching image {image_url}: {e}")
        return {"error": f"Failed to fetch image: {e}"}
    except Exception as e:
        print(f"Error analyzing image {image_url}: {e}")
        return {"error": f"Failed to analyze image: {e}"}

def get_twitter_user_mentions(username: str) -> Optional[List[Dict]]:
    """
    使用Twitter API获取用户的提及 (Mentions)。
    如果 twitter_plugin_gamesdk 不可用或未配置Token，则返回模拟数据。
    """
    if TwitterPlugin is None or not twitter_bearer_token:
        print("Warning: TwitterPlugin not available or Bearer Token not set. Using mock data.")
        # 返回模拟数据
        return [
            {'id': '1883506463731028254', 'text': 'Mock tweet 1 with image... https://t.co/mCrdOPRiOF', 'media_urls': ['https://pbs.twimg.com/media/GiOPIuYWcAA3moW.jpg']},
            {'id': '1883506453509480784', 'text': "Mock tweet 2 without image...", 'media_urls': []},
            {'id': '1883506168070590820', 'text': 'Mock tweet 3 with another image... https://example.com/image.png', 'media_urls': ['https://via.placeholder.com/150/0000FF/808080?text=Mock+Image+2']} # 使用占位符图片
        ]

    try:
        print(f"Getting Twitter mentions for @{username} using plugin...")
        options = {
            "id": "test_twitter_plugin",
            "name": "Test Twitter Plugin",
            "description": "An example Twitter Plugin for testing.",
            "credentials": {
                "bearerToken": twitter_bearer_token
            },
        }
        twitter_plugin = TwitterPlugin(options)
        # 注意：插件的函数名和参数可能需要根据实际插件调整
        get_user_fn = twitter_plugin.get_function('get_user_from_handle')
        user_info = get_user_fn(username=username) # 假设返回 {'id': user_id}
        if not user_info or 'id' not in user_info:
             print(f"Could not find user ID for {username}")
             return None
        user_id = user_info['id']

        get_user_mentions_fn = twitter_plugin.get_function('get_user_mentions')
        # 假设函数需要 user_id 和 max_results
        user_mentions = get_user_mentions_fn(user_id=user_id, max_results=10) # 获取最近10条提及
        # 假设返回的数据结构与模拟数据类似
        # 可能需要处理分页或时间范围
        print(f"Found {len(user_mentions)} mentions.")
        return user_mentions
    except Exception as e:
        print(f"Error getting Twitter mentions: {e}")
        return None

def analyze_tweeted_images_logic(start_time: str, **kwargs) -> FunctionResult:
    """
    函数执行逻辑：
    1. 使用Twitter API获取用户提及，包括图片URL。
    2. 将图片URL传递给分析函数以检测颜色和亮度。
    """
    print(f"Analyzing tweets since start_time: {start_time}") # 注意：start_time 在这个实现中未被严格用于过滤API调用
    TWITTER_HANDLE = "GAME_Virtuals" # TODO: 替换为实际的Twitter Handle

    try:
        res_twitter_mentions = get_twitter_user_mentions(username=TWITTER_HANDLE)

        if res_twitter_mentions is None:
            return FunctionResult(status=FunctionResultStatus.FAILED, message="无法获取Twitter提及", data={})

        analysis_results = []
        image_count = 0
        print(f"Processing {len(res_twitter_mentions)} mentions...")
        for mention in res_twitter_mentions:
            media_urls = mention.get("media_urls", [])
            if not media_urls:
                # print(f"Mention {mention.get('id')} has no media.")
                continue

            for media_url in media_urls:
                # 检查是否是图片URL (简单检查)
                if media_url.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
                    image_count += 1
                    print(f"Analyzing media URL: {media_url} from mention {mention.get('id')}")
                    analysis = analyze_image_from_url(media_url)
                    analysis_results.append({
                        "mention_id": mention.get('id'),
                        "media_url": media_url,
                        "analysis": analysis
                    })
                else:
                    print(f"Skipping non-image URL: {media_url}")

        print(f"Analyzed {len(analysis_results)} images from {image_count} detected image URLs.")
        # TODO: 在这里可以对 analysis_results 做进一步处理，比如判断图片是否"可疑"

        return FunctionResult(
            status=FunctionResultStatus.DONE,
            message=f"成功分析了 {len(analysis_results)} 张提及中的图片。",
            data={"analysis_results": analysis_results}
        )

    except Exception as e:
        print(f"Error during tweet analysis: {e}")
        import traceback
        traceback.print_exc() # 打印详细错误堆栈
        return FunctionResult(
            status=FunctionResultStatus.FAILED,
            message=f"分析推文图片时遇到错误: {e}",
            data={}
        )

# --- 创建 Function 对象 ---
screen_images_fn = Function(
    fn_name="screen_tweeted_images",
    fn_description="获取最近的Twitter提及中的图片，并分析它们的颜色和亮度。",
    args=[
        Argument(name="start_time", type="string", description="用于获取推文的开始时间 (格式: YYYY-MM-DDTHH:mm:ssZ)。注意：当前实现可能未严格使用此参数过滤。")
    ],
    executable=analyze_tweeted_images_logic # 使用包装后的逻辑函数
)

# --- 创建 Worker 对象 ---
# 注意：这里直接使用 Worker，而不是 Agent + WorkerConfig
# 这适用于目标单一、逻辑相对简单的场景
twitter_image_worker = Worker(
    api_key=game_api_key, # G.A.M.E框架可能需要API Key进行内部操作或计费
    description="处理收到的推文。如果有人@你并附带图片，检查图片的颜色和亮度。",
    instruction="获取最近提及中的图片信息，通过图像分析检查颜色和亮度。", # 更简洁的指令
    get_state_fn=get_state_fn, # 指定状态管理函数
    action_space=[screen_images_fn] # 定义工人能执行的动作
    # model_name="DeepSeek_R1" # 可以指定LLM模型，Worker内部会用LLM决定是否以及如何调用函数
)

# --- 运行 Worker ---
# 这个循环让Worker每隔15分钟检查一次新的提及
print("启动 Twitter 图片分析 Worker...")
while True:
    try:
        # 获取当前时间作为大致的 start_time (虽然函数内部可能没用)
        # 注意：Twitter API通常使用 since_id 或 end_time 来避免重复处理，这里简化了
        current_time_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime(time.time() - 15 * 60)) # 大约15分钟前
        print(f"\n[{time.strftime('%Y-%m-%d %H:%M:%S')}] Running worker cycle, checking tweets since ~{current_time_iso}...")

        # 调用 worker.run()，传入一个触发提示
        # Worker内部的LLM会根据 instruction 和 action_space 决定调用哪个函数
        # 这里只有一个函数，所以大概率会调用 screen_tweeted_images
        # 传入的参数会基于提示和函数定义由LLM生成，这里我们明确指定 start_time
        # 注意：直接调用 worker.run(prompt) 可能不足以精确传递参数，
        # 更可靠的方式是直接调用函数或让LLM根据更明确的提示生成参数。
        # 为了演示，我们假设LLM能理解提示并调用函数。
        # 或者，我们可以直接调用函数逻辑进行测试：
        # result = analyze_tweeted_images_logic(start_time=current_time_iso)
        # print(f"Direct call result: {result.status}, {result.message}")

        # 使用 worker.run() 让框架处理调用流程
        # 提示需要足够清晰，让LLM知道要调用哪个函数以及可能的参数
        run_result = twitter_image_worker.run(f"Analyze recent twitter mention images since {current_time_iso}")
        print(f"Worker run result: Status={run_result.status}, Message={run_result.message}")
        # print(f"Worker run data: {run_result.data}") # 可以打印返回的数据

    except Exception as e:
        print(f"An error occurred in the main loop: {e}")
        import traceback
        traceback.print_exc()

    print(f"Worker cycle finished. Waiting for 15 minutes...")
    time.sleep(15 * 60) # 等待15分钟

```

这个例子展示了G.A.M.E框架的另一种用法：

1. 我们直接创建了一个`Worker`实例，名为"twitter_image_worker"，专注于分析Twitter图片。
2. 它有一个核心技能（`Function`）：`screen_tweeted_images`，这个技能内部调用了Twitter API（通过插件或模拟）和图像处理库（Pillow）。
3. 状态管理被简化，`get_state_fn`不实际修改状态。
4. 通过一个循环，我们定期（每15分钟）运行这个Worker，让它检查新的Twitter提及并分析图片。

这种直接使用`Worker`的方式非常适合创建目标单一、自动化运行的后台任务型智能助手。

### 上手指南：如何开始用G.A.M.E"造"你的助手？

想亲自试试？来，跟我走几步（基于视频和通用SDK流程）：

**第1步：获取你的"工具箱"——G.A.M.E SDK**

* 冲向 **G.A.M.E GitHub仓库** (Celeste 和 Joey 的团队所在地: [https://github.com/game-by-virtuals](https://github.com/game-by-virtuals) - 这是根据视频推测的链接，请以官方发布为准)。
* 选择你的武器：目前有 **Python SDK (game-python)** 和 **Node.js SDK (game-node)** 两个版本。根据你的喜好和项目需求选择。
* **安装依赖**：对于上面的例子，你可能需要安装 `game-sdk`, `requests`, `Pillow`, 以及那个假设存在的 `twitter_plugin_gamesdk`。 (`pip install game-sdk requests Pillow twitter_plugin_gamesdk`)
* **重要提示 (Hackathon)**：再次强调，参加G.A.M.E赛道，请务必使用 **G.A.M.E SDK** 进行开发！那个看起来很方便的 GAME Cloud (低代码方案) 在这次黑客松的G.A.M.E赛道中 **不允许** 使用。我们要的是硬核代码！

**第2步：抄作业！研究示例代码**

* 别害羞，先从"抄作业"开始。在SDK仓库里找到 `examples` 文件夹。
* 官方仓库中有多种示例，有的像我们第一个例子那样使用`Agent`和`WorkerConfig`构建复杂结构，有的可能更像这个例子直接使用`Worker`。
* 多浏览几个不同的示例，看看它们是如何配置不同类型的智能体/工人，这会帮助你理解框架的灵活性。

**第3步：配置你的第一个Worker**

* 打开示例代码（比如上面那个Twitter图片分析助手）。
* **设定职责 (Worker Description)**：修改描述，清晰定义你的Worker是干什么的。
* **明确指令 (Worker Instruction)**：给出具体的操作指南或目标。
* **赋予技能 (Functions)**：定义Worker能执行的具体功能 (Function)。每个功能都需要名称、描述、参数 (args) 和实际执行的代码逻辑 (executable)。确保你的代码能处理各种输入和异常情况。
* **状态管理 (get_state_fn)**：决定你的Worker是否需要记住信息。如果需要，实现`get_state_fn`来更新状态字典。
* **别忘了API Key**：如果你的`Function`需要调用外部API（如Twitter API、图像识别服务等），确保在代码或环境变量中配置好所需的API Key或Token。

**第4步：启动引擎，见证奇迹！**

* 找到代码最后运行Worker的部分（比如那个`while True`循环）。
* **设置环境变量**：确保你的`GAME_API_KEY`和（如果需要）`TWITTER_BEARER_TOKEN`已设置为环境变量。
* 在你的终端里运行Python脚本 (`python your_worker_script.py`)。
* 观察终端输出！你会看到Worker的运行日志、函数调用的打印信息、以及最终的结果。这就是你的AI Worker在"活"着！
* **调试小技巧**：看不懂输出？在你的`executable`函数和`get_state_fn`里多加点 `print()` 语句。检查API调用的输入输出是否符合预期。处理好可能发生的异常。

### 来练练手吧！（15分钟小挑战）

1. **热身运动**：把上面的"Twitter图片分析助手"代码复制到你的Python环境，安装必要的库 (`pip install game-sdk requests Pillow`)。尝试运行它（它会使用模拟数据，因为`twitter_plugin_gamesdk`可能不存在）。观察输出。
2. **小试牛刀**：修改`analyze_image_from_url`函数，让它除了分析颜色和亮度，还能尝试检测图片中的主要物体（这可能需要引入更复杂的图像识别库或API，可以先用注释或伪代码表示）。
3. **进阶练习**：修改`analyze_tweeted_images_logic`函数，让它在分析完图片后，根据分析结果（比如亮度低于某个阈值）打印一条"图片可能太暗"的消息。

### 成功案例：看看大佬们用G.A.M.E搞了什么"大事"？

视频里提到了几个用Virtuals（很可能基于G.A.M.E框架或其早期版本）构建的酷炫Agent：

* **Luna (@luna_virtuals)**：一位AI虚拟网红，被雇佣来运营推特账号，据说年收入高达$365,000！她能直播、互动，甚至和真人（比如Wukong）合作。
* **Agent Byte (@agent_byte)**：开头提到的那个能帮你点披萨的Agent！通过推特互动，直接完成支付和下单。
* **aixbt (@aixbt_agent)**：一个专注于DeFi领域的Agent，能进行金融分析，分享Alpha信息。

这些例子展示了G.A.M.E框架的潜力，从社交媒体自动化到金融交易，AI Agent的应用场景超乎想象！

### 常见问题解答 (Q&A)

* **问：我必须写代码吗？那个GAME Cloud听起来很简单。**
  * 答：少年，清醒一点！对于这次黑客松的G.A.M.E赛道，是的，你**必须**使用G.A.M.E SDK（Python或Node.js），也就是需要写代码。GAME Cloud是个低代码平台，很方便，但这次比赛不让用在G.A.M.E赛道。拥抱代码吧，它没那么可怕！
* **问：`Agent` 和 `Worker` 到底啥关系？我该用哪个？**
  * 答：你可以把`Agent`想象成一个有"大脑"（HLP - 高阶规划器）的"项目经理"，它可以管理多个`Worker`（工人/专家）。每个`Worker`专注于特定任务。如果你需要一个能处理复杂目标、需要协调多个不同技能的智能体，就用`Agent`+`WorkerConfig`的结构。如果你的目标比较单一，只需要一个自动化执行特定流程的助手，直接用`Worker`可能更简单直接，就像我们第二个例子。
* **问：状态管理函数 `get_state_fn` 必须实现吗？**
  * 答：对于`Worker`来说，它是必需的参数，但你可以像例子中那样提供一个简单的不做任何事情的函数 (`return {}`)。只有当你的Worker需要根据过去的执行结果或外部变化来调整行为时，你才需要认真实现状态更新逻辑。
* **问：ACP插件是干嘛的？我需要用吗？**
  * 答：ACP（Agent Commerce Protocol）是另一个重要的协议，专注于让不同的Agent能互相"做生意"、协作。如果你参加的是ACP相关赛道，或者你的G.A.M.E Agent/Worker需要与其他Agent进行交互、交易，那可能需要。但对于纯粹构建单个Agent/Worker功能的G.A.M.E赛道项目，除非你的目标明确涉及Agent间商业协作，否则**不需要**主动去使用ACP插件。先聚焦G.A.M.E SDK本身。

### 总结与下一步：开启你的AI智能体之旅

恭喜你！你已经初步了解了G.A.M.E框架这个强大的AI Agent/Worker构建工具。记住这几点：

* G.A.M.E框架提供模块化构建AI智能体的能力。
* 你可以构建复杂的`Agent`（带HLP和多个Worker）或简单的`Worker`（专注于单一任务）。
* 通过定义Description, Instruction, Functions, 和 State Management来配置你的Worker。
* **黑客松G.A.M.E赛道必须使用G.A.M.E SDK！**

接下来做什么？

1. **深入文档**：官方文档是你的黄金指南！(找到视频里或Hackathon页面提供的文档链接，比如 `docs.game.virtuals.io`)
2. **玩转代码**：动手实践 `examples` 里的代码，特别是与你目标类似的代码结构，大胆修改，看看会发生什么。
3. **加入社区**：遇到问题？去Virtuals的Telegram群组提问，那里有大佬和你的战友们。
4. **关注后续Workshop**：视频里提到了后续还有关于ACP、Base链上Agent构建、以及VC对接的Workshop，别错过！

现在，你已经掌握了基础知识，是时候去创造属于你自己的"Twitter图片分析助手"或其他酷炫的AI Agent/Worker了！祝你在Virtuals Hackathon中玩得开心，Buidl出惊艳的作品！

---
⚠️ **免责声明**：本教程中的代码仅用于教育目的，且包含模拟和简化逻辑。在实际部署或处理敏感数据（如API密钥）时，请务必遵循安全最佳实践，进行充分测试，并进行专业的安全审计。我们不对任何可能的API滥用、数据泄露或意外行为负责。请谨慎操作！

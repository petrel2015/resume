import React from 'react';
import './App.css';

const App: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const handlePrint = () => {
    window.print();
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  React.useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  return (
    <div className="app-container">
      <div className="button-group">
        <button className="screen-btn" onClick={toggleFullScreen}>
          {isFullScreen ? '取消全屏' : '全屏显示'}
        </button>
        <button className="export-btn" onClick={handlePrint} title="建议使用 Chrome 浏览器以获得最佳导出效果">导出 PDF</button>
      </div>

      {/* 第一页 */}
      <div className="a4-page">
        <div className="header">
          <div className="info-left">
            <h1>洪宇</h1>
            <p className="intent-line">求职意向：Java 研发岗位 | 年龄：30 岁</p>
            <p className="edu-line">北京信息科技大学 | 本科 | 工学 - 计算机相关类 - 网络工程</p>
          </div>
          <div className="info-right">
            <p><a href="tel:18610280794" className="contact-link">186-1028-0794</a></p>
            <p><a href="mailto:petrel2015@foxmail.com" className="contact-link">petrel2015@foxmail.com</a></p>
            <p><a href="https://blog.csdn.net/petrel2015" target="_blank" rel="noopener noreferrer" className="contact-link">blog.csdn.net/petrel2015</a></p>
            <p>工作经验：7 年 +</p>
          </div>
        </div>

        <div className="section-title">核心优势</div>
        <div className="core-advantages">
          <div className="advantage-item">
            <span>⚡</span>
            <div><strong>高效交付专家：</strong>1 年交付 4 万行代码，19 人月复杂需求，缺陷密度 &lt; 0.9/人月</div>
          </div>
          <div className="advantage-item">
            <span>💯</span>
            <div><strong>性能优化能手：</strong>攻克 Spark 性能劣化 20% 难题，资源利用率提升 21%</div>
          </div>
          <div className="advantage-item">
            <span>🏅</span>
            <div><strong>核心代码贡献者：</strong>深度参与 Spark on Yarn 迁移至 Spark on K8s，节省百万成本</div>
          </div>
          <div className="advantage-item">
            <span>🦾</span>
            <div><strong>前沿技术探索者：</strong>引领团队拥抱 AI Agent 协同，通过 AI 赋能显著提升交付效能</div>
          </div>
        </div>

        <div className="section-title">技术栈</div>
        <div className="tech-stack">
          {/* 第一列 (窄) */}
          <div className="tech-group" style={{ gridColumn: 1, gridRow: 1 }}>
            <span className="tech-label">语言：</span>Java、Scala
          </div>
          <div className="tech-group" style={{ gridColumn: 1, gridRow: 2 }}>
            <span className="tech-label">云原生：</span>K8s、Docker
          </div>
          {/* 第二列 (宽) */}
          <div className="tech-group" style={{ gridColumn: 2, gridRow: 1 }}>
            <span className="tech-label">大数据：</span>Spark、HDFS、Hudi、Yarn
          </div>
          <div className="tech-group" style={{ gridColumn: 2, gridRow: 2 }}>
            <span className="tech-label">工具链：</span>Git、Maven、Arthas、JProfiler、IntelliJ IDEA
          </div>
          <div className="tech-group" style={{ gridColumn: 2, gridRow: 3 }}>
            <span className="tech-label">AI Agent：</span>Gemini-CLI、Claude-Code、MCP、Skill
          </div>
        </div>

        <div className="section-title">工作经历</div>
        
        <div className="experience-item">
          <div className="exp-header">
            <span>北京外企德科人力资源服务上海有限公司 (华为运营商业务)</span>
            <span>2022-05 至今</span>
          </div>
          <div className="exp-subheader">软件开发工程师 | 大数据平台构建、工具链维护</div>
          <div className="exp-content">
            <div className="exp-point">
              <span className="exp-point-title">⚡ 高效交付：</span>负责 Spark 引擎开发、维护、持续演进。2025年代码量 4万+，按时交付 19人月需求，缺陷密度 &lt; 0.9。参与架构切换核心开发工作，达成资源降配 20%目标。
            </div>
            <div className="exp-point">
              <span className="exp-point-title">🔧 问题解决：</span>2025年定位 180+ 次复杂问题，解决 144 个问题单，有效降低项目风险。
            </div>
            <div className="exp-point">
              <span className="exp-point-title">📚 知识传承：</span>2025年累计输出 70 篇 wiki 文档，提升团队技术水平。
            </div>
            <div className="exp-point">
              <span className="exp-point-title">🏅 荣誉表彰：</span>荣获部门“卓越编码奖”、“担当奖”。
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <span>汇智明德（北京）教育科技有限公司</span>
            <span>2020-06 至 2022-05</span>
          </div>
          <div className="exp-subheader">软件开发工程师 | NLP 引擎与教材系统开发</div>
          <div className="exp-content">
            <div className="exp-point">
              <span className="exp-point-title">🤖 NLP 引擎：</span>主导基于 Stanford NLP 的文本分析引擎，攻克长难句识别等难题。
            </div>
            <div className="exp-point">
              <span className="exp-point-title">🚀 系统落地：</span>教材系统落地新东方/友邻优客；文章检索系统服务于 21 世纪英文报。
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <span>硕士研究生备考</span>
            <span>2018-06 至 2020-03</span>
          </div>
          <div className="exp-content">
            系统复习计算机核心知识，夯实专业理论基础。
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <span>北京青牛技术股份有限公司</span>
            <span>2017-07 至 2018-05</span>
          </div>
          <div className="exp-subheader">软件开发工程师 | 呼叫中心管理系统</div>
          <div className="exp-content">
            负责 Java 功能模块开发，参与从需求分析到测试的全生命周期。
          </div>
        </div>

        <div className="section-title">教育背景</div>
        <div className="education-item">
          <div className="exp-header">
            <span>北京信息科技大学</span>
            <span className="edu-date">2013-09 至 2017-06</span>
          </div>
          <div className="exp-subheader">本科 | 工学 - 计算机相关类 - 网络工程</div>
        </div>

        <div className="page-footer">
          <span>洪宇 | Java 研发岗位 | 186-1028-0794</span>
          <span>第 1 / 2 页</span>
        </div>
      </div>

      {/* 第二页 */}
      <div className="a4-page">
        <div className="section-title">项目经历 & 关键成果展示</div>

        <div className="project-detail">
          <div className="project-header">
            <span>1、资源潮汐调度特性及其落地 (深度参与竞争力特性)</span>
          </div>
          <div className="project-meta">
            <span>关键词：云原生，Fabric8，Spark On K8s，资源节约</span>
            <span>角色：核心开发</span>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">🏆 成果</div>
            <div className="sub-content">实现计算任务耗时不变，总体资源降配 21%。</div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">📝 背景</div>
            <div className="sub-content">希望通过资源潮汐调度节约服务器资源。</div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">🎯 任务</div>
            <div className="sub-content">负责感知队列更新、动态扩缩容及亲和性调度等核心逻辑开发。<u>难点在于实现潮汐调度在快速响应资源变化的同时，保持任务运行的平稳性。</u></div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">⚡ 行动</div>
            <div className="sub-content">
              1. 感知队列更新：利用 fabric8 informer 监听资源 cr，感知潮汐动作。<br/>
              2. 动态扩缩容：动态更新 spark.dynamicAllocation.maxExecutors 参数，在高负载时扩容。<br/>
              3. 优雅缩容：在满足强制归还红线的前提下，通过平滑迁移技术尽可能减少任务失败重试。<br/>
              4. 亲和性调度：与 K8s scheduler 协同，通过 pod 注解实现 executor 在借来节点的亲和性部署。
            </div>
          </div>
        </div>

        <div className="project-detail">
          <div className="project-header">
            <span>2、攻克难题：Spark 性能问题攻关</span>
          </div>
          <div className="project-meta">
            <span>关键词：Arthas，JFR，GC优化，OOM 解决</span>
            <span>角色：救火队员</span>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">🏆 成果</div>
            <div className="sub-content">1. 提升性能 20%，并总结出一套定位指导。<br/>2. 沉淀性能优化方法论，显著提升个人与团队定位、分析及解决性能问题的效率，节省团队人力成本。</div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">📝 背景</div>
            <div className="sub-content">在 Spark On Yarn 切换至 K8s 过程中，发现性能劣化 20%。</div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">🎯 任务</div>
            <div className="sub-content">通过工具定位性能瓶颈并解决 OOM 问题。</div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">⚡ 行动</div>
            <div className="sub-content">
              1. 瓶颈定位：通过 Arthas 火焰图分析发现 SDK 拼接日志导致 10% 性能损耗。<br/>
              2. OOM 解决：分析内存 dump 找到泄露根因，与触发团队协作完成修复。<br/>
              3. 配置对标：修复 Spark 迁移至 K8s 后部分配置未生效导致的 CPU 利用率低问题。
            </div>
          </div>
        </div>

        <div className="project-detail">
          <div className="project-header">
            <span>3、大数据平台 JDK 8 至 21 基座升级</span>
          </div>
          <div className="project-meta">
            <span>关键词：JDK 21, Spark 3.5.1, G1 GC, 兼容性改造</span>
            <span>角色：主导人</span>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">🏆 成果</div>
            <div className="sub-content">主导完成 8 个核心服务及 4 个 SDK 组件的平滑升级，实现业务无感知切换，解决潜在安全红线风险。</div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">📝 背景</div>
            <div className="sub-content">JDK 8 进入日落周期，基于公司安全合规要求，需在限定时间内完成向 JDK 21 的迁移。</div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">🎯 任务</div>
            <div className="sub-content">在 Spark 3.5.1 生态下，解决全链路兼容性、依赖冲突及 GC 调优问题，确保性能不回退。</div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">⚡ 行动</div>
            <div className="sub-content">
              1. 兼容性改造：通过 Maven 降级编译保障字节码向下兼容；利用 `--add-opens` 解决 JDK 21 模块化后的反射访问限制。<br/>
              2. 依赖治理：解决 Hadoop 3.3.1 与 Hive 间的依赖冲突，协同周边团队对不支持 JDK 8 的开源库进行定制化降级编译。<br/>
              3. 性能调优：完成 CMS 至 G1 GC 的平滑迁移与参数重构，端到端压测显示核心指标持平，系统稳定性显著提升。
            </div>
          </div>
        </div>

        <div className="project-detail">
          <div className="project-header">
            <span>4、个人项目：Spark 智能性能诊断工具 (LLM + MCP)</span>
          </div>
          <div className="project-meta">
            <span>关键词：Spring Boot, Spring AI, DuckDB, Vue 3, Claude Code, Gemini CLI, LLM 诊断, MCP 服务</span>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">🎯 愿景</div>
            <div className="sub-content">
              基于 LLM 洞察数据，通过 MCP 开放能力。
            </div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">💡 亮点</div>
            <div className="sub-content">
              1. 智能诊断（AI-Driven）：依托大模型对系统预处理后的汇聚指标进行深度分析。利用 LLM 的推理能力，基于确定的初级指标进行二次推断，给出具有建设性、可落地的调优策略，生成动态且前瞻性的诊断建议。<br/>
              2. 规则诊断（Rule-Based）：通过预设业务规则（如 GC 时间占比、Shuffle情况等）对指标进行量化分析。为 Stage 和 Job 计算性能得分。输出结果稳定、可靠且可迭代的诊断报告。<br/>
              3. 生态赋能（MCP）：作为 MCP 服务运行，使 AI Agent 能直接读取并分析本地 Spark 日志。<br/>
              4. 效能革命（AI Agent）：全程基于 AI Agent 协同模式开发，深度实践 `skill` 与 `gemini.md` 配置. 沉淀出一套涵盖自动化提交、语义化版本发布及编码规范自检的工业级 AI 开发全流程。
            </div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">🔍 预览</div>
            <div className="sub-content qr-container">
              <a href="https://petrel2015.github.io/Spark-Performance-Insight/README.zh.html" target="_blank" rel="noopener noreferrer" className="contact-link">
                https://petrel2015.github.io/Spark-Performance-Insight
              </a>
              <div className="qr-code">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://petrel2015.github.io/Spark-Performance-Insight/README.zh.html" alt="QR Code" />
                <span>手机扫码查看</span>
              </div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <span>洪宇 | Java 研发岗位 | 186-1028-0794</span>
          <span>第 2 / 2 页</span>
        </div>
      </div>
    </div>
  );
};

export default App;

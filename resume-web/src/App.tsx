import React from 'react';
import './App.css';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <button className="export-btn" onClick={handlePrint}>导出 PDF</button>

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
            <span>💪</span>
            <div><strong>技术影响力先锋：</strong>1 年输出 70+ 技术文档，获华为“卓越编码奖”</div>
          </div>
          <div className="advantage-item">
            <span>🏅</span>
            <div><strong>核心代码贡献者：</strong>深度参与 Spark on Yarn 迁移至 Spark on K8s，节省百万成本</div>
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
              <span className="exp-point-title">📚 知识传承：</span>累计输出 70 篇 wiki 文档，提升团队技术水平。
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
          <strong>北京信息科技大学</strong>
          <span>本科 | 工学 - 计算机相关类 - 网络工程</span>
          <span className="edu-date">2013-09 至 2017-06</span>
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
            <div className="sub-title">背景 & 结果</div>
            <div className="sub-content">
              希望通过资源潮汐调度节约服务器资源。最终实现计算任务耗时不变，总体资源降配 21%。
            </div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">具体行动</div>
            <div className="sub-content">
              1. 感知队列更新：利用 fabric8 informer 监听资源 cr，感知潮汐动作。<br/>
              2. 动态扩缩容：动态更新 spark.dynamicAllocation.maxExecutors 参数，在高负载时扩容。<br/>
              3. 亲和性调度：与 K8s scheduler 协同，通过 pod 注解实现 executor 在借来节点的亲和性部署。
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
            <div className="sub-title">背景 & 结果</div>
            <div className="sub-content">
              在 Spark On Yarn 切换至 K8s 过程中，发现性能劣化 20%。攻关后提升性能 20%，并总结出一套定位指导。
            </div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">具体行动</div>
            <div className="sub-content">
              1. 瓶颈定位：通过 Arthas 火焰图和 JFR 文件分析。发现上游 SDK 在打印 debug 日志时拼接字符串导致 10% 性能损耗。<br/>
              2. OOM 解决：分析 GC 日志和内存 dump 文件，利用 JProfiler 找到内存泄漏根因，与触发团队协作修复。
            </div>
          </div>
        </div>

        <div className="project-detail">
          <div className="project-header">
            <span>3、版本安全送检与质量管理</span>
          </div>
          <div className="project-meta">
            <span>关键词：风险管控，安全红线，自动化扫描</span>
            <span>角色：专项负责人</span>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">具体行动</div>
            <div className="sub-content">
              1. 风险识别：联合安全 SE，利用自动化扫描规则对责任田进行深度扫描，识别内网安全红线风险。<br/>
              2. 人力协调：在扫描项过多、人力不足时，及时求助团队领导协调资源，保障送检进度。<br/>
              3. 闭环管理：建立每日日报 and 风险追踪机制。复核扫描规则，并将安全意识融入日常开发流程，输出会议纪要。
            </div>
          </div>
        </div>

        <div className="project-detail">
          <div className="project-header">
            <span>4、个人项目：Spark-Performance-Insight (开源工具)</span>
          </div>
          <div className="project-meta">
            <span>关键词：Java 21，DuckDB，Vue 3，Gemini CLI，性能优化</span>
            <span>角色：项目负责人 / 核心开发</span>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">背景 & 结果</div>
            <div className="sub-content">
              针对 Spark 原生 UI 加载大日志慢、易 OOM、无诊断建议的痛点，构建秒级解析工具。将 2GB 日志解析从 120min 优化至 5min (提升 24 倍)。
            </div>
          </div>
          <div className="project-sub-section">
            <div className="sub-title">具体行动</div>
            <div className="sub-content">
              1. 性能突破：引入奖章架构，利用 DuckDB 原生 JSON 加载实现 OLAP 级解析性能。<br/>
              2. 智能诊断：自研 9 维指标评分系统，通过“红绿灯”视觉反馈直观呈现 Stage 瓶颈。<br/>
              3. 质量闭环：集成 JMH 性能看护与 GitHub Actions CI，实现工业级自动化质量审计。
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

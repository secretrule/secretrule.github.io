<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>申先生 - 投资与跨境</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #1a1a1a; background: #fff; }
        .container { max-width: 1000px; margin: 0 auto; padding: 0 40px; }
        .navbar { position: fixed; top: 0; left: 0; width: 100%; background: rgba(255,255,255,0.98); backdrop-filter: blur(10px); z-index: 1000; border-bottom: 1px solid #f0f0f0; }
        .navbar .container { display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 40px; }
        .logo-text { font-size: 1.4rem; font-weight: 600; color: #1a1a1a; }
        .nav-links { display: flex; list-style: none; gap: 2.5rem; }
        .nav-links a { text-decoration: none; color: #666; font-weight: 400; font-size: 0.95rem; transition: color 0.2s; }
        .nav-links a:hover { color: #1a1a1a; }
        .hamburger { display: none; flex-direction: column; cursor: pointer; }
        .hamburger span { width: 22px; height: 2px; background: #1a1a1a; margin: 4px 0; }
        .hero { min-height: 100vh; display: flex; align-items: center; padding-top: 80px; background: #fafafa; }
        .hero-content { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 60px 0; }
        .hero-text { flex: 1; padding-right: 3rem; }
        .hero-title { font-size: 3.2rem; font-weight: 700; margin-bottom: 1.2rem; letter-spacing: -1px; }
        .greeting { display: block; font-size: 1.1rem; font-weight: 400; color: #666; margin-bottom: 0.8rem; }
        .name { display: block; color: #1a1a1a; }
        .hero-subtitle { font-size: 1.15rem; color: #666; margin-bottom: 2.5rem; line-height: 1.8; }
        .btn { padding: 0.9rem 2.2rem; border-radius: 4px; text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: all 0.2s; display: inline-block; }
        .btn-primary { background: #1a1a1a; color: white; }
        .btn-primary:hover { background: #333; }
        .btn-secondary { border: 1px solid #ddd; color: #1a1a1a; background: transparent; }
        .btn-secondary:hover { border-color: #1a1a1a; }
        .hero-buttons { display: flex; gap: 1.2rem; }
        .hero-image { flex: 0 0 320px; }
        .avatar { width: 280px; height: 280px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .avatar img { width: 100%; height: 100%; object-fit: cover; }
        .section-title { text-align: center; font-size: 2rem; font-weight: 600; margin-bottom: 3rem; color: #1a1a1a; }
        .about { padding: 120px 0; background: white; }
        .about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .about-text p { margin-bottom: 1.5rem; font-size: 1.1rem; color: #555; line-height: 1.8; }
        .about-stats { display: flex; gap: 2.5rem; justify-content: center; }
        .stat-item { text-align: center; }
        .stat-number { font-size: 2.8rem; font-weight: 700; color: #1a1a1a; letter-spacing: -2px; }
        .stat-label { font-size: 0.85rem; color: #888; margin-top: 0.3rem; text-transform: uppercase; letter-spacing: 1px; }
        .skills { padding: 120px 0; background: #fafafa; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .skill-card { background: white; padding: 2rem; border-radius: 8px; border: 1px solid #f0f0f0; transition: all 0.2s; }
        .skill-card:hover { border-color: #ddd; box-shadow: 0 2px 10px rgba(0,0,0,0.04); }
        .skill-card h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.8rem; color: #1a1a1a; }
        .skill-card p { color: #666; font-size: 0.9rem; line-height: 1.7; }
        .projects { padding: 120px 0; background: white; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; }
        .project-card { background: #fafafa; border-radius: 8px; overflow: hidden; transition: all 0.2s; }
        .project-card:hover { background: #f5f5f5; }
        .project-image { height: 160px; background: #1a1a1a; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: white; }
        .project-info { padding: 1.5rem; }
        .project-info h3 { font-size: 1.15rem; font-weight: 600; margin-bottom: 0.8rem; color: #1a1a1a; }
        .project-info p { color: #666; font-size: 0.9rem; line-height: 1.7; margin-bottom: 1rem; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tag { padding: 0.3rem 0.7rem; background: #f0f0f0; border-radius: 4px; font-size: 0.75rem; color: #666; }
        .contact { padding: 120px 0; background: #fafafa; }
        .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .contact-info { display: flex; flex-direction: column; gap: 1.8rem; }
        .contact-item { display: flex; align-items: center; gap: 1rem; font-size: 1rem; color: #333; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form input, .contact-form textarea { padding: 1rem; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 0.95rem; font-family: inherit; background: white; }
        .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: #1a1a1a; }
        .contact-form textarea { resize: none; height: 140px; }
        .footer { background: #1a1a1a; color: #888; padding: 2.5rem 0; text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 1.5rem; }
        .social-links a { width: 36px; height: 36px; background: rgba(255,255,255,0.08); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #888; }
        .footer p { font-size: 0.85rem; }
        @media (max-width: 768px) {
            .nav-links { display: none; }
            .hamburger { display: flex; }
            .hero-content { flex-direction: column; text-align: center; }
            .hero-text { padding-right: 0; margin-bottom: 2.5rem; }
            .hero-title { font-size: 2.2rem; }
            .avatar { width: 220px; height: 220px; }
            .about-content, .contact-content { grid-template-columns: 1fr; }
            .projects-grid, .skills-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="logo"><span class="logo-text">申先生</span></div>
            <ul class="nav-links">
                <li><a href="#about">关于我</a></li>
                <li><a href="#skills">专业领域</a></li>
                <li><a href="#projects">项目经验</a></li>
                <li><a href="#contact">联系我</a></li>
            </ul>
            <div class="hamburger"><span></span><span></span><span></span></div>
        </div>
    </nav>

    <section class="hero">
        <div class="container hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    <span class="greeting">你好，我是</span>
                    <span class="name">申先生</span>
                </h1>
                <p class="hero-subtitle">专注于投资与跨境 | 策划35岁前退休</p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">查看项目</a>
                    <a href="#contact" class="btn btn-secondary">联系我</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="avatar">
                    <img src="https://neeko-copilot.bytedance.net/api/text2image?prompt=professional%20asian%20businessman%20portrait%20minimalist%20style%20black%20and%20white%20clean%20background%20confident%20look&image_size=square" alt="申先生" />
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">关于我</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>我是申先生，一位专注于投资与跨境领域的创业者。拥有多年的投资经验和跨境业务运营经验，致力于通过理性投资和全球化视野实现财务自由。</p>
                    <p>我的人生目标是在35岁前实现提前退休，为此我制定了严谨的财务规划和投资策略。我相信通过智慧投资和持续学习，每个人都能实现自己的财务目标。</p>
                </div>
                <div class="about-stats">
                    <div class="stat-item"><div class="stat-number">8+</div><div class="stat-label">投资经验</div></div>
                    <div class="stat-item"><div class="stat-number">15+</div><div class="stat-label">跨境项目</div></div>
                    <div class="stat-item"><div class="stat-number">35</div><div class="stat-label">退休目标</div></div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">专业领域</h2>
            <div class="skills-grid">
                <div class="skill-card"><h3>投资理财</h3><p>精通股票、基金、债券等多种投资工具，擅长资产配置和风险控制，追求稳健收益。</p></div>
                <div class="skill-card"><h3>跨境业务</h3><p>熟悉跨境电商、国际贸易流程，具备全球化视野和跨文化沟通能力。</p></div>
                <div class="skill-card"><h3>资产配置</h3><p>擅长制定个性化投资组合，实现资产多元化配置，平衡风险与收益。</p></div>
                <div class="skill-card"><h3>财务规划</h3><p>精通个人财务规划，包括预算管理、税务筹划、退休规划等全方位理财服务。</p></div>
                <div class="skill-card"><h3>金融分析</h3><p>具备扎实的金融分析能力，能够深入研究市场趋势和投资标的，做出理性决策。</p></div>
                <div class="skill-card"><h3>被动收入</h3><p>专注于构建多元化被动收入渠道，为提前退休奠定坚实的财务基础。</p></div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">项目经验</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">📈</div>
                    <div class="project-info">
                        <h3>投资组合管理</h3>
                        <p>为高净值客户提供定制化投资组合管理服务，实现年化收益率超过市场平均水平。</p>
                        <div class="project-tags"><span class="tag">资产配置</span><span class="tag">风险控制</span><span class="tag">财富管理</span></div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">🚢</div>
                    <div class="project-info">
                        <h3>跨境电商运营</h3>
                        <p>成功运营多个跨境电商店铺，覆盖欧美市场，年销售额突破千万。</p>
                        <div class="project-tags"><span class="tag">跨境贸易</span><span class="tag">电商运营</span><span class="tag">供应链</span></div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">🏢</div>
                    <div class="project-info">
                        <h3>海外房产投资</h3>
                        <p>主导多个海外房产投资项目，涉及东南亚和欧美市场，实现稳健的租金收益和资产增值。</p>
                        <div class="project-tags"><span class="tag">海外投资</span><span class="tag">房产分析</span><span class="tag">资产增值</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">联系我</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item"><span>📧</span><span>contact@example.com</span></div>
                    <div class="contact-item"><span>📱</span><span>+86 123-4567-8900</span></div>
                    <div class="contact-item"><span>📍</span><span>北京市朝阳区科技园区</span></div>
                </div>
                <form class="contact-form" id="contactForm">
                    <input type="text" placeholder="姓名" id="name">
                    <input type="email" placeholder="邮箱" id="email">
                    <textarea placeholder="留言内容" id="message"></textarea>
                    <button type="submit" class="btn btn-primary">发送消息</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="social-links">
                <a href="#"><span>💼</span></a>
                <a href="#"><span>🔗</span></a>
                <a href="#"><span>🐦</span></a>
                <a href="#"><span>💬</span></a>
            </div>
            <p>&copy; 2024 申先生. All rights reserved.</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                alert(`感谢您的留言，${name}！我们会尽快与您联系。`);
                contactForm.reset();
            });
        });
    </script>
</body>
</html>

// 基本的 DOM 操作示例
document.addEventListener('DOMContentLoaded', function() {
  // 切换移动端导航
  var navToggle = document.getElementById('nav-toggle');
  var navList = document.getElementById('nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // 主题切换功能
  const themeToggle = document.getElementById('theme-toggle');
  
  // 检查用户之前的主题偏好或系统偏好
  const currentTheme = localStorage.getItem('theme') || (window.matchers?.matches ? 'dark' : 'light');
  
  // 如果用户之前选择了深色模式，则应用该模式
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
  // 更新主题切换按钮的文本
  if (themeToggle) {
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', function() {
      // 切换深色模式类
      document.body.classList.toggle('dark-mode');
      
      // 获取当前主题
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      // 保存用户偏好到localStorage
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
      // 更新按钮文本
      this.textContent = isDarkMode ? '☀️' : '🌙';
    });
  }

  // 语言切换功能
  const languageToggle = document.getElementById('language-toggle');
  const currentLanguage = localStorage.getItem('language') || 'zh';
  
  // 根据保存的语言设置初始化页面
  if (currentLanguage === 'en') {
    switchLanguage('en');
  }
  
  if (languageToggle) {
    // 初始化语言切换按钮文本
    languageToggle.textContent = currentLanguage === 'en' ? '中文' : 'English';
    
    languageToggle.addEventListener('click', function() {
      // 切换语言
      const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
      const newLang = currentLang === 'zh' ? 'en' : 'zh';
      
      switchLanguage(newLang);
      
      // 更新语言切换按钮文本
      this.textContent = newLang === 'en' ? '中文' : 'English';
      
      // 保存用户偏好到localStorage
      localStorage.setItem('language', newLang);
    });
  }

  // 语言切换函数
  function switchLanguage(lang) {
    // 更新HTML的lang属性
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    
    // 获取当前页面中的所有需要翻译的元素
    const translations = {
      'zh': {
        '个人作品集': '个人作品集',
        '首页': '首页',
        '作品': '作品',
        '关于': '关于',
        '联系': '联系',
        '菜单': '菜单',
        '你好，我是张智均': '你好，我是张智均',
        '欢迎查看我的个人作品集网站，这里展示了我的最新作品和项目。': '欢迎查看我的个人作品集网站，这里展示了我的最新作品和项目。',
        '作品展示': '作品展示',
        '查看': '查看',
        '关于我': '关于我',
        '我是一名热爱技术与设计的前端开发者，拥有5年以上的Web开发经验。专注于创建用户友好、性能优化的现代Web应用程序。热衷于学习新技术，解决复杂问题，并致力于提供高质量的代码和卓越的用户体验。': '我是一名热爱技术与设计的前端开发者，拥有5年以上的Web开发经验。专注于创建用户友好、性能优化的现代Web应用程序。热衷于学习新技术，解决复杂问题，并致力于提供高质量的代码和卓越的用户体验。',
        '专业技能': '专业技能',
        '专业经历': '专业经历',
        '个人成就与证书': '个人成就与证书',
        '发送消息': '发送消息',
        '联系信息': '联系信息',
        '社交媒体': '社交媒体',
        '我的位置': '我的位置',
        '姓名': '姓名',
        '邮箱': '邮箱',
        '留言': '留言',
        '© 2025 ZHANGZHIJUN': '© 2025 ZHANGZHIJUN',
        '查看绿色星云中的飞碟舰队作品': '查看绿色星云中的飞碟舰队作品',
        '查看宇宙决战中的巨型机甲作品': '查看宇宙决战中的巨型机甲作品',
        '查看太空机甲基地内部作品': '查看太空机甲基地内部作品',
        '绿色星云中的飞碟舰队': '绿色星云中的飞碟舰队',
        '宇宙决战中的巨型机甲': '宇宙决战中的巨型机甲',
        '太空机甲基地内部': '太空机甲基地内部',
        '一艘巨大的飞碟型宇宙战舰悬停在翠绿星云之中，其表面布满发光的绿色电路纹路，周围小型飞船穿梭飞行，发射出彩色激光。远处行星与陨石群点缀其间，构成一幅神秘而宏大的太空奇观。': '一艘巨大的飞碟型宇宙战舰悬停在翠绿星云之中，其表面布满发光的绿色电路纹路，周围小型飞船穿梭飞行，发射出彩色激光。远处行星与陨石群点缀其间，构成一幅神秘而宏大的太空奇观。',
        '在炽烈燃烧的恒星背景前，一台庞大的变形机甲矗立于太空战场中心，四架战机环绕其周身，释放出金色能量束。整个画面充满动感与力量，象征着一场史诗级的星际对决正在上演。': '在炽烈燃烧的恒星背景前，一台庞大的变形机甲矗立于太空战场中心，四架战机环绕其周身，释放出金色能量束。整个画面充满动感与力量，象征着一场史诗级的星际对决正在上演。',
        '在深邃宇宙的映衬下，一艘巨型空间站内，多台机甲正沿着传送带有序行进。透明穹顶外，壮丽的星系旋臂清晰可见，而前景中悬浮的全息界面显示着复杂的系统数据，展现出未来科技与机械美学的完美融合。': '在深邃宇宙的映衬下，一艘巨型空间站内，多台机甲正沿着传送带有序行进。透明穹顶外，壮丽的星系旋臂清晰可见，而前景中悬浮的全息界面显示着复杂的系统数据，展现出未来科技与机械美学的完美融合。',
        '2022年 - 至今': '2022年 - 至今',
        '高级前端工程师 - 科技有限公司': '高级前端工程师 - 科技有限公司',
        '负责大型Web应用的架构设计和核心功能开发，带领5人前端团队，优化应用性能，提升用户体验。': '负责大型Web应用的架构设计和核心功能开发，带领5人前端团队，优化应用性能，提升用户体验。',
        '2020年 - 2022年': '2020年 - 2022年',
        '前端工程师 - 创新科技公司': '前端工程师 - 创新科技公司',
        '参与多个客户项目的前端开发工作，使用React和Vue构建响应式Web应用，与设计团队紧密合作实现高质量界面。': '参与多个客户项目的前端开发工作，使用React和Vue构建响应式Web应用，与设计团队紧密合作实现高质量界面。',
        '2018年 - 2020年': '2018年 - 2020年',
        '初级前端开发 - 网络技术公司': '初级前端开发 - 网络技术公司',
        '负责维护和开发公司官网及内部管理系统，使用HTML、CSS和JavaScript实现交互功能。': '负责维护和开发公司官网及内部管理系统，使用HTML、CSS和JavaScript实现交互功能。',
        'Google认证 - 专业Web开发者': 'Google认证 - 专业Web开发者',
        '2023年获得': '2023年获得',
        '验证了在构建高性能、可访问的Web应用方面的专业技能。': '验证了在构建高性能、可访问的Web应用方面的专业技能。',
        '开源项目贡献者': '开源项目贡献者',
        '2021年至今': '2021年至今',
        '在多个知名开源项目中贡献代码，包括React生态系统中的工具库。': '在多个知名开源项目中贡献代码，包括React生态系统中的工具库。',
        '公司年度最佳员工': '公司年度最佳员工',
        '2022年': '2022年',
        '因在项目中的卓越表现和团队协作精神获得此荣誉。': '因在项目中的卓越表现和团队协作精神获得此荣誉。',
        '前端性能优化专家': '前端性能优化专家',
        '2021年': '2021年',
        '成功将主要产品的加载时间减少40%，显著提升用户体验。': '成功将主要产品的加载时间减少40%，显著提升用户体验。',
        '邮箱：': '邮箱：',
        '电话：': '电话：',
        '地址：银河系·太阳区·地球村': '地址：银河系·太阳区·地球村',
        'GitHub': 'GitHub',
        'LinkedIn': 'LinkedIn',
        'Twitter': 'Twitter',
        '微博': '微博'
      },
      'en': {
        '个人作品集': 'Portfolio',
        '首页': 'Home',
        '作品': 'Projects',
        '关于': 'About',
        '联系': 'Contact',
        '菜单': 'Menu',
        '你好，我是张智均': 'Hello, I\'m Zhang Zhijun',
        '欢迎查看我的个人作品集网站，这里展示了我的最新作品和项目。': 'Welcome to my portfolio website, showcasing my latest works and projects.',
        '作品展示': 'Projects',
        '查看': 'View',
        '关于我': 'About Me',
        '我是一名热爱技术与设计的前端开发者，拥有5年以上的Web开发经验。专注于创建用户友好、性能优化的现代Web应用程序。热衷于学习新技术，解决复杂问题，并致力于提供高质量的代码和卓越的用户体验。': 'I am a front-end developer passionate about technology and design with over 5 years of experience. I specialize in creating user-friendly, performance-optimized modern web applications. I enjoy learning new technologies, solving complex problems, and am committed to delivering high-quality code and excellent user experiences.',
        '专业技能': 'Professional Skills',
        '专业经历': 'Professional Experience',
        '个人成就与证书': 'Achievements & Certificates',
        '发送消息': 'Send Message',
        '联系信息': 'Contact Info',
        '社交媒体': 'Social Media',
        '我的位置': 'My Location',
        '姓名': 'Name',
        '邮箱': 'Email',
        '留言': 'Message',
        '© 2025 ZHANGZHIJUN': '© 2025 ZHANGZHIJUN',
        '查看绿色星云中的飞碟舰队作品': 'View the UFO fleet in the green nebula project',
        '查看宇宙决战中的巨型机甲作品': 'View the giant mecha in cosmic battle project',
        '查看太空机甲基地内部作品': 'View the interior of space mecha base project',
        '绿色星云中的飞碟舰队': 'UFO Fleet in Green Nebula',
        '宇宙决战中的巨型机甲': 'Giant Mecha in Cosmic Battle',
        '太空机甲基地内部': 'Interior of Space Mecha Base',
        '一艘巨大的飞碟型宇宙战舰悬停在翠绿星云之中，其表面布满发光的绿色电路纹路，周围小型飞船穿梭飞行，发射出彩色激光。远处行星与陨石群点缀其间，构成一幅神秘而宏大的太空奇观。': 'A massive UFO-shaped spaceship hovers in a green nebula, with luminous green circuit patterns on its surface. Small ships fly around it, emitting colorful lasers. Distant planets and asteroids dot the area, forming a mysterious and magnificent cosmic spectacle.',
        '在炽烈燃烧的恒星背景前，一台庞大的变形机甲矗立于太空战场中心，四架战机环绕其周身，释放出金色能量束。整个画面充满动感与力量，象征着一场史诗级的星际对决正在上演。': 'Against the backdrop of a burning star, a massive transforming mecha stands at the center of a space battlefield, with four fighters circling around it, releasing golden energy beams. The entire scene is full of motion and power, symbolizing an epic interstellar battle unfolding.',
        '在深邃宇宙的映衬下，一艘巨型空间站内，多台机甲正沿着传送带有序行进。透明穹顶外，壮丽的星系旋臂清晰可见，而前景中悬浮的全息界面显示着复杂的系统数据，展现出未来科技与机械美学的完美融合。': 'Against the backdrop of deep space, inside a giant space station, multiple mechas are moving orderly along conveyor belts. Outside the transparent dome, magnificent galactic arms are clearly visible, while holographic interfaces floating in the foreground display complex system data, showcasing the perfect fusion of futuristic technology and mechanical aesthetics.',
        '2022年 - 至今': '2022 - Present',
        '高级前端工程师 - 科技有限公司': 'Senior Frontend Engineer - Tech Co., Ltd.',
        '负责大型Web应用的架构设计和核心功能开发，带领5人前端团队，优化应用性能，提升用户体验。': 'Responsible for architecture design and core feature development of large web applications, leading a 5-person frontend team, optimizing application performance and enhancing user experience.',
        '2020年 - 2022年': '2020 - 2022',
        '前端工程师 - 创新科技公司': 'Frontend Engineer - Innovative Tech Co.',
        '参与多个客户项目的前端开发工作，使用React和Vue构建响应式Web应用，与设计团队紧密合作实现高质量界面。': 'Participated in frontend development of multiple client projects, built responsive web applications using React and Vue, closely collaborated with design team to implement high-quality interfaces.',
        '2018年 - 2020年': '2018 - 2020',
        '初级前端开发 - 网络技术公司': 'Junior Frontend Developer - Network Tech Co.',
        '负责维护和开发公司官网及内部管理系统，使用HTML、CSS和JavaScript实现交互功能。': 'Responsible for maintaining and developing company website and internal management systems, implementing interactive features using HTML, CSS and JavaScript.',
        'Google认证 - 专业Web开发者': 'Google Certified - Professional Web Developer',
        '2023年获得': 'Obtained in 2023',
        '验证了在构建高性能、可访问的Web应用方面的专业技能。': 'Validated professional skills in building high-performance, accessible web applications.',
        '开源项目贡献者': 'Open Source Contributor',
        '2021年至今': 'Since 2021',
        '在多个知名开源项目中贡献代码，包括React生态系统中的工具库。': 'Contributed code to multiple well-known open source projects, including tool libraries in the React ecosystem.',
        '公司年度最佳员工': 'Company Employee of the Year',
        '2022年': '2022',
        '因在项目中的卓越表现和团队协作精神获得此荣誉。': 'Received this honor for outstanding performance and team collaboration spirit in projects.',
        '前端性能优化专家': 'Frontend Performance Optimization Expert',
        '2021年': '2021',
        '成功将主要产品的加载时间减少40%，显著提升用户体验。': 'Successfully reduced loading time of key products by 40%, significantly improving user experience.',
        '邮箱：': 'Email: ',
        '电话：': 'Phone: ',
        '地址：银河系·太阳区·地球村': 'Address: Earth Village, Solar District, Milky Way Galaxy',
        'GitHub': 'GitHub',
        'LinkedIn': 'LinkedIn',
        'Twitter': 'Twitter',
        '微博': 'Weibo'
      }
    };
    
    // 更新页面内容
    if (lang === 'en') {
      // 更新导航链接
      const navLinks = document.querySelectorAll('.nav-list a');
      if (navLinks.length >= 4) {
        navLinks[0].textContent = translations.en['首页'];
        navLinks[0].setAttribute('href', '#top');
        navLinks[1].textContent = translations.en['作品'];
        navLinks[1].setAttribute('href', '#projects');
        navLinks[2].textContent = translations.en['关于'];
        navLinks[2].setAttribute('href', '#about');
        navLinks[3].textContent = translations.en['联系'];
        navLinks[3].setAttribute('href', '#contact');
      }
      
      // 更新其他文本内容
      document.querySelector('.logo').textContent = translations.en['个人作品集'];
      document.querySelector('.hero h2').textContent = translations.en['你好，我是张智均'];
      document.querySelector('.hero p').textContent = translations.en['欢迎查看我的个人作品集网站，这里展示了我的最新作品和项目。'];
      document.querySelector('.projects h3').textContent = translations.en['作品展示'];
      
      // 更新项目卡片内容
      const projectCards = document.querySelectorAll('.project-card');
      if (projectCards.length >= 3) {
        // 第一个项目卡片
        projectCards[0].querySelector('h4').textContent = translations.en['绿色星云中的飞碟舰队'];
        projectCards[0].querySelector('p').textContent = translations.en['一艘巨大的飞碟型宇宙战舰悬停在翠绿星云之中，其表面布满发光的绿色电路纹路，周围小型飞船穿梭飞行，发射出彩色激光。远处行星与陨石群点缀其间，构成一幅神秘而宏大的太空奇观。'];
        projectCards[0].querySelector('.view-btn').textContent = translations.en['查看'];
        projectCards[0].querySelector('.view-btn').setAttribute('aria-label', translations.en['查看绿色星云中的飞碟舰队作品']);
        
        // 第二个项目卡片
        projectCards[1].querySelector('h4').textContent = translations.en['宇宙决战中的巨型机甲'];
        projectCards[1].querySelector('p').textContent = translations.en['在炽烈燃烧的恒星背景前，一台庞大的变形机甲矗立于太空战场中心，四架战机环绕其周身，释放出金色能量束。整个画面充满动感与力量，象征着一场史诗级的星际对决正在上演。'];
        projectCards[1].querySelector('.view-btn').textContent = translations.en['查看'];
        projectCards[1].querySelector('.view-btn').setAttribute('aria-label', translations.en['查看宇宙决战中的巨型机甲作品']);
        
        // 第三个项目卡片
        projectCards[2].querySelector('h4').textContent = translations.en['太空机甲基地内部'];
        projectCards[2].querySelector('p').textContent = translations.en['在深邃宇宙的映衬下，一艘巨型空间站内，多台机甲正沿着传送带有序行进。透明穹顶外，壮丽的星系旋臂清晰可见，而前景中悬浮的全息界面显示着复杂的系统数据，展现出未来科技与机械美学的完美融合。'];
        projectCards[2].querySelector('.view-btn').textContent = translations.en['查看'];
        projectCards[2].querySelector('.view-btn').setAttribute('aria-label', translations.en['查看太空机甲基地内部作品']);
      }
      
      // 更新关于我部分
      document.querySelector('.about h3').textContent = translations.en['关于我'];
      document.querySelector('.about-text p').textContent = translations.en['我是一名热爱技术与设计的前端开发者，拥有5年以上的Web开发经验。专注于创建用户友好、性能优化的现代Web应用程序。热衷于学习新技术，解决复杂问题，并致力于提供高质量的代码和卓越的用户体验。'];
      
      const aboutHeaders = document.querySelectorAll('.about-content h4, .experience-section h4, .achievements-section h4');
      if (aboutHeaders.length >= 3) {
        aboutHeaders[0].textContent = translations.en['专业技能'];
        aboutHeaders[1].textContent = translations.en['专业经历'];
        aboutHeaders[2].textContent = translations.en['个人成就与证书'];
      }
      
      // 更新专业技能列表
      const skillItems = document.querySelectorAll('.skills-list li');
      if (skillItems.length >= 8) {
        skillItems[0].innerHTML = 'HTML5 / CSS3 / JavaScript (ES6+)';
        skillItems[1].innerHTML = 'React.js / Vue.js / Angular';
        skillItems[2].innerHTML = 'Node.js / Express';
        skillItems[3].innerHTML = 'Webpack / Vite';
        skillItems[4].innerHTML = 'Responsive Design / Mobile First';
        skillItems[5].innerHTML = 'UI/UX Design Principles';
        skillItems[6].innerHTML = 'RESTful API / GraphQL';
        skillItems[7].innerHTML = 'Git / CI/CD';
      }
      
      // 更新专业经历
      const timelineItems = document.querySelectorAll('.timeline-item');
      if (timelineItems.length >= 3) {
        // 第一个经历
        timelineItems[0].querySelector('.timeline-date').textContent = translations.en['2022年 - 至今'];
        timelineItems[0].querySelector('h5').innerHTML = translations.en['高级前端工程师 - 科技有限公司'];
        timelineItems[0].querySelectorAll('p')[0].textContent = translations.en['负责大型Web应用的架构设计和核心功能开发，带领5人前端团队，优化应用性能，提升用户体验。'];
        
        // 第二个经历
        timelineItems[1].querySelector('.timeline-date').textContent = translations.en['2020年 - 2022年'];
        timelineItems[1].querySelector('h5').innerHTML = translations.en['前端工程师 - 创新科技公司'];
        timelineItems[1].querySelectorAll('p')[0].textContent = translations.en['参与多个客户项目的前端开发工作，使用React和Vue构建响应式Web应用，与设计团队紧密合作实现高质量界面。'];
        
        // 第三个经历
        timelineItems[2].querySelector('.timeline-date').textContent = translations.en['2018年 - 2020年'];
        timelineItems[2].querySelector('h5').innerHTML = translations.en['初级前端开发 - 网络技术公司'];
        timelineItems[2].querySelectorAll('p')[0].textContent = translations.en['负责维护和开发公司官网及内部管理系统，使用HTML、CSS和JavaScript实现交互功能。'];
      }
      
      // 更新个人成就
      const achievementItems = document.querySelectorAll('.achievement-item');
      if (achievementItems.length >= 4) {
        // 第一个成就
        achievementItems[0].querySelector('h5').innerHTML = translations.en['Google认证 - 专业Web开发者'];
        achievementItems[0].querySelector('.achievement-date').textContent = translations.en['2023年获得'];
        achievementItems[0].querySelectorAll('p')[1].textContent = translations.en['验证了在构建高性能、可访问的Web应用方面的专业技能。'];
        
        // 第二个成就
        achievementItems[1].querySelector('h5').innerHTML = translations.en['开源项目贡献者'];
        achievementItems[1].querySelector('.achievement-date').textContent = translations.en['2021年至今'];
        achievementItems[1].querySelectorAll('p')[1].textContent = translations.en['在多个知名开源项目中贡献代码，包括React生态系统中的工具库。'];
        
        // 第三个成就
        achievementItems[2].querySelector('h5').innerHTML = translations.en['公司年度最佳员工'];
        achievementItems[2].querySelector('.achievement-date').textContent = translations.en['2022年'];
        achievementItems[2].querySelectorAll('p')[1].textContent = translations.en['因在项目中的卓越表现和团队协作精神获得此荣誉。'];
        
        // 第四个成就
        achievementItems[3].querySelector('h5').innerHTML = translations.en['前端性能优化专家'];
        achievementItems[3].querySelector('.achievement-date').textContent = translations.en['2021年'];
        achievementItems[3].querySelectorAll('p')[1].textContent = translations.en['成功将主要产品的加载时间减少40%，显著提升用户体验。'];
      }
      
      // 更新联系部分
      document.querySelector('.contact h3').textContent = translations.en['联系'];
      document.querySelector('.contact-form h4').textContent = translations.en['发送消息'];
      
      const formLabels = document.querySelectorAll('.form-group label');
      if (formLabels.length >= 3) {
        formLabels[0].textContent = translations.en['姓名'];
        formLabels[1].textContent = translations.en['邮箱'];
        formLabels[2].textContent = translations.en['留言'];
      }
      
      document.querySelector('.submit-btn').textContent = translations.en['发送消息'];
      
      const contactHeaders = document.querySelectorAll('.contact-info h4');
      if (contactHeaders.length >= 3) {
        contactHeaders[0].textContent = translations.en['联系信息'];
        contactHeaders[1].textContent = translations.en['社交媒体'];
        contactHeaders[2].textContent = translations.en['我的位置'];
      }
      
      // 更新联系信息列表
      const contactListItems = document.querySelectorAll('.contact-list li');
      if (contactListItems.length >= 3) {
        contactListItems[0].innerHTML = translations.en['邮箱：'] + '<a href="mailto:2217594081@qq.com">2217594081@qq.com</a>';
        contactListItems[1].innerHTML = translations.en['电话：'] + '<a href="tel:10086">10086</a>';
        contactListItems[2].innerHTML = translations.en['地址：银河系·太阳区·地球村'];
      }
      
      // 更新社交媒体链接
      const socialLinks = document.querySelectorAll('.social-link span');
      if (socialLinks.length >= 4) {
        socialLinks[0].textContent = translations.en['GitHub'];
        socialLinks[1].textContent = translations.en['LinkedIn'];
        socialLinks[2].textContent = translations.en['Twitter'];
        socialLinks[3].textContent = translations.en['微博'];
      }
      
      document.querySelector('.site-footer p').innerHTML = translations.en['© 2025 ZHANGZHIJUN'];
      
      // 更新导航切换按钮
      if (navToggle) {
        navToggle.setAttribute('aria-label', 'Toggle navigation');
        navToggle.textContent = translations.en['菜单'];
      }
      
      // 更新语言切换按钮文本
      if (languageToggle) {
        languageToggle.textContent = '中文';
      }
    } else {
      // 恢复为中文
      const navLinks = document.querySelectorAll('.nav-list a');
      if (navLinks.length >= 4) {
        navLinks[0].textContent = translations.zh['首页'];
        navLinks[0].setAttribute('href', '#top');
        navLinks[1].textContent = translations.zh['作品'];
        navLinks[1].setAttribute('href', '#projects');
        navLinks[2].textContent = translations.zh['关于'];
        navLinks[2].setAttribute('href', '#about');
        navLinks[3].textContent = translations.zh['联系'];
        navLinks[3].setAttribute('href', '#contact');
      }
      
      document.querySelector('.logo').textContent = translations.zh['个人作品集'];
      document.querySelector('.hero h2').textContent = translations.zh['你好，我是张智均'];
      document.querySelector('.hero p').textContent = translations.zh['欢迎查看我的个人作品集网站，这里展示了我的最新作品和项目。'];
      document.querySelector('.projects h3').textContent = translations.zh['作品展示'];
      
      // 更新项目卡片内容
      const projectCards = document.querySelectorAll('.project-card');
      if (projectCards.length >= 3) {
        // 第一个项目卡片
        projectCards[0].querySelector('h4').textContent = translations.zh['绿色星云中的飞碟舰队'];
        projectCards[0].querySelector('p').textContent = translations.zh['一艘巨大的飞碟型宇宙战舰悬停在翠绿星云之中，其表面布满发光的绿色电路纹路，周围小型飞船穿梭飞行，发射出彩色激光。远处行星与陨石群点缀其间，构成一幅神秘而宏大的太空奇观。'];
        projectCards[0].querySelector('.view-btn').textContent = translations.zh['查看'];
        projectCards[0].querySelector('.view-btn').setAttribute('aria-label', translations.zh['查看绿色星云中的飞碟舰队作品']);
        
        // 第二个项目卡片
        projectCards[1].querySelector('h4').textContent = translations.zh['宇宙决战中的巨型机甲'];
        projectCards[1].querySelector('p').textContent = translations.zh['在炽烈燃烧的恒星背景前，一台庞大的变形机甲矗立于太空战场中心，四架战机环绕其周身，释放出金色能量束。整个画面充满动感与力量，象征着一场史诗级的星际对决正在上演。'];
        projectCards[1].querySelector('.view-btn').textContent = translations.zh['查看'];
        projectCards[1].querySelector('.view-btn').setAttribute('aria-label', translations.zh['查看宇宙决战中的巨型机甲作品']);
        
        // 第三个项目卡片
        projectCards[2].querySelector('h4').textContent = translations.zh['太空机甲基地内部'];
        projectCards[2].querySelector('p').textContent = translations.zh['在深邃宇宙的映衬下，一艘巨型空间站内，多台机甲正沿着传送带有序行进。透明穹顶外，壮丽的星系旋臂清晰可见，而前景中悬浮的全息界面显示着复杂的系统数据，展现出未来科技与机械美学的完美融合。'];
        projectCards[2].querySelector('.view-btn').textContent = translations.zh['查看'];
        projectCards[2].querySelector('.view-btn').setAttribute('aria-label', translations.zh['查看太空机甲基地内部作品']);
      }
      
      document.querySelector('.about h3').textContent = translations.zh['关于我'];
      document.querySelector('.about-text p').textContent = translations.zh['我是一名热爱技术与设计的前端开发者，拥有5年以上的Web开发经验。专注于创建用户友好、性能优化的现代Web应用程序。热衷于学习新技术，解决复杂问题，并致力于提供高质量的代码和卓越的用户体验。'];
      
      const aboutHeaders = document.querySelectorAll('.about-content h4, .experience-section h4, .achievements-section h4');
      if (aboutHeaders.length >= 3) {
        aboutHeaders[0].textContent = translations.zh['专业技能'];
        aboutHeaders[1].textContent = translations.zh['专业经历'];
        aboutHeaders[2].textContent = translations.zh['个人成就与证书'];
      }
      
      // 更新专业技能列表
      const skillItems = document.querySelectorAll('.skills-list li');
      if (skillItems.length >= 8) {
        skillItems[0].innerHTML = 'HTML5 / CSS3 / JavaScript (ES6+)';
        skillItems[1].innerHTML = 'React.js / Vue.js / Angular';
        skillItems[2].innerHTML = 'Node.js / Express';
        skillItems[3].innerHTML = 'Webpack / Vite';
        skillItems[4].innerHTML = '响应式设计 / 移动优先';
        skillItems[5].innerHTML = 'UI/UX 设计原则';
        skillItems[6].innerHTML = 'RESTful API / GraphQL';
        skillItems[7].innerHTML = 'Git / CI/CD';
      }
      
      // 更新专业经历
      const timelineItems = document.querySelectorAll('.timeline-item');
      if (timelineItems.length >= 3) {
        // 第一个经历
        timelineItems[0].querySelector('.timeline-date').textContent = translations.zh['2022年 - 至今'];
        timelineItems[0].querySelector('h5').innerHTML = translations.zh['高级前端工程师 - 科技有限公司'];
        timelineItems[0].querySelectorAll('p')[0].textContent = translations.zh['负责大型Web应用的架构设计和核心功能开发，带领5人前端团队，优化应用性能，提升用户体验。'];
        
        // 第二个经历
        timelineItems[1].querySelector('.timeline-date').textContent = translations.zh['2020年 - 2022年'];
        timelineItems[1].querySelector('h5').innerHTML = translations.zh['前端工程师 - 创新科技公司'];
        timelineItems[1].querySelectorAll('p')[0].textContent = translations.zh['参与多个客户项目的前端开发工作，使用React和Vue构建响应式Web应用，与设计团队紧密合作实现高质量界面。'];
        
        // 第三个经历
        timelineItems[2].querySelector('.timeline-date').textContent = translations.zh['2018年 - 2020年'];
        timelineItems[2].querySelector('h5').innerHTML = translations.zh['初级前端开发 - 网络技术公司'];
        timelineItems[2].querySelectorAll('p')[0].textContent = translations.zh['负责维护和开发公司官网及内部管理系统，使用HTML、CSS和JavaScript实现交互功能。'];
      }
      
      // 更新个人成就
      const achievementItems = document.querySelectorAll('.achievement-item');
      if (achievementItems.length >= 4) {
        // 第一个成就
        achievementItems[0].querySelector('h5').innerHTML = translations.zh['Google认证 - 专业Web开发者'];
        achievementItems[0].querySelector('.achievement-date').textContent = translations.zh['2023年获得'];
        achievementItems[0].querySelectorAll('p')[1].textContent = translations.zh['验证了在构建高性能、可访问的Web应用方面的专业技能。'];
        
        // 第二个成就
        achievementItems[1].querySelector('h5').innerHTML = translations.zh['开源项目贡献者'];
        achievementItems[1].querySelector('.achievement-date').textContent = translations.zh['2021年至今'];
        achievementItems[1].querySelectorAll('p')[1].textContent = translations.zh['在多个知名开源项目中贡献代码，包括React生态系统中的工具库。'];
        
        // 第三个成就
        achievementItems[2].querySelector('h5').innerHTML = translations.zh['公司年度最佳员工'];
        achievementItems[2].querySelector('.achievement-date').textContent = translations.zh['2022年'];
        achievementItems[2].querySelectorAll('p')[1].textContent = translations.zh['因在项目中的卓越表现和团队协作精神获得此荣誉。'];
        
        // 第四个成就
        achievementItems[3].querySelector('h5').innerHTML = translations.zh['前端性能优化专家'];
        achievementItems[3].querySelector('.achievement-date').textContent = translations.zh['2021年'];
        achievementItems[3].querySelectorAll('p')[1].textContent = translations.zh['成功将主要产品的加载时间减少40%，显著提升用户体验。'];
      }
      
      document.querySelector('.contact h3').textContent = translations.zh['联系'];
      document.querySelector('.contact-form h4').textContent = translations.zh['发送消息'];
      
      const formLabels = document.querySelectorAll('.form-group label');
      if (formLabels.length >= 3) {
        formLabels[0].textContent = translations.zh['姓名'];
        formLabels[1].textContent = translations.zh['邮箱'];
        formLabels[2].textContent = translations.zh['留言'];
      }
      
      document.querySelector('.submit-btn').textContent = translations.zh['发送消息'];
      
      const contactHeaders = document.querySelectorAll('.contact-info h4');
      if (contactHeaders.length >= 3) {
        contactHeaders[0].textContent = translations.zh['联系信息'];
        contactHeaders[1].textContent = translations.zh['社交媒体'];
        contactHeaders[2].textContent = translations.zh['我的位置'];
      }
      
      // 更新联系信息列表
      const contactListItems = document.querySelectorAll('.contact-list li');
      if (contactListItems.length >= 3) {
        contactListItems[0].innerHTML = translations.zh['邮箱：'] + '<a href="mailto:2217594081@qq.com">2217594081@qq.com</a>';
        contactListItems[1].innerHTML = translations.zh['电话：'] + '<a href="tel:10086">10086</a>';
        contactListItems[2].innerHTML = translations.zh['地址：银河系·太阳区·地球村'];
      }
      
      // 更新社交媒体链接
      const socialLinks = document.querySelectorAll('.social-link span');
      if (socialLinks.length >= 4) {
        socialLinks[0].textContent = translations.zh['GitHub'];
        socialLinks[1].textContent = translations.zh['LinkedIn'];
        socialLinks[2].textContent = translations.zh['Twitter'];
        socialLinks[3].textContent = translations.zh['微博'];
      }
      
      document.querySelector('.site-footer p').innerHTML = translations.zh['© 2025 ZHANGZHIJUN'];
      
      if (navToggle) {
        navToggle.setAttribute('aria-label', '切换导航');
        navToggle.textContent = translations.zh['菜单'];
      }
      
      // 更新语言切换按钮文本
      if (languageToggle) {
        languageToggle.textContent = 'English';
      }
    }
  }

  // 为每个项目卡添加点击事件示例
  var cards = document.querySelectorAll('.project-card');
  cards.forEach(function(card) {
    var btn = card.querySelector('.view-btn');
    // 添加悬停效果
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
    
    btn.addEventListener('click', function() {
      var title = card.dataset.title || card.querySelector('h4')?.textContent;
      var imgSrc = card.querySelector('img').src;
      openProjectModal(title, imgSrc);
    });
  });

  // 为成就项目添加悬停效果
  var achievements = document.querySelectorAll('.achievement-item');
  achievements.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1)';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // 为时间线内容添加悬停效果
  var timelineContents = document.querySelectorAll('.timeline-content');
  timelineContents.forEach(function(content) {
    content.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    
    content.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(0.95)';
      this.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
    });
  });

  // 打开项目模态框
  function openProjectModal(title, imgSrc) {
    // 创建模态框元素
    var modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h3>${title}</h3>
        <img src="${imgSrc}" alt="${title}">
      </div>
    `;
    
    // 添加到页面
    document.body.appendChild(modal);
    
    // 触发动画
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
    
    // 添加关闭事件
    var closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
      closeModal(modal);
    });
    
    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
    
    // 按ESC键关闭
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeModal(modal);
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  // 关闭模态框
  function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }, 300);
  }

  // 联系表单提交处理
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取表单数据
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      
      // 这里可以添加实际的表单提交逻辑
      // 例如发送到服务器或邮件服务
      console.log('表单提交:', { name, email, message });
      
      // 显示成功消息
      const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
      const alertMessage = currentLang === 'zh' ? '感谢您的消息！我会尽快回复您。' : 'Thank you for your message! I will reply as soon as possible.';
      alert(alertMessage);
      
      // 重置表单
      contactForm.reset();
    });
  }

  // 简单的异步示例（如需要从 API 获取项目数据）
  // fetch('/api/projects')
  //   .then(res => res.json())
  //   .then(data => console.log('项目数据：', data))
  //   .catch(err => console.error(err));
});
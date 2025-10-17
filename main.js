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

  // 为每个项目卡添加点击事件示例
  var cards = document.querySelectorAll('.project-card');
  cards.forEach(function(card) {
    var btn = card.querySelector('.view-btn');
    btn.addEventListener('click', function() {
      var title = card.dataset.title || card.querySelector('h4')?.textContent;
      var imgSrc = card.querySelector('img').src;
      openProjectModal(title, imgSrc);
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
    
    // 添加关闭事件
    var closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
      document.body.removeChild(modal);
    });
    
    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }

  // 简单的异步示例（如需要从 API 获取项目数据）
  // fetch('/api/projects')
  //   .then(res => res.json())
  //   .then(data => console.log('项目数据：', data))
  //   .catch(err => console.error(err));
});
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
      // 简单示例：弹窗显示项目标题
      alert('打开项目： ' + title);
    });
  });

  // 简单的异步示例（如需要从 API 获取项目数据）
  // fetch('/api/projects')
  //   .then(res => res.json())
  //   .then(data => console.log('项目数据：', data))
  //   .catch(err => console.error(err));
});

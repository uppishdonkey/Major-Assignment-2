// script.js
document.addEventListener('DOMContentLoaded', function () {
    const discussionContainers = document.querySelectorAll('.content > div');
 
    discussionContainers.forEach(container => {
       container.addEventListener('click', function () {
          const discussionPage = this.getAttribute('data-href');
          if (discussionPage) {
             window.location.href = discussionPage;
          }
       });
    });
 });
 
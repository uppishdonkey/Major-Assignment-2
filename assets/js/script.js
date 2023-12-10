document.addEventListener('DOMContentLoaded', function () {
    const discussionContainers = document.querySelectorAll('.content > div');
 
    discussionContainers.forEach(container => {
       container.addEventListener('click', function (event) {
          const discussionPage = this.getAttribute('data-href');
          if (discussionPage) {
             window.location.href = discussionPage;
          }
       });
    });
 });
 
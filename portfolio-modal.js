document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const modal = document.getElementById('projectModal');
  const cards = document.querySelectorAll('.work-card');
  const backBtn = document.querySelector('.project-modal-back');
  const backdrop = document.querySelector('.project-modal-backdrop');

  // Open modal from cards
  cards.forEach(card => {
    const openBtn = card.querySelector('.work-cta[data-action="open"]');
    if (openBtn) {
      openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        try {
          const projectData = JSON.parse(card.dataset.project);
          
          // Populate modal content
          document.getElementById('modalTag').textContent = projectData.tag;
          document.getElementById('modalTitle').textContent = projectData.title;
          document.getElementById('modalStack').textContent = projectData.stack;
          document.getElementById('modalImage').src = projectData.image;
          document.getElementById('modalImage').alt = projectData.title + ' preview';
          document.getElementById('modalDesc').textContent = projectData.description;
          document.getElementById('modalDemo').href = projectData.liveDemo;
          document.getElementById('modalCode').href = projectData.code;
          
          // Show modal
          modal.classList.add('is-open');
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
        } catch (error) {
          console.error('Project data parse error:', error);
        }
      });
    }
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  // Event listeners
  if (backBtn) {
    backBtn.addEventListener('click', closeModal);
  }
  
  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  // ESC key close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Prevent modal close when clicking inside dialog
  const dialog = document.querySelector('.project-modal-dialog');
  if (dialog) {
    dialog.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Button hover sounds (optional enhancement)
  const buttons = document.querySelectorAll('.project-modal-btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});

// ========================================
// PROJECTS MODAL - COMPLETE FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const projectCards = document.querySelectorAll('.work-card');
    const modal = document.getElementById('projectModal');
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalStack = document.getElementById('modalStack');
    const modalImage = document.getElementById('modalImage');
    const modalDesc = document.getElementById('modalDesc');
    const modalClose = document.querySelector('.project-modal-close');
    const modalBackdrop = document.querySelector('.project-modal-backdrop');
    const primaryBtn = document.querySelector('.project-modal-btn.primary-btn');
    const ghostBtn = document.querySelector('.project-modal-btn.ghost-btn');

    // Open Project Modal
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectData = JSON.parse(this.dataset.project);
            
            // Populate modal with project data
            modalTag.textContent = projectData.tag;
            modalTitle.textContent = projectData.title;
            modalStack.textContent = projectData.stack;
            modalImage.src = projectData.image;
            modalImage.alt = `${projectData.title} preview`;
            modalDesc.textContent = projectData.description;
            
            // Set button actions
            primaryBtn.onclick = () => {
                window.open(projectData.liveDemo, '_blank');
            };
            
            ghostBtn.textContent = 'View Code';
            ghostBtn.onclick = () => {
                if (projectData.code) {
                    window.open(projectData.code, '_blank');
                } else {
                    ghostBtn.textContent = 'No Code Available';
                    setTimeout(() => {
                        ghostBtn.textContent = 'View Code';
                    }, 2000);
                }
            };
            
            // Show modal
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close Modal Functions
    function closeModal() {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    // Event Listeners for closing modal
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    // Keyboard support (ESC key)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    // Prevent modal close when clicking inside modal dialog
    document.querySelector('.project-modal-dialog').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

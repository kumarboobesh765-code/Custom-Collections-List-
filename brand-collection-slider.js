document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.brand-collection-section').forEach(section => {

    const wrapper = section.querySelector('.brand-collection-wrapper');
    const prev = section.querySelector('.brand-arrow.prev');
    const next = section.querySelector('.brand-arrow.next');

    if (!wrapper) return;

    const scrollAmount = () => {
      const item = section.querySelector('.brand-item');
      return item ? item.offsetWidth + 24 : 200;
    };

    /* Arrow buttons */
    prev?.addEventListener('click', () => {
      wrapper.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });

    next?.addEventListener('click', () => {
      wrapper.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });

    /* 🔥 PC MOUSE WHEEL FIX (WINDOW LEVEL) */
    let isHovering = false;

    wrapper.addEventListener('mouseenter', () => isHovering = true);
    wrapper.addEventListener('mouseleave', () => isHovering = false);

    window.addEventListener('wheel', (e) => {
      if (!isHovering) return;
      if (window.innerWidth < 768) return;

      e.preventDefault();
      wrapper.scrollLeft += e.deltaY;
    }, { passive: false });
  });
});

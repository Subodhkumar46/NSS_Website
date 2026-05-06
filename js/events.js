// --- DATASET: 9 EVENTS (Your provided images) ---
    const events = [
      { id: 1, title: "Swachhata", desc: "Our continuous effort towards a cleaner, greener campus through regular cleanliness drives.", img: "img/events/swachtaabhiyan.jpeg", gallery: ["img/events/swach0.jpeg", "img/events/swach1.jpeg", "img/events/swach2.jpeg", "img/events/swach3.jpeg", "img/events/swach4.jpeg", "img/events/swach5.jpeg", "img/events/swach6.jpeg", "img/events/swach7.jpeg", "img/events/swach8.jpeg", "img/events/swach9.jpeg", "img/events/swach10.jpeg", "img/events/swach11.jpeg", "img/events/swach12.jpeg", "img/events/swach13.jpeg", "img/events/swach15.jpeg", "img/events/swach16.jpeg", "img/events/swach17.jpeg", "img/events/swach18.jpeg", "img/events/swach19.jpeg", "img/events/swach20.jpeg", "img/events/swach21.jpeg", "img/events/swach22.jpeg", "img/events/swach23.jpeg", "img/events/swach23.jpeg", "img/events/swach24.jpeg", "img/events/swach25.jpeg", "img/events/swach26.jpeg", "img/events/swach27.jpeg", "img/events/swach28.jpeg", "img/events/swach29.jpeg", "img/events/swach30.jpeg", "img/events/swach31.jpeg"] },
      { id: 2, title: "Sewa Parv", desc: "A dedicated festival reflecting our commitment to unconditional community service.", img: "img/events/sewaparv.jpeg", gallery: [ "img/events/sewa2.jpeg", "img/events/sewa3.jpeg", "img/events/sewa4.jpeg", "img/events/sewa5.jpeg", "img/events/sewa6.jpeg", "img/events/sewa7.jpeg", "img/events/sewa8.jpeg", "img/events/sewa9.jpeg", "img/events/sewa10.jpeg", "img/events/sewa11.jpeg"] },
      { id: 3, title: "Nasha Mukt Bharat", desc: "Awareness rallies and campaigns to achieve a drug-free India.", img: "img/events/nsamukt.jpeg", gallery: ["img/events/nsa0.jpeg", "img/events/nsa1.jpeg", "img/events/nsa2.jpeg", "img/events/nsa3.jpeg", "img/events/nsa4.jpeg", "img/events/nsa5.jpeg", "img/events/nsa6.jpeg", "img/events/nsa7.jpeg", "img/events/nsa8.jpeg", "img/events/nsa9.jpeg", "img/events/nsa10.jpeg", "img/events/nsa11.jpeg"] },
      { id: 4, title: "Vigilance Week", desc: "Fostering integrity and transparency among youth and citizens.", img: "img/events/vigilance.jpg", gallery: ["img/events/vg.jpeg", "img/events/vg1.jpeg", "img/events/vg2.jpeg", "img/events/vg3.jpeg", "img/events/vg4.jpeg", "img/events/vg5.jpeg", "img/events/vg6.jpeg"] },
      { id: 5, title: "Grooming & Hygiene", desc: "Empowering children with habits for better health and self-care.", img: "img/events/grooming&hygiene.jpeg", gallery: ["img/home/bella.jpg", "img/home/bella1.jpg", "img/home/groom1.jpg", "img/events/vg3.jpg", "img/events/vg4.jpg", "img/events/vg5.jpg", "img/home/paddistribution.jpg", "img/home/groom.jpg"] },
      { id: 6, title: "Vandematram", desc: "Celebrating 150 years of our national song with monumental pride.", img: "img/events/vandemataram150year.jpeg", gallery: ["img/events/vande0.jpeg", "img/events/vande1.jpeg", "img/events/vande3.jpeg", "img/events/vande5.jpeg", "img/events/vande6.jpeg", "img/events/vande7.jpeg", "img/events/vande8.jpeg", "img/events/vande2.jpeg"] },
      { id: 7, title: "Annual Camp", desc: "Seven-day residential camp focusing on holistic village development.", img: "img/home/camp.jpg", gallery: ["img/events/children.jpg", "img/events/paddistribution.jpg", "img/events/tree1.jpg", "img/events/bella1.jpg", "img/events/groom1.jpg", "img/events/blooddonation.jpg", "img/events/race.jpg", "img/events/tree2.jpg"] },
      { id: 8, title: "Vasant Panchami", desc: "Celebrating the auspicious festival of Vasant Panchami dedicated to Goddess Saraswati.", img: "img/events/saraswati15.jpeg", gallery: ["img/events/saraswat0.jpeg", "img/events/saraswati1.jpeg", "img/events/saraswati2.jpeg", "img/events/saraswati3.jpeg", "img/events/saraswati4.jpeg", "img/events/saraswati5.jpeg", "img/events/saraswati6.jpeg", "img/events/saraswati7.jpeg", "img/events/saraswati8.jpeg", "img/events/saraswati9.jpeg", "img/events/saraswati10.jpeg", "img/events/saraswati11.jpeg", "img/events/saraswati12.jpeg", "img/events/saraswati13.jpeg", "img/events/saraswati14.jpeg", "img/events/saraswati15.jpeg"] },
      { id: 9, title: "Fit India Movement", desc: "Promoting physical fitness and well-being among students through various sports and fitness activities.", img: "img/events/fit0.jpeg", gallery: [ "img/events/fitmain.jpeg", "img/events/fit1.jpeg", "img/events/fit2.jpeg", "img/events/fit3.jpeg", "img/events/fit4.jpeg"] },
      { id: 10, title: "Blood Donation Camp 2", desc: "A continued noble initiative encouraging youth to donate blood and save lives, reinforcing our commitment to community health.", img: "img/events/bd1.jpeg", gallery: [ "img/events/bd2.jpeg", "img/events/bd3.jpeg", "img/events/bd4.jpeg", "img/events/bd5.jpeg", "img/events/bd6.jpeg", "img/events/bd7.jpeg", "img/events/bd8.jpeg"] },
      { id: 11, title: "Ganesh Chaturthi", desc: "Celebrating the auspicious festival of Ganesh Chaturthi with devotion, togetherness, and community spirit.", img: "img/events/g1.jpeg", gallery: ["img/events/g1.jpeg", "img/events/g2.jpeg", "img/events/g3.jpeg", "img/events/g4.jpeg", "img/events/g5.jpeg", "img/events/g6.jpeg", "img/events/g7.jpeg", "img/events/g8.jpeg", "img/events/g9.jpeg"] },
      { id: 12, title: "Swachta Drive 2", desc: "A second round of our impactful cleanliness drive, deepening our resolve for a clean and hygienic campus and community.", img: "img/events/swachtaabhiyan.jpeg", gallery: ["img/events/c1.jpeg", "img/events/c2.jpeg", "img/events/c3.jpeg", "img/events/c4.jpeg", "img/events/c5.jpeg", "img/events/c6.jpeg", "img/events/c7.jpeg", "img/events/c7.jpeg", "img/events/c8.jpeg", "img/events/c9.jpeg", "img/events/c10.jpeg", "img/events/c11.jpeg", "img/events/c12.jpeg", "img/events/c13.jpeg", "img/events/c14.jpeg", "img/events/c14.jpeg"] },
      { id: 13, title: "No to Anti-Ragging", desc: "A strong awareness campaign against ragging, promoting a safe, respectful, and inclusive environment for all students.", img: "img/events/rag1.jpeg", gallery: ["img/events/rag.jpeg"] }
    ];

    const grid = document.getElementById('eventsGrid');

    // Render Cards
    events.forEach(ev => {
      grid.innerHTML += `
                <div class="col-lg-4 col-md-6">
                    <div class="modern-event-card" onclick="openExpand(${ev.id})">
                        <div class="img-container">
                            <span class="card-badge">Gallery</span>
                            <img src="${ev.img}" alt="${ev.title}">
                        </div>
                        <div class="p-4">
                            <h4 class="fw-bold text-white mb-2">${ev.title}</h4>
                            <p class="text-light opacity-75 small mb-0">${ev.desc}</p>
                        </div>
                    </div>
                </div>
            `;
    });

    let currentGallery = [];
    let currentIndex = 0;

    // Expansion Logic
    function openExpand(id) {
      const ev = events.find(item => item.id === id);
      const expandView = document.getElementById('expandView');

      // Merge main image into gallery if it's not already there
      currentGallery = ev.gallery && ev.gallery.length > 0 ? [ev.img, ...ev.gallery] : [ev.img];
      currentIndex = 0;

      expandView.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling

      document.getElementById('expTitle').innerText = ev.title;
      document.getElementById('expDesc').innerText = ev.desc;

      updateMainImage(currentIndex);

      // Fill Thumbnails
      const thumbContainer = document.getElementById('thumbContainer');
      thumbContainer.innerHTML = currentGallery.map((i, index) => `
                <img src="${i}" class="thumb-item" id="thumb-${index}" loading="lazy" onclick="goToImage(${index})">
            `).join('');

      highlightThumbnail(currentIndex);
    }

    function updateMainImage(index) {
      if (index < 0) index = currentGallery.length - 1;
      if (index >= currentGallery.length) index = 0;
      currentIndex = index;

      const src = currentGallery[currentIndex];
      const mainImg = document.getElementById('mainSliderImg');
      mainImg.style.opacity = '0'; // Start fade out
      mainImg.style.transform = 'scale(0.98)';

      const counter = document.getElementById('imageCounter');
      if (counter) counter.innerText = `${currentIndex + 1} / ${currentGallery.length}`;

      // Prevent white flash: Load in background first
      const temp = new Image();
      temp.src = src;
      temp.onload = () => {
        mainImg.src = src;
        mainImg.style.opacity = '1'; // Fade in
        mainImg.style.transform = 'scale(1)';
      };

      highlightThumbnail(currentIndex);
    }

    function highlightThumbnail(index) {
      document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
      const activeThumb = document.getElementById(`thumb-${index}`);
      if (activeThumb) {
        activeThumb.classList.add('active');
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    function goToImage(index) {
      updateMainImage(index);
    }

    function nextImage() {
      updateMainImage(currentIndex + 1);
    }

    function prevImage() {
      updateMainImage(currentIndex - 1);
    }

    function closeExpand() {
      document.getElementById('expandView').style.display = 'none';
      document.body.style.overflow = ''; // Restore background scrolling
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('expandView').style.display === 'block') {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeExpand();
      }
    });

    // Touch Swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
      if (document.getElementById('expandView').style.display === 'block') {
        touchStartX = e.changedTouches[0].screenX;
      }
    });

    document.addEventListener('touchend', e => {
      if (document.getElementById('expandView').style.display === 'block') {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }
    });

    function handleSwipe() {
      if (touchEndX < touchStartX - 50) nextImage();
      if (touchEndX > touchStartX + 50) prevImage();
    }
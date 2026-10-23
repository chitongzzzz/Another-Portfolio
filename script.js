/* Personalize contact details here */
const portfolio = {email:"",github:"",linkedin:"",resumeUrl:""};

/* Project Data Array - Customize each project's content and titles here */
const projectData = [
  {
    title: "My Little Corner",
    role: "Solo Developer",
    category: "Blogging",
    context: "Class Project & Practice",
    overview: "My Little Corner is a minimalist personal blog built during my early college years to showcase my personal interests from gaming, sports, and cinema to good food and travel goals. Created as an early web development project, it allowed me to practice fundamental HTML/CSS layouts while building an authentic space to share my personality beyond code.",
    explanation: "I designed and developed a clean, minimalist layout from scratch using standard semantic HTML5 and CSS3. The build process focused on structuring clear page sections, styling custom typography and color palettes, and deploying the site to Vercel for fast, simple hosting.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Brand Identity"],
    image: "images/blog.png",
    video: "videos/blog.mp4",
    link: "https://amaquin-blog.vercel.app/",
    secondaryLink: "https://github.com/chitongzzzz/Blog-project",
    secondaryLinkLabel: "Source Code"
  },
  {
    title: "VoidBook",
    role: "Concept Creator & UI/UX Strategist",
    category: "Web Application (Group Project)",
    context: "Academic Group Project",
    overview: "Voidbook is a modern, web-based digital reader platform designed specifically for web novels and light novels. Inspired by the layout and user experience of popular manga and manhwa reading sites, Voidbook brings a sleek, chapter-based reader interface to text-heavy web fiction. The platform features customizable reader settings (font sizing, theme toggles, sepia/dark modes), library management, chapter bookmarking, and genre filtering to give novel enthusiasts a smooth, immersive reading experience.",
    explanation: "Developed as a collaborative group project, the platform was conceptualized to bridge the gap between comic reading interfaces and novel web apps. The process began with product ideation and defining the core user experience, adapting manga-style directory and reader navigation layouts specifically for web novels. Our team mapped out user journeys, categorized genres, and planned essential reading features like customizable themes (dark, sepia, light) and library history tracking before handing off the implementation to our developer to bring the application to life on Vercel.",
    contribution: "As the project ideator, I pitched the core concept and vision for the platform. My contribution focused on product strategy, defining user experience requirements, and mapping out features such as chapter navigation layouts, genre classifications, and reader customization options.",
    tech: ["UI/UX Design", "Wireframing", "Product Strategy"],
    image: "images/voidbook.png",
    video: "videos/voidbook.mp4",
    link: "https://voidbook.vercel.app/",
    secondaryLink: "https://github.com/redismynamelol/voidbook",
    secondaryLinkLabel: "Source Code"
  },
  {
    title: "ShiftGear Luxury Automotive Showcase",
    role: "UI/UX Designer & Prototyperr",
    category: "Web Application Design",
    context: "Design & Prototyping Project",
    overview: "Shiftgear is a comprehensive UI/UX design and interactive prototype created to deliver a seamless, intuitive digital experience. The project was built to explore modern interface design, streamline user flows, and establish a clean visual hierarchy tailored to user needs.",
    explanation: "The project began with wireframing and sketching core user journeys to map out the application's structure. From there, I transitioned into high-fidelity UI design, focusing on cohesive typography, spacing, and component styling. Finally, I built a fully interactive prototype in Figma to simulate real user interactions, screen transitions, and navigation flows.",
    contribution: "As the lead designer for this project, I took full responsibility for the entire UI/UX design lifecycle. This included creating low-to-high fidelity wireframes, designing the visual interface components, and building the interactive prototype in Figma to test and demonstrate user flows.",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    image: "images/shiftgear.png",
    video: "videos/shiftgear.mp4",
    link: "https://www.figma.com/proto/4iMrcWAxIDzZeXHHYxKsBs/SHIFTGEAR?node-id=2-2&p=f&t=FHS79MuJKVJHhRM4-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&hide-ui=1",
    secondaryLink: "https://www.figma.com/design/4iMrcWAxIDzZeXHHYxKsBs/SHIFTGEAR?node-id=0-1&p=f&t=BqhEsUGjHkfwDbLO-0",
    secondaryLinkLabel: "View Components"
  },
  {
    title: "Barangay Mambaling E-Service System",
    role: "UI/UX Designer & Prototyper",
    category: "UI/UX Design",
    context: "Figma Prototype Project",
    overview: "Designed to establish a clean interface layout and map out the core user journey for an application concept, focusing on usability and straightforward navigation.",
    explanation: "The design process started with basic wireframes to structure the pages and layout. From there, I designed the interface elements and set up interactive links in Figma to test screen transitions and verify the user flow.",
    contribution: "Responsible for the entire design workflow, including wireframing, interface layout design, and interactive prototyping.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    image: "images/mambaling.png",
    video: "videos/barangay-mambaling.mp4",
    link: "https://www.figma.com/proto/sbf7FGxmFOevTwlNVrmCQN/Untitled?node-id=123-231&starting-point-node-id=275%3A830&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&t=pM7lBEWar8QXaXsH-8",
    secondaryLink: "https://www.figma.com/design/sbf7FGxmFOevTwlNVrmCQN/Untitled?node-id=0-1&p=f&t=aPycVcQC00waTGHv-0",
    secondaryLinkLabel: "View Components"
  },
  {
    title: "Tseki Mobile Application",
    role: "UI/UX Designer & Prototyper",
    category: "Mobile Application Design",
    context: "College Capstone Project",
    overview: "Developed as part of a college capstone project, the Tseki app interface was designed to organize features clearly and support a straightforward user workflow. The purpose was to build a clean, usable prototype that aligns with the system's core functional requirements.",
    explanation: "The design process started with basic wireframes to structure the core layouts and screens. From there, I built out high-fidelity UI designs and connected them in Figma to create an interactive prototype that simulates user navigation through the system.",
    contribution: "Handled the end-to-end design and prototyping workflow for the capstone team, including wireframing, user interface layout creation, and interactive Figma prototyping.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "Wireframing", "User Flow Mapping"],
    image: "images/tseki.jfif",
    video: "videos/tseki.mp4",
    portraitVideo: true,
    link: "https://www.figma.com/proto/pNbYPVMdhXteOP8nNRyx4T/Tseki-App?node-id=214-789&p=f&t=BmiGN2B0fyRkho8o-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=35%3A2",
    secondaryLink: "https://www.figma.com/design/pNbYPVMdhXteOP8nNRyx4T/Tseki-App?node-id=0-1&p=f&t=BmiGN2B0fyRkho8o-0",
    secondaryLinkLabel: "View Components"
  }
];

/* Navigation & Header Logic */
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.nav-links');
const navLinks=[...document.querySelectorAll('.nav-link')];
const sections=navLinks.map(link=>document.querySelector(link.getAttribute('href')));
const compact=window.matchMedia('(max-width:1199px)');

function setMenu(open){menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');navigation.classList.toggle('is-open',open)}
menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
function setActive(id){navLinks.forEach(link=>{if(link.hash==='#'+id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}
navLinks.forEach(link=>link.addEventListener('click',()=>{setActive(link.hash.slice(1));setMenu(false)}));
document.querySelector('.brand').addEventListener('click',()=>setMenu(false));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){setMenu(false);menuButton.focus()}});
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))setMenu(false)});
compact.addEventListener('change',()=>{setMenu(false);scheduleScrollUpdate()});

let queued=false;
function updateActiveSection(){queued=false;const headerHeight=compact.matches?76:98;const readingLine=headerHeight+Math.min(120,window.innerHeight*.18);let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=readingLine)current=section}const atBottom=window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-3;const canScroll=document.documentElement.scrollHeight>window.innerHeight+5;if(atBottom&&canScroll)current=sections[sections.length-1];setActive(current.id)}
function scheduleScrollUpdate(){if(!queued){queued=true;requestAnimationFrame(updateActiveSection)}}
window.addEventListener('scroll',scheduleScrollUpdate,{passive:true});window.addEventListener('resize',scheduleScrollUpdate);window.addEventListener('load',scheduleScrollUpdate);window.addEventListener('hashchange',scheduleScrollUpdate);scheduleScrollUpdate();

/* Modal Popup Logic */
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const projectCards = document.querySelectorAll('.project-card');
const projectGrid = document.getElementById('projectGrid');
const projectViewToggle = document.getElementById('projectViewToggle');
const mobileProjectView = window.matchMedia('(max-width:768px)');

function setProjectView(swipeView) {
  projectViewToggle.setAttribute('aria-pressed', String(swipeView));
  projectViewToggle.setAttribute('aria-label', `Switch to ${swipeView ? 'grid' : 'swipe'} view`);
  projectViewToggle.textContent = swipeView ? 'Grid view' : 'Swipe view';
  projectGrid.classList.toggle('is-carousel', swipeView);
  if (!swipeView) projectGrid.scrollLeft = 0;
}

setProjectView(mobileProjectView.matches);
mobileProjectView.addEventListener('change', event => setProjectView(event.matches));
projectViewToggle.addEventListener('click', () => {
  const swipeView = projectViewToggle.getAttribute('aria-pressed') !== 'true';
  setProjectView(swipeView);
});

projectCards.forEach((card, index) => {
  const data = projectData[index];
  const preview = card.querySelector('.project-preview');
  const image = preview.querySelector('.project-preview-image');
  if (!data || !data.image) return;

  image.src = data.image;
  image.alt = `${data.title} project preview`;
  preview.classList.add('has-image');
  image.addEventListener('error', () => {
    preview.classList.remove('has-image');
    image.remove();
  }, { once: true });
});

function openModal(index) {
  const data = projectData[index];
  if(!data) return;

  document.getElementById('modalProjectTitle').textContent = data.title;
  document.getElementById('modalRole').textContent = data.role;
  document.getElementById('modalCategory').textContent = data.category;
  document.getElementById('modalContext').textContent = data.context;
  document.getElementById('modalOverview').textContent = data.overview;
  document.getElementById('modalExplanation').textContent = data.explanation;
  const contributionTitle = document.getElementById('modalContributionTitle');
  const contribution = document.getElementById('modalContribution');
  const hasContribution = Boolean(data.contribution);
  contributionTitle.hidden = !hasContribution;
  contribution.hidden = !hasContribution;
  if (hasContribution) contribution.textContent = data.contribution;
  const modalImage = document.getElementById('modalImage');
  const modalVideo = document.getElementById('modalVideo');
  modalImage.hidden = Boolean(data.video) || !data.image;
  if (data.image) modalImage.src = data.image;
  else modalImage.removeAttribute('src');
  modalImage.alt = `${data.title} project preview`;
  modalVideo.pause();
  modalVideo.classList.toggle('is-portrait', Boolean(data.portraitVideo));
  modalVideo.removeAttribute('src');
  modalVideo.hidden = !data.video;
  if (data.video) {
    modalVideo.poster = data.image || '';
    modalVideo.src = data.video;
    modalVideo.load();
  }
  const modalImageContent = document.querySelector('.modal-image-content');
  modalImageContent.hidden = !data.image && !data.link;
  modal.querySelector('.modal-body').classList.toggle('modal-body-no-image', !data.image && !data.link);
  
  document.querySelectorAll('.modal-project-link').forEach(btn => {
    btn.hidden = !data.link;
    if (data.link) btn.href = data.link;
    else btn.removeAttribute('href');
  });

  document.querySelectorAll('.secondary-project-link').forEach(btn => {
    btn.hidden = !data.secondaryLink;
    if (data.secondaryLink) {
      btn.href = data.secondaryLink;
      btn.textContent = `${data.secondaryLinkLabel} ↗`;
      btn.removeAttribute('aria-disabled');
      btn.removeAttribute('tabindex');
    } else {
      btn.removeAttribute('href');
      btn.setAttribute('aria-disabled', 'true');
      btn.setAttribute('tabindex', '-1');
    }
  });

  const techContainer = document.getElementById('modalTechTags');
  techContainer.innerHTML = '';
  data.tech.forEach(t => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = t;
    techContainer.appendChild(span);
  });

  modal.classList.add('is-active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (data.video) {
    modalVideo.play().catch(error => {
      if (error.name !== 'NotAllowedError') {
        console.error(`Failed to play project video "${data.video}":`, error);
      }
    });
  }
}

function closeModal() {
  const modalVideo = document.getElementById('modalVideo');
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.removeAttribute('src');
  modalVideo.load();
  modalVideo.hidden = true;
  document.getElementById('modalImage').hidden = false;
  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const index = card.getAttribute('data-project');
    openModal(index);
  });
});

modalClose.addEventListener('click', closeModal);

document.getElementById('modalVideo').addEventListener('error', () => {
  const modalVideo = document.getElementById('modalVideo');
  const modalImage = document.getElementById('modalImage');
  console.error(`Failed to load project video: ${modalVideo.currentSrc || modalVideo.src}`);
  modalVideo.hidden = true;
  modalImage.hidden = !modalImage.src;
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-active')) {
    closeModal();
  }
});

/* Resume Preview Modal */
const resumeModal = document.getElementById('resumeModal');
const resumePreviewOpen = document.getElementById('resumePreviewOpen');
const resumeModalClose = document.getElementById('resumeModalClose');
const resumeDialog = resumeModal.querySelector('[role="dialog"]');

function openResumeModal() {
  resumeModal.classList.add('is-active');
  resumeModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  resumeModalClose.focus();
}

function closeResumeModal() {
  resumeModal.classList.remove('is-active');
  resumeModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  resumePreviewOpen.focus();
}

resumePreviewOpen.addEventListener('click', openResumeModal);
resumeModalClose.addEventListener('click', closeResumeModal);
resumeModal.addEventListener('click', event => {
  if (event.target === resumeModal) closeResumeModal();
});
resumeDialog.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    const focusable = [...resumeDialog.querySelectorAll('button, a[href]')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && resumeModal.classList.contains('is-active')) {
    closeResumeModal();
  }
});

/* Contact Form Modal */
const contactModal = document.getElementById('contactModal');
const contactModalOpen = document.getElementById('contactModalOpen');
const contactModalClose = document.getElementById('contactModalClose');
const contactDialog = contactModal.querySelector('[role="dialog"]');
const contactName = document.getElementById('contactName');
const contactForm = contactModal.querySelector('.contact-form');
const contactFormNotice = document.getElementById('contactFormNotice');
const contactSubmit = contactForm.querySelector('[type="submit"]');
const contactSuccessModal = document.getElementById('contactSuccessModal');
const contactSuccessDialog = contactSuccessModal.querySelector('[role="alertdialog"]');
const contactSuccessClose = document.getElementById('contactSuccessClose');
let contactCloseTimeout;

function openContactModal() {
  clearTimeout(contactCloseTimeout);
  contactSuccessModal.classList.remove('is-active');
  contactSuccessModal.setAttribute('aria-hidden', 'true');
  contactModal.classList.add('is-active');
  contactModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  contactName.focus();
}

function closeContactModal() {
  clearTimeout(contactCloseTimeout);
  contactSuccessModal.classList.remove('is-active');
  contactSuccessModal.setAttribute('aria-hidden', 'true');
  contactModal.classList.remove('is-active');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  contactModalOpen.focus();
}

contactForm.addEventListener('submit', async event => {
  event.preventDefault();
  contactSubmit.disabled = true;
  contactSubmit.textContent = 'Sending...';
  contactFormNotice.hidden = true;
  contactFormNotice.textContent = '';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Your message could not be sent. Please try again.');
    }

    contactForm.reset();
    contactSuccessModal.classList.add('is-active');
    contactSuccessModal.setAttribute('aria-hidden', 'false');
    contactSuccessClose.focus();
    contactCloseTimeout = setTimeout(closeContactModal, 1500);
  } catch (error) {
    contactFormNotice.textContent = error instanceof Error
      ? error.message
      : 'Your message could not be sent. Please try again.';
    contactFormNotice.hidden = false;
  } finally {
    contactSubmit.disabled = false;
    contactSubmit.textContent = 'Submit';
  }
});

contactModalOpen.addEventListener('click', openContactModal);
contactModalClose.addEventListener('click', closeContactModal);
contactModal.addEventListener('click', event => {
  if (event.target === contactModal) closeContactModal();
});
contactSuccessClose.addEventListener('click', closeContactModal);
contactSuccessModal.addEventListener('click', event => {
  if (event.target === contactSuccessModal) closeContactModal();
});
contactSuccessDialog.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    event.preventDefault();
    contactSuccessClose.focus();
  }
});
contactDialog.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    const focusable = [...contactDialog.querySelectorAll('button, input:not([type="hidden"]), textarea')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && contactModal.classList.contains('is-active')) {
    closeContactModal();
  }
});

/* Copy Email Functionality */
const copyBtn = document.getElementById('copyEmailBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('chitongzzzz@gmail.com').then(() => {
      const btnText = document.getElementById('copyBtnText');
      btnText.textContent = 'Copied!';
      setTimeout(() => {
        btnText.textContent = 'Copy Email';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
}
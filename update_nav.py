import os
import re

directory = r"c:\Users\pc\Documents\NSS\NSS Website"

navbar_template = """  <!-- Navbar Start -->
  <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm sticky-top py-2 px-4 px-lg-5">
    <a href="index.html" class="navbar-brand d-flex align-items-center">
      <img src="img/NSS_Logo.png" alt="NSS Logo" width="45" height="45" class="me-2" />
      <div class="d-flex flex-column text-start justify-content-center">
        <h2 class="m-0 text-dark fs-5 fw-bold" style="font-family: 'Poppins', sans-serif; line-height: 1.2;">National Service Scheme</h2>
        <p class="m-0 text-secondary" style="font-size: 0.85rem; letter-spacing: 0.5px; line-height: 1; font-family: 'Inter', sans-serif;">Kurukshetra</p>
      </div>
    </a>
    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto py-0 fw-bold align-items-center">
        <a href="index.html" class="nav-item nav-link">Home</a>
        <a href="about.html" class="nav-item nav-link">About</a>
        <a href="units.html" class="nav-item nav-link">Units</a>
        <a href="events.html" class="nav-item nav-link">Events</a>
        <a href="cells.html" class="nav-item nav-link">Team</a>
        <a href="nss-camp.html" class="nav-item nav-link">NSS Camp</a>
        <a href="projects.html" class="nav-item nav-link">Projects</a>
        <a href="index.html#newspaper" class="nav-item nav-link">Newspaper</a>
      </div>
      <a href="contact.html#contact" class="btn btn-primary py-2 px-4 ms-lg-3 d-none d-lg-block modern-solid-btn">Contact</a>
      <a href="contact.html#contact" class="btn btn-primary py-2 px-4 mt-2 mb-2 d-lg-none w-100 modern-solid-btn">Contact</a>
    </div>
  </nav>
  <!-- Navbar End -->"""

navbar_pattern = re.compile(r"<!-- Navbar Start -->.*?<!-- Navbar End -->", re.DOTALL)

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if the file has a Navbar block
        if navbar_pattern.search(content):
            # Formulate the correct active replacement block
            new_nav = navbar_template
            # If the filename is in the nav, add 'active' to it
            target_link = f'href="{filename}" class="nav-item nav-link"'
            active_link = f'href="{filename}" class="nav-item nav-link active"'
            new_nav = new_nav.replace(target_link, active_link)
            
            # Special case for missing links, or 'index.html' checking exact match to avoid index.html#newspaper
            # The replace above naturally handles it because it targets full exact class matches.
            
            # Replace in content
            content = navbar_pattern.sub(new_nav, content)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filename}")
        else:
            print(f"No Navbar structure found in {filename}")

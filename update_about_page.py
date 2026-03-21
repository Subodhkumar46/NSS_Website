import os
import re

about_path = r"c:\Users\pc\Documents\NSS\NSS Website\about.html"

new_about_section = """<!-- About Start -->
  <div class="container-fluid py-6 px-lg-5 bg-white" id="about-section">
    <!-- Who We Are -->
    <div class="row g-5 align-items-center mb-6" style="padding-bottom: 60px;">
      <div class="col-lg-6">
        <h2 class="nss-slogan mt-2 mb-4">श्रमेव जयते...</h2>
        <h2 class="display-5 text-uppercase mb-4">Who <span class="text-dark">We Are</span></h2>
        <p class="about-section-text mb-4 text-muted" style="font-size: 1.1rem; line-height: 1.8;">
          NSS NIT Kurukshetra consists of highly motivated and dedicated members striving to bring peace and harmony. We work on a diverse range of social issues including blood donation, education, and environment by forming a consortium with several NGOs. "Not Me But You" is the motto that fuels our selfless service.
        </p>
      </div>
      <div class="col-lg-6">
        <img class="w-100 rounded-3 shadow about-img-enhanced" src="img/nss1.jpg" style="object-fit: cover; border-radius: 10px;" alt="NSS Volunteers active">
      </div>
    </div>

    <!-- Objectives -->
    <div class="text-center mx-auto mb-5">
      <h2 class="display-6 text-uppercase mb-4">Core <span class="text-dark">Objectives</span></h2>
    </div>
    <div class="row g-4 mb-6" style="padding-bottom: 60px;">
      <div class="col-lg-4">
        <div class="card border-0 shadow-sm h-100 p-4 text-center" style="border-radius: 10px; background: #fafafa;">
          <i class="fa fa-3x fa-users text-primary mb-3"></i>
          <h4 class="fw-bold mb-3" style="color: #222;">Community Service</h4>
          <p class="text-muted mb-0" style="color: #555;">Engaging youth to understand the community and identify their needs and problems.</p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card border-0 shadow-sm h-100 p-4 text-center" style="border-radius: 10px; background: #fafafa;">
          <i class="fa fa-3x fa-lightbulb text-primary mb-3"></i>
          <h4 class="fw-bold mb-3" style="color: #222;">Leadership Development</h4>
          <p class="text-muted mb-0" style="color: #555;">Acquiring leadership qualities, democratic attitudes, and the capacity to meet emergencies.</p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card border-0 shadow-sm h-100 p-4 text-center" style="border-radius: 10px; background: #fafafa;">
          <i class="fa fa-3x fa-globe text-primary mb-3"></i>
          <h4 class="fw-bold mb-3" style="color: #222;">Social Awareness</h4>
          <p class="text-muted mb-0" style="color: #555;">Developing a sense of social and civic responsibility while utilizing knowledge to find practical solutions.</p>
        </div>
      </div>
    </div>

    <!-- Recent Achievements & Upcoming Events -->
    <div class="row g-5 mb-6" style="padding-bottom: 60px;">
      <div class="col-lg-6">
        <h2 class="display-6 text-uppercase mb-4">Recent <span class="text-dark">Achievements</span></h2>
        <div class="card border-0 shadow-sm p-3 mb-3" style="border-radius: 10px; background: #fff;">
          <div class="d-flex align-items-center">
            <img src="img/DSC_4777.JPG" class="me-3" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px;" alt="Achievement image">
            <div>
              <h5 class="fw-bold mb-1" style="color: #222;">State Level Best NSS Unit</h5>
              <p class="text-muted mb-0 small" style="color: #555;">Recognized for outstanding contribution to rural education integration.</p>
            </div>
          </div>
        </div>
        <div class="card border-0 shadow-sm p-3" style="border-radius: 10px; background: #fff;">
          <div class="d-flex align-items-center">
            <img src="img/service-4.jpg" class="me-3" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px;" alt="Achievement" onerror="this.src='img/nss1.jpg'">
            <div>
              <h5 class="fw-bold mb-1" style="color: #222;">Mega Blood Donation Drive</h5>
              <p class="text-muted mb-0 small" style="color: #555;">Successfully collected over 500+ units in a single day.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <h2 class="display-6 text-uppercase mb-4">Upcoming <span class="text-dark">Events</span></h2>
        <div class="list-group list-group-flush shadow-sm" style="border-radius: 10px;">
          <div class="list-group-item p-4 border-0 mb-2 bg-white" style="border-radius: 10px;">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 fw-bold text-primary">Clean India Campaign</h5>
              <small class="text-muted fw-bold">12 Oct</small>
            </div>
            <p class="mb-1 text-muted" style="color: #555;">A massive cleanliness drive around the Kurukshetra region focusing on zero plastic.</p>
          </div>
          <div class="list-group-item p-4 border-0 bg-white" style="border-radius: 10px;">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 fw-bold text-primary">Youth Leadership Summit</h5>
              <small class="text-muted fw-bold">24 Nov</small>
            </div>
            <p class="mb-1 text-muted" style="color: #555;">A dedicated summit for nurturing problem-solving leadership among volunteers.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Video & Song Row -->
    <div class="row g-5 align-items-center">
      <div class="col-lg-7">
        <div class="ratio ratio-16x9 shadow-sm overflow-hidden" style="border-radius: 10px;">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="NSS Introduction" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-lg-5 text-center text-lg-start">
        <h2 class="display-6 text-uppercase mb-4">NSS <span class="text-dark">Song</span></h2>
        <div class="bg-light p-4 shadow-sm" style="border-radius: 10px;">
          <p class="fst-italic text-muted mb-0" style="font-family: 'Poppins', sans-serif; line-height: 1.8; color: #555;">
            Uthe samaj ke liye uthe uthe,<br>
            Jage swarashtra ke liye jage jage,<br>
            Swayam saje vasundhara sanwar de,<br>
            Swayam saje vasundhara sanwar de,<br>
            Hum uthen uthega jag hamare sang sathi,<br>
            Hum badhen to sab badhenge apne aap sathi,<br>
            Zameen pe asmaan ko utar de,<br>
            Swayam saje vasundhara sanwar de.
          </p>
        </div>
      </div>
    </div>
  </div>
"""

# Update about.html
if os.path.exists(about_path):
    with open(about_path, 'r', encoding='utf-8') as f:
        abt_content = f.read()
    
    # Replace About area dynamically mapping to the closest logical boundaries
    # We delete from <!-- About Start --> down to <!-- Portfolio Start --> to remove all old blob texts
    abt_content = re.sub(r'<!-- About Start -->.*?<!-- Portfolio Start -->', new_about_section + '\n  <!-- Portfolio Start -->', abt_content, flags=re.DOTALL)
    
    with open(about_path, 'w', encoding='utf-8') as f:
        f.write(abt_content)
    print("Updated about.html")

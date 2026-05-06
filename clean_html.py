import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace inline styles in testimonial section
# style="border-radius: 20px;" -> class="testimonial-card"
# style="font-size: 0.95rem; line-height: 1.6;" -> class="testimonial-text text-light opacity-75 mb-4"
# style="width: 60px; height: 60px; object-fit: cover; border: 2px solid rgba(255,255,255,0.2);" -> class="testimonial-img img-fluid rounded-circle"

# The section is between id="testimonials" and <!-- Testimonial Section End -->
start_idx = content.find('id="testimonials"')
end_idx = content.find('<!-- Testimonial Section End -->')

if start_idx != -1 and end_idx != -1:
    before = content[:start_idx]
    section = content[start_idx:end_idx]
    after = content[end_idx:]

    # Remove style="max-width: 700px"
    section = section.replace('style="max-width: 700px"', 'class="testimonial-header-container text-center mx-auto mb-5"')
    # Remove style="color: #82b1ff;"
    section = section.replace('style="color: #82b1ff;"', 'class="testimonial-highlight"')
    # Remove style="border-radius: 20px;"
    section = section.replace('style="border-radius: 20px;"', '')
    # Remove style="font-size: 0.95rem; line-height: 1.6;"
    section = section.replace('style="font-size: 0.95rem; line-height: 1.6;"', '')
    # Remove style="width: 60px; height: 60px; object-fit: cover; border: 2px solid rgba(255,255,255,0.2);"
    section = section.replace('style="width: 60px; height: 60px; object-fit: cover; border: 2px solid rgba(255,255,255,0.2);"', '')

    # add classes to elements
    section = section.replace('class="text-light opacity-75 mb-4"', 'class="testimonial-text text-light opacity-75 mb-4"')
    section = section.replace('class="img-fluid rounded-circle"', 'class="testimonial-img img-fluid rounded-circle"')
    section = section.replace('class="glass-card p-4 mx-2 text-center"', 'class="testimonial-card glass-card p-4 mx-2 text-center"')
    section = section.replace('class="text-center mx-auto mb-5" class="testimonial-header-container text-center mx-auto mb-5"', 'class="testimonial-header-container text-center mx-auto mb-5"')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(before + section + after)

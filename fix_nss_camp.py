import re

with open('nss-camp.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the three style blocks
# Block 1
block1_start = '  <style>\n    :root {'
block1_end = '    .social-icon:hover {\n      background: var(--nss-green);\n      transform: rotate(360deg);\n      color: white;\n    }\n  </style>\n'

# Block 2
block2_start = '    <!-- Global Cinematic Variables -->\n    <style>'
block2_end = '        }\n    </style>\n'

# Block 3
block3_start = '  <style>\n    /* Cinematic Navbar Upgrade */'
block3_end = '    .navbar-glass .navbar-toggler-icon { filter: invert(1); }\n  </style>\n'

# Replace sticky-top with fixed-top
content = content.replace('sticky-top', 'fixed-top')

# Replace style block 1 with the link to css
if block1_start in content:
    idx1 = content.find(block1_start)
    idx2 = content.find(block1_end) + len(block1_end)
    content = content[:idx1] + '  <link href="css/nss-camp.css" rel="stylesheet" />\n' + content[idx2:]

# Remove block 2
if block2_start in content:
    idx1 = content.find(block2_start)
    idx2 = content.find(block2_end) + len(block2_end)
    content = content[:idx1] + content[idx2:]

# Remove block 3
if block3_start in content:
    idx1 = content.find(block3_start)
    idx2 = content.find(block3_end) + len(block3_end)
    content = content[:idx1] + content[idx2:]

# Add js at the bottom
js_tag = '  <script src="js/nss-camp.js"></script>\n</body>'
content = content.replace('</body>', js_tag)

with open('nss-camp.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done fixing nss-camp.html")

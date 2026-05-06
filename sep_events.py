import re
import os

with open('events.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract styles
style_pattern = re.compile(r'<style>(.*?)</style>', re.DOTALL)
styles = style_pattern.findall(content)
css_content = '\n'.join(styles).strip()

with open('css/events.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

# Extract scripts (only the one containing 'DATASET: 9 EVENTS' to avoid removing things like external scripts if any inline)
script_pattern = re.compile(r'<script>(.*?// --- DATASET:.*?)</script>', re.DOTALL)
scripts = script_pattern.findall(content)
js_content = '\n'.join(scripts).strip()

with open('js/events.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

# Remove the blocks from HTML
content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL)
content = re.sub(r'<script>(.*?// --- DATASET:.*?)</script>', '', content, flags=re.DOTALL)

# Insert the links
head_end_idx = content.find('</head>')
if head_end_idx != -1:
    content = content[:head_end_idx] + '  <!-- Events Stylesheet -->\n  <link href="css/events.css" rel="stylesheet" />\n' + content[head_end_idx:]

# Insert the JS before go-back.js
go_back_idx = content.find('<!-- Go Back JS -->')
if go_back_idx != -1:
    content = content[:go_back_idx] + '<!-- Events Javascript -->\n  <script src="js/events.js"></script>\n\n  ' + content[go_back_idx:]

with open('events.html', 'w', encoding='utf-8') as f:
    f.write(content)

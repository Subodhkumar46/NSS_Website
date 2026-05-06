from html.parser import HTMLParser
import os

class ExtractParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.css_chunks = []
        self.js_chunks = []
        self.in_style = False
        self.in_script = False
        self.has_src = False
        self.current_data = []

    def handle_starttag(self, tag, attrs):
        if tag == 'style':
            self.in_style = True
            self.current_data = []
        elif tag == 'script':
            self.in_script = True
            self.has_src = any(attr[0] == 'src' for attr in attrs)
            self.current_data = []

    def handle_endtag(self, tag):
        if tag == 'style':
            self.in_style = False
            data = ''.join(self.current_data).strip()
            if data:
                self.css_chunks.append(data)
            self.current_data = []
        elif tag == 'script':
            self.in_script = False
            if not self.has_src:
                data = ''.join(self.current_data).strip()
                if data:
                    self.js_chunks.append(data)
            self.current_data = []

    def handle_data(self, data):
        if self.in_style or self.in_script:
            self.current_data.append(data)

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

parser = ExtractParser()
parser.feed(content)

with open('css/index.css', 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(parser.css_chunks))

with open('js/index.js', 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(parser.js_chunks))

import re

# Safely remove only styles and scripts without src
# First styles:
content = re.sub(r'<style.*?>.*?</style>', '', content, flags=re.DOTALL)

# For scripts, we only want to remove ones WITHOUT src
def replacer(match):
    tag = match.group(0)
    if 'src=' in tag or 'src =' in tag:
        return tag # Keep it
    return '' # Remove it

content = re.sub(r'<script.*?>.*?</script>', replacer, content, flags=re.DOTALL)

# Add CSS link
head_end = content.find('</head>')
if head_end != -1:
    content = content[:head_end] + '  <!-- Index Page Stylesheet -->\n  <link href="css/index.css" rel="stylesheet" />\n' + content[head_end:]

# Add JS link
body_end = content.find('</body>')
if body_end != -1:
    content = content[:body_end] + '  <!-- Index Javascript -->\n  <script src="js/index.js"></script>\n' + content[body_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Extracted {len(parser.css_chunks)} CSS blocks and {len(parser.js_chunks)} JS blocks.")

import re

with open('contact.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract styles
style_pattern = re.compile(r'<style>(.*?)</style>', re.DOTALL)
styles = style_pattern.findall(content)
css_content = '\n'.join(styles).strip()

with open('css/contact.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

# Remove the blocks from HTML
content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL)

# Insert the link
head_end_idx = content.find('</head>')
if head_end_idx != -1:
    content = content[:head_end_idx] + '  <!-- Contact Page Stylesheet -->\n  <link href="css/contact.css" rel="stylesheet" />\n' + content[head_end_idx:]

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(content)

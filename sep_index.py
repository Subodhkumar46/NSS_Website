from bs4 import BeautifulSoup

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

css_chunks = []
for style in soup.find_all('style'):
    if style.string:
        css_chunks.append(style.string.strip())
    style.decompose()

js_chunks = []
for script in soup.find_all('script'):
    if not script.get('src') and script.string:
        js_chunks.append(script.string.strip())
        script.decompose()

with open('css/index.css', 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(css_chunks))

with open('js/index.js', 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(js_chunks))

# Add the external links
head = soup.find('head')
if head:
    new_link = soup.new_tag('link', href='css/index.css', rel='stylesheet')
    head.append(new_link)

body = soup.find('body')
if body:
    new_script = soup.new_tag('script', src='js/index.js')
    body.append(new_script)

# Save the modified html
with open('index.html', 'w', encoding='utf-8') as f:
    # use formatter=None to avoid bs4 adding extra newlines or messing up formats, or use default
    f.write(str(soup))

print(f"Extracted {len(css_chunks)} CSS blocks and {len(js_chunks)} JS blocks.")

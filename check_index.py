import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

styles = re.findall(r'<style.*?>(.*?)</style>', content, re.DOTALL)
scripts = re.findall(r'<script.*?>\s*(?!</script>)(.*?)</script>', content, re.DOTALL)

print(f"Styles found: {len(styles)}")
for i, s in enumerate(styles):
    print(f"Style {i} length: {len(s.strip())}")

print(f"\nScripts found: {len(scripts)}")
for i, s in enumerate(scripts):
    s_content = s.strip()
    if s_content:
        print(f"Inline Script {i} length: {len(s_content)}")

import os
import re

directory = r"c:\Users\pc\Documents\NSS\NSS Website"

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Update empty alt tags mapping to the image filename or a generic string
        # e.g. src="img/nss1.jpg" alt="" -> alt="nss1 image"
        def replace_alt(match):
            img_src_segment = match.group(1)
            filename_part = img_src_segment.split('/')[-1].split('.')[0] if '/' in img_src_segment else "nss"
            return f'src="{img_src_segment}" alt="{filename_part} image"'
        
        content = re.sub(r'src="([^"]+)"\s+alt=""', replace_alt, content)
        
        # Also catch just alt="" isolated
        content = content.replace('alt=""', 'alt="NSS descriptive image"')
        
        # 2. Upgrade outdated rounded buttons
        content = content.replace('btn btn-primary rounded-pill', 'btn btn-primary modern-solid-btn')
        content = content.replace('btn-primary rounded-pill', 'btn-primary modern-solid-btn')
        
        # Upgrade other references to btn-primary that aren't modern
        # We need to be careful not to double up 'modern-solid-btn'
        def upgrade_buttons(match):
            btn_classes = match.group(1)
            if 'modern-solid-btn' not in btn_classes and 'btn-primary' in btn_classes:
                btn_classes += ' modern-solid-btn'
            # Also remove rounded-pill
            btn_classes = btn_classes.replace('rounded-pill', '').replace('  ', ' ')
            return f'class="{btn_classes.strip()}"'
        
        content = re.sub(r'class="([^"]*btn[^"]*)"', upgrade_buttons, content)
        
        # 3. Standardize section padding (py-5 -> py-6 for container-fluid)
        # We specifically target block wrappers to align the 80px rhythm.
        content = content.replace('container-fluid py-5 px-lg-5', 'container-fluid py-6 px-lg-5')
        content = content.replace('container-fluid bg-light py-5 px-lg-5', 'container-fluid bg-light py-6 px-lg-5')
        
        # 4. Remove all hardcoded <br> tags found inside H1, H2, H3, H4, H5, H6 headings
        def remove_br(match):
            heading_content = match.group(2).replace('<br>', ' ').replace('<br/>', ' ').replace('<br />', ' ')
            return f'<{match.group(1)}>{heading_content}</{match.group(1).split()[0]}>'
        
        # Non-greedy match for heading inner content
        content = re.sub(r'<(h[1-6][^>]*)>(.*?)</h[1-6]>', remove_br, content, flags=re.DOTALL | re.IGNORECASE)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed {filename}")

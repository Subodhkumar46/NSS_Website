import re

with open('c:/Users/pc/Documents/NSS/NSS_Website/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define patterns
leaders_start = "  <!-- Post Holders 5-Grid Cinematic Section -->"
leaders_end = "  <!-- Post Holders End -->"
officers_start = "  <!-- Programme Officers Cinematic Section (Maintaining Slider) -->"
officers_end = "  <!-- Programme Officers End -->"

# Find blocks
leaders_start_idx = content.find(leaders_start)
leaders_end_idx = content.find(leaders_end) + len(leaders_end)

officers_start_idx = content.find(officers_start)
officers_end_idx = content.find(officers_end) + len(officers_end)

if leaders_start_idx != -1 and leaders_end_idx != -1 and officers_start_idx != -1 and officers_end_idx != -1:
    leaders_block = content[leaders_start_idx:leaders_end_idx]
    officers_block = content[officers_start_idx:officers_end_idx]

    # The order currently is leaders_block then officers_block
    # We want to replace the whole region from leaders_start_idx to officers_end_idx
    # The text between the two blocks
    between_block = content[leaders_end_idx:officers_start_idx]

    new_content = content[:leaders_start_idx] + officers_block + between_block + leaders_block + content[officers_end_idx:]

    with open('c:/Users/pc/Documents/NSS/NSS_Website/index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully swapped")
else:
    print("Could not find the sections")

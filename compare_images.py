
import os

images_dir = r"d:\GODFATHER TAXI\GODFATHER TAXI\images"
dist_dir = r"d:\GODFATHER TAXI\GODFATHER TAXI\dist"

source_images = set()
for f in os.listdir(images_dir):
    if f.lower().endswith(('.webp', '.png', '.jpg', '.jpeg', '.svg', '.avif')):
        source_images.add(f)

dist_images = set()
for root, dirs, files in os.walk(dist_dir):
    for f in files:
        if f.lower().endswith(('.webp', '.png', '.jpg', '.jpeg', '.svg', '.avif')):
            dist_images.add(f)

missing = source_images - dist_images
print(f"Source images: {len(source_images)}")
print(f"Dist images: {len(dist_images)}")
print(f"Missing images: {len(missing)}")
for m in missing:
    print(f" - {m}")

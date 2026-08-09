import os
import sys

pdf_path = r"C:\Users\Jeff Tarroza\.gemini\antigravity\brain\3bda7ec5-41c4-4dce-ae19-37dac0e0353f\.user_uploaded\media__1786246652815.pdf"
output_dir = r"C:\Users\Jeff Tarroza\.gemini\antigravity\scratch\teacher-portfolio\assets\gallery"

os.makedirs(output_dir, exist_ok=True)

try:
    import fitz # PyMuPDF
    doc = fitz.open(pdf_path)
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=150)
        out_file = os.path.join(output_dir, f"page_{i+1}.jpg")
        pix.save(out_file)
        print(f"Saved {out_file}")
    
    # Also extract individual images
    img_count = 0
    for i, page in enumerate(doc):
        for img_index, img in enumerate(page.get_images()):
            xref = img[0]
            base_img = doc.extract_image(xref)
            image_bytes = base_img["image"]
            image_ext = base_img["ext"]
            img_filename = os.path.join(output_dir, f"extracted_img_{i+1}_{img_index+1}.{image_ext}")
            with open(img_filename, "wb") as f:
                f.write(image_bytes)
            img_count += 1
            print(f"Extracted image {img_filename}")
            
except Exception as e:
    print(f"PyMuPDF error: {e}")
    # Try pypdf / fallback
    try:
        import pypdf
        reader = pypdf.PdfReader(pdf_path)
        for i, page in enumerate(reader.pages):
            for count, image_file_object in enumerate(page.images):
                img_name = os.path.join(output_dir, f"pypdf_img_{i+1}_{count}_{image_file_object.name}")
                with open(img_name, "wb") as fp:
                    fp.write(image_file_object.data)
                print(f"Saved pypdf image: {img_name}")
    except Exception as e2:
        print(f"PyPDF error: {e2}")

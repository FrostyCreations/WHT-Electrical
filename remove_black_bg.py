from PIL import Image
import sys

def remove_background_black(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # threshold for "black" - close to 0,0,0
    threshold = 15
    
    for item in datas:
        # item is (R, G, B, A)
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_bg_black.py <input> <output>")
    else:
        remove_background_black(sys.argv[1], sys.argv[2])

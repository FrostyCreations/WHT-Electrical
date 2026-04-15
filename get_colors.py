import urllib.request
import re
from collections import Counter
import sys

def main():
    url = sys.argv[1]
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        colors = re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', html)
        print("Colors:", Counter(colors).most_common(15))
        css_links = re.findall(r'<link[^>]*rel=["\']stylesheet["\'][^>]*href=["\']([^"\']+)["\']', html)
        print("\nCSS Links:")
        for link in css_links:
            print(link)
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    main()

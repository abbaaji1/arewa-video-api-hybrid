import sys

if len(sys.argv) > 1:
    url = sys.argv[1]
    print(f"Processed URL: {url}")
else:
    print("No URL provided")
import sys
sys.path.append('/Users/tornado-04/Desktop/Storm_web_2023/Python_lesson_day_10/bs4')
import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl
# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')
# Retrieve all of the anchor tags
tags = soup('p')
count = 0
for tag in tags:
    count += 1
    print('TAG:', tag)
    print('CONTENTS:', tag.contents[0])
    print('COUNT: ', count)

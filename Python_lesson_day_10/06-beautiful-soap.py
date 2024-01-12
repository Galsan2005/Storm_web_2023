import sys
sys.path.append('/Users/tornado-04/Desktop/Storm_web_2023/Python_lesson_day_10/bs4')
from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
html = urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')

tags = soup('a')
for tag in tags:
    print('TAG:', tag)
    print('URL:', tag.get('href', None))
    print('CONTENTS:', tag.contents[0])
    print('ATTRS:', tag.attrs)

# http://www.dr-chuck.com/page1.htm
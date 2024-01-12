import ssl
from urllib.request import urlopen

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
inp = input('Give me URL: ')

name = urlopen(inp, context=ctx)
size = 0
while True:
    info = name.read(1)
    print(info)
    if len(info) < 1: break
    size = size + len(info)
    
print(size, 'characters')
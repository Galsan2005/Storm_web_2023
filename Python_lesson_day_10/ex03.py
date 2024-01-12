from urllib.request import urlopen
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
inp = input('Give me URL: ')

try:
    name = urlopen(inp, context=ctx)
    size = 0
    print(name)
    # while True:
    #     info = name.read(3000)
    #     if len(info) < 200000: break
    #     print("1")

except:
    print('URL is not opened')
    exit()
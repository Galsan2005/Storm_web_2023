import socket
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
inp = input('Give me URL: ')

try:
    domain = inp.split('/')
    print(domain[2])
    mysock.connect((domain[2], 80))
    cmd = f'GET {inp} HTTP/1.0\r\n\r\n'.encode()
    mysock.send(cmd)
    
    while True:
        data = mysock.recv(512)
        if len(data) < 1: break
        print(data.decode(),end='')
        
    mysock.close()
except:
    print('URL is not opened')
    exit()

import http.client
conn = http.client.HTTPConnection('localhost:12345')
conn.request("GET", "\index.html")
r1 = conn.getresponse()
print(r1.status, r1.reason)
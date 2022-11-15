# W02D03 - Networking with TCP and HTTP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [ ] TCP demo
- [ ] HTTP fundamentals

### Networking
* computers connected together
* every machine on the network can talk to any other machine on the network
* each computer on the network has a unique address
* IP Internet Protocol address 192.168.0.1
* DNS lookup Domain Name Service
* IPv4 version 4
* IPv6 example: 2001:db8:3333:4444:5555:6666:7777:8888

* Port uniquely idenities a running process on a computer
* 65,535 ports to choose from
* HTTP 80, HTTPS 443, Postgres 5432
* Development ports: 3000 => 9000
* Vagrantfile

### Sending Data
* chop the data into packets

### TCP
* Transmission Control Protocol
* has a triple handshake (has to have a connection)
* security
* lossless (lost packets are recovered)

### UDP
* User Datagram Protocol
* connectionless
* streaming
* no lost packets are resent

### Event-driven Programming
* programming around events happening
* event examples: button click, form submission, hovering over an HTML element
* handled with callbacks
* button.on('click', () => {})
* form.on('submit', () => {})














var http = require('http');

http.createServer(function (request, response) {

	// ���� HTTP ͷ�� 
	// HTTP ״ֵ̬: 200 : OK
	// ��������: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// ������Ӧ���� "Hello World"
	response.end('Hello WorldHello WorldHello World\n');
}).listen(8888);

// �ն˴�ӡ������Ϣ
console.log('Server running at http://127.0.0.1:8888/');
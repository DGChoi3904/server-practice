import http from 'http';

function serverCallback(request, response){
  //따로 사용할 함수 작성
}

const server = http.createServer((request, response) => {

    // 중오한 점검 부분
    console.dir(response);

    response.writeHead(200, {'Content-type':'text/plain'});
    response.write("Hello World");
    response.end();

});

server.listen(3000);
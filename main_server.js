import http from 'http';
import fs  from 'fs';
//import React from 'react';
//import ReactDOM from 'react-dom';
//ReactDOM설치 시 ReactDOMServer의 자료도 같이 설치된다. 아래와 같이 작성하여 Server용 자료만 import받자.
//우리가 사용할 함수, renderToStaticMarkup(정적인 마크업용 랜더링)
import ReactDOMServer from 'react-dom/server';
//jsx를 js에서 읽을 수 없기에 선택한 방식. react만 사용한 컴포넌트를 import한다.
import LoginPage from './components/LoginPage.js';

const server = http.createServer((request, response)=> {
  if(request.method === 'GET'){
    if(request.url === '/'){
      response.writeHead(200, {'Content-type':'text/HTML'});
      // renderToStaticMarkup을 사용하여 loginPage() 함수를 정적 마크업언어로 변환 및 저장
      const loginComp = ReactDOMServer.renderToStaticMarkup(LoginPage());
      // 기본 작성한 index.html파일을 "utf8" 문서형태로 가져오기
      const index = fs.readFileSync('./public/index.html',"utf8");
      // 작성한 index.html파일의 표시된 {{{html}}}의 텍스트를 loginComp로 대체함.
      const renderedHtml = index.replace('{{{html}}}', loginComp);
      // 렌더링된 renderedHtml을 write함.
      response.write(renderedHtml);
      // -끗-
      response.end;
    }
  }
})
server.listen(3000, err=>{
  if(err){
    console.error(`에러, (${err})가 발생했습니다.`);
  } else {
    console.log("포트 3000으로 연결합니다.")
  }
})
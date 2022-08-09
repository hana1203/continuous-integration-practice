// App.test.js
//리액트 환경에서 테스트 

import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; 
//toBeInTheDocument 라는 jest-dom 라이브러리에 포함된 Custom matchers 사용을 위해 불러오기 

//Test suites
describe('테스트를 돌려보자', () => {
    //Test case
    test('Agora라는 글자가 포함되어야 합니다', () => {
    render(<App />); //test하고자하는 컴포넌트 
    const title = screen.getByText(/Agora/i);
    expect(title).toBeInTheDocument;
});
});

//App.js에 Agora라는 문자열 있으면 테스트 성공, 아니면 실패 


//Jest만 이용해서 간단한 테스트하기 - React 컴포넌트 이용 x
// test('2 더하기 2는 4', () => {
//     expect(2+2).toBe(4);
// })
//test대신 it함수 사용가능 - test case 
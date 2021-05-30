import Example from "@ausg/components/Example";
import { NextPage } from "next";

const ExamplePage: NextPage = () => {
  // 이 밑에 자신이 만든 컴포넌트를 넣을 수 있음
  return <Example />;

  // 여러 개의 컴포넌트를 넣는다면 html 테그 혹은 <></> 혹은 <React.Fragment></React.Fragment>를 활용해 다음과 같이 표현 가능
  //   return (
  //     <>
  //       <Example />
  //       <Example />
  //       <Example />
  //       <Example />
  //       <Example />
  //       <Example />
  //     </>
  //   );
  //   return (
  //     <React.Fragment>
  //       <Example />
  //       <Example />
  //       <Example />
  //       <Example />
  //       <Example />
  //       <Example />
  //     </React.Fragment>
  //   );
};

export default ExamplePage;

// 이렇게 페이지를 만드시면 됩니다.
// 페이지의 경우는 파일 이름(이 파일의 경우 example)이 route 정보가 되어 실제로 src/page/example.tsx라는 파일을 만드시면 http://localhost:27285/example로 접근이 가능합니다.

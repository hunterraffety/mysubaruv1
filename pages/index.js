import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import ButtonCss from "../components/ButtonCss";
import ButtonReact from "../components/ButtonReact";
import ButtonStyled from "../components/ButtonStyled";

const Index = (props) => {
  console.log(props);
  const { appProps } = props;
  return (
    <div className={css(tw`grid justify-center items-center h-screen`)}>
      <ButtonCss>@emotion/css</ButtonCss>
      <p className={css(tw`flex justify-center bg-gray-300 p-6`)}>{appProps}</p>
      <ButtonReact>@emotion/react</ButtonReact>
      <ButtonStyled>@emotion/styled</ButtonStyled>
    </div>
  );
};

export default Index;

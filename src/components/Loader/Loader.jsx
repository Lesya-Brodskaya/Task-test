import { Audio } from "react-loader-spinner";
import { Container } from "./Loader.styled";

const Loader = () => (
  <Container>
    <Audio
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  </Container>
);

export default Loader;

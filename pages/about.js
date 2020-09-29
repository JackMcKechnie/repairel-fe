import Header from "@components/header";

import { LinedHeading } from './Pages.style'

const About = () => {
  return (
    <>
      <Header />
      <section style={{ margin: "1rem" }}>
        <LinedHeading>About us</LinedHeading>
      </section>
    </>
  );
};
export default About;

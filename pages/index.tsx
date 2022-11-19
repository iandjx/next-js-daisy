import React from "react";
import tw from "twin.macro";
import Button from "../components/Button";
import Logo from "../components/Logo";

interface Styles {
  container: ({ hasBackground }: { hasBackground: boolean }) => any[];
}

const styles: Styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
};

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      {/* outline button using tw doesnt work */}
      <button tw="btn btn-outline">outline button</button>
      {/* outline button using classname works */}
      <button className="btn btn-outline">outline button</button>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
);

export default App;

import React, { PureComponent } from "react";
import CommandInput from "./CommandInput";
import glamorous from "glamorous";

const TerminalContainer = glamorous.div({
  whiteSpace: "pre-wrap"
})


export default class Terminal extends PureComponent {
  render() {
    return (
      <TerminalContainer>
        <CommandInput />
      </TerminalContainer>
    );
  }
}

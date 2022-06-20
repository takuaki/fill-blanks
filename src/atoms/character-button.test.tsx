import { CharacterButton } from "./character-button";
import { render, cleanup } from "solid-testing-library";
import { hasTextContent } from "solid-dom-testing";
import { suite } from "uvu";
import * as assert from "uvu/assert";

const testButton = suite("CharacterButton");

testButton.after.each(cleanup);

testButton("ボタン中に文字が表示されている", () => {
  const { container, getByRole } = render(() => (
    <CharacterButton character={"a"} />
  ));
  assert.ok(hasTextContent(container, "a"), "wrong text content");
});

testButton.run();

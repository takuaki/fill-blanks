import type { Component } from "solid-js";
//import styles from "./character-button.module.sass";
//import styles from "./character-button.module.sass";

type Props = { character: string };
export const CharacterButton: Component<Props> = (props) => {
  return (
    <button  role="button">
      {props.character}
    </button>
  );
};

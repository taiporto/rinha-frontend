import { Component, createEffect, createMemo, createSignal } from "solid-js";
import { buildTree } from "./utils/buildTree";

export const Tree: Component<{ jsonString: string }> = (props) => {
  // const parsedData = createMemo(() => JSON.parse(props.jsonString));

  return <pre>{}</pre>;
};

import { Component, JSX, createSignal } from "solid-js";
import { Tree } from "../components/Tree/Tree";
import { buildTree } from "../components/Tree/utils/buildTree";

export const Home: Component<{}> = () => {
  const [jsonString, setJsonString] = createSignal("{}");

  const handleFileLoading: JSX.ChangeEventHandlerUnion<
    HTMLInputElement,
    Event
  > = (event) => {
    if (!event?.currentTarget) {
      throw new Error("No event or currentTarget");
    }

    event.currentTarget.files?.[0]?.text().then((result) => {
      if (!result) {
        throw new Error("No file or file content");
      }
      setJsonString(result);
    });
  };

  return (
    <main>
      <h1>JSON Tree Viewer</h1>
      <p>Simple JSON Viewer that runs completely on-client. No data exchange</p>
      <input type="file" onChange={handleFileLoading} />
      {/* <Tree jsonString={jsonString()} /> */}
      <pre>{buildTree(jsonString())}</pre>
    </main>
  );
};

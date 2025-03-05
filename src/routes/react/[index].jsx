import Layout from "../Layout";
import React from "./React";

export default function ReactExample() {
  return (
    <Layout title="React example" script="/react/index.js">
      <div class="App">
        <React component="Lottery" title="Lottery 6 from 49" />
      </div>
    </Layout>
  );
}

import reactToString from "../../browser/react/react-to-string";
import Layout from "../Layout";

export default function ReactExample() {
  return (
    <Layout title="Chart example" script="/react/index.js">
      {reactToString("Example", { width: 500, height: 500 })}
    </Layout>
  );
}

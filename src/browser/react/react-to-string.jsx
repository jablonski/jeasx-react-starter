import { renderToString } from "react-dom/server";
import Components from "./components/$index";

/**
 * @param {string} component
 * @param {object} props
 */
export default function reactToString(component, props = {}) {
  const Component = Components[component];
  return renderToString(<Component {...props} />);
}

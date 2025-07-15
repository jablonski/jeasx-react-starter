/**
 * @param {import("./types").RouteProps} props
 */
export default function ({ request, reply }) {
  return reply.redirect("/react");
}

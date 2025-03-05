/**
 * @param {import("./types").RouteProps} props
 */
export default function Frontpage({ request, reply }) {
  return reply.redirect("/react");
}

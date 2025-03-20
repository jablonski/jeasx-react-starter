/**
 * @this {import("./types").ThisContext}
 */
export default function Layout({
  title = "",
  description = "",
  children,
  css = "/index.css",
  script = undefined,
}) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href={`${css}?${process.env.BUILD_TIME}`} />
          {script && (
            <script
              type="module"
              src={`${script}?${process.env.BUILD_TIME}`}
              defer
            ></script>
          )}
          <title>{title}</title>
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}

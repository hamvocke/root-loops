import { fromQueryString } from "$lib/ingredients";
import { exportToAlacritty, exportToJson, exportToWindowsTerminal } from "$lib/export";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url }) => {
  const recipe = fromQueryString(url.searchParams);
  const format = url.searchParams.get("format") ?? "json";

  switch (format) {
    case "json":
      return jsonResponse(exportToJson(recipe));
    case "alacritty":
      return textResponse(exportToAlacritty(recipe));
    case "windows-terminal":
      return jsonResponse(exportToWindowsTerminal(recipe));
  }

  return jsonResponse(exportToJson(recipe));
};

function textResponse(body: string): Response {
  return new Response(body, {
    status: 200,
    statusText: "OK",
    headers: { "Content-Type": "text/plain" },
  });
}

function jsonResponse(body: string): Response {
  return new Response(body, {
    status: 200,
    statusText: "OK",
    headers: { "Content-Type": "application/json" },
  });
}

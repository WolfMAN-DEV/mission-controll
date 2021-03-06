import { Router } from "https://deno.land/x/oak@v6.1.0/mod.ts";

import { getAvailablePlanets } from "./utils/planets.ts";

export const router = new Router();

router.get("/", ({ response }) => {
  response.body = "NASA: Hello World!";
});

router.get("/planets", async ({ response }) => {
  response.body = await getAvailablePlanets();
});

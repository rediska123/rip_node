export const ROUTES = {
    HOME: "/",
    PASSES: "/passes",
  }
  export type RouteKeyType = keyof typeof ROUTES;
  export const ROUTE_LABELS: {[key in RouteKeyType]: string} = {
    HOME: "Главная",
    PASSES: "Абонементы",
  };
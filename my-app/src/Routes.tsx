export const ROUTES = {
    HOME: "/",
    PASSES: "/passes",
    REGISTRATION: "/registration",
    CLIENTCARDS: "/clientcards",
    LOGIN: "/login",
    PROFILE: "/profile",
    CURRENTCARD: "/currentcard"
  }
  export type RouteKeyType = keyof typeof ROUTES;
  export const ROUTE_LABELS: {[key in RouteKeyType]: string} = {
    HOME: "Главная",
    PASSES: "Абонементы",
    REGISTRATION: "Регистрация",
    CLIENTCARDS: "Проездные",
    LOGIN: "Логин",
    PROFILE: "Профиль",
    CURRENTCARD: "Активный проездной"
  };
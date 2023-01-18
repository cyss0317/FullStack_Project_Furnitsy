import { User } from "../components/types";

export const $signup = (user: User) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });

export const $login = (user: User) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });

export const $logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });

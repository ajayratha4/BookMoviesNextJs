"use client";
export const getUser = () => {
  const cookie = document.cookie.split(";");

  const cookieObj = cookie.map((item) => {
    const cookieArr = item.split("=");
    return { [cookieArr[0]]: cookieArr[1] };
  });
  return cookieObj.find((item) => item.username)?.username || null;
};

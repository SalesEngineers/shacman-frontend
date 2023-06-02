export default function ({ route, redirect }) {
  //статичные редиректы
  function handRedirect(oldPath, newPath) {
    if (route.fullPath == oldPath) {
      redirect(301, newPath);
    }
  }

  //нижний слеш
  if (route.fullPath.indexOf("_") != -1) {
    redirect(301, route.fullPath.replace("_", "-"));
  }
}

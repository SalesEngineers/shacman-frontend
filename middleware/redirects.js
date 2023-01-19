export default function ({ route, redirect }) {
  //статичные редиректы
  function handRedirect(oldPath, newPath) {
    if (route.fullPath == oldPath) {
      redirect(301, newPath);
    }
  }

  handRedirect("/dostavka-i-sborka/", "/");
  handRedirect("/o-brende/", "/");
  handRedirect("/o-kompanii/", "/about/");
  handRedirect("/kontakty/", "/contacts/");
  handRedirect("/servis-i-zapchasti/", "/");
  handRedirect("/shop/", "/product-category/");

  handRedirect("/shop/betonosmesitel/avtobetonosmesitel-shacman-sx5256gjbdr384-f3000-6h4/", "/product/avtobetonosmesitel-shacman-sx5256gjbdr384-f3000-6x4/");
  handRedirect("/shop/betonosmesitel/avtobetonosmesitel-shacman-sx5258gjbdr384-f3000-6h4/", "/product/avtobetonosmesitel-shacman-sx5258gjbdr384-f3000-6x4/");
  handRedirect("/shop/betonosmesitel/avtobetonosmesitel-shacman-sx5316gjbdt326-f3000-8h4/", "/product/avtobetonosmesitel-shacman-sx5316gjbdt326-f3000-8x4/");
  handRedirect("/shop/betonosmesitel/avtobetonosmesitel-shacman-sx5318gjbdt326-f3000-8h4/", "/product/avtobetonosmesitel-shacman-sx5318gjbdt326-f3000-8x4/");
  handRedirect("/shop/bortovye-gruzoviki/bortovoj-gruzovik-shacman-sx1164ul561-6h2/", "/product/bortovoj-gruzovik-shacman-sx1164ul561-6x2/");
  handRedirect("/shop/bortovye-gruzoviki/bortovoj-gruzovik-shacman-sx1256nv504c-6h4/", "/product/bortovoj-gruzovik-shacman-sx1256nv504c-6x4/");
  handRedirect("/shop/f3000/zernovoz-shacman-sx1256dr-6h4/", "/product/zernovoz-shacman-sx1256dr-6h4/");
  handRedirect("/shop/f3000/zernovoz-shacman-sx3258dr384-6h4/", "/product/zernovoz-shacman-sx3258dr384-6h4/");
  handRedirect("/shop/kdm/kdm-shacman-p-45-20-sh-komplektaciya-zima/", "/product/kdm-shacman-p-45-20-sh-komplektaciya-zima/");
  handRedirect("/shop/kdm/kdm-shacman-p-45-20-sh/", "/product/kdm-shacman-p-45-20-sh/");
  handRedirect("/shop/l3000/furgon-shacman-sx5188xxy8k501t-l3000-4h2/", "/product/furgon-shacman-sx5188xxy8k501t-l3000-4x2/");
  handRedirect("/shop/lesovozy/lesovoz-shacman-sx1256dt504-6h4/", "/product/lesovoz-shacman-sx1256dt504-6x4/");
  handRedirect("/shop/lesovozy/lesovoz-shacman-sx32586t384c-6h4/", "/product/lesovoz-shacman-sx32586t384c-6x4/");
  handRedirect("/shop/samosval/25-tonn/samosval-shacman-sx3258dt385-x3000-6x4/", "/product/samosval-shacman-sx3258dt385-x3000-6x4/");
  handRedirect("/shop/samosval/4x2-samosval/samosval-sx31858j381-l3000-4h2/", "/product/samosval-sx31858j381-l3000-4x2/");
  handRedirect("/shop/samosval/4x2-samosval/samosval-sx5188gss8j451-l3000-4h2/", "/product/samosval-sx5188gss8j451-l3000-4x2/");
  handRedirect("/shop/samosval/4x2-samosval/samosval-sx5188xxy8j501-l3000-4h2/", "/product/samosval-sx5188xxy8j501-l3000-4x2/");
  handRedirect("/shop/samosval/6x4/gazovyj-samosval-shacman-sx32586t464t-x3000-6h4/", "/product/gazovyj-samosval-shacman-sx32586t464t-x3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-f2000-6h4/", "/product/samosval-shacman-f2000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-f3000-6h4/", "/product/samosval-shacman-f3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-ssx32586v384-x3000-6x4/", "/product/samosval-shacman-sx32586v384-x3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3251dr384-f2000-6x4/", "/product/samosval-shacman-sx3251dr384-f2000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3255dr384-f2000-6x4/", "/product/samosval-shacman-sx3255dr384-f2000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3255mt384-h3000-6h4/", "/product/samosval-shacman-sx3255mt384-h3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3256dr384-f2000-6x4/", "/product/samosval-shacman-sx3256dr384-f2000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3256dr384c-f2000-6h4/", "/product/samosval-shacman-sx3256dr384c-f2000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3256dr384c-f3000-6h4/", "/product/samosval-shacman-sx3256dr384c-f3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3256dt384-f3000-6h4/", "/product/samosval-shacman-sx3256dt384-f3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3256mr384-m3000-6h4/", "/product/samosval-shacman-sx3256mr384-m3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx32586r384-x3000-6x4/", "/product/samosval-shacman-sx32586r384-x3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx32586t384-x3000-6h4/", "/product/samosval-shacman-sx32586t384-x3000-6h4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx32586t384s-x3000-6h4/", "/product/samosval-shacman-sx32586t384s-x3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3258dr384-f3000-6x4/", "/product/samosval-shacman-sx3258dr384-f3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3258dr385-f3000-6x6/", "/product/samosval-shacman-sx3258dr385-f3000-6x6/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3258dt384-f3000-6x4/", "/product/samosval-shacman-sx3258dt384-f3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-shacman-sx3258dt384c-f3000-6x4/", "/product/samosval-shacman-sx3258dt384c-f3000-6x4/");
  handRedirect("/shop/samosval/6x4/samosval-x3000-6h4/", "/product/samosval-x3000-6x4/");
  handRedirect("/shop/samosval/6x6/samosval-f3000-6h6/", "/product/samosval-f3000-6x6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx3256dr385-f3000-6-x-6/", "/product/samosval-shacman-sx3256dr385-f3000-6x6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx3256dr385c-f3000-6h6/", "/product/samosval-shacman-sx3256dr385c-f3000-6x6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx3256dv385-f3000-6h6/", "/product/samosval-shacman-sx3256dv385-f3000-6h6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx32586t385-x3000-6x6/", "/product/samosval-shacman-sx32586t385-x3000-6x6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx32586v385-x3000-6x6/", "/product/samosval-shacman-sx32586v385-x3000-6x6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx32586w385c-x3000-6x6/", "/product/samosval-shacman-sx32586w385c-x3000-6x6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx3258dr385-f2000-6x6/", "/product/samosval-shacman-sx3258dr385-f2000-6x6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx3258dt385-f3000-6x6/", "/product/samosval-shacman-sx3258dt385-f3000-6x6/");
  handRedirect("/shop/samosval/6x6/samosval-shacman-sx3258dv385f3000-6x6/", "/product/samosval-shacman-sx3258dv385f3000-6x6/");
  handRedirect("/shop/samosval/8x4/samosval-f3000-8h4-oranzhevyj/", "/product/samosval-f3000-8x4-oranzhevyj/");
  handRedirect("/shop/samosval/8x4/samosval-f3000-8h4-zheltyj/", "/product/samosval-f3000-8x4-zheltyj/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx3256dt384-f3000-8x4/", "/product/samosval-shacman-sx3256dt384-f3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx32586w385c-x3000-8x4/", "/product/samosval-shacman-sx32586w385c-x3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx3315mt366-h3000-8h4/", "/product/samosval-shacman-sx3315mt366-h3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx3316dt366-f3000-8h4/", "/product/samosval-shacman-sx3316dt366-f3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx3316dt366c-f3000-8h4/", "/product/samosval-shacman-sx3316dt366c-f3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx3316dv366-f2000-8h4/", "/product/samosval-shacman-sx3316dv366-f2000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx3316dv366-f3000-8h4/", "/product/samosval-shacman-sx3316dv366-f3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx3316hr366-m3000-8h4/", "/product/samosval-shacman-sx3316hr366-m3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx331863366-x3000-8x4/", "/product/samosval-shacman-sx331863366-x3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx331864366c-x3000-8x4/", "/product/samosval-shacman-sx331864366c-x3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx33186t366s-x3000-8h4/", "/product/samosval-shacman-sx33186t366s-x3000-8h4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx33186v366-x3000-8x4/", "/product/samosval-shacman-sx33186v366-x3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx33186w366-x3000-8x4/", "/product/samosval-shacman-sx33186w366-x3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-shacman-sx33186w366c-x3000-8x4/", "/product/samosval-shacman-sx33186w366c-x3000-8x4/");
  handRedirect("/shop/samosval/8x4/samosval-x3000-8h4/", "/product/samosval-x3000-8x4/");
  handRedirect("/shop/tyagach/4x2/sedelnyj-tyagach-sx4186dr361-f3000-4h2/", "/product/sedelnyj-tyagach-sx4186dr361-f3000-4x2/");
  handRedirect("/shop/tyagach/4x2/sedelnyj-tyagach-sx4186nv361-f3000-4h2-2/", "/product/sedelnyj-tyagach-sx4186nv361-f3000-4h2-2/");
  handRedirect("/shop/tyagach/4x2/sedelnyj-tyagach-sx4186nv361-f3000-4h2/", "/product/sedelnyj-tyagach-sx4186nv361-f3000-4x2/");
  handRedirect("/shop/tyagach/4x2/sedelnyj-tyagach-sx4186nv361c-f3000-4h2/", "/product/sedelnyj-tyagach-sx4186nv361c-f3000-4x2/");
  handRedirect("/shop/tyagach/6x6-tyagach/sedelnyj-tyagach-sx4256dr385-f3000-6h6/", "/product/sedelnyj-tyagach-sx4256dr385-f3000-6x6/");
  handRedirect("/shop/tyagach/6x6-tyagach/sedelnyj-tyagach-sx4256dt385-f3000-6h6/", "/product/sedelnyj-tyagach-sx4256dt385-f3000-6x6/");
  handRedirect("/shop/tyagach/6x6-tyagach/sedelnyj-tyagach-sx4256dv385-f3000-6h6/", "/product/sedelnyj-tyagach-sx4256dv385-f3000-6x6/");
  handRedirect("/shop/tyagach/6x6-tyagach/sedelnyj-tyagach-sx4258dv385-f3000-6h6/", "/product/sedelnyj-tyagach-sx4258dv385-f3000-6x6/");
  handRedirect("/shop/tyagach/6x6-tyagach/tyagach6h6/", "/product/tyagach-sx4256dw385c-f3000-6x6/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx4255ht324c-h3000-6h4/", "/product/sedelnyj-tyagach-sx4255ht324c-h3000-6h4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx42566v324-x3000-6h4/", "/product/sedelnyj-tyagach-sx42566v324-x3000-6h4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx4256gr324-m3000-6h4/", "/product/sedelnyj-tyagach-sx4256gr324-m3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx4256nt324-f3000-6h4/", "/product/sedelnyj-tyagach-sx4256nt324-f3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx4256nt324c-f3000-6h4/", "/product/sedelnyj-tyagach-sx4256nt324c-f3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx4256nv324-f3000-6h4/", "/product/sedelnyj-tyagach-sx4256nv324-f3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx4256nw324c-f3000-6h4/", "/product/sedelnyj-tyagach-sx4256nw324c-f3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx42584v324-x3000-6h4/", "/product/sedelnyj-tyagach-sx42584v324-x3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx42584w324c-x3000-6h4/", "/product/sedelnyj-tyagach-sx42584w324c-x3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx42586t324-x3000-6h4/", "/product/sedelnyj-tyagach-sx42586t324-x3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx42586v324-x3000-6h4/", "/product/sedelnyj-tyagach-sx42586v324-x3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx42586v385-x3000-6h6/", "/product/sedelnyj-tyagach-sx42586v385-x3000-6x6/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx42586w324c-x3000-6h4/", "/product/sedelnyj-tyagach-sx42586w324c-x3000-6x4/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-sx42586w385c-x3000-6h6/", "/product/sedelnyj-tyagach-sx42586w385c-x3000-6x6/");
  handRedirect("/shop/tyagach/sedelnyj-tyagach-x3000-6h4/", "/product/sedelnyj-tyagach-x3000-6x4/");
  handRedirect("/shop/x3000/shassi-shacman-sx32586w384c-6h4/", "/product/shassi-shacman-sx32586w384c-6h4/");
  handRedirect("/shop/x3000/shassi-shacman-x3000-sx32586t384c-6h4/", "/product/shassi-shacman-x3000-sx32586t384c-6h4/");

  if(/\/shop\/page\/\d+/.test(route.fullPath)) {
    redirect(301, "/product-category/");
  }

  //пагинация
  if (route.fullPath.split("/page/1").length !== 1) {
    redirect(301, route.fullPath.split("page/")[0]);
  }

  //нижний регистр
  if (route.fullPath !== route.fullPath.toLowerCase()) {
    redirect(301, route.fullPath.toLowerCase());
  }

  if (
    route.fullPath.indexOf("/wp-content/") != -1 ||
    route.fullPath.indexOf("/wp-includes/") != -1 ||
    route.fullPath.indexOf('wc-ajax') != -1 ||
    route.fullPath.indexOf('/design/themes/komtrans/media/assets/images/') != -1
  ) {
    redirect(301, "/");
  }

  //нижний слеш
  if (route.fullPath.indexOf("_") != -1) {
    redirect(301, route.fullPath.replace("_", "-"));
  }
}

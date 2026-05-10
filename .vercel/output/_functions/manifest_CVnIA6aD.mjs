import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_CaCGEmsX.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_mseXPBc4.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/bhujoy/PlyazBlo/plyaz-website/","cacheDir":"file:///Users/bhujoy/PlyazBlo/plyaz-website/node_modules/.astro/","outDir":"file:///Users/bhujoy/PlyazBlo/plyaz-website/dist/","srcDir":"file:///Users/bhujoy/PlyazBlo/plyaz-website/src/","publicDir":"file:///Users/bhujoy/PlyazBlo/plyaz-website/public/","buildClientDir":"file:///Users/bhujoy/PlyazBlo/plyaz-website/dist/client/","buildServerDir":"file:///Users/bhujoy/PlyazBlo/plyaz-website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"insights/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/insights","isIndex":true,"type":"page","pattern":"^\\/insights\\/?$","segments":[[{"content":"insights","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/insights/index.astro","pathname":"/insights","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/insights/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/insights/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/insights/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/insights/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/legal/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/legal/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/insights/index@_@astro":"pages/insights.astro.mjs","\u0000@astro-page:src/pages/insights/[...slug]@_@astro":"pages/insights/_---slug_.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/legal/[...slug]@_@astro":"pages/legal/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CVnIA6aD.mjs","/Users/bhujoy/PlyazBlo/plyaz-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D94HXWk1.mjs","/Users/bhujoy/PlyazBlo/plyaz-website/.astro/content-assets.mjs":"chunks/content-assets_CYBNTbxI.mjs","/Users/bhujoy/PlyazBlo/plyaz-website/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BJsD9SxT.mjs","/Users/bhujoy/PlyazBlo/plyaz-website/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.DstLDhbB.js","@astrojs/react/client.js":"_astro/client.BhtkCt6v.js","/Users/bhujoy/PlyazBlo/plyaz-website/src/components/HeaderMenu/mobile.astro?astro&type=script&index=0&lang.ts":"_astro/mobile.astro_astro_type_script_index_0_lang.DQiCI-9J.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/bhujoy/PlyazBlo/plyaz-website/src/components/HeaderMenu/mobile.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"menu-btn\"),n=document.getElementById(\"menu\"),t=document.querySelectorAll(\"#menu a\");if(!e||!n){console.error(\"Menu items are missing?\");return}e.addEventListener(\"click\",()=>{e.classList.toggle(\"open\"),n.classList.toggle(\"hidden\")}),t.forEach(s=>{s.addEventListener(\"click\",()=>{e.classList.remove(\"open\"),n.classList.add(\"hidden\")})})});"]],"assets":["/_astro/chevron-left.K_sy69ir.png","/_astro/qr-community.D2m9OPJC.png","/_astro/logo-ticket.8bDAQy2G.png","/_astro/arden-logo.MFxISd85.png","/_astro/gs-loggo.DhsITZ9f.png","/_astro/icon-x.BzVQzpNl.svg","/_astro/icon-cut.ChjJpRoV.svg","/_astro/rise-logo.BZ1f3Yrk.png","/_astro/footballer.CwA47RVa.png","/_astro/quote-icon.CcCDvJPu.png","/_astro/logo-trans.D86t5eXP.png","/_astro/logo.BgIjVXPl.png","/_astro/logo-circle.C1dRudv9.png","/_astro/handwritten-logo.DH5OCEwD.png","/_astro/poster.DJy9Quka.jpg","/_astro/poster.h_JvgApi.jpg","/_astro/poster-1.oi0KEgQB.jpg","/_astro/poster.whyFootballFundingMisses.t3FAybif.png","/_astro/poster.D2gSjtGP.png","/_astro/poster.WhyFootballLoses.DnjEX25K.jpg","/_astro/poster.theOpportunityGap.DWloU50N.jpg","/_astro/poster.forgottenyears.Cg8lSFG0.jpg","/_astro/index.-BmvsW-Y.css","/favicon-16x16.png","/favicon-32x32.png","/favicon.svg","/favicon2.svg","/_astro/client.BhtkCt6v.js","/_astro/index.Dz9v927v.js","/_astro/keystatic-page.DstLDhbB.js","/fonts/GeneralSans-Bold.eot","/fonts/GeneralSans-Bold.ttf","/fonts/GeneralSans-Bold.woff","/fonts/GeneralSans-Bold.woff2","/fonts/GeneralSans-BoldItalic.eot","/fonts/GeneralSans-BoldItalic.ttf","/fonts/GeneralSans-BoldItalic.woff","/fonts/GeneralSans-BoldItalic.woff2","/fonts/GeneralSans-Extralight.eot","/fonts/GeneralSans-Extralight.ttf","/fonts/GeneralSans-Extralight.woff","/fonts/GeneralSans-Extralight.woff2","/fonts/GeneralSans-ExtralightItalic.eot","/fonts/GeneralSans-ExtralightItalic.ttf","/fonts/GeneralSans-ExtralightItalic.woff","/fonts/GeneralSans-ExtralightItalic.woff2","/fonts/GeneralSans-Italic.eot","/fonts/GeneralSans-Italic.ttf","/fonts/GeneralSans-Italic.woff","/fonts/GeneralSans-Italic.woff2","/fonts/GeneralSans-Light.eot","/fonts/GeneralSans-Light.ttf","/fonts/GeneralSans-Light.woff","/fonts/GeneralSans-Light.woff2","/fonts/GeneralSans-LightItalic.eot","/fonts/GeneralSans-LightItalic.ttf","/fonts/GeneralSans-LightItalic.woff","/fonts/GeneralSans-LightItalic.woff2","/fonts/GeneralSans-Medium.eot","/fonts/GeneralSans-Medium.ttf","/fonts/GeneralSans-Medium.woff","/fonts/GeneralSans-Medium.woff2","/fonts/GeneralSans-MediumItalic.eot","/fonts/GeneralSans-MediumItalic.ttf","/fonts/GeneralSans-MediumItalic.woff","/fonts/GeneralSans-MediumItalic.woff2","/fonts/GeneralSans-Regular.eot","/fonts/GeneralSans-Regular.ttf","/fonts/GeneralSans-Regular.woff","/fonts/GeneralSans-Regular.woff2","/fonts/GeneralSans-Semibold.eot","/fonts/GeneralSans-Semibold.ttf","/fonts/GeneralSans-Semibold.woff","/fonts/GeneralSans-Semibold.woff2","/fonts/GeneralSans-SemiboldItalic.eot","/fonts/GeneralSans-SemiboldItalic.ttf","/fonts/GeneralSans-SemiboldItalic.woff","/fonts/GeneralSans-SemiboldItalic.woff2","/fonts/GeneralSans-Variable.eot","/fonts/GeneralSans-Variable.ttf","/fonts/GeneralSans-Variable.woff","/fonts/GeneralSans-Variable.woff2","/fonts/GeneralSans-VariableItalic.eot","/fonts/GeneralSans-VariableItalic.ttf","/fonts/GeneralSans-VariableItalic.woff","/fonts/GeneralSans-VariableItalic.woff2","/insights/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"vvDgV1USOILG/0AAnAPhk2C29XCL1+nJzc+r2KzJh7g="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

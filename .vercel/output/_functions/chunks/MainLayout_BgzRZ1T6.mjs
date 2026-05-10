import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate, i as renderScript, r as renderComponent, e as renderSlot, j as renderHead } from './astro/server_CaCGEmsX.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const logo = new Proxy({"src":"/_astro/logo-circle.C1dRudv9.png","width":112,"height":112,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/HeaderMenu/logo-circle.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$CtaButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CtaButton;
  const { label, type, className, pathname, newWindow } = Astro2.props;
  const ghostStyle = "cursor-pointer inline-block py-4 px-6 text-base font-medium uppercase rounded-full bg-transparent hover:bg-background hover:text-primary-foreground transition duration-300 ease-in-out";
  const defaultStyle = `cta-hover cursor-pointer inline-block rounded-full py-4 px-6 text-base font-medium uppercase`;
  const primaryStyle = "bg-secondary text-foreground";
  const secondaryStyle = "bg-background text-primary-foreground";
  const isGhost = type === "ghost";
  function getTypeExtendedStyle(type2) {
    if (type2 === "primary") {
      return primaryStyle;
    } else if (type2 === "secondary") {
      return secondaryStyle;
    } else {
      return ghostStyle;
    }
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(pathname, "href")}${addAttribute(`${isGhost ? ghostStyle : defaultStyle} ${getTypeExtendedStyle(type)} ${className}`, "class")}${addAttribute(newWindow ? "_blank" : "", "target")}> <span class="label"> ${label} </span> </a>`;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/CtaButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$Mobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mobile;
  const { menuItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-name="mobile" class="rounded-4xl z-20 relative bg-tinted" data-astro-cid-4e22glrs> <div class="mx-auto px-4 py-3 flex items-center justify-between transition duration-300 ease-in-out z-10 relative" data-astro-cid-4e22glrs> <a class="inline-block w-10 h-10" href="/" data-astro-cid-4e22glrs> <img class="w-auto"${addAttribute(logo.src, "src")} alt="plyaz logo" data-astro-cid-4e22glrs> </a> <!-- Hamburger Button --> <div id="menu-btn" class="hamburger flex flex-col justify-between w-8 h-6 m-2 cursor-pointer md:hidden" data-astro-cid-4e22glrs> <span class="block border-1 bg-secondary" data-astro-cid-4e22glrs></span> <span class="block border-1 bg-secondary" data-astro-cid-4e22glrs></span> <span class="block border-1 bg-secondary" data-astro-cid-4e22glrs></span> </div> </div> <!-- Mobile Menu --> <div id="menu" class="hidden md:hidden absolute left-0 top-[68px] w-full z-1" data-astro-cid-4e22glrs> <span class="w-full h-20 bg-tinted inline-block absolute z-0 top-[-34px] left-0" data-astro-cid-4e22glrs></span> <div class="flex flex-col text-center gap-10 p-14 rounded-br-4xl rounded-bl-4xl bg-tinted shadow-xl relative z-1" data-astro-cid-4e22glrs> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.pathname, "href")}${addAttribute(item.newWindow ? "_blank" : "_self", "target")} class="text-primary-foreground font-primary font-medium  text-2xl uppercase" data-astro-cid-4e22glrs>${item.label}</a>`)} </div> </div> </header>  ${renderScript($$result, "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/HeaderMenu/mobile.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/HeaderMenu/mobile.astro", void 0);

const menuItems = [{
  type: "ghost",
  label: "platform",
  pathname: "/#how-it-works"
}, {
  type: "ghost",
  label: "insights",
  pathname: "/insights"
}, {
  type: "ghost",
  label: "contact",
  pathname: "mailto:help@plyaz.co.uk"
}, {
  type: "primary",
  label: "Join Us",
  pathname: "https://community.plyaz.co.uk/",
  newWindow: true
}];
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="hidden md:block max-w-[800px] h-[80px] m-auto bg-tertiary/20 rounded-full my-10"> <ul class="font-primary font-medium text-primary-foreground inline-flex flex-row text-base uppercase mx-3 gap-0 md:gap-5 align items-center h-full"> <li class="flex"> <a class="inline-block w-[56px] h-[56px]" href="/"> <img class="w-auto"${addAttribute(logo.src, "src")} alt="plyaz logo"> </a> </li> ${menuItems.map((menuItem) => renderTemplate`<li class="flex"> ${renderComponent($$result, "CtaButton", $$CtaButton, { "type": menuItem.type, "label": menuItem.label, "pathname": menuItem.pathname, "newWindow": menuItem.newWindow })} </li>`)} </ul> </nav> <div class="block md:hidden h-0 mb-20 mt-10"> <div class="fixed w-[calc(100%-40px)] z-50 left-1/2 -translate-x-1/2 max-w-128"> ${renderComponent($$result, "MobileMenu", $$Mobile, { "menuItems": menuItems })} </div> </div>`;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/HeaderMenu/index.astro", void 0);

const logoPng = new Proxy({"src":"/_astro/logo.BgIjVXPl.png","width":5440,"height":1207,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/Footer/logo.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full h-auto m-auto inline-block bg-secondary mt-10 pt-10 pb-10 md:mt-20 md:pt-24 md:pb-24"> <div class="w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] m-auto"> <div> <p class="font-medium text-accent-foreground mb-6">The future of sports. Turn your game into gain.</p> <img${addAttribute(logoPng.src, "src")} alt="Plyaz logo"> </div> <div class="flex flex-row justify-between mt-16"> <ul class="flex flex-col gap-2"> <li class="text-accent-foreground uppercase">Platform</li> <li class="text-white hover:link-foreground uppercase"><a id="/#how-it-works" href="">Solution</a></li> <!-- <li class="text-white hover:link-foreground uppercase"><a href="">Log in</a></li> --> <li class="text-white hover:link-foreground uppercase"><a href="https://community.plyaz.co.uk/" target="_blank">Join us</a></li> </ul> <ul class="flex flex-col gap-2 justify-items-center"> <li class="text-accent-foreground uppercase">Company</li> <li class="text-white hover:link-foreground uppercase"><a href="/news">News</a></li> <li class="text-white hover:link-foreground uppercase"><a href="mailto:help@plyaz.co.uk">Contact</a></li> </ul> <ul class="flex flex-col gap-2 xl:pr-10"> <li class="text-accent-foreground uppercase">Social</li> <li class="text-white hover:link-foreground uppercase"><a href="https://x.com/Plyaz_" target="_blank">X</a></li> <li class="text-white hover:link-foreground uppercase"><a href="https://www.linkedin.com/company/plyaz" target="_blank">LinkedIn</a></li> <li class="text-white hover:link-foreground uppercase"><a href="https://www.instagram.com/plyaz_/" target="_blank">Instagram</a></li> </ul> </div> <div class="mt-16"> <div class="flex flex-col items-center md:flex-row md:justify-between"> <ul class="flex flex-row gap-10"> <li class="text-sm text-accent-foreground hover:text-foreground font-medium"><a href="/legal/cookie-policy" target="_blank">Cookie policy</a></li> <li class="text-sm text-accent-foreground hover:text-foreground font-medium"><a href="/legal/privacy-policy" target="_blank">Privacy policy</a></li> <li class="text-sm text-accent-foreground hover:text-foreground font-medium"><a href="/legal/terms-of-service" target="_blank">Terms of service</a></li> </ul> <p class="text-sm text-accent-foreground font-medium">© 2025 Plyaz. All rights reserved.</p> </div> </div> </div> </footer>`;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/Footer/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { pageTitle } = Astro2.props;
  const siteTitle = pageTitle ? `Plyaz | ${pageTitle}` : "Plyaz";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><!-- Basic favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Fallbacks --><link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32"><link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", '</title><script async defer src="https://app.visitortracking.com/assets/js/tracer.js">\n		<\/script><script type="text/javascript">\n			function init_tracer() {\n				var tracer = new Tracer({\n				websiteId : "cfa7411b-8824-4e12-99ff-219d343b8ffe",\n				async : true,\n				debug : false });\n			}\n 		<\/script>', '</head> <body class="text-primary-foreground font-primary"> <div data-name="wrapper" class="w-full max-w-[1350px] m-auto flex flex-col pr-5 pl-5 md:pr-10 md:pl-10 lg:p-0"> ', " ", " </div> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), siteTitle, renderHead(), renderComponent($$result, "HeaderMenu", $$Index$1, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Index, {}));
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, $$CtaButton as a };

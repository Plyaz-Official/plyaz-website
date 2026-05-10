import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_CaCGEmsX.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Ccn2_dwB.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_BgzRZ1T6.mjs';
import { b as getImage } from '../chunks/_astro_assets_7BKmh2zc.mjs';
import { $ as $$Tag } from '../chunks/Tag_CdMYXWsa.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$2;
  const {
    title,
    author,
    description,
    poster,
    tags
  } = Astro2.props;
  const resizedPosterImage = await getImage({ src: poster, width: 500 });
  return renderTemplate`${maybeRenderHead()}<div data-name="news-card" class="flex flex-col w-full h-auto gap-2"> <div data-name="poster" class="w-full h-auto bg-amber-100 bg-cover aspect-video"${addAttribute({ backgroundImage: `url(${resizedPosterImage.src})` }, "style")}></div> <div data-name="card-contents" class="h-auto flex flex-col gap-4"> <div data-name="news-title" class="flex flex-col"> <div class="flex flex-col gap-1"> <h2 class="text-3xl font-semibold">${title}</h2> <p class="text-lg text-accent-foreground">by ${author}</p> </div> <p class="text-lg">${description}</p> </div> <div data-name="tags" class="flex flex-row gap-2"> ${Array.isArray(tags) && tags.length > 0 && tags.map((tag) => renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "value": tag })}`)} </div> </div> </div>`;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/PostCard/index.astro", void 0);

const $$Astro = createAstro();
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-0 md:p-10 xl:pb-50 pb-24"> <div data-name="blog-header" class="w-full pb-10"> <h2> <span class="font-semibold text-6xl tracking-[-0.1rem] pr-2">Our</span> <span class="font-secondary text-6xl font-semibold italic tracking-[-0.14rem] pr-2">latest</span> <span class="font-semibold text-6xl tracking-[-0.1rem">stories</span> </h2> <p class="text-lg mt-2 text-secondary-foreground">Discover the latest trends, insights, and news in sports investment and athlete empowerment.</p> </div> <div data-name="card-grids" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-4"> ${items.map(
    (post) => renderTemplate`<a${addAttribute(`/insights/${post.id}`, "href")}> ${renderComponent($$result, "PostCard", $$Index$2, { "title": post.data.title, "author": post.data.author, "description": post.data.description, "poster": post.data.poster, "tags": post.data.tags })} </a>`
  )} </div> </div>`;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/PostGrid/index.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Insights";
  const allPosts = await getCollection("insights");
  const publishedPosts = allPosts.filter((post) => {
    if (!post.data.publishDate) return true;
    return new Date(post.data.publishDate) <= /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Insights", $$Index$1, { "items": publishedPosts })} ` })}`;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/insights/index.astro", void 0);

const $$file = "/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/insights/index.astro";
const $$url = "/insights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

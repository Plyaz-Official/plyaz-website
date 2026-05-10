import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CaCGEmsX.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_Ccn2_dwB.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BgzRZ1T6.mjs';
import { $ as $$Tag } from '../../chunks/Tag_CdMYXWsa.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const chevionLeft = new Proxy({"src":"/_astro/chevron-left.K_sy69ir.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/insights/chevron-left.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const allPosts = await getCollection("insights");
  const post = allPosts.find((p) => p.id === slug);
  if (!post) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  if (post.data.publishDate && new Date(post.data.publishDate) > /* @__PURE__ */ new Date()) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-e3mixdtl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-[800px] h-auto flex flex-col items-left m-auto gap-10 mt-6 mb-16 px-5" data-astro-cid-e3mixdtl> <a href="/insights" data-astro-cid-e3mixdtl> <div data-class="return-page" class="flex flex-row gap-2" data-astro-cid-e3mixdtl> <img${addAttribute(chevionLeft.src, "src")} alt="chevion left icon" class="w-5 h-5 pt-1" data-astro-cid-e3mixdtl> <p class="text-base uppercase" data-astro-cid-e3mixdtl>Back</p> </div> </a> <div data-name="title-section" class="flex flex-col gap-5" data-astro-cid-e3mixdtl> <div class="flex flex-col gap-1" data-astro-cid-e3mixdtl> <h1 class="text-4xl xl:text-6xl font-semibold" data-astro-cid-e3mixdtl>${post.data.title}</h1> <p class="text-lg text-accent-foreground" data-astro-cid-e3mixdtl>by ${post.data.author}</p> </div> <div data-name="tags" class="flex flex-row gap-2" data-astro-cid-e3mixdtl> ${post.data.tags.map((value) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "value": value, "data-astro-cid-e3mixdtl": true })}`)} </div> </div> <div data-astro-cid-e3mixdtl> <img${addAttribute(post.data.poster.src, "src")} alt="" class="bg-amber-100 w-full max-w-[800px] h-auto" data-astro-cid-e3mixdtl> </div> </div> <div data-name="news-content" class="w-full max-w-[800px] h-auto flex flex-col items-left m-auto gap-1 px-5 xl:pb-50 pb-24" data-astro-cid-e3mixdtl> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-e3mixdtl": true })} </div> ` })} `;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/insights/[...slug].astro", void 0);

const $$file = "/Users/bhujoy/PlyazBlo/plyaz-website/src/pages/insights/[...slug].astro";
const $$url = "/insights/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

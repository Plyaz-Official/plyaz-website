import { c as createComponent, a as createAstro, m as maybeRenderHead, d as renderTemplate } from './astro/server_CaCGEmsX.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { value } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-xs text-secondary-foreground rounded-full border-accent-foreground border px-3 py-2 uppercase">${value}</div>`;
}, "/Users/bhujoy/PlyazBlo/plyaz-website/src/components/Tag.astro", void 0);

export { $$Tag as $ };

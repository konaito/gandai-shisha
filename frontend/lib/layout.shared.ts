import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "BiPシーシャ",
  },
  links: [
    {
      text: "ホーム",
      url: "/",
    },
    {
      text: "ナレッジ",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Instagram",
      url: "https://www.instagram.com/konaito5/",
      external: true,
    },
    {
      text: "GitHub",
      url: "https://github.com/konaito/gandai-shisha",
      external: true,
    },
  ],
};

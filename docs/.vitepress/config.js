module.exports = {
  // base: "/notes/", // 设置站点根路径 注意：如果有域名则不需要
  title: "夏天夏", // 设置网站标题
  description: "编程是一门手艺活",
  themeConfig: {
    docsDir: "docs",
    editLinks: true,
    nav: [
      { text: "Home", link: "/" }, //主页
      { text: "Blog", link: "/blog/" },
      { text: "Notes", link: "/notes/" },
    ],
    sidebar: [
      {
        text: "博客",
        children: [
          { link: "/blog/", text: "HelloWorld" },
          { link: "blog/占位符", text: "占位符" },
          { link: "blog/移动程序", text: "移动程序" },
        ],
      },
      {
        text: "笔记",
        children: [
          { link: "/notes/", text: "HelloWorld" },
          { link: "notes/lorem", text: "lorem" },
          { link: "notes/试试", text: "试试" },
        ],
      },
    ],
  },
};


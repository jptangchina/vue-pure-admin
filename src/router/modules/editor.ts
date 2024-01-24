import { editor } from "@/router/enums";

export default {
  path: "/editor",
  redirect: "/editor/index",
  meta: {
    icon: "edit",
    title: "编辑器",
    rank: editor
  },
  children: [
    {
      path: "/editor/index",
      name: "Editor",
      component: () => import("@/views/editor/index.vue"),
      meta: {
        title: "编辑器",
        keepAlive: true
      }
    }
  ]
} satisfies RouteConfigsTable;

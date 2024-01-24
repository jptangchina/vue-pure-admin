import { guide } from "@/router/enums";

export default {
  path: "/guide",
  redirect: "/guide/index",
  meta: {
    icon: "guide",
    title: "引导页",
    rank: guide
  },
  children: [
    {
      path: "/guide/index",
      name: "Guide",
      component: () => import("@/views/guide/index.vue"),
      meta: {
        title: "hsguide"
      }
    }
  ]
} satisfies RouteConfigsTable;

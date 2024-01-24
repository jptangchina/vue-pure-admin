import { table } from "@/router/enums";

export default {
  path: "/pure-table",
  redirect: "/pure-table/index",
  meta: {
    icon: "table",
    title: "pure-admin-table",
    rank: table
  },
  children: [
    {
      path: "/pure-table/index",
      name: "PureTable",
      component: () => import("@/views/pure-table/index.vue"),
      meta: {
        title: "基础用法（23个示例）"
      }
    },
    {
      path: "/pure-table/high",
      name: "PureTableHigh",
      component: () => import("@/views/pure-table/high.vue"),
      meta: {
        title: "高级用法（11个示例）"
      }
    }
  ]
} satisfies RouteConfigsTable;

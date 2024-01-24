import { board } from "@/router/enums";
const IFrame = () => import("@/layout/frameView.vue");

export default {
  path: "/board",
  redirect: "/board/index",
  meta: {
    icon: "artboard",
    title: "艺术画板",
    rank: board
  },
  children: [
    {
      path: "/board/index",
      name: "FrameBoard",
      component: IFrame,
      meta: {
        title: "艺术画板",
        frameSrc: "https://songlh.top/paint-board/",
        extraIcon: "IF-pure-iconfont-new svg"
      }
    }
  ]
} satisfies RouteConfigsTable;

export interface SidebarMenuItem {
  text?: string;
  href?: string;
  icon?: string;
  append?: string;
  active?: boolean;

  separator?: boolean;
  subheader?: string;

  children?: SidebarMenuItem[];
}

const sidebar: SidebarMenuItem[] = [
  {
    text: "首页",
    icon: "bi-house",
    href: "welcome.html",
    active: false, // 激活状态
  },
  // 分隔符
  {
    separator: true,
  },
  {
    text: "权限管理",
    icon: "bi-person-lock",
    append: `<span class="badge badge-subtle theme-secondary">6</span>`,
    children: [
      {
        text: "用户列表",
        href: "user-list.html",
        append: `<span class="badge badge-subtle theme-success">2</span>`,
      },
      {
        text: "角色列表",
        href: "role-list.html",
        active: true,
      },
      {
        text: "节点列表",
        href: "node-list.html",
      },
    ],
  },
  {
    text: "示例页面",
    icon: "bi bi-filetype-html",
    append: `<span class="badge badge-subtle theme-primary">New</span>`,
    children: [
      {
        text: "登录页面",
        href: "login.html",
      },
      {
        text: "错误页面",
        href: "error.html",
      },
      {
        text: "锁屏页",
        href: "lockscreen.html",
      },
      {
        text: "时间轴",
        href: "timeline.html",
      },
      {
        text: "简单表格",
        href: "simple-table.html",
      },
      {
        text: "搜索结果",
        href: "search.html",
      },
    ],
  },
  {
    text: "应用",
    icon: "bi bi-grid",
    children: [
      {
        text: "消息中心",
        href: "message.html",
      },
      {
        text: "邮箱",
        href: "email-box.html",
      },
      {
        text: "聊天框",
        href: "chat-box.html",
      },
      {
        text: "日历",
        href: "calendar.html",
      },
    ],
  },
  {
    subheader: "LABELS",
  },
  {
    text: "设置",
    icon: "bi bi-gear",
    children: [
      {
        text: "系统设置",
        children: [
          {
            text: "网站设置",
            href: "sys-website.html",
          },
          {
            text: "邮件服务",
            href: "sys-email.html",
          },
        ],
      },
      {
        text: "我的设置",

        children: [
          {
            text: "个人资料",
            href: "profile.html",
          },
          {
            text: "修改密码",
            href: "reset-password.html",
          },
        ],
      },
    ],
  },

  {
    text: "多级菜单",
    icon: "bi bi-list-nested",
    children: [
      {
        text: "一级菜单",
        children: [
          {
            text: "二级菜单",
            children: [
              {
                text: "三级菜单",
                children: [
                  {
                    text: "四级菜单",
                  },
                  {
                    text: "四级菜单2",
                  },
                ],
              },
              {
                text: "三级菜单",
              },
            ],
          },
          {
            text: "二级菜单",
          },
        ],
      },
      {
        text: "一级菜单",
      },
    ],
  },
];
export default sidebar;

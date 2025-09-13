# L4D资源

Left 4 Dead 2 综合资源网站，提供游戏攻略、服务器信息、MOD推荐等内容。

## 目录结构

```
docs/
├── zh/                     # 中文内容
│   ├── guide/             # 游戏指南
│   ├── maps/              # 地图攻略
│   ├── weapons/           # 武器装备
│   ├── mods/              # MOD推荐
│   └── servers/           # 服务器信息
├── en/                    # 英文内容
│   ├── guide/
│   ├── maps/
│   ├── weapons/
│   ├── mods/
│   └── servers/
└── public/                # 图片等静态文件
    └── images/
```

## 如何更新内容

### 更新服务器信息

**添加新服务器**：
1. 在 `docs/zh/servers/` 创建 `.md` 文件
2. 文件名格式：`server-name.md`
3. 文件内容：
```markdown
---
title: 服务器名称
---

# 服务器名称

## 服务器信息
- 地址: 192.168.1.1:27015
- 类型: 对抗/合作
- 人数: 8人
- 地区: 中国

## 特色
- 自定义地图
- 反作弊系统

## 联系方式
- QQ群: 123456789
```

**更新服务器列表**：
编辑 `docs/zh/servers/index.md`，添加：
```markdown
### [服务器名称](./server-name)
- 地址: 192.168.1.1:27015
- 类型: 对抗模式
```

### 更新文档

**在子目录下添加文档**：

1. **游戏指南** (`docs/zh/guide/`)：
   - 创建文件：`docs/zh/guide/新指南.md`
   - 更新目录页：编辑 `docs/zh/guide/index.md`，添加链接：
   ```markdown
   - [新指南](./新指南) - 指南描述
   ```

2. **地图攻略** (`docs/zh/maps/`)：
   - 创建文件：`docs/zh/maps/地图名.md`
   - 更新目录页：编辑 `docs/zh/maps/index.md`，添加：
   ```markdown
   - [地图名](./地图名) - 地图描述
   ```

3. **MOD推荐** (`docs/zh/mods/`)：
   - 创建文件：`docs/zh/mods/mod分类.md`
   - 更新目录页：编辑 `docs/zh/mods/index.md`

4. **武器装备** (`docs/zh/weapons/`)：
   - 创建文件：`docs/zh/weapons/武器类型.md`
   - 更新目录页：编辑 `docs/zh/weapons/index.md`

**文档格式**：
```markdown
---
title: 页面标题
---

# 标题

内容...
```

**层级链接**：
```markdown
# 在子页面中
[返回上级](./index)
[其他页面](./其他文件名)

# 在目录页中
[子页面](./子文件名)
```

**添加图片**：
1. 图片放在 `docs/public/images/`
2. 引用：`![描述](/images/图片名.jpg)`

### 提交更新

1. 直接编辑 GitHub 上的文件
2. 或者：
```bash
git add .
git commit -m "更新内容"
git push
```

3. GitHub 自动部署到网站

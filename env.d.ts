interface ImportMetaEnv {
  readonly BASE_URL: string;
  // 在这里添加其他环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
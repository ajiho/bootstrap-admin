import fs from "fs-extra";
import { globSync } from "tinyglobby";

import { copyTasks } from "./config.ts";
import { logger } from "./config.ts";

export async function main() {
  for (const task of copyTasks) {
    await fs.remove(task.to);

    await fs.copy(task.from, task.to, {
      dereference: true,
    });

    for (const item of globSync(task.clean, { onlyFiles: false, dot: true })) {
      await fs.remove(item);
    }
  }

  logger.success("三方库已复制成功");
}

main().catch((err) => {
  console.error(err);

  process.exit(1);
});

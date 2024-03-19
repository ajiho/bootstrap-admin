import libPaths from "./lib-paths.mjs";
import fs from 'fs-extra'
import { deleteSync } from 'del'


libPaths.map(async function (path) {

  if( await fs.pathExists(path.form) && ! await fs.pathExists(path.to)){
    //先复制
    fs.copySync(path.form, path.to);
    //后删除
    deleteSync(path.del, { dot: true })
  }

})


/**
 * 负责把node_modules和src/lib下的依赖复制到dist/lib目录
 */

import copyPaths from "../config/copyPaths.mjs";
import fs from 'fs-extra'
import {deleteSync} from 'del'


const copy = done => {
  copyPaths.map(function (path) {
    //先复制
    fs.copySync(path.form, path.to);
    //后删除
    deleteSync(path.del, {dot: true})
  })
  done();
}


export default copy;


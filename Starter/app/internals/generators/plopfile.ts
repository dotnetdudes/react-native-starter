/* eslint-disable @typescript-eslint/no-shadow */
import { sliceGenerator } from './slice';
import { componentGenerator } from './component';
import { NodePlopAPI } from 'node-plop';
import shell from 'shelljs';
interface PrettifyCustomActionData {
  path: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('slice', sliceGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config!.data as PrettifyCustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}

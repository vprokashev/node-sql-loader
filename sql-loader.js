import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

export async function load (url, context, defaultLoad) {
  if (url.endsWith('.sql')) {
    const filepath = fileURLToPath(url);
    const source = await readFile(filepath, 'utf-8');
    return {
      format: 'module',
      source: `export default ${JSON.stringify(source)};`,
      shortCircuit: true
    };
  }
  return defaultLoad(url, context, defaultLoad);
}

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function fixImports(dir) {
  const files = readdirSync(dir, { withFileTypes: true });
  files.forEach(file => {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      fixImports(fullPath);
    } else if (file.isFile() && file.name.endsWith('.js')) {
      let content = readFileSync(fullPath, 'utf8');
      content = content.replace(/from\s+['"]([^'"]+)['"]/g, (match, p1) => {
        if (p1.startsWith('.') && !p1.endsWith('.js')) {
          return `from '${p1}.js'`;
        }
        return match;
      });
      writeFileSync(fullPath, content, 'utf8');
    }
  });
}

fixImports('./build');
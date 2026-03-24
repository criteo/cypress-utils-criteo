import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, rmSync, existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const testAppDir = path.join(repoRoot, 'test-app');
const artifactsDir = path.join(testAppDir, '.artifacts');
const packageJsonPath = path.join(repoRoot, 'package.json');

const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

mkdirSync(artifactsDir, { recursive: true });

for (const fileName of readdirSync(artifactsDir)) {
  if (fileName.endsWith('.tgz')) {
    rmSync(path.join(artifactsDir, fileName));
  }
}

execFileSync('npm', ['pack', '--pack-destination', artifactsDir], {
  cwd: repoRoot,
  stdio: 'inherit',
});

const tarballName = readdirSync(artifactsDir).find((fileName) => fileName.endsWith('.tgz'));

if (!tarballName) {
  throw new Error('Could not find the packed tarball for the test app.');
}

const installedPackageDir = path.join(testAppDir, 'node_modules', packageJson.name);
if (existsSync(installedPackageDir)) {
  rmSync(installedPackageDir, { recursive: true, force: true });
}

execFileSync('npm', ['install', '--no-save', '--ignore-scripts', path.join(artifactsDir, tarballName)], {
  cwd: testAppDir,
  stdio: 'inherit',
});

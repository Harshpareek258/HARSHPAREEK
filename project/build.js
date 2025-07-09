import { execSync } from 'child_process';

console.log('🚀 Starting build process...');

try {
  // Install dependencies if needed
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Run the build
  console.log('🔨 Building project...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Check the "dist" folder for build output');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 
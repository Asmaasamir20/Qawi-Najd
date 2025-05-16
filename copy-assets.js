import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and destination directories
const sourceDir = path.join(__dirname, 'src', 'assets', 'images', 'projects');
const destDir = path.join(__dirname, 'public', 'assets', 'images', 'projects');

console.log(`Source directory: ${sourceDir}`);
console.log(`Destination directory: ${destDir}`);

// Create destination directory if it doesn't exist
try {
  if (!fs.existsSync(path.join(__dirname, 'public', 'assets'))) {
    fs.mkdirSync(path.join(__dirname, 'public', 'assets'), { recursive: true });
    console.log('Created public/assets directory');
  }

  if (!fs.existsSync(path.join(__dirname, 'public', 'assets', 'images'))) {
    fs.mkdirSync(path.join(__dirname, 'public', 'assets', 'images'), { recursive: true });
    console.log('Created public/assets/images directory');
  }

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Created public/assets/images/projects directory');
  }
} catch (error) {
  console.error('Error creating directories:', error);
  process.exit(1);
}

// Copy Exterior design directory
const exteriorDir = path.join(sourceDir, 'Exterior design');
const destExteriorDir = path.join(destDir, 'Exterior design');

if (fs.existsSync(exteriorDir)) {
  if (!fs.existsSync(destExteriorDir)) {
    try {
      fs.mkdirSync(destExteriorDir, { recursive: true });
      console.log(`Created directory: ${destExteriorDir}`);
    } catch (error) {
      console.error(`Error creating directory ${destExteriorDir}:`, error);
    }
  }

  // Copy all files from exterior directory
  try {
    const files = fs.readdirSync(exteriorDir);
    console.log(`Found ${files.length} files in ${exteriorDir}`);

    files.forEach((file) => {
      try {
        const srcFile = path.join(exteriorDir, file);
        const destFile = path.join(destExteriorDir, file);
        fs.copyFileSync(srcFile, destFile);
        console.log(`Copied ${srcFile} to ${destFile}`);
      } catch (error) {
        console.error(`Error copying file ${file}:`, error);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${exteriorDir}:`, error);
  }
} else {
  console.error(`Exterior design directory not found: ${exteriorDir}`);
}

// Copy Interior design directory
const interiorDir = path.join(sourceDir, 'Interior design');
const destInteriorDir = path.join(destDir, 'Interior design');

if (fs.existsSync(interiorDir)) {
  if (!fs.existsSync(destInteriorDir)) {
    try {
      fs.mkdirSync(destInteriorDir, { recursive: true });
      console.log(`Created directory: ${destInteriorDir}`);
    } catch (error) {
      console.error(`Error creating directory ${destInteriorDir}:`, error);
    }
  }

  // Copy all files from interior directory
  try {
    const files = fs.readdirSync(interiorDir);
    console.log(`Found ${files.length} files in ${interiorDir}`);

    files.forEach((file) => {
      try {
        const srcFile = path.join(interiorDir, file);
        const destFile = path.join(destInteriorDir, file);
        fs.copyFileSync(srcFile, destFile);
        console.log(`Copied ${srcFile} to ${destFile}`);
      } catch (error) {
        console.error(`Error copying file ${file}:`, error);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${interiorDir}:`, error);
  }
} else {
  console.error(`Interior design directory not found: ${interiorDir}`);
}

// Create a placeholder image if it doesn't exist
const placeholderDir = path.join(__dirname, 'public', 'images');
const placeholderFile = path.join(placeholderDir, 'placeholder.png');

try {
  if (!fs.existsSync(placeholderDir)) {
    fs.mkdirSync(placeholderDir, { recursive: true });
    console.log(`Created directory: ${placeholderDir}`);
  }

  // Check if placeholder image exists, if not create a minimal one
  if (!fs.existsSync(placeholderFile)) {
    // For this example we'll just copy an existing image as the placeholder
    // In a real scenario, you might want to generate one or include one in your repo
    const firstExteriorImage = path.join(exteriorDir, '1.webp');
    if (fs.existsSync(firstExteriorImage)) {
      fs.copyFileSync(firstExteriorImage, placeholderFile);
      console.log(`Created placeholder image at ${placeholderFile}`);
    } else {
      console.error('Could not find an image to use as placeholder');
    }
  }
} catch (error) {
  console.error('Error creating placeholder image:', error);
}

console.log('Asset copying complete! Images are now available in public/assets/images/projects');

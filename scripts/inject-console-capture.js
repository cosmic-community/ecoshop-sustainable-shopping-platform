const fs = require('fs');
const path = require('path');

// Read the console capture script
const scriptContent = fs.readFileSync(
  path.join(__dirname, '../public/dashboard-console-capture.js'),
  'utf8'
);

// Find all HTML files in .next/server/app
function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Inject script into HTML files
function injectScript() {
  const buildDir = path.join(__dirname, '../.next/server/app');
  
  if (!fs.existsSync(buildDir)) {
    console.log('Build directory not found. Run build first.');
    return;
  }
  
  const htmlFiles = findHtmlFiles(buildDir);
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if script is already injected
    if (content.includes('dashboard-console-capture')) {
      return;
    }
    
    // Inject script before </head> or at the beginning of <body>
    if (content.includes('</head>')) {
      content = content.replace(
        '</head>',
        `<script>${scriptContent}</script></head>`
      );
    } else if (content.includes('<body>')) {
      content = content.replace(
        '<body>',
        `<body><script>${scriptContent}</script>`
      );
    }
    
    fs.writeFileSync(file, content);
    console.log(`Injected console capture into ${file}`);
  });
}

injectScript();
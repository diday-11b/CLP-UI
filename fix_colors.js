const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Color mapping from hardcoded to Tailwind classes or arbitrary vars
const colorReplacements = [
  // Text colors
  { regex: /text-\[\#0F172A\]/g, replacement: 'text-[var(--foreground)]' },
  { regex: /text-\[\#1E293B\]/g, replacement: 'text-[var(--foreground)]' },
  { regex: /text-\[\#334155\]/g, replacement: 'text-[var(--muted-foreground)]' },
  { regex: /text-\[\#475569\]/g, replacement: 'text-[var(--muted-foreground)]' },
  { regex: /text-\[\#64748B\]/g, replacement: 'text-[var(--muted-foreground)]' },
  { regex: /text-\[\#94A3B8\]/g, replacement: 'text-[var(--muted-foreground)]' },
  { regex: /text-\[\#3B82F6\]/g, replacement: 'text-[var(--primary)]' },
  { regex: /text-\[\#2563EB\]/g, replacement: 'text-[var(--primary)]' },
  { regex: /text-\[\#1D4ED8\]/g, replacement: 'text-[var(--primary-hover)]' },
  { regex: /text-\[\#10B981\]/g, replacement: 'text-[var(--success)]' },
  { regex: /text-\[\#EF4444\]/g, replacement: 'text-[var(--destructive)]' },
  { regex: /text-\[\#8B5CF6\]/g, replacement: 'text-[var(--primary)]' },
  
  // Background colors
  { regex: /bg-\[\#0F172A\]/g, replacement: 'bg-[var(--secondary)]' },
  { regex: /bg-\[\#1E293B\]/g, replacement: 'bg-[var(--secondary)]' },
  { regex: /bg-\[\#334155\]/g, replacement: 'bg-[var(--muted-foreground)]' },
  { regex: /bg-\[\#F1F5F9\]/g, replacement: 'bg-[var(--muted)]' },
  { regex: /bg-\[\#F8FAFC\]/g, replacement: 'bg-[var(--muted)]' },
  { regex: /bg-\[\#3B82F6\]/g, replacement: 'bg-[var(--primary)]' },
  { regex: /bg-\[\#2563EB\]/g, replacement: 'bg-[var(--primary)]' },
  { regex: /bg-\[\#1D4ED8\]/g, replacement: 'bg-[var(--primary-hover)]' },
  { regex: /hover:bg-\[\#1D4ED8\]/g, replacement: 'hover:bg-[var(--primary-hover)]' },
  { regex: /hover:bg-\[\#2563EB\]/g, replacement: 'hover:bg-[var(--primary)]' },
  { regex: /hover:bg-\[\#F8FAFC\]/g, replacement: 'hover:bg-[var(--muted)]' },
  { regex: /bg-\[\#10B981\]/g, replacement: 'bg-[var(--success)]' },
  { regex: /bg-\[\#EF4444\]/g, replacement: 'bg-[var(--destructive)]' },
  { regex: /bg-\[\#8B5CF6\]/g, replacement: 'bg-[var(--primary)]' },
  { regex: /bg-\[\#EFF6FF\]/g, replacement: 'bg-[var(--accent)]' },
  { regex: /bg-\[\#DBEAFE\]/g, replacement: 'bg-[var(--accent)]' },

  // Border colors
  { regex: /border-\[\#F1F5F9\]/g, replacement: 'border-[var(--border)]' },
  { regex: /border-\[\#F8FAFC\]/g, replacement: 'border-[var(--border)]' },
  { regex: /border-\[\#E2E8F0\]/g, replacement: 'border-[var(--border)]' },
  { regex: /border-\[\#334155\]/g, replacement: 'border-[var(--border)]' },
  { regex: /border-\[\#DBEAFE\]/g, replacement: 'border-[var(--border)]' },
  
  // Gradients
  { regex: /from-\[\#3B82F6\]/g, replacement: 'from-[var(--primary)]' },
  { regex: /to-\[\#1D4ED8\]/g, replacement: 'to-[var(--primary-hover)]' },
  { regex: /from-\[\#60A5FA\]\/5/g, replacement: 'from-[var(--primary)]/5' },
  { regex: /from-\[\#3B82F6\]\/10/g, replacement: 'from-[var(--primary)]/10' },
  { regex: /to-\[\#60A5FA\]\/5/g, replacement: 'to-[var(--primary)]/5' },
  
  { regex: /from-\[\#0F172A\]/g, replacement: 'from-[var(--secondary)]' },
  { regex: /to-\[\#1E3A5F\]/g, replacement: 'to-[var(--secondary-light)]' },

  // Recharts hex codes (string literals)
  { regex: /"#0F172A"/g, replacement: '"var(--foreground)"' },
  { regex: /"#64748B"/g, replacement: '"var(--muted-foreground)"' },
  { regex: /"#94A3B8"/g, replacement: '"var(--muted-foreground)"' },
  { regex: /"#3B82F6"/g, replacement: '"var(--primary)"' },
  { regex: /"#2563EB"/g, replacement: '"var(--primary)"' },
  { regex: /"#1D4ED8"/g, replacement: '"var(--primary-hover)"' },
  { regex: /"#10B981"/g, replacement: '"var(--success)"' },
  { regex: /"#F1F5F9"/g, replacement: '"var(--border)"' },
  { regex: /"#F8FAFC"/g, replacement: '"var(--muted)"' },
  { regex: /"#E2E8F0"/g, replacement: '"var(--border)"' },
  { regex: /"#8B5CF6"/g, replacement: '"var(--primary)"' }, // using primary for purple
  { regex: /"#EF4444"/g, replacement: '"var(--destructive)"' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replacement } of colorReplacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated colors in ${fullPath.replace(__dirname, '')}`);
      }
    }
  }
}

processDirectory(srcDir);

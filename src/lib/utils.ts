import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCloudinaryUrl(path: string): string {
  if (!path) return '';
  
  // If it's already an external URL, return it as is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  const cloudName = 'dru3ldofi';
  const prefix = `https://res.cloudinary.com/${cloudName}`;

  // Handle the Voice Tour MP3
  if (path === '/Voice-Tour.mp3') {
    return `${prefix}/video/upload/portfolio/Voice-Tour.mp3`;
  }

  // Handle raw documents (like resume docx)
  if (path.endsWith('.docx')) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${prefix}/raw/upload/portfolio/${cleanPath}`;
  }

  // Handle standard images (under /images/ or images/)
  if (path.startsWith('/images/') || path.startsWith('images/')) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${prefix}/image/upload/portfolio/${cleanPath}`;
  }

  return path;
}


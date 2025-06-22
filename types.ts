export interface FrameCustomization {
  material: 'classic' | 'frameless' | 'canvas';
  frameColor: 'black' | 'white' | 'oak';
  size: string;
  effect: 'original' | 'silver' | 'noir' | 'vivid' | 'dramatic';
  border: boolean;
  borderColor: string;
  borderWidth: number;
}

export interface ImageTransform {
  scale: number;
  rotation: number;
  x: number;
  y: number;
}

export interface UploadedImage {
  file: File;
  url: string;
  transform: ImageTransform;
}

export interface EffectOption {
  id: 'original' | 'silver' | 'noir' | 'vivid' | 'dramatic';
  name: string;
  filter: string;
}

export interface FrameColorOption {
  id: 'black' | 'white' | 'oak';
  name: string;
  color: string;
  description: string;
}

export interface MaterialOption {
  id: 'classic' | 'frameless' | 'canvas';
  name: string;
  image: string;
  description: string;
}

export interface SizeOption {
  id: string;
  name: string;
  dimensions: string;
  aspectRatio: number;
  price?: number;
}

export interface BorderOption {
  id: string;
  name: string;
  color: string;
  width: number;
  preview: string;
} 
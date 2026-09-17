import { useReveal } from '@/hooks/useReveal';

interface ImageBlockProps {
  src: string;
  alt: string;
  className?: string;
  ratio?: 'video' | 'square' | 'portrait' | 'wide';
  priority?: boolean;
}

export default function ImageBlock({
  src,
  alt,
  className = '',
  ratio = 'video',
  priority = false,
}: ImageBlockProps) {
  const { ref, visible } = useReveal();

  const ratioClass = {
    video: 'aspect-[16/10]',
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    wide: 'aspect-[21/9]',
  }[ratio];

  return (
    <div ref={ref} className={`overflow-hidden ${ratioClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={`w-full h-full object-cover transition-all duration-[1.2s] ease-snap ${
          visible ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
      />
    </div>
  );
}

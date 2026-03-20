import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white' | 'tab' | 'tab-white' | 'tab-golden';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  showTriangle?: boolean;
  triangleColor?: string;
  align?: 'left' | 'right';
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
  showTriangle = false,
  triangleColor = '#d0302b',
  align = 'left'
}: ButtonProps) {
  // Base styles
  const isTab = variant === 'tab' || variant === 'tab-white' || variant === 'tab-golden';
  const alignmentClass = align === 'right' ? 'justify-end pr-10 pl-0' : 'justify-start pl-10 pr-0';
  const colorClass = (variant === 'tab-golden' || variant === 'secondary') ? 'text-black' : '';
  const baseStyles = `${isTab ? `flex ${alignmentClass} items-center rounded-none w-full` : 'inline-block rounded-xl text-center'} ${colorClass} font-bold transition-all duration-300 relative group`;

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  // Hover scale and shadow
  const hoverStyles = (!isTab && variant !== 'outline' && variant !== 'outline-white') ? 'hover:scale-[1.05] hover:shadow-xl' : '';

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  // For outline variants, add border and classes
  let outlineClasses = '';
  if (variant === 'outline') {
    outlineClasses = 'border-2 border-[#d0302b] hover:bg-[#d0302b] shadow-none hover:shadow-xl';
  } else if (variant === 'outline-white') {
    outlineClasses = 'border-2 border-white/30 hover:bg-white/10 shadow-none hover:shadow-xl text-white';
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${hoverStyles} ${outlineClasses} ${disabledStyles} ${className}`;

  // Inline styles with proper color handling
  const getInlineStyles = () => {
    const baseStyle = {
      fontFamily: '"Lato", sans-serif',
    };

    if (variant === 'primary') {
      return {
        ...baseStyle,
        color: '#D6B25E',
        background: 'linear-gradient(135deg, #d0302b 0%, #8d211d 100%)',
        boxShadow: '0 4px 12px rgba(208,48,43,0.2)',
      };
    } else if (variant === 'secondary') {
      return {
        ...baseStyle,
        color: '#000000',
        background: 'linear-gradient(135deg, #D6B25E 0%, #C5A04D 100%)',
        boxShadow: '0 4px 12px rgba(214,178,94,0.2)',
      };
    } else if (variant === 'white') {
      return {
        ...baseStyle,
        background: '#FFFFFF',
        color: '#d0302b',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }
    } else if (variant === 'outline') {
      return {
        fontFamily: '"Lato", sans-serif',
        color: '#d0302b',
        background: 'transparent',
      };
    } else if (variant === 'outline-white') {
      return {
        fontFamily: '"Lato", sans-serif',
        color: '#FFFFFF',
        background: 'transparent'
      }
    } else if (variant === 'tab') {
      return {
        fontFamily: '"Lato", sans-serif',
        color: '#D6B25E',
        background: '#d0302b',
        boxShadow: 'none',
        width: '100%',
      }
    } else if (variant === 'tab-white') {
      return {
        fontFamily: '"Lato", sans-serif',
        color: '#d0302b',
        background: '#FFFFFF',
        boxShadow: 'none',
        width: '100%',
      }
    } else if (variant === 'tab-golden') {
      return {
        fontFamily: '"Lato", sans-serif',
        color: '#000000',
        background: '#D6B25E',
        boxShadow: 'none',
        width: '100%',
      }
    }
    return {};
  };

  const Triangle = () => (
    showTriangle ? (
      <div 
        className={`absolute -top-2 ${align === 'right' ? 'right-12' : 'left-12'} w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px]`} 
        style={{ borderBottomColor: triangleColor }}
      />
    ) : null
  );

  const content = (
    <>
      <Triangle />
      {children}
    </>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');

    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedStyles}
          style={getInlineStyles()}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedStyles}
        style={getInlineStyles()}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      style={getInlineStyles()}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default function Arrow({ left, right, className, fill}) {
    const pathData = right
      ? "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
      : left
      ? "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
      : "";
  
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className={className}>
        {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com */}
        <style>{`path { fill: ${fill}; }`}</style>
        <path d={pathData} />
      </svg>
    );
  }
  
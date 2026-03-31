function ScrollReveal({ children, delay = 0, className = "" }) {
  return (
    <div className={className} data-delay={delay}>
      {children}
    </div>
  );
}

export default ScrollReveal;

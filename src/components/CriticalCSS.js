import React from 'react';

const CriticalCSS = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS for above-the-fold content */
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{font-family:"Noto Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.6;color:#333;background-color:#fff;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
        .container{max-width:1200px;margin:0 auto;padding:0 20px}
        .hero-section{position:relative;min-height:500px;display:flex;align-items:center;background:linear-gradient(135deg,#0668a5,#07b3e1)}
        .hero-content{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center;color:#fff}
        .hero-text h1{font-size:clamp(2rem,5vw,3.5rem);font-weight:700;line-height:1.2;margin-bottom:1rem}
        .hero-subtitle{font-size:1.2rem;margin-bottom:2rem;opacity:0.9}
        .btn{display:inline-block;padding:12px 24px;border:none;border-radius:5px;font-size:1rem;font-weight:600;text-align:center;cursor:pointer;transition:all 0.3s ease;text-decoration:none}
        .btn-primary{background:linear-gradient(135deg,#0668a5,#07b3e1);color:#fff}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 2px 10px rgba(0,0,0,0.1);color:#fff}
        .loading-spinner{display:inline-block;width:20px;height:20px;border:3px solid #f3f3f3;border-top:3px solid #0668a5;border-radius:50%;animation:spin 1s linear infinite}
        @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        .main-nav{background:#fff;box-shadow:0 2px 10px rgba(0,0,0,0.1);position:sticky;top:0;z-index:1000}
        .nav-content{display:flex;justify-content:space-between;align-items:center;padding:1rem 0}
        .logo img{max-height:50px;width:auto}
        .nav-links{display:flex;list-style:none;gap:2rem;align-items:center}
        .nav-links a{color:#333;text-decoration:none;font-weight:500;transition:color 0.3s ease}
        .nav-links a:hover{color:#0668a5}
        .cta-button{background:linear-gradient(135deg,#0668a5,#07b3e1);color:#fff;padding:0.5rem 1rem;border-radius:5px}
        .cta-button:hover{color:#fff;transform:translateY(-1px)}
        @media (max-width:768px){.hero-content{grid-template-columns:1fr;text-align:center}.nav-links{display:none}}
        img{max-width:100%;height:auto}
        .loaded{opacity:1;filter:none;transform:scale(1)}
        .loading{opacity:0.7;filter:blur(1px);transform:scale(1.02)}
      `
    }} />
  );
};

export default CriticalCSS; 
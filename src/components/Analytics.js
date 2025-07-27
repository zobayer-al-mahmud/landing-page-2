import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Analytics = () => {
  useEffect(() => {
    // Load analytics after page load to improve initial performance
    const loadAnalytics = () => {
      // Google Tag Manager - Load immediately but asynchronously
      const loadGTM = () => {
        try {
          (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l !== 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-KX4B47V9');
        } catch (error) {
          console.warn('GTM loading failed:', error);
        }
      };
      loadGTM();

      // Google Analytics - Load after user interaction or 5 seconds
      setTimeout(() => {
        try {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-2XS9PQ9GNP');
        } catch (error) {
          console.warn('GA loading failed:', error);
        }
      }, 5000);

      // Facebook Pixel - Load after user interaction or 10 seconds
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const loadFacebookPixel = () => {
            try {
              (function(f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function() {
                  n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
              })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
              
              if (window.fbq) {
                window.fbq('init', '1442453326105956');
                window.fbq('track', 'PageView');
              }
            } catch (error) {
              console.warn('Facebook Pixel loading failed:', error);
            }
          };
          loadFacebookPixel();
        }
      }, 10000);

      // TikTok Pixel - Load after user interaction or 15 seconds
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const loadTikTokPixel = () => {
            try {
              (function(w, d, t) {
                w.TiktokAnalyticsObject = t;
                var ttq = w[t] = w[t] || [];
                ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
                ttq.setAndDefer = function(t, e) {
                  t[e] = function() {
                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                  }
                };
                for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
                ttq.instance = function(t) {
                  for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
                  return e
                };
                ttq.load = function(e, n) {
                  var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                  ttq._i = ttq._i || {};
                  ttq._i[e] = [];
                  ttq._i[e]._u = i;
                  ttq._t = ttq._t || {};
                  ttq._t[e] = +(new Date());
                  ttq._o = ttq._o || {};
                  ttq._o[e] = n || {};
                  var o = document.createElement("script");
                  o.type = "text/javascript";
                  o.async = !0;
                  o.src = i + "?sdkid=" + e + "&lib=" + t;
                  var a = document.getElementsByTagName("script")[0];
                  a.parentNode.insertBefore(o, a)
                };
                ttq.load('C5B8GKS6J7TSRVQBU08G');
                ttq.page();
              })(window, document, 'ttq');
            } catch (error) {
              console.warn('TikTok Pixel loading failed:', error);
            }
          };
          loadTikTokPixel();
        }
      }, 15000);

      // Snap Pixel - Load after user interaction or 20 seconds
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const loadSnapPixel = () => {
            try {
              (function(e, t, n) {
                if (e.snaptr) return;
                var a = e.snaptr = function() {
                  a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                };
                a.queue = [];
                var s = 'script';
                var r = t.createElement(s);
                r.async = !0;
                r.src = n;
                var u = t.getElementsByTagName(s)[0];
                u.parentNode.insertBefore(r, u);
              })(window, document, 'https://sc-static.net/scevent.min.js');
              
              if (window.snaptr) {
                window.snaptr('init', '067c646b-bde0-42d8-8d5b-2e9b780b01ab', {
                  'user_email': '__INSERT_USER_EMAIL__'
                });
                window.snaptr('track', 'PAGE_VIEW');
              }
            } catch (error) {
              console.warn('Snap Pixel loading failed:', error);
            }
          };
          loadSnapPixel();
        }
      }, 20000);
    };

    // Load analytics after a delay to prioritize page rendering
    const timer = setTimeout(loadAnalytics, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Helmet>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KX4B47V9"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>

      {/* Facebook Pixel (noscript) */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1442453326105956&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </Helmet>
  );
};

export default Analytics; 
"use client";

import Script from "next/script";
import styles from "./apidoc.module.css";

export default function ApiDocsPage() {
  return (
    <div className={styles.container}>
      <div id="swagger-ui" className={styles.swaggerRoot} />
      {/* Inject Swagger UI CSS via CDN */}
      <Script id="swagger-css" strategy="afterInteractive">
        {`
          (function(){
            var l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css';
            document.head.appendChild(l);
          })();
        `}
      </Script>
      {/* Load Swagger UI bundle */}
      <Script
        src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js"
        strategy="afterInteractive"
      />
      {/* Initialize Swagger UI and point to our JSON route */}
      <Script id="swagger-init" strategy="afterInteractive">
        {`
          window.addEventListener('load', function () {
            // @ts-ignore
            const ui = SwaggerUIBundle({
              url: '/api/docs',
              dom_id: '#swagger-ui',
              presets: [SwaggerUIBundle.presets.apis],
              layout: 'BaseLayout',
              deepLinking: true,
            });
            // @ts-ignore
            window.ui = ui;
          });
        `}
      </Script>
    </div>
  );
}

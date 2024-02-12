import { createProxyMiddleware } from 'http-proxy-middleware';

export default function SetupProxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.cvimport.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api' // Esto reescribe '/api' a '/api' en la solicitud al servidor remoto
      }
    })
  );
}

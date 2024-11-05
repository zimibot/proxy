const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Proxy configuration
app.use('/api', createProxyMiddleware({
    target: 'https://araymahub.com/api', // Replace with the target server
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove '/api' prefix when forwarding to the target server
    },
}));

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});

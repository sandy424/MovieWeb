import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defindConfig({
    plugins: [react()],
    base: '/InteriorForm',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom']
                }
            }
        }
    }
});
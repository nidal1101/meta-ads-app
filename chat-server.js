const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Enable CORS for local development
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Chat server running' });
});

// Proxy endpoint for Anthropic API
app.post('/api/chat', async (req, res) => {
    try {
        const { messages, system, apiKey } = req.body;

        if (!apiKey && !process.env.ANTHROPIC_API_KEY) {
            return res.status(400).json({
                error: { message: 'API key is required. Set ANTHROPIC_API_KEY in .env or pass via request.' }
            });
        }

        const key = apiKey || process.env.ANTHROPIC_API_KEY;

        console.log('Processing chat request with', messages.length, 'messages');

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': key,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 2048,
                system: system,
                messages: messages
            })
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Anthropic API error:', error);
            return res.status(response.status).json({ error });
        }

        const data = await response.json();
        console.log('Chat response received');
        res.json(data);

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({
            error: { message: error.message || 'Internal server error' }
        });
    }
});

app.listen(PORT, () => {
    console.log(`\n🚀 Chat server running on http://localhost:${PORT}`);
    console.log(`📡 Ready to proxy requests to Anthropic API\n`);

    if (!process.env.ANTHROPIC_API_KEY) {
        console.log('⚠️  Warning: ANTHROPIC_API_KEY not found in .env file');
        console.log('   You can either:');
        console.log('   1. Add ANTHROPIC_API_KEY=sk-ant-... to .env file (recommended)');
        console.log('   2. Enter API key in the chat UI\n');
    } else {
        console.log('✅ ANTHROPIC_API_KEY loaded from .env\n');
    }
});

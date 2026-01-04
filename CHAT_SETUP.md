# AI Chat Assistant Setup Guide

The Meta Ads Analyzer now includes an AI Strategy Assistant powered by Claude! Follow these steps to get it running.

## Why a Backend Server?

The Anthropic API requires server-side calls for security (CORS restrictions). The chat server acts as a secure proxy between your browser and Anthropic's API.

## Quick Start

### 1. Install Dependencies

```bash
cd /home/user/meta-ads-app
npm install
```

This installs:
- `express` - Web server
- `cors` - Enable cross-origin requests
- `node-fetch` - Make API calls to Anthropic
- `dotenv` - Load environment variables

### 2. Set Up Your API Key

**Option A: Environment Variable (Recommended)**

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your API key:

```
ANTHROPIC_API_KEY=sk-ant-your-actual-api-key-here
```

Get your API key from: https://console.anthropic.com/settings/keys

**Option B: Enter in UI**

You can also enter the API key directly in the chat interface (less secure, stored in browser localStorage).

### 3. Start the Chat Server

```bash
npm start
```

You should see:
```
🚀 Chat server running on http://localhost:3001
📡 Ready to proxy requests to Anthropic API
✅ ANTHROPIC_API_KEY loaded from .env
```

### 4. Open the Dashboard

Open `meta-ads-analyzer.html` in your browser and click the purple chat button in the bottom-right corner.

## Usage

Once set up, you can ask the AI:

- **Performance Analysis**: "What's my best performing adset?"
- **Strategic Advice**: "Which adsets should I scale?"
- **Creative Insights**: "What hooks are working best?"
- **Trend Analysis**: "Why is my ROAS dropping?"
- **Author Comparison**: "How is Nidal performing vs Gary?"
- **Testing Ideas**: "What should I test next?"

The AI has full context of:
- All your ads data (spend, ROAS, CTR, etc.)
- Performance by author
- Your documented learnings
- Top/bottom performers
- Active vs paused adsets

## Troubleshooting

**Error: "Failed to fetch"**
- Make sure the chat server is running (`npm start`)
- Check that it's running on port 3001
- Verify no firewall is blocking localhost:3001

**Error: "API key is required"**
- Check your `.env` file has `ANTHROPIC_API_KEY=sk-ant-...`
- Or enter the API key in the chat UI

**Server won't start**
- Run `npm install` first
- Check if port 3001 is already in use
- Check for errors in terminal output

## Files

- `chat-server.js` - Express server that proxies API calls
- `package.json` - Node.js dependencies
- `.env` - Your API key (create from .env.example)
- `meta-ads-analyzer.html` - Main dashboard with chat UI

## Security Notes

- API keys in `.env` are not committed to git
- Never share your `.env` file
- The chat server only runs locally on your machine
- Conversation history stays in your browser (not saved to disk)

## Development

To auto-reload the server on changes:

```bash
npm run dev
```

(This uses nodemon for hot-reloading)

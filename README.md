# Meta Ads Analyzer

A comprehensive tool for analyzing Meta (Facebook) advertising campaigns with AI-powered insights matching your existing Excel tracking system.

## Features

### Data Display
- **All Required Fields**: Creative ID, Author, Landing Page, Decision, Hypothesis, Format, Avatar, Angle/Hook, CTR, CPC, Spend, ROAS, Frequency, Purchases, and Learnings
- **Sortable Columns**: Click any column header to sort data
- **Color-Coded Decisions**:
  - 🟢 Green = Winner (ROAS ≥ 3.0, CTR ≥ 1.5%)
  - 🔵 Blue = Launched (ROAS ≥ 1.5 or CTR ≥ 1.0%)
  - 🔴 Red = Killed (Below thresholds)

### Filtering
Filter ads by:
- Decision status (Winner/Launched/Killed)
- Author
- Avatar
- Format (Video/Image)

### AI-Powered Analysis
Automatically identifies:
- **Winning Avatar + Angle Combinations**: Best performing audience-message combinations
- **High-ROAS Hypotheses**: Which strategic hypotheses correlate with success
- **Format Performance**: Video vs Image effectiveness
- **Top Authors**: Creator performance rankings
- **Learnings Extraction**: Key insights from winning campaigns

### Data Management
- **Meta API Integration**: Fetch live campaign data
- **Sample Data**: Test with pre-loaded examples
- **Editable Learnings**: Add notes directly in the table
- **Excel Export**: Download data matching your Excel format

## Setup Instructions

### 1. Get Meta API Credentials

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create an app or use an existing one
3. Get your **Access Token** from the Graph API Explorer
4. Find your **Ad Account ID** (format: `act_123456789`)

### 2. Configure the Analyzer

1. Open `meta-ads-analyzer.html` in your web browser
2. Click **"⚙️ API Config"**
3. Enter your:
   - Access Token
   - Ad Account ID
   - Date Range (default: 30 days)
4. Click **"Save Config"**

### 3. Load Your Ads

**Option A: Live Data**
- Click **"🔄 Fetch Ads"** to load real campaign data from Meta

**Option B: Sample Data**
- Click **"Load Sample Data"** to explore with example data

## Usage Guide

### Viewing & Sorting
- Click any column header to sort
- Click again to reverse sort direction
- Metrics are color-coded: green = good, red = poor

### Filtering Data
1. Use the dropdown filters at the top
2. Select criteria (Decision, Author, Avatar, Format)
3. Click **"Clear Filters"** to reset

### AI Analysis
1. Click **"🤖 AI Analysis"** button
2. Review insights on:
   - Top-performing combinations
   - Winning hypotheses
   - Format effectiveness
   - Author performance
   - Key learnings from winners

### Adding Learnings
- Type directly into the "Learnings" text area for any ad
- Changes are saved automatically

### Exporting Data
- Click **"📊 Export Excel"**
- Downloads CSV file matching your Excel format
- Filename: `meta-ads-export-YYYY-MM-DD.csv`

## Ad Naming Convention

For best results with automatic data extraction, name your Meta ads using this format:

```
[Author] | Hyp: Your Hypothesis | Avatar: Target Audience | Angle: Hook/Message
```

**Example:**
```
[John Smith] | Hyp: Pain point messaging resonates | Avatar: Fitness Enthusiast | Angle: Transformation Story
```

This allows the analyzer to automatically populate Author, Hypothesis, Avatar, and Angle fields.

## Performance Metrics

### Automatic Decision Classification
- **Winner**: ROAS ≥ 3.0 AND CTR ≥ 1.5%
- **Launched**: ROAS ≥ 1.5 OR CTR ≥ 1.0%
- **Killed**: Below launch thresholds

### Key Metrics Tracked
- **CTR (Click-Through Rate)**: Percentage of people who clicked
- **CPC (Cost Per Click)**: Average cost for each click
- **Spend**: Total amount spent on the ad
- **ROAS (Return on Ad Spend)**: Revenue generated per dollar spent
- **Frequency**: Average times each person saw the ad
- **Purchases**: Total purchase conversions

## Technical Details

- **Single HTML File**: No installation required
- **Runs Locally**: All processing happens in your browser
- **Secure**: API credentials stored in browser's localStorage
- **Mobile Responsive**: Works on tablets and phones
- **No Backend Required**: Pure client-side JavaScript

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Security Notes

- Your Access Token is stored locally in your browser only
- Never share your Access Token publicly
- Use tokens with appropriate permissions (read-only recommended)
- Clear stored credentials with browser developer tools if needed

## Troubleshooting

### "Error fetching ads"
- Verify your Access Token is valid and not expired
- Check your Ad Account ID format (should start with `act_`)
- Ensure you have permissions to read ads from the account
- Check browser console for detailed error messages

### No data showing
- Confirm you have ads running in the selected date range
- Try increasing the date range in API Config
- Use "Load Sample Data" to verify the tool is working

### Export not working
- Check browser's download permissions
- Try a different browser
- Ensure pop-ups are not blocked

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify Meta API credentials are correct
3. Test with sample data to isolate API issues

## Future Enhancements

Potential additions:
- Multi-account support
- Historical trend analysis
- A/B test comparison
- Automated recommendations
- Integration with other ad platforms

---

**Built for professional Meta advertising teams to track, analyze, and optimize campaigns efficiently.**

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

#### Get Access Token:
1. Go to [Meta Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app (or create a new app at developers.facebook.com)
3. Click **"Generate Access Token"**
4. In permissions, make sure to grant **"ads_read"** permission
5. Copy the generated access token (starts with "EAAA...")
6. **Note**: Tokens expire! For testing use short-lived tokens, for production use long-lived tokens

#### CRITICAL: Connect App to Ad Account
**If you're using a custom app, you MUST connect it to your ad account:**

1. Go to [Business Settings - Ad Accounts](https://business.facebook.com/settings/ad-accounts)
2. Click on your ad account
3. Scroll down to **"Connected Assets"** or **"Assigned Assets"**
4. Click **"Add Assets"** → **"Apps"**
5. Select your app (e.g., "CreativesPRO") and add it
6. Grant the app access to the ad account

**Without this step, you'll get "does not exist, cannot be loaded due to missing permissions" even with correct token and permissions!**

#### Find Ad Account ID:
1. Go to [Meta Business Settings](https://business.facebook.com/settings/ad-accounts)
2. Click on your ad account
3. Your Account ID is shown at the top (format: `123456789` or `act_123456789`)
4. You can enter it with or without the `act_` prefix

### 2. Configure the Analyzer

1. Open `meta-ads-analyzer.html` in your web browser
2. Click **"⚙️ API Config"**
3. Enter your:
   - Access Token (with ads_read permission)
   - Ad Account ID (with or without `act_` prefix)
   - Date Range (default: 30 days)
4. Click **"Test Connection"** to verify your credentials work
5. If test succeeds, click **"Save Config"**

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

### Common Issues

#### "Object does not exist, cannot be loaded due to missing permissions"

This is the most common error. Here's how to fix it:

1. **MOST COMMON: Connect App to Ad Account** ⚠️
   - Go to business.facebook.com/settings/ad-accounts
   - Click on your ad account
   - Scroll to **"Connected Assets"** section
   - Click **"Add Assets"** → **"Apps"**
   - Select your app and grant it access
   - **This is required even if you have correct token and permissions!**

2. **Verify Account ID**:
   - Go to business.facebook.com/settings/ad-accounts
   - Make sure you're copying the numeric ID (e.g., `123456789`)
   - The app will automatically add `act_` prefix if needed

3. **Check Access Token Permissions**:
   - Your token MUST have `ads_read` permission
   - Go to developers.facebook.com/tools/explorer/
   - Click "Generate Access Token"
   - In the permission dialog, search for "ads_read" and enable it
   - Generate a new token with this permission

4. **Verify Account Access**:
   - You must be an Admin or Advertiser on the ad account
   - Check at business.facebook.com/settings/ad-accounts
   - Click your ad account and verify your role under "People"

5. **Use Test Connection**:
   - Click "Test Connection" button in API Config
   - This will tell you exactly what's wrong

#### "Access token is invalid or expired"

- Access tokens from Graph API Explorer expire quickly (1-2 hours)
- Generate a new token at developers.facebook.com/tools/explorer/
- For longer-lasting tokens, look into "Extended Access Tokens" (60 days)

#### "No ads found"

- Your account might not have any ads in the selected date range
- Try increasing the date range to 60-90 days
- Make sure you're using an Ad Account that has run campaigns
- Check that ads exist in Meta Ads Manager

#### Browser Console Errors

Open Developer Tools (F12) and check the Console tab for detailed errors:
- Network tab shows the actual API requests and responses
- Look for error codes:
  - `190`: Token invalid/expired
  - `17`: Rate limit (wait a few minutes)
  - `100`: Invalid parameter
  - `200`: Permissions error

### Other Issues

#### Export not working
- Check browser's download permissions
- Try a different browser
- Ensure pop-ups are not blocked

#### Slow loading
- The app fetches insights for each ad individually
- Limited to 50 ads to avoid rate limits
- This may take 10-30 seconds

#### CORS errors
- Meta API should allow cross-origin requests
- If you see CORS errors, try a different browser
- Chrome/Edge work best

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

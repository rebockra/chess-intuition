# Deployment to GHP
ng build --prod --base-href "https://rebockra.github.io/chess-intuition"
npx ngh --dir dist/chess-intuition --no-silent

# SEO 
Add verification tag to index.html after build

<meta name="google-site-verification" content="rz0EaYCqY0q6ngcEVVAn3BT0iLPKGliYFPKO-mLqE8k" />

# Paths for *.js files in index.html

Prefix every file url with "./chess-intuition/"

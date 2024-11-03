install:
	npm ci
brain-even:
	node src/index.js even
publish:
	npm publish --dry-run
lint:
	npx eslint
brain-calc:
	node src/index.js calc
brain-gcd:
	node src/index.js gcd
	
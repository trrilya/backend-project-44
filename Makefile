install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint
brain-games:
	node bin/brain-games.js
brain-even:
	node src/index.js even
brain-calc:
	node src/index.js calc
brain-gcd:
	node src/index.js gcd
brain-progression:
	node src/index.js progression
brain-prime:
	node src/index.js prime
	
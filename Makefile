install:
	npm ci
brain-even:
	node ./bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint
	
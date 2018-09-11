
start:
	npm run babel-node -- src/bin/brain-games.js

lint:
	npm run test

test: lint

publish:
	npm publish --access=public

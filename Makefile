
start:
	npm run babel-node -- src/bin/brain-games.js

lint:
	npm run eslint src

test: lint

publish:
	npm publish --access=public

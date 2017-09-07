install:
	npm install
start:
	npm run babel-node -- src/bin/gendiff.js
publish:
	npm publish
lint:
	npm run eslint ./src
testing:
	npm run test
test watch:
	npm run test --watch

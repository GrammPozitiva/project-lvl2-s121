install:
	npm install
start:
	npm run babel-node -- src/bin/gendiff.js
start-yml:
	npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/yaml/before.yml __tests__/__fixtures__/yaml/after.yml
start-json:
	npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/json/before.json __tests__/__fixtures__/json/after.json
start-ini:
	npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/ini/before.ini __tests__/__fixtures__/ini/after.ini		
publish:
	npm publish
lint:
	npm run eslint ./src
testing:
	npm run test
test watch:
	npm run test --watch

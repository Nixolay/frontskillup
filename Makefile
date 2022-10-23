default: clear

tsig:
	npm i -g typescript ts-node

.PHONY:tscinit
tscinit: tsig
	tsc --init

clear:
	rm lesson_typescript/*/*.js
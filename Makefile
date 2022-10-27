default: clear

tsig:
	sudo apt update
	curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
	sudo apt-get update && sudo apt-get install yarn
	sudo apt -y install nodejs
	npm i -g typescript ts-node

.PHONY:tscinit
tscinit: tsig
	tsc --init

clear:
	rm lesson_ts/**/*.js
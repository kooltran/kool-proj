SHELL := /bin/bash
BRANCH := $(shell git branch | sed -n -e 's/^\* \(.*\)/\1/p')
VERSION := $(shell git describe --abbrev=0 --tags)
# Install project and dependencies
install:
	yarn config set registry https://mirror.ekino.com/npm/npm
	yarn install
	yarn config delete registry

# Lint and test
.PHONY: test
test:
	yarn run lint

# Build
build:
	make install
	gulp build

# Compile
compile:
	make install
	yarn compile

# start
start:
	gulp

.PHONY: test
test:
	docker-compose run registrator truffle test

.PHONY: registrator-enter
registrator-enter:
	docker-compose run registrator bash

# TODO: Yet to be implemented.
# .PHONY: up
# up:
# 	docker-compose up -d
# 	docker-compose logs -f

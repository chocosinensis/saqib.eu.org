# development
run:
	npm start

# production
build:
	npm run build && \
		firebase deploy

push:
	git push origin

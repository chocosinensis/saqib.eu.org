# development
run:
	npm start

# production
prod:
	npm run build && \
		firebase deploy

push:
	git push origin main

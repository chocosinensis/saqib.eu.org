# development
run:
	npm start

# production
prod:
	@npm run build && \
		firebase deploy && \
		cd build && \
		cp index.html 200.html && \
		npx surge && \
		cd ..

push:
	git push origin main

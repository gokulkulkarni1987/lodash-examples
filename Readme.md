Code Setup

1. Install NodeJS
https://nodejs.org/en/download/

3. Checkout code
	a) install source tree
	https://www.sourcetreeapp.com/

	b) login to bitbucket account and copy repository git url under overview section of that project
	c) In source tree app clone the project using the url copied in step (b)

4. install atom IDE
https://atom.io/

5. install atom packages in the following order
	1) install linter
	2). install eslint
	3) cd <to your project directory>
	4) run the below command
		sudo npm install --save-dev eslint-config-rallycoding


6. Run the following commanda under your project 	base folder ‘sgngo’
npm install webpack -g
npm install nodemon -g
npm update

Running the project
1. Open terminal, change directory to your project base folder ‘sgngo’
	cd <project_directory_/sgngo>
2. Open another terminal tab and run the command
	nodemon
3.  Open another terminal tab and run the command
	webpack
4. Open browser and open the url localhost:4000

Deploying Application to GCloud

1. Install google cloud command line tool
https://cloud.google.com/sdk/

2. Create App Engine in google cloud for your project
	a) check ServerConstants.js and comment local paths
3. run command gcloud init
   a) Enter your yasco email id and password
	 b) follows steps to autheniticate your account
	 c) Select project
	 d) navigate to your project root folder
	 e) then deploy app using following command
	    gcloud app deploy --version=<versionName>

# samplelogin

I have used passport to authenticate user


#Instructions


If you would like to download the code and try it for yourself:

Clone the repo: git clone https://github.com/akshat10jain/samplelogin.git
 
 1.Install packages: npm install

 2.Change out the database configuration in by making a new file in the config/database.js 

like this
 
 module.exports = {

	'url' : 'your database here'  // mongodb://<dbuser>:<dbpass>@ds129670.mlab.com:29670/xyz 

};

 
 3.Launch: node start.js
 
 4.Visit in your browser at: http://localhost:8080
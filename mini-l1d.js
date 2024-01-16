/* env setup
1. ssh 
	https://www.howtogeek.com/336775/how-to-enable-and-use-windows-10s-built-in-ssh-commands/#:~:text=The%20SSH%20client%20is%20a,the%20list%20of%20installed%20features.

	https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui
2. Git bash client for windows
	https://gitforwindows.org/
3. SSH key-based authentication
	http://woshub.com/using-ssh-key-based-authentication-on-windows/
   SSH to default powershell


5.To run nodejs apps in the background
	$ npm install forever -g 
	$ forever start /<appname>/index.js
*/
// ### Source Code links
// source code:
// https://www.npmjs.com/package/kanban
// https://www.w3schools.com/HTML/html5_draganddrop.asp
// https://codeshack.io/basic-login-system-nodejs-express-mysql
//
// https://www.stackhawk.com/blog/nodejs-open-redirect-guide-examples-and-prevention/#creating-the-nodejs-file
//
/* ### Git Operations
//
// https://longair.net/blog/2009/04/16/git-fetch-and-merge/
// https://blog.mergify.com/pull-request-vs-merge-request-whats-the-difference/
//
		// git push origin --delete nodejs-ex_6 .... to delete branch on the remote server
		//
		// create git repo on the server from command line.
			echo "# chuanwu" >> README.md
			git init
			git add README.md
			git commit -m "first commit"
			git branch -M main
			git remote add origin https://github.com/chhoo/chuanwu.git
			git push -u origin main
		//
		// push to existing repo from command line
			git remote add origin https://github.com/chhoo/chuanwu.git
			git branch -M main
			git push -u origin main
		// ###############################################################
		// Post action integration: to create the rel branch from dev branch
		//#
		//# lock branch
		//#
		//# #################################################################
		//# git_create_branch.sh
		//# #################################################################
		//# The "lock" code is deprecated. The locking is achieved 
		//# by creating a protected branch with the policy in GitHub -->
		//#   1. Settings--> Branches --> Branch protection rules :
		//#   2. "Define branch protection rules to disablr force pushing...."
		//#       a. create Branch name pattern:  Rel_*
		//#       b. Protect matching branches
		//#          i. Require a pull request b4 merging: checked
		//#          ii.Requite approvals                : checked
		//# #################################################################
		//
		//You can force everyone to submit a merge request, rather than allowing them to check in directly to a protected branch. This is compatible with workflows like the GitLab workflow.

		1. Go to your project and select Settings > Repository.
		2. Expand Protected branches.
		3. From the Branch dropdown menu, select the branch you want to protect.
		4. From the Allowed to merge list, select Developers + Maintainers.
		5. From the Allowed to push list, select No one.
		6. Select Protect.
		or
		1. select protect branch
		2. define the pattern ... eg. Rel*
		3. tick on "require merge request...." + next level checkbox "require approvals"
		4. tick on "include administrators" 
*/
/* ### Database Schema & DDL
// 
// CREATE DATABASE IF NOT EXISTS `L1DS` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `L1DS`;
// #########################################################
// SQL authentication issues:
// Execute the following query in MYSQL Workbench
//     ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// Where root as your user localhost as your URL and password as your password
// Then run this query to refresh privileges:
//     flush privileges;
// Try connecting using node after you do so.
// If that doesn't work, try it without @'localhost' part.
//
// SQL safe mode disable:
//     SET SQL_SAFE_UPDATES = 0;
// #########################################################
//
// Create statement (4:116:115:101:116:)
//
CREATE TABLE `accounts` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`username`)
) ;

CREATE TABLE `app` (
  `Appname` varchar(20) NOT NULL,
  `Appdesc` varchar(255) DEFAULT NULL,
  `AppRel` int DEFAULT NULL,
  `AppPBL` varchar(40) DEFAULT NULL,
  `AppGit` varchar(100) DEFAULT NULL,
  `AppWS` varchar(100) DEFAULT NULL,
  `AppBuildSvr` varchar(100) DEFAULT NULL,
  `AppBuildSvrWS` varchar(100) DEFAULT NULL,
  `AppTestSvr` varchar(100) DEFAULT NULL,
  `AppTestSvrWS` varchar(100) DEFAULT NULL,
  `AppColour` varchar(20) DEFAULT NULL,
  `popen` varchar(40) DEFAULT NULL,
  `pwip` varchar(40) DEFAULT NULL,
  `preview` varchar(40) DEFAULT NULL,
  `ptest` varchar(40) DEFAULT NULL,
  `puat` varchar(40) DEFAULT NULL,
  `pdeliver` varchar(40) DEFAULT NULL,
  `pkiv` varchar(40) DEFAULT NULL,
  `pcreate` varchar(40) DEFAULT NULL,
  `AppTemplateWS` varchar(100) DEFAULT NULL,
  `AppBin` varchar(200) DEFAULT NULL,
  `AppBin_user` varchar(40) DEFAULT NULL,
  `AppBin_pw` varchar(40) DEFAULT NULL,
  `AppGit_user` varchar(40) DEFAULT NULL,
  `AppGit_pw` varchar(40) DEFAULT NULL,
  `AppPrdBL_history` mediumtext DEFAULT NULL,
  `AppExec` VARCHAR(200) DEFAULT NULL,
  `AppMVPrel` int DEFAULT 0,
  `AppPbugrel` int DEFAULT 0,
  `AppProduction` varchar(50) DEFAULT NULL,
  `AppPrdBL` varchar(40) DEFAULT NULL,
  `AppSezone` varchar(50) DEFAULT NULL,
  `AppSonaQ` varchar(100) default null,
  `AppSonaS` varchar(255) default null,
  `AppSonaToken` varchar(255) default null,
  `AppSonausr` varchar(40) default null,
  PRIMARY KEY (`Appname`)
) ;

CREATE TABLE `rel` (
  `Crname` varchar(50) NOT NULL,
  `Crdesc` varchar(255) DEFAULT NULL,
  `Crapp` varchar(40) DEFAULT NULL,
  `CrRelItr` int DEFAULT NULL,
  `CrCodebase` varchar(40) DEFAULT NULL,
  `CrState` varchar(40) DEFAULT NULL,
  `CrRelName` varchar(50) DEFAULT NULL,
  `CrNote` mediumtext,
  `CrDevbranch` varchar(255) DEFAULT NULL,
  `CrRelbranch` varchar(255) DEFAULT NULL,
  `CrRelType` varchar(40) DEFAULT NULL,
  `CrDeployType` varchar(40) DEFAULT NULL,
  `Crcreator` varchar(20) DEFAULT NULL,
  `Crowner` varchar(20) DEFAULT NULL,
  `CrDevInst` varchar(255) DEFAULT NULL,
  `CrRelInst` varchar(255) DEFAULT NULL,
  `CrColour` varchar(20) DEFAULT NULL,
  `CrXname` varchar(50)  DEFAULT NULL,
  `CrXplan` varchar(40) DEFAULT NULL,
  `Crsonastatus` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`Crname`)
) ;

CREATE TABLE `plan` (
  `MVPname` varchar(20) NOT NULL,
  `MVPapp` varchar(40) DEFAULT NULL,
  `MVPdesc` varchar(255) DEFAULT NULL,
  `MVPasRel` varchar(40) DEFAULT NULL,
  `MVPstartDate` date DEFAULT (current_Date),
  `MVPendDate` date DEFAULT (current_date+14),
  `MVPState` varchar(40) DEFAULT "open",
  `MVPcreator` varchar(20) DEFAULT NULL,
  `MVPXname` carchar(50) DEFAULT NULL,
  `MVPnotes` mediumtext,
  `MVPiter` integer,
PRIMARY KEY (`MVPname`)
) ;

CREATE TABLE `ugrp` (
  `Grpname` varchar(40) DEFAULT NULL,
  `Uname` varchar(40) DEFAULT NULL
) ;

alter table app add primary key (appname);

To permanently disable safe update mode in MySQL Workbench 8.0 you should do the following:
Go to Edit --> Preferences.
Click "SQL Editor" tab and uncheck "Safe Updates" (rejects UPDATEs and DELETEs with no restrictions) check box.
Query --> Reconnect to Server.

*/
// ### Parking lot - to do
// #########################################################
// 1. user and group management
// 2. security
//		a. password at rest (database / config file) --> (use bcrypt or argon2 to hash password in database, no solution for password in config file yet)
//		b. hardcode --> config file
//		c. url
//		d. checking of session validity before allowing operation (partial)
//		e. session timeout
//		f. aduit trail of CR changes
// 3. sonarqube
// 4. Jfrog artifactory
// 5. ansible replaced by SSH (windows and linux)
// #########################################################
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const { exit } = require("process");
const { callbackify } = require("util");
const { createQuery } = require("mysql/lib/Connection");

var router = express.Router();
var databaseOptions = require("./config.js");
var connection = mysql.createConnection(databaseOptions);
var hostname = require("./server.js");
var port = require("./port.js");

//const hostname= "localhost";

// ################################################################
// ## Common Utility Functions
// ################################################################
// 1. Get permission based on Group of User
function getPermit(gnam, unam, callback) {
  connection.query(
    "SELECT * FROM Ugrp WHERE Grpname = ? and Uname = ?",
    [gnam, unam],
    function (err, result) {
      if (err) callback(err, null);
      else callback(null, result.length);
    }
  );
}
// 2. Get date-time
function GetMyDate() {
  var myDate = new Date();
  var mDate = "";
  myM = myDate.getMonth() + 1;
  mDate =
    myDate.getFullYear() +
    "-" +
    myM +
    "-" +
    myDate.getDate() +
    "-" +
    myDate.getHours() +
    ":" +
    myDate.getMinutes() +
    ":" +
    myDate.getSeconds();
  //  console.log("Date function="+mDate);
  return mDate;
}
// 3. Create the Stamp ith username + date-time
function stamp(username, mCrState) {
  var myStamp = "";
  myStamp =
    "by [" + username + "] @ " + GetMyDate() + " [state:" + mCrState + "]";
  return myStamp;
}
//4. Get Sonarqube result
function sonarResult(sonaQ, sonaU, sonaP, relname, callback) {
  var myResult = "scan completed.";
  const request = require("request");
  request(
    "http://" +
      sonaU +
      ":" +
      sonaP +
      "@" +
      sonaQ +
      "/api/qualitygates/project_status?projectKey=" +
      relname,
    function (err, res, body) {
      console.log("sonarQube scan ==>" + body);
      if (err) {
        callback("scan error.");
      } else {
        var me = body.includes("not found");
        if (me) callback("scan in progress.");
        else callback("scan completed.");
      }
    }
  );

  // {"projectStatus":{"status":"OK","conditions":[],"periods":[],"ignoredConditions":false}}
  // {"errors":[{"msg":"Project \u0027Rel_nodejs-ex_10_501\u0027 not found"}]}
}
// 5. get crypt and decrypt key
function getcrypt(keyin) {
  //
  // Encrypt
  //
  var lenS = keyin.length;
  var character = keyin.charAt(0); // This gives the character 'a'
  var ascii = 1;
  var i = 0;
  var output = "";
  for (i = 0; i < lenS; i++) {
    ascii = keyin.charCodeAt(i);
    output = ascii + ":" + output;
  }
  output = lenS + ":" + output;
  return output;
}
function getdecrypt(keyin) {
  //decrypt
  var decrypt = keyin.split(":");
  var d_lenS = decrypt[0];
  var key = 0;
  var my_id = "";
  var j = 1;
  //	console.log("len="+d_lenS);
  for (j = 1; j < d_lenS + 1; j++) {
    key = decrypt[j];
    ch = String.fromCharCode(key);
    my_id = "" + ch + my_id;
  }
  return my_id;
}
// ################################################################
// ## Inititalize the app and add middleware
// ################################################################
app.set("view engine", "pug"); // Setup the pug
app.use(bodyParser.urlencoded({ extended: true })); // Setup the body parser to handle form submits
app.use(session({ secret: "super-secret" })); // Session setup
// Define the static file path
app.use(express.static(__dirname + "/views"));
// ################################################################
// ## main program
// ################################################################
/** Handle login display and form submit */
app.get("/login", (req, res) => {
  if (req.session.isLoggedIn === true) {
    return res.redirect("/");
  }
  res.render("login", { error: false });
});
app.post("/auth", (req, res) => {
  const { username, password } = req.body;
  //hash=getcrypt(password);
  //console.log(hash);
  //rever=getdecrypt(hash);
  //console.log(rever);
  if (username && password) {
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function (err, result) {
        console.log(err);
        if (result.length > 0) {
          // debug
          Object.keys(result).forEach(function (key) {
            var row = result[key];
            //THEusername=row.username;
            //console.log(key +'. '+row.username+ ' '+thrash)
          });
          console.log(username + " logged in: " + GetMyDate());
          req.session.username = username;
          req.session.isLoggedIn = true;
          //
          // test point
          //
          res.redirect(req.query.redirect_url ? req.query.redirect_url : "/");
        } else {
          res.render("login", { error: "Username or password is incorrect" });
        }
      }
    );
  } else {
    res.render("login", { error: "Username or password is incorrect" });
  }
});
/** Handle logout function */
app.get("/logout", (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect("/");
});
//
//  Main Screen
//
app.get("/", (req, res) => {
  //res.render('index', {isLoggedIn: req.session.isLoggedIn});
  if (req.session.isLoggedIn) {
    res.render("index", { isLoggedIn: req.session.username });
  } else {
    res.render("login");
  }
});
app.get("/home", (req, res) => {
  //res.render('index', {isLoggedIn: req.session.isLoggedIn});
  if (req.session.isLoggedIn) {
    res.render("index", { isLoggedIn: req.session.username });
  } else {
    res.render("login");
  }
});
app.get("/contact", (req, res) => {
  res.send("STE MSS Academy. DevOps Rocks !!");
});
// ################################################################
// ## end of main program
// ################################################################
//
//
// ################################################################
// ## User Management
// ################################################################
//
app.get("/changepassword", (req, res) => {
  if (req.session.isLoggedIn === true) {
    connection.query(
      "SELECT * FROM accounts where username=?",
      [req.session.username],
      function (err, rows, fields) {
        if (err) {
          res
            .status(500)
            .json({
              status_code: 500,
              status_message: "internal server error@listing",
            });
        } else {
          var appList = [];
          // Loop check on each row
          for (var i = 0; i < rows.length; i++) {
            // Create an object to save current row's data
            var app = {
              Uname: rows[0].username,
              Upassword: rows[0].password,
              Uemail: rows[0].email,
            };
          }
          // Render index.pug page using array
          res.render("changepassword", {
            app: app,
            isLoggedIn: req.session.username,
          });
        }
      }
    );
  } else res.render("login", { error: false });
});
app.get("/changepassword/:Uname", (req, res) => {
  if (req.session.isLoggedIn === true) {
    connection.query(
      "SELECT * FROM accounts where username=?",
      [req.params.Uname],
      function (err, rows, fields) {
        if (err) {
          res
            .status(500)
            .json({
              status_code: 500,
              status_message: "internal server error@listing",
            });
        } else {
          var appList = [];
          // Loop check on each row
          for (var i = 0; i < rows.length; i++) {
            // Create an oubject to save current row's data
            var app = {
              Uname: rows[0].username,
              Upassword: rows[0].password,
              Uemail: rows[0].email,
            };
          }
          // Render index.pug page using array
          res.render("updateaccount", {
            app: app,
            isLoggedIn: req.session.username,
          });
        }
      }
    );
  } else res.render("login", { error: false });
});
app.post("/changepassword", (req, res) => {
  var { Uname, Uemail, Upass, Unewpass } = req.body;

  hash = getcrypt(Upass);
  hash1 = getcrypt(Unewpass);
  console.log(hash);
  rever = getdecrypt(hash);
  console.log(rever);
  if (Uname && Upass) {
    connection.query(
      "update accounts set password=?, email=? where username = ? AND password = ?",
      [hash1, Uemail, Uname, hash],
      function (err, result) {
        if (err)
          res.render("login", {
            error: "Unable to change pasword as current password is incorrect.",
          });
        else {
          if (result.changedRows === 0)
            res.render("index", {
              error:
                "Unable to change password as current password is incorrect.",
              isLoggedIn: req.session.username,
            });
          else res.render("index", { isLoggedIn: req.session.username });
        }
      }
    );
  } else {
    res.render("login", { error: "Username or password is incorrect" });
  }
});
// User Management - Add User
app.get("/user_add", (req, res) => {
  if (req.session.isLoggedIn === true) {
    getPermit("admin", req.session.username, function (err, data) {
      if (err) {
        console.log("error adding user" + err);
      } else {
        if (data === 1) {
          res.render("user_add", { isLoggedIn: req.session.username });
        } else {
          res.render("index", {
            error: "You have no admin rights.",
            isLoggedIn: req.session.username,
          });
        }
      }
    });
  } else res.render("login");
});
app.post("/user_add", (req, res) => {
  var { Uname, Uemail, Upass } = req.body;

  hash = getcrypt(Upass);
  if (Uname && Upass) {
    connection.query(
      " insert into `accounts` (`email`,`username`,`password`) values (?,?,?)",
      [Uemail, Uname, hash],
      function (err, result) {
        if (err)
          res.render("user_add", {
            error: "Create user failed:" + err,
            isLoggedIn: req.session.username,
          });
        else
          res.render("user_add", {
            error: "User Created:" + Uname,
            isLoggedIn: req.session.username,
          });
      }
    );
  } else {
    res.render("login", { error: "Username or password is incorrect" });
  }
});
// User Management - Manage User
app.get("/user_manage", (req, res) => {
  if (req.session.isLoggedIn === true) {
    getPermit("admin", req.session.username, function (err, data) {
      if (err) {
        console.log("error adding user" + err);
      } else {
        if (data === 1) {
          var uList = [];
          connection.query(
            "SELECT * FROM accounts",
            function (err, rows, fields) {
              if (err) {
                res
                  .status(500)
                  .json({
                    status_code: 500,
                    status_message: "internal server error@user_manage",
                  });
              } else {
                // Loop check on each row
                for (var i = 0; i < rows.length; i++) {
                  // Create an object to save current row's data
                  var app = {
                    Uname: rows[i].username,
                    Uemail: rows[i].email,
                  };
                  // Add object into array
                  uList.push(app);
                }
                res.render("user_manage", {
                  uList: uList,
                  isLoggedIn: req.session.username,
                });
              }
            }
          );
        } else {
          res.render("index", {
            error: "You have no admin rights.",
            isLoggedIn: req.session.username,
          });
        }
      }
    });
  } else res.render("login");
});
app.post("/changepassword/update_account", (req, res) => {
  var { Uname, Uemail, Upass } = req.body;
  hash = getcrypt(Upass);
  if (Uname && Upass) {
    connection.query(
      "update accounts set password=?, email=? where username = ?",
      [hash, Uemail, Uname],
      function (err, result) {
        if (err)
          res.render("index", { error: "Unable to update account" + err });
        else {
          if (result.changedRows === 0)
            res.render("index", {
              error: "No row updated",
              isLoggedIn: req.session.username,
            });
          else res.render("index", { isLoggedIn: req.session.username });
        }
      }
    );
  } else {
    res.render("login", { error: "Username or password is incorrect" });
  }
});
// USer Management - Add group
app.get("/user_group_add", (req, res) => {
  if (req.session.isLoggedIn === true) {
    getPermit("admin", req.session.username, function (err, data) {
      if (err) {
        console.log("error adding user" + err);
      } else {
        if (data === 1) {
          res.render("user_group_add", { isLoggedIn: req.session.username });
        } else {
          res.render("index", {
            error: "You have no admin rights.",
            isLoggedIn: req.session.username,
          });
        }
      }
    });
  } else res.render("login");
});
app.post("/user_group_add", (req, res) => {
  var { Uname, Gname } = req.body;
  if (Uname && Gname) {
    connection.query(
      " insert into `ugrp` (`Grpname`,`Uname`) values (?,?)",
      [Gname, Uname],
      function (err, result) {
        if (err)
          res.render("user_group_add", {
            error: "Create group failed:" + err,
            isLoggedIn: req.session.username,
          });
        else
          res.render("user_group_add", {
            error: "Group Created:   " + Gname + " - " + Uname,
            isLoggedIn: req.session.username,
          });
      }
    );
  } else {
    res.render("login", { error: "Group name  is incorrect" });
  }
});
// User Management - Assign Group to User
app.get("/user_group_assign", (req, res) => {
  if (req.session.isLoggedIn === true) {
    getPermit("admin", req.session.username, function (err, data) {
      if (err) {
        console.log("error adding user" + err);
      } else {
        if (data === 1) {
          var uList = [];
          connection.query(
            "SELECT * FROM accounts",
            function (err, rows, fields) {
              if (err) {
                res
                  .status(500)
                  .json({
                    status_code: 500,
                    status_message: "internal server error@user_manage",
                  });
              } else {
                // Loop check on each row
                for (var i = 0; i < rows.length; i++) {
                  // Create an object to save current row's data
                  var app = {
                    Uname: rows[i].username,
                    Uemail: rows[i].email,
                  };
                  // Add object into array
                  uList.push(app);
                }

                res.render("user_group_assign", {
                  uList: uList,
                  isLoggedIn: req.session.username,
                });
              }
            }
          );
        } else {
          res.render("index", {
            error: "You have no admin rights.",
            isLoggedIn: req.session.username,
          });
        }
      }
    });
  } else res.render("login");
});
app.get("/group_assign/:Uname", (req, res) => {
  if (req.session.isLoggedIn === true) {
    connection.query(
      "SELECT * FROM ugrp where uname=?",
      [req.params.Uname],
      function (err, rows, fields) {
        if (err) {
          res
            .status(500)
            .json({
              status_code: 500,
              status_message: "internal server error@listing",
            });
        } else {
          var allgList = [];
          var gList = [];
          // Loop check on each row
          for (var i = 0; i < rows.length; i++) {
            // Create an oubject to save current row's data
            var app = {
              Uname: rows[i].Uname,
              Grpname: rows[i].Grpname,
            };
            gList.push(app);
          }
          connection.query(
            "select distinct Grpname from ugrp",
            function (err, rows, fields) {
              // Loop check on each row
              for (var i = 0; i < rows.length; i++) {
                // Create an oubject to save current row's data
                var pp = {
                  Grpname: rows[i].Grpname,
                };
                allgList.push(pp);
                // Render index.pug page using array
              }
              res.render("group_assign", {
                allgList: allgList,
                gList: gList,
                Uname: req.params.Uname,
                isLoggedIn: req.session.username,
              });
            }
          );
        }
      }
    );
  } else res.render("login", { error: false });
});
app.post("/group_assign/assign_group", (req, res) => {
  var { Uname, Gname, workonAction } = req.body;
  console.log(Gname + "--- " + Uname);
  switch (workonAction) {
    case "add":
      connection.query(
        " insert into `ugrp` (`Grpname`,`Uname`) values (?,?)",
        [Gname, Uname],
        function (err, result) {
          if (err)
            res.render("index", {
              error: "Add group failed:" + err,
              isLoggedIn: req.session.username,
            });
          else
            res.render("index", {
              error: "Added:   " + Gname + " - " + Uname,
              isLoggedIn: req.session.username,
            });
        }
      );
      break;
    case "remove":
      connection.query(
        " delete from ugrp where Grpname=? and Uname=?",
        [Gname, Uname],
        function (err, result) {
          if (err)
            res.render("index", {
              error: "Remove group failed:" + err,
              isLoggedIn: req.session.username,
            });
          else
            res.render("index", {
              error: "Removed:   " + Gname + " - " + Uname,
              isLoggedIn: req.session.username,
            });
        }
      );

      break;
  }
});
// ################################################################
// ## Kanban Interface
// ################################################################
app.get("/kanban", (req, res) => {
  var appList = [];
  // Do the query to get data.
  connection.query(
    "SELECT * FROM rel order by Crname",
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@kanban",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrDevInst: rows[i].CrDevInst,
            CrColour: rows[i].CrColour,
          };
          // Add object into array
          appList.push(app);
          //console.log(rows[i].Crname+"-"+rows[i].CrState);
        }
        // Render index.pug page using array {isLoggedIn: req.session.username}
        res.render("kanban", {
          appList: appList,
          isLoggedIn: req.session.username,
        });
      }
    }
  );
});
// ################################################################
//
// ################################################################
// ## App CRUD
// ## Application Request Related Operations
// ################################################################
// ## User Story #1:
// ## As a Configuration manager, I want to create a new application
// ## request for project on-boarding
// ################################################################
// Persona: configuration manager
// State		1. active
// Action:		1. Create new Application
// Note:
// 				1. load create app form
//
app.get("/Create_App", (req, res) => {
  if (req.session.isLoggedIn === true) {
    //############### getPermit ################
    //call Fn for db query with callback
    getPermit("config", req.session.username, function (err, data) {
      if (err) {
        console.log("Permission ERROR : ", err); // error handling code goes here
      } else {
        //console.log("result from db is : ",data); // code to execute on data retrieval
        if (data === 1) {
          //console.log("Permission allowed",req.session);
          res.render("cApp", { isLoggedIn: req.session.username });
        } else {
          console.log("No Permission to proceed", req.session);
          res.render("noPermit", { isLoggedIn: req.session.username });
        }
      }
    });
    // ########### end getPermit ##############
  }
});
// ################################################################
// Persona: configuration manager
// State		1. active
// Action:		1. Create new Application
// Note:
// 				1. create application
//
app.post("/Create_App", (req, res) => {
  const { Appname, Appdesc, AppRel, AppPBL, AppColour } = req.body;
  connection.query(
    "insert into app (Appname, Appdesc, AppRel, AppPBL, AppColour) values (?,?,?,?,?)",
    [Appname, Appdesc, AppRel, AppPBL, AppColour],
    function (err, result) {
      if (err) {
        console.log("code=" + err);
        res.render("cApp", { error: err, isLoggedIn: req.session.username });
      } else {
        res.render("index", { isLoggedIn: req.session.username });
      }
    }
  );
});
// ################################################################
// ## User Story #2:
// ## As a configuration Manager, I want to define the project
// ## devtest environment information.
// ################################################################
// Persona: configuration manager
// State		1. active
// Action:	1. update Application info
// Note:
// 			1. get app list
//
app.get("/list_App", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query("SELECT * FROM app", function (err, rows, fields) {
    if (err) {
      res
        .status(500)
        .json({
          status_code: 500,
          status_message: "internal server error@listing",
        });
    } else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {
        // Create an object to save current row's data
        var app = {
          Appname: rows[i].Appname,
          Appdesc: rows[i].Appdesc,
          AppRel: rows[i].AppRel,
          AppPBL: rows[i].AppPBL,
          AppGit: rows[i].AppGit,
          AppWS: rows[i].AppWS,
          AppBuildSvr: rows[i].AppBuildSvr,
          AppBuildSvrWS: rows[i].AppBuildSvrWS,
          AppTestSvr: rows[i].AppTestSvr,
          AppTestSvrWS: rows[i].AppTestSvrWS,
          AppColour: rows[i].AppColour,
        };
        // Add object into array
        appList.push(app);
      }

      // Render index.pug page using array
      res.render("listApp", {
        appList: appList,
        isLoggedIn: req.session.username,
      });
    }
  });
});
// ################################################################
// Persona: configuration manager
// State		1. active
// Action:	1. update Application info
// Note:
// 			1. get selected app details
//
app.get("/getApp/:Appname", function (req, res) {
  // Do the query to get data.
  connection.query(
    "SELECT * FROM app WHERE Appname = '" + req.params.Appname + "'",
    function (err, rows, fields) {
      var app;
      // console.log('SELECT * FROM app WHERE Appname = \'' + req.params.Appname+'\'');
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@detail",
          });
      } else {
        // Check if the result is found or not
        if (rows.length == 1) {
          // Create the object to save the data.
          var app = {
            Appname: rows[0].Appname,
            Appdesc: rows[0].Appdesc,
            AppRel: rows[0].AppRel,
            AppPBL: rows[0].AppPBL,
            AppGit: rows[0].AppGit,
            AppWS: rows[0].AppWS,
            AppBuildSvr: rows[0].AppBuildSvr,
            AppBuildSvrWS: rows[0].AppBuildSvrWS,
            AppTestSvr: rows[0].AppTestSvr,
            AppTestSvrWS: rows[0].AppTestSvrWS,
            AppColour: rows[0].AppColour,
            AppTemplateWS: rows[0].AppTemplateWS,
            AppExec: rows[0].AppExec,
            AppBin: rows[0].AppBin,
            AppBin_user: rows[0].AppBin_user,
            AppBin_pw: rows[0].AppBin_pw,
            AppProduction: rows[0].AppProduction,
            AppPrdBL_history: rows[0].AppPrdBL_history,
            AppSonaQ: rows[0].AppSonaQ,
            AppSonaS: rows[0].AppSonaS,
            AppSonaToken: rows[0].AppSonaToken,
            popen: rows[0].popen,
            pwip: rows[0].pwip,
            preview: rows[0].preview,
            ptest: rows[0].ptest,
            puat: rows[0].puat,
            pdeliver: rows[0].pdeliver,
            pkiv: rows[0].pkiv,
            pcreate: rows[0].pcreate,
            AppSonausr: rows[0].AppSonausr,
          };

          //############### getPermit ################
          //call Fn for db query with callback
          getPermit("config", req.session.username, function (err, data) {
            if (err) {
              console.log("Permission ERROR : ", err); // error handling code goes here
            } else {
              //console.log("result from db is : ",data); // code to execute on data retrieval
              if (data === 1) {
                //console.log("Permission allowed",req.session);
                // render the details.plug page.
                var allgList = [];
                connection.query(
                  "select distinct Grpname from ugrp",
                  function (err, rows, fields) {
                    // Loop check on each row
                    for (var ij = 0; ij < rows.length; ij++) {
                      // Create an oubject to save current row's data
                      var pp = {
                        Grpname: rows[ij].Grpname,
                      };
                      allgList.push(pp);
                      // Render index.pug page using array
                    }
                    //res.render('group_assign', {"allgList": allgList, "gList": gList, "Uname": req.params.Uname, isLoggedIn: req.session.username});
                    res.render("detailApp", {
                      allgList: allgList,
                      app: app,
                      isLoggedIn: req.session.username,
                    });
                  }
                );
              } else {
                console.log("No Permission to proceed", req.session);
                res.render("noPermit", { isLoggedIn: req.session.username });
              }
            }
          });
          // ########### end getPermit ##############
        } else {
          // render not found page
          res
            .status(404)
            .json({ status_code: 404, status_message: "Not found" });
        }
      }
    }
  );
});
// ################################################################
// Persona: configuration manager
// State		1. active
// Action:	1. update Application info
// Note:
// 			1. Update app details
//
app.post("/getApp/Update_App", (req, res) => {
  //app.post('/getApp/Update_App', function(req, res) {
  var {
    AppSonausr,
    pcreate,
    popen,
    pwip,
    preview,
    ptest,
    puat,
    pdeliver,
    pkiv,
    Appname,
    Appdesc1,
    Appdesc,
    AppRel,
    AppPBL,
    AppGit,
    AppWS,
    AppBuildSvr,
    AppBuildSvrWS,
    AppTestSvr,
    AppTestSvrWS,
    initGitRepo,
    AppColour,
    AppTemplateWS,
    AppExec,
    AppBin,
    AppBin_user,
    AppGit_user,
    AppBin_pw,
    setbinpw,
    AppSonaQ,
    AppSonaS,
    AppSonaToken,
  } = req.body;
  //  console.log('1. Appname= ' + Appname);
  //  console.log(req.body);
  //
  //map input to be updated to the database
  if (Appdesc === "") {
    Appdesc = Appdesc1;
  }
  console.log(AppTemplateWS + " - " + AppExec);
  //
  console.log("pcreate=" + pcreate + " popen=" + popen);
  connection.query(
    "update app set AppSonausr=?, pcreate=?, popen=? , pwip=?, preview=?, ptest=?, puat=?, pdeliver=?, pkiv=?, Appdesc=?,AppGit=?,AppWS=?,AppBuildSvr=?,AppBuildSvrWS=?,AppTestSvr=?,AppTestSvrWS=?,AppTemplateWS=? , AppExec=? , AppBin=? , AppBin_user=?, AppGit_user=?, AppSonaQ=? , AppSonaS=?, AppSonaToken=? where Appname=?",
    [
      AppSonausr,
      pcreate,
      popen,
      pwip,
      preview,
      ptest,
      puat,
      pdeliver,
      pkiv,
      Appdesc,
      AppGit,
      AppWS,
      AppBuildSvr,
      AppBuildSvrWS,
      AppTestSvr,
      AppTestSvrWS,
      AppTemplateWS,
      AppExec,
      AppBin,
      AppBin_user,
      AppGit_user,
      AppSonaQ,
      AppSonaS,
      AppSonaToken,
      Appname,
    ],
    function (err, result) {
      if (err) {
        console.log("code=" + err);
        res.render("detailApp", {
          error: err,
          app: app,
          isLoggedIn: req.session.username,
        });
      } else {
        res.render("index", { isLoggedIn: req.session.username });
      }
    }
  );

  if (setbinpw === "Yes") {
    connection.query(
      "update app set AppBin_pw=? where Appname=?",
      [AppBin_pw, Appname],
      function (err, result) {
        if (err) {
          console.log("code=" + err);
          res.render("detailApp", {
            error: err,
            isLoggedIn: req.session.username,
          });
        } else {
          res.render("index", { isLoggedIn: req.session.username });
        }
      }
    );
  }

  if (initGitRepo === "Yes") {
    //
    // test external calling of script
    //
    console.log(
      "...... calling external script: git_inito_repo.sh @" + GetMyDate()
    );
    var child_process = require("child_process");
    //EXECUTE yourExternalJsFile.js
    // "C:\\Program Files\\Git\\git-bash.exe" ==> AppExec
    child_process.exec(
      AppExec +
        " .\\ws\\git_init_Repo.sh " +
        AppWS +
        " " +
        AppGit +
        " main " +
        Appname +
        " " +
        AppTemplateWS,
      (error, stdout, stderr) => {
        console.log(`${stdout}`);
        console.log(`${stderr}`);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      }
    );
  }
});
// ################################################################
// ## User Story #PM-1:
// ## As a PM, I want to create a new plan for the application
// ## release request
// ################################################################
// Persona: PM
// State		1. active
// Action:		1. Create new plan
// Note:
// 				1. load create plan form
//
app.get("/create_plan", (req, res) => {
  if (req.session.isLoggedIn === true) {
    //############### getPermit ################
    //call Fn for db query with callback
    getPermit("pm", req.session.username, function (err, data) {
      if (err) {
        console.log("Permission ERROR : ", err); // error handling code goes here
      } else {
        //console.log("result from db is : ",data); // code to execute on data retrieval
        if (data === 1) {
          //console.log("Permission allowed",req.session);
          var appList = [];
          // Do the query to get data.
          connection.query(
            "SELECT Appname, Appdesc FROM app",
            function (err, rows, fields) {
              if (err) {
                res
                  .status(500)
                  .json({
                    status_code: 500,
                    status_message: "internal server error@listing",
                  });
              } else {
                // Loop check on each row
                for (var i = 0; i < rows.length; i++) {
                  // Create an object to save current row's data
                  var app = {
                    Appname: rows[i].Appname,
                    Appdesc: rows[i].Appdesc,
                  };
                  // Add object into array
                  appList.push(app);
                }
                // console.log(appList);
                // Render index.pug page using array
                res.render("cPlan", {
                  appList: appList,
                  isLoggedIn: req.session.username,
                });
              }
            }
          );
          //  res.render('cPlan', {isLoggedIn: req.session.username});
        } else {
          console.log("No Permission to proceed", req.session);
          res.render("noPermit", { isLoggedIn: req.session.username });
        }
      }
    });
    // ########### end getPermit ##############
  }
});
// ################################################################
// Persona: PM
// State		1. active
// Action:		1. Create new plan
// Note:
// 				1. create plan
//
app.post("/create_plan", (req, res) => {
  const {
    MVPname,
    MVPdesc,
    MVPapp,
    MVPstartDate,
    MVPendDate,
    appList,
    MVPnotes,
  } = req.body;
  if (MVPdesc === "") {
    MVPdesc1 =
      "MVP Release for " +
      MVPname +
      "   [ est. start date@" +
      MVPstartDate +
      " and est. end date@" +
      MVPendDate +
      " ]";
  } else {
    MVPdesc1 = MVPdesc;
  }
  connection.query(
    "insert into plan (MVPnotes, MVPname, MVPdesc, MVPapp, MVPstartDate, MVPendDate, MVPiter,MVPcreator) values (?,?,?,?,?,?,?,?)",
    [
      MVPnotes,
      MVPname,
      MVPdesc1,
      MVPapp,
      MVPstartDate,
      MVPendDate,
      1,
      req.session.username,
    ],
    function (err, result) {
      if (err) {
        console.log("code=" + err);
        res.render("cPlan", {
          appList: appList,
          isLoggedIn: req.session.username,
          error: err,
        });
      } else {
        res.render("index", { isLoggedIn: req.session.username });
      }
    }
  );
});

// ################################################################
// ## User Story #PM-2:
// ## As a PM, I want to update a plan for the application
// ## release request
// ################################################################
// Persona: PM
// State		1. active
// Action:		1. list all plans
// Note:
// 				1. list all planned releases
app.get("/list_plan", (req, res) => {
  var appList = [];
  // Do the query to get data.
  connection.query(
    "SELECT MVPname, MVPapp, MVPdesc, MVPasRel, MVPXname, MVPState FROM plan",
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing plan",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            MVPname: rows[i].MVPname,
            MVPapp: rows[i].MVPapp,
            MVPdesc: rows[i].MVPdesc,
            MVPasRel: rows[i].MVPasRel,
            MVPState: rows[i].MVPState,
            MVPXname: rows[i].MVPXname,
          };
          // Add object into array
          appList.push(app);
        }

        // Render index.pug page using array
        res.render("listPlan", {
          appList: appList,
          isLoggedIn: req.session.username,
        });
      }
    }
  );
});
// ################################################################
// Persona: PM
// State		1. active
// Action:		1. load selected plan
// Note:
// 				1. load select plan form
//
app.get("/getPlan/:MVPname", function (req, res) {
  // Do the query to get data.
  connection.query(
    "SELECT MVPname,MVPapp,MVPdesc,MVPXname,MVPasRel,MVPstartDate,MVPendDate,MVPState,MVPcreator,MVPnotes FROM plan WHERE MVPname = '" +
      req.params.MVPname +
      "'",
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message:
              "internal server error@detail plan:" + req.params.MVPname,
          });
      } else {
        // Check if the result is found or not
        if (rows.length == 1) {
          // Create the object to save the data.
          var app = {
            MVPname: rows[0].MVPname,
            MVPapp: rows[0].MVPapp,
            MVPdesc: rows[0].MVPdesc,
            MVPXname: rows[0].MVPXname,
            MVPasRel: rows[0].MVPasRel,
            MVPstartDate: rows[0].MVPstartDate,
            MVPendDate: rows[0].MVPendDate,
            MVPState: rows[0].MVPState,
            MVPcreator: rows[0].MVPcreator,
            MVPnotes: rows[0].MVPnotes,
          };
          //############### getPermit ################

          //############### getPermit ################
          //call Fn for db query with callback
          getPermit("pm", req.session.username, function (err, data) {
            if (err) {
              console.log("Permission ERROR : ", err); // error handling code goes here
            } else {
              //console.log("result from db is : ",data); // code to execute on data retrieval
              if (data === 1) {
                // render the details.plug page.
                // to determine what action is taken on the release request
                //
                res.render("detailPlan", {
                  app: app,
                  isLoggedIn: req.session.username,
                });
              } else {
                console.log("No Permission to update. Only view", req.session);
                res.render("detailPlan_info", {
                  app: app,
                  isLoggedIn: req.session.username,
                });
              }
            }
          });
          // ########### end getPermit ##############

          // ########### end getPermit ##############
        } else {
          // render not found page
          res
            .status(404)
            .json({
              status_code: 404,
              "/getPlan:MVPname --> status_message": "Not found",
            });
        }
      }
    }
  );
});
// ################################################################
// Persona: configuration manager
// State		1. active
// Action:	1. update Application info
// Note:
// 			1. Update app details
//
app.post("/getPlan/update_plan", (req, res) => {
  //app.post('/getApp/Update_App', function(req, res) {
  var {
    MVPname,
    MVPapp,
    MVPdesc,
    MVPiter,
    MVPasRel,
    MVPstartDate,
    MVPendDate,
    MVPState,
    MVPcreator,
    MVPnotes,
    MVPnotes1,
    MVPnotes0,
  } = req.body;
  // console.log(req.body);
  //
  if (MVPdesc === "") {
    MVPdesc =
      "MVP Release for " +
      MVPname +
      "   [ est. start date@" +
      MVPstartDate +
      " and est. end date@" +
      MVPendDate +
      " ]";
  }

  connection.query(
    "SELECT MVPnotes FROM plan WHERE MVPname = '" + MVPname + "'",
    function (err, rows, fields) {
      if (rows.length == 1) {
        // Create the object to save the data.
        var app = {
          MVPnotes: rows[0].MVPnotes,
        };
      }
      MVPnotes2 =
        stamp(req.session.username, MVPState) +
        "\r" +
        MVPnotes1 +
        "\r" +
        app.MVPnotes;

      connection.query(
        "update plan set MVPdesc=? ,MVPstartDate=?, MVPendDate=?, MVPnotes=? where MVPname=?",
        [MVPdesc, MVPstartDate, MVPendDate, MVPnotes2, MVPname],
        function (err, result) {
          if (err) {
            console.log("code=" + err);
            res.render("cPlan", {
              isLoggedIn: req.session.username,
              "error@plan update": err,
            });
          } else {
            res.render("index", { isLoggedIn: req.session.username });
          }
        }
      );
    }
  );
  // main post
});
// ################################################################
// ## Rel CRUD
// ## Release Request Related Operations
// ## The relationship between Rel & App is :
// ## Rel(1) <--> App (1..N)
// ## App defines the meta data for the application environment which
// ## each release is associated to. This would include the:
// ##	1. external and internal release label numbering
// ## 	2. product and production baseline
// ##
// ## The Rel has an implicit workflow that is defined and viewed in
// ## the kanban interface. Queries on the Rel reuqest are implictly
// ## represented in the kanban state column
// ################################################################
//
// ################################################################
// ## User Story #3
// ## As a Developer, I want to create a Release Request
// ## after sprint planning
// ################################################################
// Persona: Developer
// State	1. - start
// Action:	1. Create Release Request
// Note:
// Post-Action:
// 			1. list app to create Release Request from
//
app.get("/list_App_4rel", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query("SELECT * FROM app", function (err, rows, fields) {
    if (err) {
      res
        .status(500)
        .json({
          status_code: 500,
          status_message: "internal server error@listing",
        });
    } else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {
        // Create an object to save current row's data
        var app = {
          Appname: rows[i].Appname,
          Appdesc: rows[i].Appdesc,
          AppRel: rows[i].AppRel,
          AppPBL: rows[i].AppPBL,
          AppGit: rows[i].AppGit,
          AppWS: rows[i].AppWS,
          AppBuildSvr: rows[i].AppBuildSvr,
          AppBuildSvrWS: rows[i].AppBuildSvrWS,
          AppTestSvr: rows[i].AppTestSvr,
          AppTestSvrWS: rows[i].AppTestSvrWS,
          AppColour: rows[i].AppColour,
        };
        // Add object into array
        appList.push(app);
      }
      // Render index.pug page using array
      res.render("cRelListApp", {
        appList: appList,
        isLoggedIn: req.session.username,
      });
    }
  });
});
// ################################################################
// Persona: Developer
// State	1. - start
// Action:	1. Create Release Request
// Note:
// Post-Action:
// 			1. get app detail for rel creation
//
app.get("/createRel/:Appname", function (req, res) {
  // Do the query to get data.
  connection.query(
    "SELECT * FROM app WHERE Appname = '" + req.params.Appname + "'",
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@detail",
          });
      } else {
        // Check if the result is found or not
        // console.log(rows.length);
        if (rows.length == 1) {
          // Create the object to save the data.
          // Crname,Crdesc ,Crapp,CrRelItr,CrCodebase,CrState,CrRelName,CrNote,CrDevbranch,CrRelbranch,CrRelType,CrDeployType,Crcreator,Crowner
          var app = {
            Appname: rows[0].Appname,
            Appdesc: rows[0].Appdesc,
            AppRel: rows[0].AppRel,
            AppPBL: rows[0].AppPBL,
            AppGit: rows[0].AppGit,
            AppWS: rows[0].AppWS,
            AppBuildSvr: rows[0].AppBuildSvr,
            AppBuildSvrWS: rows[0].AppBuildSvrWS,
            AppTestSvr: rows[0].AppTestSvr,
            AppTestSvrWS: rows[0].AppTestSvrWS,
            AppColour: rows[0].AppColour,
            popen: rows[0].popen,
            pwip: rows[0].pwip,
            preview: rows[0].preview,
            ptest: rows[0].ptest,
            puat: rows[0].puat,
            pdeliver: rows[0].pdeliver,
            pkiv: rows[0].pkiv,
            pcreate: rows[0].pcreate,
          };
          //############### getPermit ################
          //call Fn for db query with callback
          getPermit(app.pcreate, req.session.username, function (err, data) {
            console.log(" permission= " + app.pcreate);
            if (err) {
              console.log("Permission ERROR : ", err); // error handling code goes here
            } else {
              //console.log("result from db is : ",data); // code to execute on data retrieval
              if (data === 1) {
                // render the details.plug page.
                res.render("cRel", {
                  app: app,
                  isLoggedIn: req.session.username,
                });
              } else {
                console.log("No Permission to proceed", req.session);
                res.render("noPermit", { isLoggedIn: req.session.username });
              }
            }
          });
          // ########### end getPermit ##############
        } else {
          // render not found page
          res
            .status(404)
            .json({
              "create rel: mstatus_code": 404,
              status_message: "Not found",
            });
        }
      }
    }
  );
});
// ################################################################
// Persona: Developer
// State	1. - start --> open
// Action:	1. Create Release Request
// Note:
// Post-Action:
// 			1. create interim release label with _<app>-date-time format
//
app.post("/createRel/Create_Rel", (req, res) => {
  var {
    Crname,
    Crdesc,
    Crapp,
    CrRelType,
    CrDeployType,
    CrColour,
    workonaction,
  } = req.body;
  var myDate = new Date();
  var dummy, dummy1;
  dummy = 0;
  dummy = "";
  // console.log(req.session.username);

  Crname = "_" + Crapp + "-" + GetMyDate(); //myDate.getMonth() +myDate.getDate() +myDate.getHours() +'_'+myDate.getMinutes()+'_'+myDate.getSeconds();
  console.log(Crname);
  console.log(CrRelType + " /" + CrDeployType);

  connection.query(
    "insert into rel (Crname, Crdesc, Crapp, CrRelItr, CrState, Crcreator, Crowner, CrRelType, CrDeployType, CrColour) values (?,?,?,?,?,?,?,?,?,?)",
    [
      Crname,
      Crdesc,
      Crapp,
      0,
      "open",
      req.session.username,
      req.session.username,
      CrRelType,
      CrDeployType,
      CrColour,
    ],
    function (err, result) {
      if (err) {
        console.log("code=" + err);
        res.render("index", { error: err, isLoggedIn: req.session.username });
      } else {
        res.render("index", { isLoggedIn: req.session.username });
      }
    }
  );
});
//
// ###############################################################
// ## User Story #4:
// ## As a Lead, I want to approve the release request to start
// ## development work.
// ################################################################
// Persona: Lead
// State	1. Open -> WIP
// Action:	1. Approve Release Request
// Note:
//			No checking of permission since it is intended for all
//			to be able to see what request is in the open state
//
//			1. get rel list for approval
//
app.get("/approve_rel", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query(
    'SELECT * FROM rel where Crstate="open"',
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrColour: rows[i].CrColour,
          };
          // Add object into array
          appList.push(app);
        }
        // Render index.pug page using array
        res.render("listRelapprove", {
          appList: appList,
          isLoggedIn: req.session.username,
          opType: "Approve",
        });
      }
    }
  );
});
// ################################################################
// Persona: Lead
// State	1. Open -> WIP
// Action:	1. Approve Release Request
// Note:
// 			1. get rel detail for approval
//
app.get("/getRel/:Appname", function (req, res) {
  // Do the query to get data.
  connection.query(
    "SELECT * FROM rel WHERE Crname = '" + req.params.Appname + "'",
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@detail",
          });
      } else {
        // Check if the result is found or not
        if (rows.length == 1) {
          // Create the object to save the data.
          var app = {
            Crname: rows[0].Crname,
            Crdesc: rows[0].Crdesc,
            Crapp: rows[0].Crapp,
            CrRelItr: rows[0].CrRelItr,
            CrCodebase: rows[0].CrCodebase,
            CrState: rows[0].CrState,
            CrRelName: rows[0].CrRelName,
            CrNote: rows[0].CrNote,
            CrDevbranch: rows[0].CrDevbranch,
            CrRelbranch: rows[0].CrRelbranch,
            CrRelType: rows[0].CrRelType,
            CrDeployType: rows[0].CrDeployType,
            Crcreator: rows[0].Crcreator,
            Crowner: rows[0].Crowner,
            CrColour: rows[0].CrColour,
          };
          //############### getPermit ################
          // outer SQL to get App p<state>
          connection.query(
            "SELECT * FROM app WHERE Appname =? ",
            [app.Crapp],
            function (err, rows) {
              var pp = {
                popen: rows[0].popen,
                pwip: rows[0].pwip,
                preview: rows[0].preview,
                ptest: rows[0].ptest,
                puat: rows[0].puat,
                pdeliver: rows[0].pdeliver,
                pkiv: rows[0].pkiv,
                pcreate: rows[0].pcreate,
              };
              //############### getPermit ################
              //call Fn for db query with callback
              getPermit(pp.popen, req.session.username, function (err, data) {
                console.log(pp.popen);
                if (err) {
                  console.log("Permission ERROR : ", err); // error handling code goes here
                } else {
                  //console.log("result from db is : ",data); // code to execute on data retrieval
                  if (data === 1) {
                    // render the details.plug page.
                    // to determine what action is taken on the release request
                    //
                    res.render("approveRel", {
                      app: app,
                      isLoggedIn: req.session.username,
                    });
                  } else {
                    console.log("No Permission to proceed", req.session);
                    res.render("noPermit", {
                      isLoggedIn: req.session.username,
                    });
                  }
                }
              });
              // ########### end getPermit ##############
            }
          ); //outer sql to select from app
          // ########### end getPermit ##############
        } else {
          // render not found page
          res
            .status(404)
            .json({
              status_code: 404,
              "/getRel:Appname --> status_message": "Not found",
            });
        }
      }
    }
  );
});
// ################################################################
// Persona: Lead
// State	1. Open -> WIP
// Action:	1. Approve CR
// Note:
// Post-action:
// 			1. set release label
// 			2. set dev branch
// 			3. set code base
// 			4. create dev branch (git)
// 			5. update App release #
//
app.post("/getRel/approve_rel", (req, res) => {
  //app.post('/getApp/Update_App', function(req, res) {
  var {
    Crname,
    Crdesc,
    Crapp,
    CrRelItr,
    CrCodebase,
    CrState,
    CrRelName,
    CrNote,
    CrDevbranch,
    CrRelbranch,
    CrRelType,
    CrDeployType,
    Crcreator,
    Crowner,
    CrDevInst,
    CrRelInst,
    CrColour,
    workonaction,
  } = req.body;
  // console.log(req.body);
  //
  // 1. construct release_label
  //

  connection.query(
    "SELECT AppPrdBL,AppPbugrel,Appname, AppRel, AppPBL, AppGit, AppBuildSvr, AppWS, AppColour FROM app WHERE Appname = ?",
    [Crapp],
    function (err, result) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@approve RR",
          });
      } else {
        // Create an object to save current row's data
        //console.log("select row="+result.length);
        if (result.length > 0) {
          Object.keys(result).forEach(function (key) {
            var row = result[key];
            myAppname = row.Appname;
            myAppRel = row.AppRel;
            myAppPBL = row.AppPBL;
            myAppGit = row.AppGit;
            myAppBuildSvr = row.AppBuildSvr;
            myAppWS = row.AppWS;
            myAppColour = row.AppColour;
            myAppPbugrel = row.AppPbugrel;
            myAppPrdBL = row.AppPrdBL;
          });
        } else console.log("no result");
      }

      // 1.0 store original Crname
      oCrname = Crname;
      //
      if (workonaction == "approve") {
        // ##########################################################

        // 1.1 create Crname
        myAppRel++;
        Crname = Crapp + "_" + myAppRel;
        // 1.2 set release codebase
        CrCodebase = myAppPBL;
        // 1.3 set new state
        CrState = "wip";
        // 1.4 set release label
        CrRelName = Crname + "_" + CrRelItr;
        // 1.5 Git cmd to clone repo with branch
        CrDevbranch = myAppGit + "/Dev_" + Crname;
        // 1.6
        CrRelbranch = "-";
        // 1.7 set new owner
        Crowner = req.session.username;
        // 1.8 set Git clone Dev branch instruction
        CrDevInst = "git clone --branch Dev_" + Crname + " " + myAppGit;
        // 1.9 set Git clone Rel branch instruction
        CrRelInst = "";
        // 1.10
        CrRelItr = 0;
        // 1.11
        CrNote = stamp(Crowner, CrState) + "\r" + CrNote;
        //
        // ###############################################################
        // Post action integration: to create the dev branch from Master
        // test external calling of script
        //
        var srcBranch = "main";
        if (CrRelType == "pbug") {
          // pbug for production bug fix
          srcBranch = myAppPrdBL; // reference the Production Baseline (Rel branch)
          CrCodebase = myAppPrdBL; // update codebase with the production runtime BL instead
        }
        console.log(
          "...... calling external script: git_create_branch.sh @" + GetMyDate()
        );
        var child_process = require("child_process");
        //EXECUTE yourExternalJsFile.js
        child_process.execSync(
          '"C:\\Program Files\\Git\\git-bash.exe" .\\ws\\git_create_branch.sh ' +
            myAppWS +
            " " +
            myAppGit +
            " " +
            srcBranch +
            " Dev_" +
            Crname +
            " " +
            myAppname +
            " NoLock",
          (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
              console.log(`exec error: ${error}`);
            }
          }
        );
        // end of external calling of script
        //
        // ###############################################################
        // update app table with new appRel
        // console.log('update app set AppRel=? where Appname=?'+" ["+myAppRel+","+Crapp+"]");
        connection.query(
          "update app set AppRel=? where Appname=?",
          [myAppRel, Crapp],
          function (err, result) {
            if (err) {
              console.log("code=" + err);
              res.render("approveRel", {
                error: err,
                isLoggedIn: req.session.username,
              });
              //res.render('index', {error: err});
            } else console.log("AppRel :" + myAppRel);
          }
        );
      } else {
        CrState = "reject";
      }
      // update rel cr
      connection.query(
        "update rel set    Crname=?,   Crdesc=?,   CrRelItr=?,   CrCodebase=?,   CrState=?,   CrRelName=?,   CrNote=?,   CrDevbranch=?,   CrRelbranch=?,   CrRelType=?,   CrDeployType=?,    Crowner=? , CrDevInst=? where Crname=?",
        [
          Crname,
          Crdesc,
          CrRelItr,
          CrCodebase,
          CrState,
          CrRelName,
          CrNote,
          CrDevbranch,
          CrRelbranch,
          CrRelType,
          CrDeployType,
          Crowner,
          CrDevInst,
          oCrname,
        ],
        function (err, result) {
          if (err) {
            console.log("fail final rel update: " + err);
            //res.render('approveRel', {error: err});
            res.render("index", {
              error: err,
              isLoggedIn: req.session.username,
            });
          } else {
            res.render("index", { isLoggedIn: req.session.username });
          }
        }
      );
    }
  );
  // main post
});
// ################################################################
// Persona: Any
// State	1. Any
// Action:	1. None
// Note:
//			Get Release Request Details for Read Only.
//
app.get("/getRelAct_info/:Appname", function (req, res) {
  // Do the query to get data.
  connection.query(
    "SELECT * FROM rel WHERE Crname = '" + req.params.Appname + "'",
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@detail",
          });
      } else {
        // Check if the result is found or not
        if (rows.length == 1) {
          // Create the object to save the data.
          var app = {
            Crname: rows[0].Crname,
            Crdesc: rows[0].Crdesc,
            Crapp: rows[0].Crapp,
            CrRelItr: rows[0].CrRelItr,
            CrCodebase: rows[0].CrCodebase,
            CrState: rows[0].CrState,
            CrRelName: rows[0].CrRelName,
            CrNote: rows[0].CrNote,
            CrDevbranch: rows[0].CrDevbranch,
            CrDevInst: rows[0].CrDevInst,
            CrRelbranch: rows[0].CrRelbranch,
            CrRelType: rows[0].CrRelType,
            CrDeployType: rows[0].CrDeployType,
            Crcreator: rows[0].Crcreator,
            Crowner: rows[0].Crowner,
            CrColour: rows[0].CrColour,
            CrXname: rows[0].CrXname,
            CrXplan: rows[0].CrXplan,
          };
          res.render("detailRel_info", {
            app: app,
            isLoggedIn: req.session.username,
          });
        } else {
          // render not found page
          res
            .status(404)
            .json({
              status_code: 404,
              "rel info:Appname --> status_message": "Not found",
            });
        }
      }
    }
  );
});
//
//
// ################################################################
// ## User Story #5:
// ## As a developer, i want to update my dev progress in the release
// ## request and also to send my code for review (== merge request)
// ################################################################
// Persona: Developer / Lead
// State	1. any except open & close
// Action:	1. work on the CR
//			2. Promote to Review
// Note:
//       	** kaban access: to duplicate /getRelAct_info/workon_Rel
// 			list rel to select for update/promote/demote
//
app.get("/list_cr", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query(
    'SELECT * FROM rel where CrState= "wip"',
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrDevInst: rows[i].CrDevInst,
            CrRelInst: rows[i].CrRelInst,
            CrColour: rows[i].CrColour,
            CrXname: rows[i].CrXname,
            CrXplan: rows[i].CrXplan,
          };
          // Add object into array
          appList.push(app);
        }
        res.render("listRelCr", {
          appList: appList,
          isLoggedIn: req.session.username,
          opType: "Review",
        });
      }
    }
  );
});
// ################################################################
// Persona: Developer
// State	1. WIP --> [Review, WIP]
// Action:	1. work on the CR
//			2. Promote to Review
// Note:
// 			get selected rel details for update/promote
//
app.get("/getRelAct/:Appname", function (req, res) {
  // Do the query to get data.
  connection.query(
    "SELECT * FROM rel WHERE Crname = '" + req.params.Appname + "'",
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@detail",
          });
      } else {
        // Check if the result is found or not
        if (rows.length == 1) {
          // Create the object to save the data.
          var app = {
            Crname: rows[0].Crname,
            Crdesc: rows[0].Crdesc,
            Crapp: rows[0].Crapp,
            CrRelItr: rows[0].CrRelItr,
            CrCodebase: rows[0].CrCodebase,
            CrState: rows[0].CrState,
            CrRelName: rows[0].CrRelName,
            CrRelInst: rows[0].CrRelInst,
            CrNote: rows[0].CrNote,
            CrDevbranch: rows[0].CrDevbranch,
            CrDevInst: rows[0].CrDevInst,
            CrRelbranch: rows[0].CrRelbranch,
            CrRelType: rows[0].CrRelType,
            CrRelItr: rows[0].CrRelItr,
            CrDeployType: rows[0].CrDeployType,
            Crcreator: rows[0].Crcreator,
            Crowner: rows[0].Crowner,
            CrColour: rows[0].CrColour,
            CrXname: rows[0].CrXname,
            Crsonastatus: rows[0].Crsonastatus,
          };
          //############### getPermit ################
          // outer SQL to get App p<state>
          connection.query(
            "SELECT * FROM app WHERE Appname =? ",
            [app.Crapp],
            function (err, rows) {
              var pp = {
                AppPBL: rows[0].AppPBL,
                popen: rows[0].popen,
                pwip: rows[0].pwip,
                preview: rows[0].preview,
                ptest: rows[0].ptest,
                puat: rows[0].puat,
                pdeliver: rows[0].pdeliver,
                pkiv: rows[0].pkiv,
                pcreate: rows[0].pcreate,
                AppSonaQ: rows[0].AppSonaQ,
              };
              //############### getPermit ################
              //call Fn for db query with callback
              getPermit(pp.pwip, req.session.username, function (err, data) {
                console.log(pp.pwip + " -->" + app.Crapp);
                var aa = "Permission Denied !";
                if (err) {
                  console.log("Permission ERROR : ", err); // error handling code goes here
                } else {
                  //console.log("result from db is : ",data); // code to execute on data retrieval
                  if (data === 1) {
                    // render the details.plug page.
                    // to determine what action is taken on the release request
                    //
                    if (
                      app.CrCodebase === pp.AppPBL ||
                      app.CrRelType == "pbug"
                    ) {
                      console.log("Rel Branch--->" + app.CrRelbranch);
                      console.log("instruction--->" + app.CrRelInst);
                      aa = "code ok";
                    } else {
                      aa = pp.AppPBL;
                      console.log("new PBL=" + aa);
                    }
                    res.render("detailRel", {
                      app: app,
                      msg: aa,
                      isLoggedIn: req.session.username,
                    });
                  } else {
                    console.log(
                      "No Permission to proceed. Readonly allowed",
                      req.session
                    );
                    res.render("detailRel_info", {
                      app: app,
                      msg: aa,
                      isLoggedIn: req.session.username,
                    });
                  }
                }
              });
              // ########### end getPermit ##############
            }
          ); //outer sql to select from app
          // ########### end getPermit ##############
        } else {
          // render not found page
          res
            .status(404)
            .json({
              status_code: 404,
              "/getRel:Appname --> status_message": "Not found",
            });
        }
      }
    }
  );
});
// ################################################################
// Persona: Developer
// State	1. WIP --> [Review, WIP]
// Action:	1. work on the CR
//			2. Promote to Review
// Note:
//       	kaban access: to duplicate /getRelAct_info/workon_Rel
//
// Post-Action:
//			1. Update
//				a. Update CR notes
//			or
//			1. Review
//				a. Create rel label (Crname + iter #. eg nodejs-ex_2 + _1= nodejs-ex_2_1)
//				b. Create rel branch with rel label (code freeze for review) and lock rel branch
//				c. Trigger part of CI pipeline
//					i. Sonarqube
//					   	- Move source code to sonarqube server
//						- trigger scan
//
app.post("/getRelAct/workon_Rel", (req, res) => {
  var {
    Crsonastatus,
    Crname,
    Crdesc,
    Crdesc1,
    Crapp,
    CrRelItr,
    CrCodebase,
    CrState,
    CrRelName,
    CrNote,
    CrDevbranch,
    CrRelbranch,
    CrRelType,
    CrDeployType,
    Crcreator,
    Crowner,
    CrDevInst,
    CrRelInst,
    CrColour,
    CrNote1,
    workonAction,
    newPBL,
  } = req.body;
  // #############################################################
  // check what action is requested
  // #############################################################

  if (workonAction === "develop" || workonAction === "mergecode") {
    // ##### to Develop or update code merge status ######
    connection.query(
      "SELECT * FROM rel WHERE Crname =? ",
      [Crname],
      function (err, rows) {
        var pp = {
          CrNote: rows[0].CrNote,
        };
        // append notes
        var KrNote = stamp(req.session.username, CrState) + "\r" + CrNote1;
        CrNote = KrNote + "\r" + pp.CrNote;
        // Crdesc can be changed
        CrState = "wip"; // set the state to WIP
        if (workonAction === "mergecode") {
          // code merge status action
          console.log("merge code triggered.");
          connection.query(
            "update rel set CrCodebase=?, CrRelType=?, CrDeployType=?, CrState=?, Crdesc=?, CrNote=?, Crowner=? where Crname=?",
            [
              newPBL,
              CrRelType,
              CrDeployType,
              CrState,
              Crdesc,
              CrNote,
              req.session.username,
              Crname,
            ],
            function (err, result) {
              if (err) {
                console.log("fail to wip state rel update: " + err);
                //res.render('approveRel', {error: err});
                res.render("index", {
                  error: err,
                  isLoggedIn: req.session.username,
                });
              } else {
                res.render("index", { isLoggedIn: req.session.username });
              }
            }
          );
        } else {
          // develop action
          connection.query(
            "update rel set CrRelType=?, CrDeployType=?, CrState=?, Crdesc=?, CrNote=?, Crowner=? where Crname=?",
            [
              CrRelType,
              CrDeployType,
              CrState,
              Crdesc,
              CrNote,
              req.session.username,
              Crname,
            ],
            function (err, result) {
              if (err) {
                console.log("fail to wip state rel update: " + err);
                //res.render('approveRel', {error: err});
                res.render("index", {
                  error: err,
                  isLoggedIn: req.session.username,
                });
              } else {
                res.render("index", { isLoggedIn: req.session.username });
              }
            }
          );
        }
      }
    );
  } else {
    // === "review"	  // ##### to Review #######
    // 1. create the release branch
    //		a. lock the release branch
    // 2. perform the CI pipeline
    //		a. sonarqube scan
    // 3.
    // ############# assess application info ###############
    // outer SQL to get App information to support the post action operations
    // console.log("====> "+ Crapp);
    connection.query(
      "SELECT * FROM app WHERE Appname =? ",
      [Crapp],
      function (err, rows) {
        var pp = {
          Appname: rows[0].Appname,
          Appdesc: rows[0].Appdesc,
          AppRel: rows[0].AppRel,
          AppPBL: rows[0].AppPBL,
          AppGit: rows[0].AppGit,
          AppWS: rows[0].AppWS,
          AppBuildSvr: rows[0].AppBuildSvr,
          AppBuildSvrWS: rows[0].AppBuildSvrWS,
          AppTestSvr: rows[0].AppTestSvr,
          AppTestSvrWS: rows[0].AppTestSvrWS,
          AppColour: rows[0].AppColour,
          popen: rows[0].popen,
          pwip: rows[0].pwip,
          preview: rows[0].preview,
          ptest: rows[0].ptest,
          puat: rows[0].puat,
          pdeliver: rows[0].pdeliver,
          pkiv: rows[0].pkiv,
          pcreate: rows[0].pcreate,
          AppExec: rows[0].AppExec,
          AppSonaQ: rows[0].AppSonaQ,
          AppSonaS: rows[0].AppSonaS,
          AppSonaToken: rows[0].AppSonaToken,
          AppSonausr: rows[0].AppSonausr,
        };
        // ############## post-action ###############
        //
        connection.query(
          "SELECT * FROM rel WHERE Crname =? ",
          [Crname],
          function (err, rows) {
            var crp = {
              CrNote: rows[0].CrNote,
            }; // some how the form passing did not send back CrNote
            if (Crdesc1 === "" || Crdesc1 === null) {
              console.log(">>>" + Crdesc);
            } else Crdesc = Crdesc1;
            // create rel label
            CrRelItr++; // increase iter by 1
            CrRelName = Crname + "_" + CrRelItr;
            CrRelbranch = "Rel_" + CrRelName;
            // create the rel branch
            //
            // ###############################################################
            // # Post action: to create the rel branch from dev branch
            // # Note: lock branch
            // ###############################################################
            // # The following "lock" code is deprecated. The locking is achieved
            // # by creating a protected branch with the policy in GitHub -->
            // # 1. Settings--> Branches --> Branch protection rules :
            // # 2. Define branch protection rules to disable force pushing....
            // #       a. create Branch name pattern			: Rel_*
            // #       b. Protect matching branches
            // #          i.  Require a pull request b4 merging	: checked
            // #          ii. Requite approvals                	: checked
            // # ##############################################################

            // test external calling of script
            console.log(
              "...... calling external script: git_create_branch.sh @" +
                GetMyDate() +
                " for " +
                CrRelbranch
            );
            var child_process = require("child_process");
            //EXECUTE yourExternalJsFile.js
            // "C:\\Program Files\\Git\\git-bash.exe" ==> AppExec
            child_process.execSync(
              pp.AppExec +
                " .\\ws\\git_create_branch.sh " +
                pp.AppWS +
                " " +
                pp.AppGit +
                " " +
                Crname +
                " " +
                CrRelbranch +
                " " +
                Crapp +
                " lock",
              (error, stdout, stderr) => {
                console.log(`${stdout}`);
                console.log(`${stderr}`);
                if (error !== null) {
                  console.log(`exec error: ${error}`);
                }
              }
            );
            // end of external calling of script
            // ###############################################################
            // ## CI pipeline starts here
            // ###############################################################
            //  RunCode Quality Scan
            //	1. run sonarqube scan
            // ###############################################################					///	echo "workspace local  =  $1"
            // echo "release_branch   =  $2"
            // echo "SonaQube         =  $3"
            // echo "SonaScanner      =  $4"
            // echo "SonaToken        =  $5"
            // echo "Git Rpo          =  $6"
            // echo "App              =  $7"
            // echo "Sona user        =  $8"
            console.log(
              pp.AppExec +
                " .\\ws\\iscan_sonarqube.sh " +
                pp.AppWS +
                " " +
                CrRelbranch +
                " " +
                pp.AppSonaQ +
                " " +
                pp.AppSonaS +
                " " +
                pp.AppSonaToken +
                " " +
                pp.AppGit +
                " " +
                Crapp +
                " " +
                pp.AppSonausr
            );
            child_process.exec(
              pp.AppExec +
                " .\\ws\\iscan_sonarqube.sh " +
                pp.AppWS +
                " " +
                CrRelbranch +
                " " +
                pp.AppSonaQ +
                " " +
                pp.AppSonaS +
                " " +
                pp.AppSonaToken +
                " " +
                pp.AppGit +
                " " +
                Crapp +
                " " +
                pp.AppSonausr,
              (error, stdout, stderr) => {
                console.log(`${stdout}`);
                if (error !== null) {
                  console.log(`exec error: ${error}`);
                }
              }
            );

            CrState = "review"; // set the state to WIP
            // append notes
            var sonamsg =
              stamp("system-messenger", CrState) +
              "\n Sonarqube Scan started . \n";
            var KrNote =
              sonamsg + stamp(req.session.username, CrState) + "\r" + CrNote1;
            CrNote = KrNote + "\r" + crp.CrNote;
            // system update on sonarqube scan message

            // Crdesc can be changed
            // update rel request
            CrRelInst = "git clone --branch " + CrRelbranch + " " + pp.AppGit;
            console.log("rel branch ===>" + CrRelInst);
            connection.query(
              "update rel set Crsonastatus=?, CrRelType=?, CrDeployType=?, CrRelName=?, CrRelbranch=?, CrRelInst=?,  CrRelItr=?, CrState=?, Crdesc=?, CrNote=?, Crowner=? where Crname=?",
              [
                "",
                CrRelType,
                CrDeployType,
                CrRelName,
                CrRelbranch,
                CrRelInst,
                CrRelItr,
                CrState,
                Crdesc,
                CrNote,
                req.session.username,
                Crname,
              ],
              function (err, result) {
                if (err) {
                  console.log("fail to wip state rel update: " + err);
                  //res.render('approveRel', {error: err});
                  res.render("index", {
                    error: err,
                    isLoggedIn: req.session.username,
                  });
                } else {
                  res.render("index", { isLoggedIn: req.session.username });
                }
              }
            );
          }
        );
        //
        // ########### end post-action ##############
      }
    ); //outer sql to select from app
    // ########## end of assess application info ###########
  }
  //
  // end of action to act on
  // #############################################################
});
//
//
// ################################################################
// ## User Story #6:
// ## As a lead, i want to review the source code before triggering
// ## the CICD pipeline for build & deploy to test env. & test
// ################################################################
// Persona: Lead
// State	1. Review --> [Test, WIP] (merge request)
// Action:	1. Review & approve the CR --> test
//			2. Revie & reject the CR --> IP
// Note:
//       	list all requests that are in Review State
//
// Post-Action:
// pre-condition: sonarqube scan is completed with anomalies
//
app.get("/list_cr4Review", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query(
    'SELECT * FROM rel where CrState= "review"',
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrDevInst: rows[i].CrDevInst,
            CrRelInst: rows[i].CrRelInst,
            CrColour: rows[i].CrColour,
            CrXplan: rows[i].CrXplan,
            CrXname: rows[i].CrXname,
          };
          // Add object into array
          appList.push(app);
        }
        // Render index.pug page using array {isLoggedIn: req.session.username}
        res.render("listRelCr4Review", {
          appList: appList,
          isLoggedIn: req.session.username,
          opType: "Test",
        });
      }
    }
  );
});
// ################################################################
// Persona: Lead
// State	1. Review --> [Test, WIP] (merge request)
// Action:	1. Review & approve the CR --> test
//			2. Revie & reject the CR --> IP
// Note:
// 			get selected rel details for review
//
app.get("/getRelAct4review/:Appname", function (req, res) {
  // Do the query to get data.
  connection.query(
    "SELECT * FROM rel WHERE Crname = '" + req.params.Appname + "'",
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@detail",
          });
      } else {
        // Check if the result is found or not
        if (rows.length == 1) {
          // Create the object to save the data.
          var app = {
            Crname: rows[0].Crname,
            Crdesc: rows[0].Crdesc,
            Crapp: rows[0].Crapp,
            CrRelItr: rows[0].CrRelItr,
            CrCodebase: rows[0].CrCodebase,
            CrState: rows[0].CrState,
            CrRelName: rows[0].CrRelName,
            CrNote: rows[0].CrNote,
            CrDevbranch: rows[0].CrDevbranch,
            CrDevInst: rows[0].CrDevInst,
            CrRelInst: rows[0].CrRelInst,
            CrRelbranch: rows[0].CrRelbranch,
            CrRelType: rows[0].CrRelType,
            CrDeployType: rows[0].CrDeployType,
            Crcreator: rows[0].Crcreator,
            Crowner: rows[0].Crowner,
            CrColour: rows[0].CrColour,
            CrXplan: rows[0].CrXplan,
            CrXname: rows[0].CrXname,
            Crsonastatus: rows[0].Crsonastatus,
          };
          //############### getPermit ################
          // outer SQL to get App p<state>
          connection.query(
            "SELECT * FROM app WHERE Appname =? ",
            [app.Crapp],
            function (err, rows) {
              var pp = {
                AppPBL: rows[0].AppPBL,
                popen: rows[0].popen,
                pwip: rows[0].pwip,
                preview: rows[0].preview,
                ptest: rows[0].ptest,
                puat: rows[0].puat,
                pdeliver: rows[0].pdeliver,
                pkiv: rows[0].pkiv,
                AppSonaQ: rows[0].AppSonaQ,
                pcreate: rows[0].pcreate,
              };
              //############### getPermit ################
              //call Fn for db query with callback

              // check what is the incoming state with the p<state> var
              var pointer;
              switch (app.CrState) {
                case "review":
                  pointer = pp.preview;
                  break;
                case "kiv":
                  pointer = pp.pkiv;
                  break;
                case "test":
                  pointer = pp.ptest;
                  break;
                case "uat":
                  pointer = pp.puat;
                  break;
                case "deliver":
                  pointer = pp.pdeliver;
                  break;
                default:
                  pointer = "not_found";
              }
              console.log("pointer=" + pointer);

              getPermit(pointer, req.session.username, function (err, data) {
                console.log(app.CrState + "=" + pointer + " -->" + app.Crapp);
                var aa = "permission denied!";
                if (err) {
                  console.log("Permission ERROR : ", err); // error handling code goes here
                } else {
                  //console.log("result from db is : ",data); // code to execute on data retrieval
                  if (data === 1) {
                    // render the details.plug page.
                    // to determine what action is taken on the release request
                    //
                    var planList = [];
                    connection.query(
                      "SELECT MVPname FROM plan",
                      function (err, rows, fields) {
                        // Render index.pug page using array {isLoggedIn: req.session.username}
                        for (var j = 0; j < rows.length; j++) {
                          var plan = {
                            MVPname: rows[j].MVPname,
                          };
                          planList.push(plan);
                        }
                        // prep the list of MVP Plan
                        console.log("-->" + app.CrRelbranch);

                        if (
                          app.CrCodebase === pp.AppPBL ||
                          CrRelType == "pbug"
                        ) {
                          console.log("Release Branch--->" + app.CrRelbranch);
                          console.log("Instruction--->" + app.CrRelInst);
                          aa = "code ok";
                        } else {
                          aa = pp.AppPBL;
                          console.log("new PBL=" + aa);
                        }
                        if (app.CrState === "review") {
                          console.log("review check sonarResult");
                          sonarResult(
                            "localhost:9000",
                            "admin",
                            "password",
                            app.CrRelbranch,
                            function (sonastatus) {
                              console.log("callee received: " + sonastatus);
                              if (sonastatus.includes("completed")) {
                                app.Crsonastatus =
                                  pp.AppSonaQ +
                                  "dashboard?id=" +
                                  app.CrRelbranch;
                                // update the CR table
                                connection.query(
                                  "update rel set Crsonastatus=? WHERE Crname = ?",
                                  [app.Crsonastatus, app.Crname],
                                  function (err, result) {
                                    if (err) console.log(err);
                                  }
                                );

                                res.render("detailRel_lead", {
                                  planList: planList,
                                  app: app,
                                  msg: aa,
                                  isLoggedIn: req.session.username,
                                });
                              } else
                                res.render("detailRel_lead", {
                                  planList: planList,
                                  app: app,
                                  msg: aa,
                                  isLoggedIn: req.session.username,
                                });
                            }
                          );
                        } else
                          res.render("detailRel_lead", {
                            planList: planList,
                            app: app,
                            msg: aa,
                            isLoggedIn: req.session.username,
                          });
                        // end render page
                      }
                    ); // connection to plan
                  } else {
                    console.log(
                      "No Permission to proceed. Readonly allowed",
                      req.session
                    );
                    //res.render('noPermit', {isLoggedIn: req.session.username})
                    if (app.CrState === "review") {
                      console.log("review check sonarResult");
                      sonarResult(
                        "localhost:9000",
                        "admin",
                        "password",
                        app.CrRelbranch,
                        function (sonastatus) {
                          console.log("callee received: " + sonastatus);
                          // http://localhost:9000/dashboard?id=Rel_nodejs-ex_10_50
                          if (sonastatus.includes("completed"))
                            app.Crsonastatus =
                              pp.AppSonaQ + "dashboard?id=" + app.CrRelbranch;
                          res.render("detailRel_info", {
                            app: app,
                            msg: aa,
                            isLoggedIn: req.session.username,
                          });
                        }
                      );
                    } else
                      res.render("detailRel_info", {
                        app: app,
                        msg: aa,
                        isLoggedIn: req.session.username,
                      });
                  }
                }
              });
              // ########### end getPermit ##############
            }
          ); //outer sql to select from app
          // ########### end getPermit ##############
        } else {
          // render not found page
          res
            .status(404)
            .json({
              status_code: 404,
              "/getRel:Appname --> status_message": "Not found",
            });
        }
      }
    }
  );
});
// ################################################################
// Persona: Lead
// State	1. Review --> [Test, WIP] (merge request) (post function reuse for UAT, Deliver, Close)
// Action:	1. Review & approve the CR --> test
//			2. Revie & reject the CR --> IP
// Note:
//
//			1. Demote (reject) to WIP state
//				a. Update CR notes
//			or
//			1. Review & approve to Test state
//				a. Trigger part of CICD pipeline
//					i.   move src code using release label to the build server
//					ii.  trigger the build.sh in the build server workspace.
//					iii. publish build output to Nexus Repo
//							1. prepare release package
//							2. zip & tar release package
//							3. checkin to Nexus repo using release label
//					iv.  move release package from Nexus repo to Test svr
//							1. create workspace and expand the zip package
//					v.	 execute the deploy.sh <config_env>
//					vi.	 verify (smoke test) with curl the availability of the app in the test env.
app.post("/getRelAct4review/workon_Rel", (req, res) => {
  var {
    oCrState,
    Crname,
    Crdesc,
    Crdesc1,
    Crapp,
    CrRelItr,
    CrCodebase,
    CrState,
    CrRelName,
    CrNote,
    CrDevbranch,
    CrRelbranch,
    CrRelType,
    CrDeployType,
    Crcreator,
    Crowner,
    CrDevInst,
    CrRelInst,
    CrColour,
    CrNote1,
    workonAction,
    CrXname,
    CrXplan,
  } = req.body;
  // #############################################################
  // check what action is requested
  // #############################################################
  console.log("into .....4review/workon_rel");
  switch (workonAction) {
    case "buat":
      workonAction = "uat";
      console.log("-->" + workonAction);
    case "bwip":
      if (workonAction !== "uat") workonAction = "wip";
      console.log("-->" + workonAction);
    case "bkiv":
      if (workonAction !== "uat" && workonAction !== "wip")
        workonAction = "kiv";
      console.log("-->" + workonAction);

      // check if Crname is the request in the serialised zone
      // ############# assess application info ###############
      // outter SQL to get App information to support the post action operations
      connection.query(
        "SELECT * FROM app WHERE Appname =? ",
        [Crapp],
        function (err, rows) {
          var pp = {
            Appname: rows[0].Appname,
            Appdesc: rows[0].Appdesc,
            AppRel: rows[0].AppRel,
            AppPBL: rows[0].AppPBL,
            AppGit: rows[0].AppGit,
            AppWS: rows[0].AppWS,
            AppBuildSvr: rows[0].AppBuildSvr,
            AppBuildSvrWS: rows[0].AppBuildSvrWS,
            AppTestSvr: rows[0].AppTestSvr,
            AppTestSvrWS: rows[0].AppTestSvrWS,
            AppColour: rows[0].AppColour,
            popen: rows[0].popen,
            pwip: rows[0].pwip,
            preview: rows[0].preview,
            ptest: rows[0].ptest,
            puat: rows[0].puat,
            pdeliver: rows[0].pdeliver,
            pkiv: rows[0].pkiv,
            pcreate: rows[0].pcreate,
            AppExec: rows[0].AppExec,
            AppBin: rows[0].AppBin,
            AppBin_user: rows[0].AppBin_user,
            AppBin_pw: rows[0].AppBin_pw,
            AppMVPrel: rows[0].AppMVPrel,
            AppPbugrel: rows[0].AppPbugrel,
            AppPrdBL: rows[0].AppPrdBL,
            AppSezone: rows[0].AppSezone,
          };
          // ############## post-action ####################################
          // ## Git merge Rel_<branch> to main
          // ###############################################################
          // test external calling of script

          CrState = workonAction;
          console.log("here =" + CrState);
          console.log("CrRelType=" + CrRelType);
          connection.query(
            "SELECT * FROM rel WHERE Crname =? ",
            [Crname],
            function (err, rows) {
              var crp = {
                iCrNote: rows[0].CrNote,
              }; // some how the form passing did not send back CrNote
              if (Crdesc1 === "" || Crdesc1 === null) {
                console.log("Shoud be empty [" + Crdesc1 + "]");
              } else {
                Crdesc = Crdesc1;
                console.log("Desc >>> " + Crdesc);
              }
              // append notes
              console.log("state= " + CrState);
              var KrNote =
                stamp(req.session.username, CrState) + "\r" + CrNote1;
              CrNote = KrNote + "\r" + crp.iCrNote;
              // Crdesc can be changed
              // update rel request
              connection.query(
                "update rel set CrState=?, Crdesc=?, CrNote=?, Crowner=? where Crname=?",
                [CrState, Crdesc, CrNote, req.session.username, Crname],
                function (err, result) {
                  if (err) {
                    console.log("fail to deliver state rel update: " + err);
                    res.render("index", {
                      error: err,
                      isLoggedIn: req.session.username,
                    });
                  } else {
                    // update App
                    connection.query(
                      "update app set AppSezone=? where Appname=?",
                      [null, Crapp],
                      function (err, result) {
                        if (err) {
                          console.log("fail to uat state app update: " + err);
                          res.render("index", {
                            error: err,
                            isLoggedIn: req.session.username,
                          });
                        } else {
                          res.render("index", {
                            isLoggedIn: req.session.username,
                          });
                        }
                      }
                    );
                  }
                }
              );
            }
          );
          //
          // ########### end post-action ##############
        }
      ); //outter sql to select from app
      // ########## end of assess application info ###########
      break;
    case "wip":
    case "kiv":
    case "imo":
    case "review":
      connection.query(
        "SELECT * FROM rel WHERE Crname =? ",
        [Crname],
        function (err, rows) {
          var pp = {
            CrNote: rows[0].CrNote,
          };
          // append notes
          CrState = workonAction;
          var KrNote = stamp(req.session.username, CrState) + "\r" + CrNote1;
          CrNote = KrNote + "\r" + pp.CrNote;
          // Crdesc can be changed
          CrState = workonAction; // set the state to WIP or KIV
          console.log("here =" + CrState);
          connection.query(
            "update rel set CrState=?, Crdesc=?, CrNote=?, Crowner=? ,CrXplan=? where Crname=?",
            [CrState, Crdesc, CrNote, req.session.username, CrXplan, Crname],
            function (err, result) {
              if (err) {
                console.log("fail to wip/kiv state rel update: " + err);
                //res.render('approveRel', {error: err});
                res.render("index", {
                  error: err,
                  isLoggedIn: req.session.username,
                });
              } else {
                // if Crname is in AppSezone then init Sezone=null as a transition out of the Serialized zone.
                connection.query(
                  "SELECT * FROM app WHERE Appname =? ",
                  [Crapp],
                  function (err, rows) {
                    var pp = {
                      Appname: rows[0].Appname,
                      AppSezone: rows[0].AppSezone,
                    };
                    // ############## post-action ####################################
                    // ## Git merge Rel_<branch> to main
                    // ###############################################################
                    // test external calling of script
                    if (pp.AppSezone === Crname) {
                      // update AppSezone to null
                      // update App
                      connection.query(
                        "update app set AppSezone=?  where Appname=?",
                        [null, Crapp],
                        function (err, result) {
                          if (err) {
                            console.log(
                              "fail to transit out of Sezone state app update: " +
                                err
                            );
                            res.render("index", {
                              error: err,
                              isLoggedIn: req.session.username,
                            });
                          } else {
                            res.render("index", {
                              isLoggedIn: req.session.username,
                            });
                          }
                        }
                      );
                    } else
                      res.render("index", { isLoggedIn: req.session.username });
                  }
                );
              }
            }
          );
        }
      );
      break;
    case "uat": // 1. create new external label, 2. merge Rrel branch to main branch
      // ############# assess application info ###############
      // outter SQL to get App information to support the post action operations
      console.log("====> " + Crapp + " - Desc: " + Crdesc1);
      connection.query(
        "SELECT * FROM app WHERE Appname =? ",
        [Crapp],
        function (err, rows) {
          var pp = {
            Appname: rows[0].Appname,
            Appdesc: rows[0].Appdesc,
            AppRel: rows[0].AppRel,
            AppPBL: rows[0].AppPBL,
            AppGit: rows[0].AppGit,
            AppWS: rows[0].AppWS,
            AppBuildSvr: rows[0].AppBuildSvr,
            AppBuildSvrWS: rows[0].AppBuildSvrWS,
            AppTestSvr: rows[0].AppTestSvr,
            AppTestSvrWS: rows[0].AppTestSvrWS,
            AppColour: rows[0].AppColour,
            popen: rows[0].popen,
            pwip: rows[0].pwip,
            preview: rows[0].preview,
            ptest: rows[0].ptest,
            puat: rows[0].puat,
            pdeliver: rows[0].pdeliver,
            pkiv: rows[0].pkiv,
            pcreate: rows[0].pcreate,
            AppExec: rows[0].AppExec,
            AppBin: rows[0].AppBin,
            AppBin_user: rows[0].AppBin_user,
            AppBin_pw: rows[0].AppBin_pw,
            AppMVPrel: rows[0].AppMVPrel,
            AppPbugrel: rows[0].AppPbugrel,
            AppPrdBL: rows[0].AppPrdBL,
          };
          // ############## post-action ####################################
          // ## Git merge Rel_<branch> to main
          // ###############################################################
          // test external calling of script
          CrState = "uat";
          console.log("here =" + CrState);
          console.log("CrRelType=" + CrRelType);
          pp.AppMVPrel = pp.AppMVPrel + 1; // set the new external release number
          if (CrRelType === "pbug") {
            // production bug would need manual code merge. To render manualMerge.pug
            pp.AppPbugrel = pp.AppPbugrel + 1;
            console.log("bug rel=" + pp.AppPbugrel + " for " + pp.Appname);
          } else {
            console.log(
              "...... calling external script: git_merge_main.sh @" +
                GetMyDate() +
                " for " +
                CrRelbranch +
                "@" +
                Crapp
            );
            var child_process = require("child_process");
            //
            //
            temp =
              pp.AppExec +
              " .\\ws\\git_merge_main.sh " +
              pp.AppWS +
              " " +
              pp.AppGit +
              " " +
              CrRelbranch +
              " " +
              "main" +
              " " +
              Crapp;
            console.log(temp);
            /*
											echo "Workpath   : $1"
											echo "Git Repo   : $2"
											echo "src Br     : $3"
											echo "tgt Br     : $4"
											echo "App name   : $5"
										*/
            // "C:\\Program Files\\Git\\git-bash.exe" ==> AppExec            $1             $2             $3            $4		  $5
            child_process.execSync(
              pp.AppExec +
                " .\\ws\\git_merge_main.sh " +
                pp.AppWS +
                " " +
                pp.AppGit +
                " " +
                CrRelbranch +
                " " +
                "main" +
                " " +
                Crapp,
              (error, stdout, stderr) => {
                console.log(`${stdout}`);
                console.log(`${stderr}`);
                if (error !== null) {
                  console.log(`exec error: ${error}`);
                }
              }
            );
            // end of external calling of script
            // ###############################################################
          }

          connection.query(
            "SELECT * FROM rel WHERE Crname =? ",
            [Crname],
            function (err, rows) {
              var crp = {
                iCrNote: rows[0].CrNote,
              }; // some how the form passing did not send back CrNote
              if (Crdesc1 === "" || Crdesc1 === null) {
                console.log("Shoud be empty [" + Crdesc1 + "]");
              } else {
                Crdesc = Crdesc1;
                console.log("Desc >>> " + Crdesc);
              }
              // append notes
              console.log("state= " + CrState);
              var KrNote =
                stamp(req.session.username, CrState) + "\r" + CrNote1;
              CrNote = KrNote + "\r" + crp.iCrNote;
              // Crdesc can be changed
              CrState = workonAction; // set the state to test
              // update external label
              CrXname = CrXplan + "." + pp.AppPbugrel + "." + pp.AppMVPrel;
              // update Plan iter in App ; as above in AppPbugrel & AppMVPrel
              // update AppPBL -> product BL
              pp.AppPBL = CrRelbranch;
              CrCodebase = pp.AppPBL;
              // update rel request
              connection.query(
                "update rel set CrCodebase=?, CrXname=?, CrState=?, Crdesc=?, CrNote=?, Crowner=? , CrXplan=? where Crname=?",
                [
                  CrCodebase,
                  CrXname,
                  CrState,
                  Crdesc,
                  CrNote,
                  req.session.username,
                  CrXplan,
                  Crname,
                ],
                function (err, result) {
                  if (err) {
                    console.log("fail to uat state rel update: " + err);
                    res.render("index", {
                      error: err,
                      isLoggedIn: req.session.username,
                    });
                  } else {
                    //
                    // update App
                    connection.query(
                      "update app set AppPBL=?, AppPbugrel=?, AppMVPrel=?  where Appname=?",
                      [pp.AppPBL, pp.AppPbugrel, pp.AppMVPrel, Crapp],
                      function (err, result) {
                        if (err) {
                          console.log("fail to uat state app update: " + err);
                          res.render("index", {
                            error: err,
                            isLoggedIn: req.session.username,
                          });
                        } else {
                          connection.query(
                            "update plan set MVPasRel=?, MVPState=? , MVPXname=?  where MVPname=?",
                            [CrRelbranch, CrState, CrXname, CrXplan],
                            function (err, result) {
                              if (err) {
                                res.render("index", {
                                  error: err,
                                  isLoggedIn: req.session.username,
                                });
                              } else {
                                if (CrRelType == "pbug")
                                  res.render("manualMerge", {
                                    CrRelbranch: CrRelbranch,
                                    isLoggedIn: req.session.username,
                                  });
                                else
                                  res.render("index", {
                                    isLoggedIn: req.session.username,
                                  });
                              }
                            }
                          );
                        }
                      }
                    );
                  }
                }
              );
            }
          );
          //
          // ########### end post-action ##############
        }
      ); //outter sql to select from app
      // ########## end of assess application info ###########
      break;
    case "test":
      // === check if the sonarqube scan is ok.
      sonarqube_result = true; // test line
      console.log("CrRelbranch>>>" + CrRelbranch);

      if (sonarqube_result) {
        // ############# assess application info ###############
        // outter SQL to get App information to support the post action operations
        console.log("====> " + Crapp);
        connection.query(
          "SELECT * FROM app WHERE Appname =? ",
          [Crapp],
          function (err, rows) {
            var pp = {
              Appname: rows[0].Appname,
              Appdesc: rows[0].Appdesc,
              AppRel: rows[0].AppRel,
              AppPBL: rows[0].AppPBL,
              AppGit: rows[0].AppGit,
              AppWS: rows[0].AppWS,
              AppBuildSvr: rows[0].AppBuildSvr,
              AppBuildSvrWS: rows[0].AppBuildSvrWS,
              AppTestSvr: rows[0].AppTestSvr,
              AppTestSvrWS: rows[0].AppTestSvrWS,
              AppColour: rows[0].AppColour,
              popen: rows[0].popen,
              pwip: rows[0].pwip,
              preview: rows[0].preview,
              ptest: rows[0].ptest,
              puat: rows[0].puat,
              pdeliver: rows[0].pdeliver,
              pkiv: rows[0].pkiv,
              pcreate: rows[0].pcreate,
              AppExec: rows[0].AppExec,
              AppBin: rows[0].AppBin,
              AppBin_user: rows[0].AppBin_user,
              AppBin_pw: rows[0].AppBin_pw,
            };
            // ############## post-action ###############
            //
            // ## CD pipeline starts here
            // # ##############################################################
            // test external calling of script
            console.log(
              "...... calling external script: ibuild_pipeline.sh @" +
                GetMyDate() +
                " for " +
                CrRelbranch +
                "@" +
                Crapp
            );
            var child_process = require("child_process");
            /*
										  echo "workspace local  =  $1"
										  echo "release_branch   =  $2"
										  echo "build svr        =  $3"
										  echo "build workspace  =  $4"
										  echo "Nexus repo       =  $5"
										  echo "Git Rpo          =  $6"
										  echo "App              =  $7"
										  echo "nexus_user	     =  $8"
										  echo "nexus_pw		   =  $9"
										  echo "test svr		   = ${10} "
										  echo "test workspace  =  ${11}"
									  */
            // "C:\\Program Files\\Git\\git-bash.exe" ==> AppExec        $1             $2           $3                 $4					  $5             $6 	        $7			     $8				 $9  	          $10				$11
            child_process.execSync(
              pp.AppExec +
                " .\\ws\\ibuild_pipeline.sh " +
                pp.AppWS +
                " " +
                CrRelbranch +
                " " +
                pp.AppBuildSvr +
                " " +
                pp.AppBuildSvrWS +
                " " +
                pp.AppBin +
                " " +
                pp.AppGit +
                " " +
                Crapp +
                " " +
                pp.AppBin_user +
                " " +
                pp.AppBin_pw +
                " " +
                pp.AppTestSvr +
                " " +
                pp.AppTestSvrWS,
              (error, stdout, stderr) => {
                console.log(`${stdout}`);
                console.log(`${stderr}`);
                if (error !== null) {
                  console.log(`exec error: ${error}`);
                }
              }
            );
            // end of external calling of script
            // ###############################################################

            connection.query(
              "SELECT * FROM rel WHERE Crname =? ",
              [Crname],
              function (err, rows) {
                var crp = {
                  iCrNote: rows[0].CrNote,
                }; // some how the form passing did not send back CrNote

                console.log("==> " + Crdesc);
                if (Crdesc1 === "" || Crdesc1 === null) {
                  console.log(Crdesc);
                } else {
                  Crdesc = Crdesc1;
                }
                // append notes
                var KrNote =
                  stamp(req.session.username, CrState) + "\r" + CrNote1;
                CrNote = KrNote + "\r" + crp.iCrNote;
                // Crdesc can be changed
                CrState = workonAction; // set the state to test
                // update rel request
                connection.query(
                  "update rel set  CrState=?, Crdesc=?, CrNote=?, Crowner=? where Crname=?",
                  [CrState, Crdesc, CrNote, req.session.username, Crname],
                  function (err, result) {
                    if (err) {
                      console.log("fail to wip state rel update: " + err);
                      //res.render('approveRel', {error: err});
                      res.render("index", {
                        error: err,
                        isLoggedIn: req.session.username,
                      });
                    } else {
                      res.render("index", { isLoggedIn: req.session.username });
                    }
                  }
                );
              }
            );
            //
            // ########### end post-action ##############
          }
        ); //outter sql to select from app
        // ########## end of assess application info ###########
      } else {
        res.render("sonarqube_failed", { isLoggedIn: req.session.username });
      }
      break;
    case "deliver":
      // check if serialized zone is "open"
      // ############# assess application info ###############
      // outter SQL to get App information to support the post action operations
      console.log("====> " + Crapp + " - Desc: " + Crdesc1);
      connection.query(
        "SELECT * FROM app WHERE Appname =? ",
        [Crapp],
        function (err, rows) {
          var pp = {
            Appname: rows[0].Appname,
            Appdesc: rows[0].Appdesc,
            AppRel: rows[0].AppRel,
            AppPBL: rows[0].AppPBL,
            AppGit: rows[0].AppGit,
            AppWS: rows[0].AppWS,
            AppBuildSvr: rows[0].AppBuildSvr,
            AppBuildSvrWS: rows[0].AppBuildSvrWS,
            AppTestSvr: rows[0].AppTestSvr,
            AppTestSvrWS: rows[0].AppTestSvrWS,
            AppColour: rows[0].AppColour,
            popen: rows[0].popen,
            pwip: rows[0].pwip,
            preview: rows[0].preview,
            ptest: rows[0].ptest,
            puat: rows[0].puat,
            pdeliver: rows[0].pdeliver,
            pkiv: rows[0].pkiv,
            pcreate: rows[0].pcreate,
            AppExec: rows[0].AppExec,
            AppBin: rows[0].AppBin,
            AppBin_user: rows[0].AppBin_user,
            AppBin_pw: rows[0].AppBin_pw,
            AppMVPrel: rows[0].AppMVPrel,
            AppPbugrel: rows[0].AppPbugrel,
            AppPrdBL: rows[0].AppPrdBL,
            AppSezone: rows[0].AppSezone,
            AppProduction: rows[0].AppProduction,
          };
          // ############## post-action ####################################
          // ## Git merge Rel_<branch> to main
          // ###############################################################
          // test external calling of script
          if (pp.AppSezone !== "" && pp.AppSezone !== null) {
            res.render("Sezone", {
              CrXname: CrXname,
              AppSezone: pp.AppSezone,
              isLoggedIn: req.session.username,
            });
          } else {
            console.log(
              "The current production runtime is the latest (is the greatest) :" +
                pp.AppProduction +
                "(" +
                pp.AppPrdBL +
                ") vs " +
                CrXname
            );
            if (pp.AppPrdBL >= CrXname) {
              res.render("stale", {
                AppProduction: pp.AppProduction,
                AppPrdBL: pp.AppPrdBL,
                CrXname: CrXname,
                isLoggedIn: req.session.username,
              });
            } else {
              CrState = "deliver";
              console.log("here =" + CrState);
              console.log("CrRelType=" + CrRelType);
              connection.query(
                "SELECT * FROM rel WHERE Crname =? ",
                [Crname],
                function (err, rows) {
                  var crp = {
                    iCrNote: rows[0].CrNote,
                  }; // some how the form passing did not send back CrNote
                  if (Crdesc1 === "" || Crdesc1 === null) {
                    console.log("Shoud be empty [" + Crdesc1 + "]");
                  } else {
                    Crdesc = Crdesc1;
                    console.log("Desc >>> " + Crdesc);
                  }
                  // append notes
                  console.log("state= " + CrState);
                  var KrNote =
                    stamp(req.session.username, CrState) + "\r" + CrNote1;
                  CrNote = KrNote + "\r" + crp.iCrNote;
                  // Crdesc can be changed
                  // update rel request
                  connection.query(
                    "update rel set  CrState=?, Crdesc=?, CrNote=?, Crowner=? where Crname=?",
                    [CrState, Crdesc, CrNote, req.session.username, Crname],
                    function (err, result) {
                      if (err) {
                        console.log("fail to deliver state rel update: " + err);
                        res.render("index", {
                          error: err,
                          isLoggedIn: req.session.username,
                        });
                      } else {
                        // update App
                        connection.query(
                          "update app set AppSezone=?  where Appname=?",
                          [Crname, Crapp],
                          function (err, result) {
                            if (err) {
                              console.log(
                                "fail to uat state app update: " + err
                              );
                              res.render("index", {
                                error: err,
                                isLoggedIn: req.session.username,
                              });
                            } else {
                              res.render("index", {
                                isLoggedIn: req.session.username,
                              });
                            }
                          }
                        );
                      }
                    }
                  );
                }
              );
            }
            //
            // ########### end post-action ##############
          } // to move to end of block
        }
      ); //outter sql to select from app
      // ########## end of assess application info ###########
      break;
    case "close":
      // check if Crname is the request  in the serialised zone
      // ############# assess application info ###############
      // outter SQL to get App information to support the post action operations
      connection.query(
        "SELECT * FROM app WHERE Appname =? ",
        [Crapp],
        function (err, rows) {
          var pp = {
            Appname: rows[0].Appname,
            Appdesc: rows[0].Appdesc,
            AppRel: rows[0].AppRel,
            AppPBL: rows[0].AppPBL,
            AppGit: rows[0].AppGit,
            AppWS: rows[0].AppWS,
            AppBuildSvr: rows[0].AppBuildSvr,
            AppBuildSvrWS: rows[0].AppBuildSvrWS,
            AppTestSvr: rows[0].AppTestSvr,
            AppTestSvrWS: rows[0].AppTestSvrWS,
            AppColour: rows[0].AppColour,
            popen: rows[0].popen,
            pwip: rows[0].pwip,
            preview: rows[0].preview,
            ptest: rows[0].ptest,
            puat: rows[0].puat,
            pdeliver: rows[0].pdeliver,
            pkiv: rows[0].pkiv,
            pcreate: rows[0].pcreate,
            AppExec: rows[0].AppExec,
            AppBin: rows[0].AppBin,
            AppBin_user: rows[0].AppBin_user,
            AppBin_pw: rows[0].AppBin_pw,
            AppMVPrel: rows[0].AppMVPrel,
            AppPbugrel: rows[0].AppPbugrel,
            AppPrdBL: rows[0].AppPrdBL,
            AppSezone: rows[0].AppSezone,
          };
          // ############## post-action ####################################
          // ## Git merge Rel_<branch> to main
          // ###############################################################
          // test external calling of script
          if (pp.AppSezone !== Crname) {
            res.render("Sezone", {
              Crname: Crname,
              AppSezone: pp.AppSezone,
              isLoggedIn: req.session.username,
            });
          } else {
            CrState = "close";
            console.log("here =" + CrState);
            console.log("CrRelType=" + CrRelType);
            connection.query(
              "SELECT * FROM rel WHERE Crname =? ",
              [Crname],
              function (err, rows) {
                var crp = {
                  iCrNote: rows[0].CrNote,
                }; // some how the form passing did not send back CrNote
                if (Crdesc1 === "" || Crdesc1 === null) {
                  console.log("Shoud be empty [" + Crdesc1 + "]");
                } else {
                  Crdesc = Crdesc1;
                  console.log("Desc >>> " + Crdesc);
                }
                // append notes
                console.log("state= " + CrState);
                var KrNote =
                  stamp(req.session.username, CrState) + "\r" + CrNote1;
                CrNote = KrNote + "\r" + crp.iCrNote;
                // Crdesc can be changed
                // update rel request
                connection.query(
                  "update rel set  CrState=?, Crdesc=?, CrNote=?, Crowner=? where Crname=?",
                  [CrState, Crdesc, CrNote, req.session.username, Crname],
                  function (err, result) {
                    if (err) {
                      console.log("fail to deliver state rel update: " + err);
                      res.render("index", {
                        error: err,
                        isLoggedIn: req.session.username,
                      });
                    } else {
                      // update App
                      connection.query(
                        "update app set AppSezone=?,AppProduction=? ,AppPrdBL=? where Appname=?",
                        [null, CrXname, CrRelbranch, Crapp],
                        function (err, result) {
                          if (err) {
                            console.log("fail to uat state app update: " + err);
                            res.render("index", {
                              error: err,
                              isLoggedIn: req.session.username,
                            });
                          } else {
                            res.render("index", {
                              isLoggedIn: req.session.username,
                            });
                          }
                        }
                      );
                    }
                  }
                );
              }
            );
            //
            // ########### end post-action ##############
          } // to move to end of block
        }
      ); //outter sql to select from app
      // ########## end of assess application info ###########
      break;
  }
  // end of swtch statement

  //
  // end of action to act on
  // #############################################################
});
//
//
// ################################################################
// ## User Story #7:
// ## As a lead, i want to promote the request to UAT and create a
// ## new product baseline
// ################################################################
// Persona: Lead
// State	1. Test --> [uat, wip, review]
// Action:  1. promote or update
// Note:
//       	list all requests that are in Test State
//
// Post-Action:
// pre-condition:
//
app.get("/list_cr4UAT", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query(
    'SELECT * FROM rel where CrState="test" ',
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrDevInst: rows[i].CrDevInst,
            CrRelInst: rows[i].CrRelInst,
            CrColour: rows[i].CrColour,
            CrXplan: rows[i].CrXplan,
            CrXname: rows[i].CrXname,
          };
          // Add object into array
          appList.push(app);
        }
        // Render index.pug page using array {isLoggedIn: req.session.username}
        res.render("listRelCr4Review", {
          appList: appList,
          isLoggedIn: req.session.username,
          opType: "UAT",
        });
      }
    }
  );
});
//
//
// ################################################################
// ## User Story #8:
// ## As a lead, i want to update the status ofthe release request
// ################################################################
// Persona: Lead
// State	1. Test, UAT, Deliver
// Action:  1. promote or update
// Note:
//       	list all requests that are in Test, UAT, or Deliver State
//
// Post-Action:
// pre-condition:
//
app.get("/list_cr4StatusUpdate", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query(
    'SELECT * FROM rel where CrState="uat" or CrState="deliver"',
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrDevInst: rows[i].CrDevInst,
            CrRelInst: rows[i].CrRelInst,
            CrColour: rows[i].CrColour,
          };
          // Add object into array
          appList.push(app);
        }
        // Render index.pug page using array {isLoggedIn: req.session.username}
        res.render("listRelCr4Review", {
          appList: appList,
          isLoggedIn: req.session.username,
          opType: "State Update",
        });
      }
    }
  );
});
//
//
// ################################################################
// ## User Story #9:
// ## As a lead, i want to revive KIV release request
// ################################################################
// Persona: Lead
// State	1. KIV --> [Review]
// Action:
// Note:
//       	list all requests that are in KIV State
//
// Post-Action:
// pre-condition:
//
app.get("/list_cr4Revive", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query(
    'SELECT * FROM rel where CrState= "kiv"',
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrDevInst: rows[i].CrDevInst,
            CrRelInst: rows[i].CrRelInst,
            CrColour: rows[i].CrColour,
            CrXplan: rows[i].CrXplan,
            CrXname: rows[i].CrXname,
          };
          // Add object into array
          appList.push(app);
        }
        // Render index.pug page using array {isLoggedIn: req.session.username}
        //res.render('listRelCr4Revive', {"appList": appList , isLoggedIn: req.session.username});
        res.render("listRelCr4Review", {
          appList: appList,
          isLoggedIn: req.session.username,
          opType: "Revive",
        });
      }
    }
  );
});
//
//
// ################################################################
// ## User Story #9:
// ## As a lead, i want to revive KIV release request
// ################################################################
// Persona: Lead
// State	1. view Retired Request
// Action:
// Note:
//       	list all requests that are in retired State
//
// Post-Action:
// pre-condition:
//
app.get("/list_retired", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query(
    'SELECT * FROM rel where CrState= "imo" or Crstate="reject" or Crstate="kiv"',
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrDevInst: rows[i].CrDevInst,
            CrRelInst: rows[i].CrRelInst,
            CrColour: rows[i].CrColour,
            CrXplan: rows[i].CrXplan,
            CrXname: rows[i].CrXname,
          };
          // Add object into array
          appList.push(app);
        }
        // Render index.pug page using array {isLoggedIn: req.session.username}
        //res.render('listRelCr4Revive', {"appList": appList , isLoggedIn: req.session.username});
        res.render("listRelCr4Review", {
          appList: appList,
          isLoggedIn: req.session.username,
          opType: "Viewing Purpose",
        });
      }
    }
  );
});
//
// ################################################################
// ## User Story #11:
// ## As a lead, i want to Close the release request
// ################################################################
// Persona: Lead
// State	1. Deliver --> [close]
// Action:
// Note:
//       	list all requests that are in Deliver State
//
// Post-Action:
// pre-condition:
//
app.get("/close_cr", function (req, res) {
  var appList = [];
  // Do the query to get data.
  connection.query(
    'SELECT * FROM rel where CrState= "deliver"',
    function (err, rows, fields) {
      if (err) {
        res
          .status(500)
          .json({
            status_code: 500,
            status_message: "internal server error@listing",
          });
      } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {
          // Create an object to save current row's data
          var app = {
            Crname: rows[i].Crname,
            Crdesc: rows[i].Crdesc,
            Crapp: rows[i].Crapp,
            CrRelItr: rows[i].CrRelItr,
            CrCodebase: rows[i].CrCodebase,
            CrState: rows[i].CrState,
            CrRelName: rows[i].CrRelName,
            CrNote: rows[i].CrNote,
            CrDevbranch: rows[i].CrDevbranch,
            CrRelbranch: rows[i].CrRelbranch,
            CrRelType: rows[i].CrRelType,
            CrDeployType: rows[i].CrDeployType,
            Crcreator: rows[i].Crcreator,
            Crowner: rows[i].Crowner,
            CrDevInst: rows[i].CrDevInst,
            CrRelInst: rows[i].CrRelInst,
            CrColour: rows[i].CrColour,
            CrXplan: rows[i].CrXplan,
            CrXname: rows[i].CrXname,
          };
          // Add object into array
          appList.push(app);
        }
        // Render index.pug page using array {isLoggedIn: req.session.username}
        //res.render('listRelCr4Revive', {"appList": appList , isLoggedIn: req.session.username});
        res.render("listRelCr4Review", {
          appList: appList,
          isLoggedIn: req.session.username,
          opType: "Close",
        });
      }
    }
  );
});
// ################################################################
/* App listening on port */
// ################################################################
app.listen(port, hostname, () => {
  console.log(`L1Ds app listening at http://${hostname}:${port}`);
});

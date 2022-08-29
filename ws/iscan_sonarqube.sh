#!/bin/bash
							#// TO DO:
							#//	a. Trigger part of CICD pipeline
							#//		i.   move src code using release label to the build server
							#//		ii.  trigger the build.sh in the build server workspace.
							#//		iii. publish build output to Nexus Repo
							#//				1. prepare release package
							#//				2. zip & tar release package
							#//				3. checkin to Nexus repo using release label
							#//		iv.  move release package from Nexus repo to Test svr
                            #//				1. create workspace and expand the zip package
							#//		v.	 execute the deploy.sh <config_env>
							#//		vi.	 verify (smoke test) with curl the availability of the app in the test env. 

# 
#		Replace curl using the linux curl for windows: https://curl.se/windows/
#		
# remember to set the sonar.login=admin and sonar.password =token
#
#
#
pwd
echo "workspace local  =  $1"
echo "release_branch   =  $2"
echo "SonaQube         =  $3"
echo "SonaScanner      =  $4"
echo "SonaToken        =  $5"
echo "Git Rpo          =  $6"
echo "App              =  $7"
echo "Sonarusr         =  $8"


# mkdir tmp
#read -p "Press [Enter] key to start backup..."

# create & load the source package
cd $1
pwd
# create folder to load the source 
mkdir $2
cd $2
pwd
# git clone --branch nodejs-ex_2 https://github.com/chhoo/nodejs-ex
git clone --branch $2 $6
#
# go to source code path
#
cd $7
cd src

#
# start the sonar
#
#~/Documents/sonar-scanner/bin/sonar-scanner.bat -D"sonar.projectKey=nodejs-ex" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=87a3b3c13d5ea8281dee8f9ba84dc120585b08ab" 
pwd

#read -p "Press [Enter] key to start build process..."

#
# prepare sonar-project properties
#
echo sonar.projectName=$2 > sonar-project.properties
echo sonar.projectKey=$2 >> sonar-project.properties
echo sonar.sourceEncoding=UTF-8 >>sonar-project.properties
echo sonar.sources=. >> sonar-project.properties

#
# prepare sonar-scanner properties
#
echo sonar.host.url=$3 > $4/../conf/sonar-scanner.properties
#echo sonar.login=$5 >> $4/../conf/sonar-scanner.properties
echo sonar.login=$8 >> $4/../conf/sonar-scanner.properties
echo sonar.password=$5 >> $4/../conf/sonar-scanner.properties

#
echo sonar.sourceEncoding=UTF-8 >> $4/../conf/sonar-scanner.properties

echo sonarqube path = $4 
# echo $4 -D\"sonar.projectKey=$2\" -D\"sonar.sources=.\" -D\"sonar.host.url=$3\" -D\"sonar.login=$5\" -X 

#read -p "Press [Enter] key to start scan process..."
sleep 10

$4/sonar-scanner.bat &

# # $4 -D"sonar.projectKey=$2" -D"sonar.sources=." -D"sonar.host.url=$3" -D"sonar.login=$5" -X

# read -p "Press [Enter] key to start build process..."

# #
# # done
# #

# # API to get status of sonarqube
# # http://localhost:9000/api/qualitygates/project_status?projectKey=Rel_nodejs-ex_10_50
# # http://localhost:9000/dashboard?id=Rel_nodejs-ex_10_52
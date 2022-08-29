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

# important:
#		Replace curl using the linux curl for windows: https://curl.se/windows/
# copy new curl.exe to system32 folder as Ucurl.exe
#		
pwd
echo "1.workspace local  =  $1"
echo "2.release_branch   =  $2"
echo "3.build svr        =  $3"
echo "4.build workspace  =  $4"
echo "5.Nexus svr        =  $5"
echo "6.Git Rpo          =  $6"
echo "7.App              =  $7"
echo "8.nexus_user	     =  $8"
echo "9.nexus_pw	     =  $9"
echo "10.test svr		 =  ${10} "
echo "11. test workspace =  ${11}"

# mkdir tmp
# read -p "Press [Enter] key to start backup..."

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
# create the build svr folders and move the src package over under the release_label folder
#
# ssh user@localhost "mkdir $4\$2"
# scp [options] src_file host:tgt_folder
scp -r $1/$2 $3:$4 
#
# kick start the build script :  build.sh
# note: windows powershell only runs .ps1 extension for bash script 
#
echo Build path@
echo $4/$2/$7/build
ssh $3 "cd $4/$2/$7/build ; cp ./build.sh  ./build.ps1 ; ./build.ps1"


# read -p "Press [Enter] key to start build process..."
#
# copy the /bin folder back to depot to package the binary to be published to Nexus
#

#
# 1. zip the binary package
# 2. Publish binary package to Nexus
# nexus = http://localhost:8081/repository/nodejs-ex
echo  "cd $4/$2/ ; pwd; tar -zcvf ./$2.tgz ./$7/bin ./$7/deploy ./$7/config; Ucurl -v -u $8:$9 --upload-file $2.tgz  $5/$2.tgz ; cd $4/ ; rm -r -fo ./$2/" 

#ssh $3 "cd $4/$2/ ; pwd; tar -zcvf ./$2.tgz ./$7/bin ./$7/deploy ./$7/config; curl -v -u $8:$9 --upload-file $2.tgz  $5/$2.tgz ; cd $4/ ; rm -r -fo ./$2/"
ssh $3 "cd $4/$2/ ; pwd; tar -zcvf ./$2.tgz ./$7/bin ./$7/deploy ./$7/config; Ucurl -v --user $8:$9 --upload-file $2.tgz  $5/$2.tgz ; cd $4/ ; rm -r -fo ./$2/"

#read -p "Press [Enter] key to start build process..."

#ssh $3 "Ucurl -v -u $8:$9 --upload-file $2.tgz  $5/$2.tgz"
#
# Deploy to test svr
#
# 1. extract package from Nexus server
# 2. move package to test server
# 3. untar package on test server
# 4. run deployment script on test server

# set local L1DS working environment
cd $1
cd $2
pwd 
# 1. download package from Nexus repo
Ucurl -u $8:$9 -X GET $5/$2.tgz --output $2.tgz
# 2. move package to the test server
scp $2.tgz ${10}:${11}
# 3. untar .tgz on test svr
ssh ${10} "cd ${11}; mkdir $2; cd $2 ; mv ../$2.tgz . ; tar -xvf $2.tgz"

# read -p "Press [Enter] key to start build process..."

# 4. run the deployment script on the test server
#
# Please review the deploy script as there is a hardcoded dir path in the serv_env parameter.
#
ssh ${10} "cd ${11}/$2/$7/deploy; cp ./deploy.sh ./deploy.ps1 ;.\deploy.ps1 test"

# 5. clean up deployment folder on the local worksppace 
cd $1
rm -rf $2

#read -p "Press [Enter] key to start build process..."

# 6. clean up deployment folder on the test svr 
# ssh ${10} "cd ${11} ; rm -r -fo $2"
# #
# # done
# #


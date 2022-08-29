#!/bin/bash
#
# passing arguments
#
echo "Workpath   1: $1"
echo "Git Repo   2: $2"
echo "src Br     3: $3"
echo "tgt Br     4: $4"
echo "App name   5: $5"
# echo "Lock Tgt Br: $6"
# #original working code
# #AUTU_REPO=`sed -e "s/\/\//\/\/${7}@/g" <<< $2`
#AUTU_REPO=https://0107821cedcf7445b94a680e0e5088fc2210b55f@github.abc.com/abc-singapore/testjira.git
#
# #######################
#
# eg. git_create_branch.sh 
#                           ~/L1ws/L1 
#                                        https://github.com/chhoo/nodejs-ex 
#                                                                            master 
#                                                                                   nodejs-ex_8 
#                                                                                                 nodejx-ex [nolock]
#
#
#
git_repo=$(basename $2  | cut -d'.' -f 1)
echo "Repo name  : $git_repo"
pwd
#
# Create working folder [workpath]/[release tag]
#

cd $1
pwd
mkdir $3
cd $3
pwd
#git
# Clone local repo
#
git clone --branch $3 $2
#read -p "Press [Enter] key to start branch creation..."
pwd
cd $5
pwd
#
# Create a new branch "new_branch" with the same state as "old_branch"
# cmd: git checkout -b new_branch old_branch
#
git status
#git add -A 
#git commit -m "add all files....from automation" 
git checkout main
git pull
git commit -a -m "merge-pull"
git merge $3  -m "merged"
git add .
git commit -a -m "merge-commit"
git push 

#read -p "Press [Enter] key to start backup..."

#
# Remove workspace
#
cd $1
pwd
rm -rf $3
#
#################### End ##############


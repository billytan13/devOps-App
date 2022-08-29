#!/bin/bash
#
# passing arguments
#
echo "Workpath   : $1"
echo "Git Repo   : $2"
echo "Release tag: $3"
echo "App name   : $4"
echo "Template WS: $5"
#
# #######################
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
pwd
cd $3
pwd
#
# Create git local repo
#
git clone $2
pwd
cd $4
pwd
touch $(echo $3.tag)
#mkdir src
#touch src/.gitkeep
#mkdir build
#touch build/.gitkeep
#mkdir deploy
#touch deploy/.gitkeep
#mkdir config
#touch config/.gitkeep
#
# cp template folders & files from AppTemplateWS folder 
#
cp -r $5/* .

git add .
git commit -m "$3 initialisation"
git ls-remote --heads origin
git push -u origin

#
# Remove workspace
#
cd $1
pwd
rm -rf $3
#
#################### End ##############
# read -p "Press [Enter] key to start backup..."

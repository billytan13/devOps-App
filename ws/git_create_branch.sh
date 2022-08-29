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
mkdir $4
cd $4
#
# Clone local repo
#
git clone $2 -b $3
#read -p "Press [Enter] key to start branch creation..."

# #git clone $AUTU_REPO -b $3 $3
pwd
cd $5
pwd
#
# Create a new branch "new_branch" with the same state as "old_branch"
# cmd: git checkout -b new_branch old_branch
#

git branch $4
git checkout $4
#touch $(echo $4.tag)
git add .
git commit -a -m $4
#git ls-remote --heads origin
git push -u origin $4

#read -p "Press [Enter] key to start branch creation..."
#
# lock branch
#
# #################################################################
# The following "lock" code is deprecated. The locking is achieved 
# by creating a protect branch with the policy in GitHub -->
#    Settings--> Branches --> Branch protection rules :
#       "Define branch protection rules to disablr force pushing...."
#       create Branch name pattern:  Rel_*
#       Protect matching branches
#          Require a pull request b4 merging: "checked"
#          Requite approvals                : "checked"
#       include administrator               : "checked"
# 
# Prevent push to master except for repo administrator
#       create Branch name pattern:  main
#       Protect matching branches
#          Require a pull request b4 merging: "checked"
#          Requite approvals                : "checked"
#
# #################################################################
# You can force everyone to submit a merge request, rather than allowing them to check in directly to a protected branch. This is compatible with workflows like the GitLab workflow.
#
# 1.Go to your project and select Settings > Repository.
# 2.Expand Protected branches.
# 3.From the Branch dropdown menu, select the branch you want to protect.
# 4.From the Allowed to merge list, select Developers + Maintainers.
# 5.From the Allowed to push list, select No one.
# 6.Select Protect.
#
# #if [ $7 == "lock" ]
# #then
# #     #echo "good lock !!!!!"
# #     echo "Locking branch : $4"
# #     ORG_REPO=`echo ${2}|cut -d '/' -f4-|cut -d '.' -f1`

# #BRANCH=$4
# #TOKEN=$6
# #curl -k -s -X PUT -H "Authorization: token ${TOKEN}" --data '{"required_status_checks":null,"enforce_admins": true,"required_pull_request_reviews":null,"restrictions": {"users": [],"teams": [] }}'  https://api.github.abc.com/repos/abc-singapore/TestOpenShift2/branches/jiratest_2_0/protection
# #
# #    if [ "$?" = "0" ]; then
# #        echo "branch locked successfully "
# #        exit 0
# #    else
# #        echo "Error while locking branch!" 1>&2
# #        exit 1
# #    fi
    #
    # ansible remote file update
    #
# fi
#
# Remove workspace
#
cd $1
pwd
rm -rf $4
#
#################### End ##############


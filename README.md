# frontend-tutorial

  Q: how do you create a local repo?  
  
  one way is to clone remote repo.  
  git clone https://github.com/abdullah12/frontend-tutorial.git  

  Q: how do you get the remote repo url?  
  
  git config --get remote.origin.url  
  and it will print :  
  https://github.com/abdullah12/frontend-tutorial.git  

  or git remote -v 
  and it will print :
  origin  https://github.com/abdullah12/frontend-tutorial.git (fetch)
  origin  https://github.com/abdullah12/frontend-tutorial.git (push)

  Q: how do you add a remote repo if you create the repo using git init?

  git remote add origin https://github.com/user/repo.git
  git remote set-url origin https://github.com/USERNAME/REPOSITORY.git

  Q: how do you configure git so that it can update remote repo?
  
  git config --global user.name "John Doe"
  git config --global user.email johndoe@example.com  
  git config --list
  git config username



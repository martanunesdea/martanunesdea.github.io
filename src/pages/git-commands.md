---
title: Git notes
description: This is a summary of git commands I've used
tags: ['post', 'dog']
date: 2019-06-11
layout: post.njk
---
## Branching
```
$ git checkout -b newbranchname
```

Which is shorthand for:

```
$ git branch newbranchname
$ git checkout newbranchname
```

## Reverting commits
```
$ git reset
```

## Reverting commits that have already been pushed
This is a "nuclear" option and should not be used in branches where there's co-development going on. Simply put, by using this command you could be rendering the other person's work useless. There's also a lot of other options between "git reset" a commit in your working copy and the below command. I'll try to fill in those gaps in the near future..
The below command is to be used if, you've pushed one or two commits to your remote branch and want to completely undo them, leaving no audit trail behind.
```
$ git reset <commit sha>
$ git push origin --force
```
If the --force option is omitted, git raises warning about overwriting current commits in the remote origin. 

## Removing from version control
For a file (or multiple files..)
```
git rm --cached filexample.txt
```
For a folder:
```
git rm -r --cached folder
```

## Stashing
This command comes in useful when you're not ready to commit changes but also don't want to revert them.
````
git stash
```
will allow you to stash the changes on a branch, so that your working copy remains effectively clean and you can checkout different branches, etc.
```
git stash pop
```
will retrieve your saved changes from memory and apply them to whichever branch you're working on.


## Rebase
```
git rebase --interactive
```
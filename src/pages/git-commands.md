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

## Reverting commits
```
$ git reset
```


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
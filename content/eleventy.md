---
title: Setting up a website with EleventyJS
description: This is a post on My Blog about agile frameworks.
tags: ['notes']
date: 2021-09-01
layout: post.njk
---
For a while, I've entertained the idea of building a very basic personal site with pure HTML and CSS. Given the practicalities of hosting a static website on Github Pages, I thought that would suffice my needs and spare me some time. 

However, I soon realised that I needed a templating engine if I wanted to avoid having to implement 1 small change across multiple files.


## Template engines

Python is best known for its practical automation programs, right? I thought I could easily write up a Python script that would take the HTML of an article and embed it within my base HTML file. I created this script and generated several HTML files and was very pleased. However, I soon realised that there was a few other functionalities that I wasn't going to have the time to program onto this template.

Because I had used Flask and Ninja before, I was tempted to just borrow the Ninja functionality to generate my templates. 

I made a quick google search and soon got a bit overwhelmed with all the new Python static site generators that were out there. 

I quickly stumbled onto EleventyJS, and soon realised this was all I needed. 

Even though EleventyJS is a static site generator, it offers a very simple and minimal approach (unlike GatsbyJS, etc.). 

Here's how I started.
## Downloaded EleventyJS
``` text/2-3
mkdir eleventy-sample
cd eleventy-sample
npm init -y
npm install --save-dev @11ty/eleventy
npx @11ty/eleventy
``` 

## Tested it out on 2 sample files
``` text/2-3
echo '<!doctype html><html><head><title>Page title</title></head><body><p>Hi</p></body></html>' > index.html
echo '# Page header' > README.md
npx @11ty/eleventy
``` 
First, we're creating two sample files.

Then, call eleventy program. 

This will look for "templateable" files, e.g. markdown, html, etc. and generate them into their own html file.


Looked simple enough!
Ok, let's with a real HTML template.

## Tested it with a nonjuncks template
So I created a non-juncks file that served as a layout template, a bit like this: 
``` text/2-3
<!-- template.njk -->
---
title: My Rad Blog
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
  </head>
  <body>
    {{ content | raw }}
  </body>
</html>
```

Then, I created a couple of markdown files that would borrow from this template:
```
<!-- samplefile1.md -->
---
layout: template.njk
my_title: My Rad Markdown Blog Post
---
# { {  my_title_here }  }  
```

Then checked what eleventy would produce, with this command:
```
npx @11ty/eleventy --serve
```
This creates a server that will watch for any changes and serve new content as needed.
The results were two separate html files inside the base html template provided. Happy days! So far, eleventJS was doing exactly what was written in the package and I was very satisfied.

At this point, I copied across my "base" html file from my existing website and copied it onto my "template.njk" file. I checked my localhost server and there it was! The sample file was embedded my existing HTML file (with existing CSS too!)
Ok... but I want my home page to look a bit different than my posts. How could I do that?

## Structuring project
Unfortunately, the documentation is not great for how to set-up your project and how to get on your feet. It shows you some good started projects and I guess you're just meant to take it from there.
After having a look here's how I structured my project:
```
-- src
  -- _includes
    -- _layouts
    -- style
  -- _site
  -- pages
eleventy.js
```

In eleventy.js, I established all of these directores:
```
return {
        templateFormats: ['njk', 'md', 'html'],
        dir: {
          input: "src/pages",
          includes: "_includes",
          data: "_data",
          output: "_site",
          layouts: "../_includes/layouts"
        }
      }
```

With this organisation setup, I was able to create a few more templates on my "layouts" directory. And then, added more markdown files on my "pages" directory, which would borrow from one of the templates (base, homepage, postlist or post). 

The only thing that changed was the frontmatter of the markdown file. For instance, for my "list of articles" page, I created a markdown file like so:
```
---
title: Articles
date: 2018-05-01
layout: postlist.njk
---
```

## Using nunjucks filters
I had mentioned that I didn't require much from a static site generator, however there were essentially two small things that I couldn't quite generate with my own Python template and those were the following: 
- A 3-article list for my homepage, that gets updated as newer articles are written. 
- A list of articles that is sorted by date.

Whilst trying to tackle the first one, I quickly found a way to implement the second one. This was because the only required existing nonjucks features. All I had to do, was add a tag on each of the mardown files that were posts. Like so:
```
---
title: This is my first post
description: Some description about my first post
date: 2018-05-01
tags: post
layout: postlist.njk
---
```
This will generate a collection called "post" which nonjucks will be able to iterate over.

```
---
layout: base.njk
templateClass: tmpl-homepage
---
<h1>All articles</h1>
<hr>
{- for post in collections.post | reverse -}
  <a href="{{post.url}}">
    <h3>{{ post.data.title }}</h3>
  </a>
  <hr>
{- endfor -}
```
Simple as that! Ok, so how did I manage to tackle feature n.1?

### Creating nonjucks filters on Eleventy config

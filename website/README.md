# SWA Gallery: Show & Tell!

## Purpose

The [SWA Gallery](https://aka.ms/30DaysOfSWA/gallery) is a _show and tell_ resource for the community.
 * Share _your_ code sample or hosted application to showcase your accomplishment
 * Learn from _others_. showcased samples and adopt new ideas or best practices in your own solutions. 

---

## Submission Guidelines

We want code-based examples that showcase
 * specific SWA features (`sample`)
 * front-end framework scaffolding (`starter`)
 * end-to-end working scenarios (`app`)

For each submission, specify the following tags where relevant:
 * `Open Source` - specifies publicly visible repo
 * `Archived` - app not actively deployed (has screenshot)
 * `Starter` - if project repo is a _public template_

In addition, provide the following information:
 * Front-end framework or SSG used
 * Any Azure services integrated
 * Programming language used

---

## Submission Process

Anyone who has a working sample or demo they want to share, can do so by [following these instructions](https://github.com/orgs/staticwebdev/discussions/14). If you have questions or comments, leave them in the [Discussions](https://github.com/orgs/staticwebdev/discussions) forum, in response to this topic.

You *must* provide the following info:
 * Project Name = used as card title
 * Project Description = used as card text
 * Project Screenshot = used as card image
 * Site link = if actively deployed
 * Repo link = must be public
 * Tags = see above.

---

## Maintenance Process

We know hosted sites may become inactive and repos may get deleted or made private. The repo uses _linkinator_ to get notifications of inactive links. 

At that point, maintainers may take the following actions on tags:

 * If _Site Link_ is inactive, add `Archived`
 * If _Repo Link_ is inactive, remove `Open Source` 

Projects may be removed from the Gallery at the discretion of maintainers. For example:
 * has no active links (site or repo)
 * does not follow Code Of Conduct 
 * misrepresents tech or ownership

---

## Technology

This website was built using [Docusaurus 2](https://docusaurus.io/), an static site development platform from Meta that supports Markdown and MDX (JSX-flavored Markdown) authored content.

For this site, we:
 * Use default `classic` theme
 * Host site on _GitHub Pages_ 
 * Deploy site with _GitHub Actions_
 * Disable `docs`, `blog` features
 * Reuse & extend their _Showcase_ page

> 🚧 TODO: **Update Documentation**

Relevant files to know:
 - `docusaurus.config.js` - for configuring theme, plugins, presets etc.
 - `pages/index.tsx` for configuring landing page components.
 - `src/data/users.tsx` for updating gallery cards by adding _accepted_ submissions.
 - `src/data/showcase` file for storing submitted screenshots for gallery cards
 - `src/data/tags.tsx` file for updating list of tags used in gallery filter.

---
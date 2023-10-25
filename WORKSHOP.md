# Build Modern Web Applications with Angular & AI

Web application development has grown in complexity over the years due in parts to the awesome expectations it has set for itself in matter of performance, responsiveness, intuitiveness or in short magic.

It takes a lot to actually develop a production ready project, but framework like Angular have come a long way in providing great conventions on how to build for the web and mobile and build it right.

As if it was not enough already, Artificial Intelligence AI has invited itself to the party and is here to stay. 

Google just released project IDX, a cloud based development that comes with a built in AI code helper. 

We will look at developing a Movies and TV web app to learn about the basic building blocks with Angular and if we get stuck or confused along the way, we will see how IDX AI can be very handy as your second coding brain by providing you with helpful suggestions and helping you debug cryptic errors as they come along.

## Initial environment setup

To follow along with project IDX navigate to `https://idx.google.com/`. If it is still under limited preview, you will have to register with your google account and join the waitlist. (Please add your eamail to the workshop attendee list so we can try to expedite your access)

On the landing page you will see the option to `Create a Workspace` with a list of default environments.

<!-- idx landing page placeholder -->

We will choose the `Import repo` option. Enter the provided repo URL and choose the `web` option for `App type` and leave the rrst as is and click on `create`

By the time you clone the repo, the Angular default version might already be at `17.0.0`. The repo as of now is at version `17.0.0-rc.0` which will allow you to get to code with all the latest features.

To quickly verify what version you are running open the `integrated terminal` by pressing 
```bash
ctrl + `
```

and type the following command

```bash
ng version
```

You should see something like this

```bash 
...

Angular CLI: 17.0.0-rc.0
Node: <current node version>
Package Manager: npm <current npm version>
OS: linux x64

Angular: 17.0.0-rc.0
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
-----------------------------------------------------------
@angular-devkit/architect       0.1700.0-rc.0
@angular-devkit/build-angular   17.0.0-rc.0
@angular-devkit/core            17.0.0-rc.0
@angular-devkit/schema
@angular/cli                    17.0.0-rc.0
@schematics/angular             17.0.0-rc.0
rxjs                            7.5.6
typescript                      4.7.4
```
Congrats you have run your first `ng` command which is the Angular CLI - one of your best ally in your Angular journey.

An second and alternative way to check on the version is to use the open file shortcut: 

```bash
# on mac
cmd + p

# on windows
ctrl + p
```
and enter `package.json` and you will see the list similar to the one in your terminal of core Angular dependencies listed under the `dependencies`

## Running the web project

Now that you have the environment properly setup, let's run the project and check it in the browser. Use the command shortcut:

```bash
# on mac
cmd + shift + p

# on windows
ctrl + shift + p
```
and start typing `show web preview` in the input and the select the IDX command to do so. The web preview should show now in a split view. You can expand the web view to a separate window if you want to gain on screen real estate.

Nice at this time you now have a full blown Angular development ebvironment running on the cloud and you are able to see the web preview  of your application - super awesome. Let's now do a quick review on our Angular project structure.

## Angular project structure

_Note: This section can be skipped depending on the audience general familiarity with web applications and the time of the workshop_

Even though we have not added anything yet, our environment has a lot of files and can seem confusing at first. Instead of trying go on a grand tour of each file and what they do, we will focus on looking at them gradually by order of context and importance. So first off let's look at our `web preview` and see where all of this content is coming from.

### At the heart of Angular the App Component

If we navigate to the `src` folder we have the main folder of the app rightly named `app`.

```bash
src
├── app
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
```
Each file follows a naming convention  for the type of `class` it is in this case a `component` and intuitively each file extension indicates their purpose with `css` for styling, `html` for the view, `spec.ts` for the unit testing and that `ts` for the main application logic. 
Angular uses `Typescript` for development and all of it gets compiled to JavaScript when the project is build - more on that later.

But how do they work all together - let's open `app.component.ts` and take a look at the code.

I first want to collapse all the code prior to line 11 and what you see is a class definition.

```typescript
export class AppComponent {
    version = VERSION.full;
    title = `Angular ${this.version}`;
}
```
Now right on top the class we see the of a `typescript decorator` which and nore specifically a `component decorator` that helps the Angular compiler understand what type of class it is dealing and what are the properties it will have access to. 

Opening the `decorator` we can see that ther is what seems like a configuration object being passed to it. Let quickly review the keys in that object:

* `selector`: just as in CSS selector and is this format means this will be the custom tag name of the web component
* `templateUrl`: this will be the reltive or absolute path of the `HTML` file that will be bound to this component
* `styleUrls`: this will be the reltive or absolute path of the `CSS` file that will be bound to this component
* `standalone`: when a component is marked as a standalone it will not have to part of a module and will be in charge of importing all of its dependencies
* `imports`: follwing the standalone statement, this will be array of the dependencies needed by the component 

Angular pushes for good code conventions and suggest great separation of concerns with those files. At the end they are weaved into one. But where does the application indicate that this is the main component to use and load it, well for that let's look at the `main.ts` file

If we ignore the opening imports statement we can see that the most important command is the `bootstrapApplication` method that accepts a component class as a parameter and a configuration object.

One other file that we can quickly look at is the `index.html` file under the `src` folder. The file looks pretty generic at first but looking closely we will see a special tag in there `<app-root></app-root>` inside the `body` tag. This will be targeted by the Angular code to run our app as a Single Page Application (SPA) by bootstrapping the `App Component` as indicate in our `main.ts` file. We will come back to this file shortly

### Starting the application

So that would do for a quick overview and we will address the rest of the files and folders as we progress. Now how about getting the application running?

Well withing the IDX workspace, we could use the shortcut `cmd + shift + p` and just choose the open web preview option. But we will use a more common way of doing using the Angular CLI. First let's open our integrated terminal again by pressing `ctrl + `, then type the following command

```bash
ng serve
```
This will trigger the Angular compilation process and will by default serve your project in development mode on the default port `4200`

Go ahead and use `cmd + click ` on the link provided in the terminal and now the app will open in a new window. The terminal session will be on watch and any changes you make will update instantly and be reflected on your view.

## Making it pretty

We need to make our application look pretty and CSS is in charge of aesthetics in the world os the web. I have been writing CSS for more than 20 years, but I have to hand it to frameworks like Bootstrap that have made it way more convenient to write styles for all browsers in a fast and scalable way.

Nowadays though, I have opted for Tailwind CSS as my go to library to put together any kind of responsive user interface.

i will steer away from any debates around this choice, lol, but for this workshop we will look at how to work with Tailwind in Angular

### Install Tailwind

To install Tailwind we can open our integrated terminal again and type the following command

```bash
npm install -D tailwindcss postcss autoprefixer
```

then we can initialize Tailwind with the following command

```bash
npx tailwindcss init -p
```

this will create a `tailwind.config.ts` file at the root of the project. Let's go ahead and open it and add the following under the content key:

```typescript
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ]
```
This tells tailwind to target all files under our `src` folder that have either an `html` or `ts` extension

One last thing is to open your gloabal CSS file `styles.css` and add the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
or

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
Now let's put it quickly to test, let's open our `app.component.html` and add the following to the Resources header tag:

```html
 <h2 class="text-3xl font-bold underline">Resources</h2>
 ```

 Now when we looked at the served app we can see the changes applied to the header tag which indicates that we have now all the magic of Tailwind at our fingertips.

 Befor we close on this section let's add a couple helper extensions. Open the activity bar and click on the extensions icon and search for `tailwind`. We are looking for `tailwind intellisense` and `headwind` (show their icons) once you see them have them installed and when finished go back to your added classes and hover on those. 

 Now you will see that as you hover on each it will show you the actual class definition for each, pretty sweet huh. One more thing add one class at the end by typing `w-f` you have now suggestions due to the intellisense kicking in and when you done typing, you might see the classes rearranging per the rules of your `hailwind` config. 

 Now that we have Tailwind installed, let's say goodbye to the default Angular page and start building the Movies app UI

 
### Add the basic UI

One project that I love very much is the *Astro* web framework (https://astro.build/). It is another great choice for building fast and responsive applications and I was fascinated by their example app *Astro Movies* (https://astro-movies.pages.dev/) which boast superb performance. I wanted to have something simlar build with Angular so let's go for it :)

Let's head to Tailwind UI and grab some of their designs ( it has a paid version that I highly recommend but for our example the free version should suffice).

Now if you have not already I want to create a new branch and give it an intutive name such as `addTailwinUI`.

Next open up `app.component.html`, select everything and delete it - yes you heard right delete everything on that page. Now type in 

```html
<h1>NG Movies & TV</h1>
```
Save and head to your page which now has only your newly added HTML element - might not be fancy but will do.

Let's go back to the `index.html` file that we mentionned earlier and add a background class to the html tag itself

```html
<html lang="en" class="bg-gray-800">
```

Now let's take the HTML from the Tailwind UI and replace the content of our template with it.

Niiiice - let's now hide the right side of the navigation (we'll deal with that on another session) and save again. 

Let's fix the navigation to only show `Movie` and `TV` just like on the Astro movies site.

We can wrap the entire `nav` by a `header` tag.

Now let quickly add a `main` section for the page 

```html
<main class="bg-gray-800 min-h-[calc(100vh-64px)] mt-16 mx-auto max-w-7xl px-2 sm:px-6 
lg:px-8">
    <h2>hello</h2>
</main>
```
 We now have a basic skeleton of our landing page. Let's mow go ahead and create a movie or TV card component which will allow us to show all of items in a nice looking way. The cool thing about adopting Tailwind is that there are numerous good looking components shared by the community and I really love this particular one by (author) that will be perfect for our card component.

 I have modified a few things and here is the markup we will use, for now let's just pkug it in directly into template in place right below our h2 tag

 it looks perfect!! But how are we suppose to reuse this, do we have to repeat thiw very verbose card template over and over again? Well luckily no. We not only going to transform it into a reusable component, which essentially menas that we will abstract the common parts such as the layout and we will feed in data that will display each unique movie in a collection with its own particular info. 

 ### Create the movie card component

 To create the component we will use the help of the Angular CLI by open our integrated terminal and type the following command

 ```bash
 ng generate component card --dry-run
 ```
 
 The `--dry-run` at the end is a flag that allows us to see what new files would be created and which will be updated if the command was to run, a preview per say but no actual changes. I highly recommend having the habit of using it frequently when starting with the CLI until you get more familiar or use GUI tools to do the same.

 We actually need to add a few more flags to our generate command and to see what is specifically available for the generate component command we can type the following:

 ```bash
 ng generate component --help
 ```

 As you can see there are quite a few options but we will only focus on three at this moment: `standalone`, `inline-style` and `inline-template`
 
 `standalone` means that the component will not be part of any module and can be imported directly as is but it will also be rsponsible of importing its own dependencies
 
 `inline-style` and `inline-template` sound pretty obvious and means that instead of creating separate CSS and HTML files, have all inside the component file. A quick rule of thumb i personally use is to start with inline templates when creating the component and if any of these two get bigger and hard to manage use the separate option then.

 Now that we clear ou our target flags let's update our CLI command like this:
 
 ```bash
 ng generate component card --standalone --inline-style --inline-template --dry-run
 ```
 Now that we see that only two files will be created instead of the traditional four and we hare happy with the path structure we can run the commad this time without the `--dry-run` flag

 ```bash
 ng generate component card --standalone --inline-style --inline-template
 ```

Looking at our `src` file we can see that we have our newly created folder `card` with the two files in it and opening `card.component.ts` we can see that the `Component decorator` has properly setup our config object with flags from our command

 ```bash
 ng generate component card --standalone --inline-style --inline-template
 ```
Now lwt's go back to our `app.component.ts` and import our new component

```ts
import { CardComponent } from './card/card.component';
```

and also add it to the `imports` array

```ts
imports: [ 
  // other imports,
  CardComponent 
]
```
We can add it to the `app.component.html` by adding the following tag

```html
<app-card></app-card>
```
`app-card` is a custom tag that we took directly from the `selector` value in the `card.component.ts` file. 

Let's replace the `template` value by an actual card

(copy over code)

Looks nicer yes? Now that we have the card component code nicely abstracted, we can easily add any number of cards at the bottom of our landing page. Let's put 6 card inside a grid with the following markup

```html
<div class="gap-8 columns-3">
  <app-card></app-card>
  <app-card></app-card>
  <app-card></app-card>
  <app-card></app-card>
  <app-card></app-card>
  <app-card></app-card>
</div>
```

You can see that the page is slowly taking shape but for now we have only static elements on the page. So let's look at how to add our dynamic movies content and show different cards
 
```js
<routeroutlet></router-outlet>
```

then save the file.
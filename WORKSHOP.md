# Build Modern Web Applications with Angular & AI

Web application development has grown in complexity over the year due in parts to the awesome expectations it has set for itself in matter of performance, responsiveness, intuitiveness or in short magic.

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

### Starting the application

So that would do for a quick overview and we will address the rest of the files and folders as we progress. Now how about getting the application running?

Well withing the IDX workspace, we could use the shortcut `cmd + shift + p` and just choose the open web preview option. But we will use a more common way of doing using the Angular CLI. First let's open our integrated terminal again by pressing `ctrl + `, then type the following command

```bash
ng serve
```
This will trigger the Angular compilation process and will by default serve your project in development mode on the default port `4200`

Go ahead and use `cmd + click ` on the link provided in the terminal and now the app will open in a new window. The terminal session will be on watch and any changes you make will update instantly and be reflected on your view.




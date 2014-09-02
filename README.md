NodeJS/Gulp based project for generating story cards with Yaml/Markdown using Jade templates.

# How to

## Step 1 - Install gulp (if you don't have it)

    npm install -g gulp

## Step 2 - Clone project to your computer

    git clone https://github.com/spoike/storycards-gulp.git

## Step 3 - Install all dependencies

    cd storycards-gulp
    npm install

## Step 4 - Run gulp to build the story cards

    gulp

This starts a watch process. To exit out use `Ctrl+C`.

## Step 5 - Start editing your cards!

The cards are generated from markdown files at `src/cards/`. Please add new md files in order to add cards to the build.

The HTML is generated from a Jade template at `src/jade/template.jade`.

The CSS is generated from a SASS file at `src/sass/main.scss`.

The output is generated to the `build` directory.

# License

MIT (c) Mikael Brassman 2014
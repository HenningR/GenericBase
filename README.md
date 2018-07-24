Terminal commands

git remote add origin https://github.com/HenningR/GenericBase.git
git add *
git commit -m "your commit message"
git push -u origin master




# GenericBase App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

#Installations

Download and Install Visual Studio Code - https://code.visualstudio.com/
Download and install Node,js -- https://nodejs.org/en/
Download and install Java SDK -- http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
Download and install  Android Studio -  


npm install npm@latest
npm install -g cordova@latest
npm install -g @angular/cli
npm install -g typescript
npm install -g gradle   ---  https://gradle.org/install/#with-a-package-manager install manually

Setup Environment path
Control Panel\All Control Panel Items\System\Advance System Settings\Environment Variables
ANDROID_HOME : C:\Program Files (x86)\Android\android-sdk
JAVA_HOME: C:\Program Files\Java\jdk1.8.0_151
PATH : C:\Program Files (x86)\Android\android-sdk\tools;C:\Program Files\Java\jdk1.8.0_151\bin;
  %ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;
  C:\Users\HenningR\AppData\Roaming\npm ;%JAVA_HOME%\bin;C:\Gradle\gradle-4.5\bin

command line exampl
cordova create HelloWorld com.example.hello "Hello World"
cd HelloWorld
cordova platform add ios
cordova platform add android


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

ng build --app=1 --environment=prod --aot --base-href=./

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



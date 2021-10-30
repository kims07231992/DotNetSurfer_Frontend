# .NETSurfer Frontend

.NETSurfer Frontend is a blog type SPA web application using Angaulr 8.0 that communicates to [.NETSurfer Backend](https://github.com/kims07231992/DotNetSurfer_Backend) API

## [View Demo](https://dotnetsurfer.dev)

### Overview

![Alt text](https://github.com/kims07231992/DotNetSurfer_Frontend/blob/master/README_Picture1.PNG)

### User Page(Desktop)

![Alt text](https://github.com/kims07231992/DotNetSurfer_Frontend/blob/master/README_GIF1.gif)

### User Page(Mobile)

![Alt text](https://github.com/kims07231992/DotNetSurfer_Frontend/blob/master/README_GIF2.gif)

### Admin Page

![Alt text](https://github.com/kims07231992/DotNetSurfer_Frontend/blob/master/README_GIF3.gif)

## Features

* API based resource assess with API communciation
* CRUD: create, update and remove topics and articles with API communication
* Role based authentication with JWT
* Consistent HttpResponse handling
* Reponsive UI by using Flex Layout
* Disqus comment 
* Client Friendly UI with Material UI
* Lazy loading modules
* SASS
* Animations with ng-animate
* Angular Pipes

## Stacks
* Angular 8.0
* Angular Material 8.0
* Flex Layout
* ngx-disqus
* ngx-quill
* RxJS

## Installation
```
npm install -g @angular/cli
```

### Configuration

Connect your web application to backend server by setting proper values in [environment.ts](https://github.com/kims07231992/DotNetSurfer_Frontend/blob/master/DotNetSurfer_Frontend/src/environments/environment.ts)


### Run
```
cd DotNetSurfer_Frontend
npm install
ng build        # run with environment.prod.ts
ng build --prod # run with environment.prod.ts
ng serve --open

http://localhost:4200
```

## License

MIT